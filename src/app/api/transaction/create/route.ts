import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { withAuth } from "@/lib/authMiddleware";

const transactionSchema = z.object({
  cartItems: z.array(
    z.object({
      productId: z.number(),
      quantity: z.number().min(1),
      price: z.number(),
    }),
  ),
  payments: z.array(
    z.object({
      method: z.string(),
      amount: z.number().min(0),
    }),
  ),
  discountType: z.enum(["AMOUNT", "PERCENT"]),
  discountValue: z.number().min(0),
  customerId: z.number().optional().nullable(),
});

export const POST = withAuth(async (req: NextRequest, user) => {
  try {
    const body = await req.json();
    const parsed = transactionSchema.parse(body);
    const { cartItems, payments, discountType, discountValue, customerId } =
      parsed;

    const productIds = [...new Set(cartItems.map((item) => item.productId))];
    const products = await prisma.product.findMany({
      where: {
        id: { in: productIds },
        company_id: user.company_id,
      },
      select: {
        id: true,
        stock: true,
        status: true,
        product_type: true,
      },
    });
    const productMap = new Map(
      products.map((product) => [product.id, product]),
    );

    for (const item of cartItems) {
      const product = productMap.get(item.productId);

      if (!product || product.status !== "active") {
        return NextResponse.json(
          {
            success: false,
            error: "One or more selected products are unavailable",
          },
          { status: 400 },
        );
      }

      if (product.product_type !== "service" && item.quantity > product.stock) {
        return NextResponse.json(
          {
            success: false,
            error: "One or more items exceed the available stock",
          },
          { status: 400 },
        );
      }
    }

    // Validate customer belongs to same company if provided
    if (customerId) {
      const customer = await prisma.customer.findFirst({
        where: {
          id: customerId,
          company_id: user.company_id,
          status: "active",
        },
      });

      if (!customer) {
        return NextResponse.json(
          { success: false, error: "Invalid customer selected" },
          { status: 400 },
        );
      }
    }

    const subtotal = cartItems.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0,
    );

    const discountAmount =
      discountType === "PERCENT"
        ? (discountValue / 100) * subtotal
        : discountValue;

    const discountedTotal = Math.max(0, subtotal - discountAmount);

    const totalPaid = payments.reduce((sum, p) => sum + p.amount, 0);
    const cashAmount =
      payments.find((p) => p.method.toLowerCase() === "cash")?.amount || 0;
    const change = Math.max(0, cashAmount - discountedTotal);

    const transaction = await prisma.transaction.create({
      data: {
        subtotal,
        total_paid: totalPaid,
        change,
        discount_type: discountType,
        discount_value: discountValue,
        company_id: user.company_id,
        user_id: user.id,
        customer_id: customerId || null,
      },
    });

    await prisma.$transaction(
      cartItems.map((item) =>
        prisma.transactionItem.create({
          data: {
            transaction_id: transaction.id,
            product_id: item.productId,
            quantity: item.quantity,
            price: item.price,
            company_id: user.company_id,
          },
        }),
      ),
    );

    await prisma.$transaction(
      payments.map((p) =>
        prisma.transactionPayment.create({
          data: {
            transaction_id: transaction.id,
            payment_method: p.method,
            amount: p.amount,
            company_id: user.company_id,
          },
        }),
      ),
    );

    const stockUpdates = cartItems
      .filter(
        (item) => productMap.get(item.productId)?.product_type !== "service",
      )
      .map((item) =>
        prisma.product.update({
          where: { id: item.productId },
          data: { stock: { decrement: item.quantity } },
        }),
      );

    if (stockUpdates.length > 0) {
      await prisma.$transaction(stockUpdates);
    }

    return NextResponse.json(
      { success: true, transactionId: transaction.id },
      { status: 201 },
    );
  } catch (err: any) {
    console.error("Transaction error:", err);
    if (err instanceof z.ZodError) {
      return NextResponse.json(
        { success: false, error: err.errors },
        { status: 400 },
      );
    }
    return NextResponse.json(
      { success: false, error: "Internal server error" },
      { status: 500 },
    );
  }
});
