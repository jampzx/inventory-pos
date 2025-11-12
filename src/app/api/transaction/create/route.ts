import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import { z } from "zod";

const transactionSchema = z.object({
  cartItems: z.array(
    z.object({
      productId: z.number(),
      quantity: z.number().min(1),
      price: z.number(),
    })
  ),
  payments: z.array(
    z.object({
      method: z.string(),
      amount: z.number().min(0),
    })
  ),
  discountType: z.enum(["AMOUNT", "PERCENT"]),
  discountValue: z.number().min(0),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const parsed = transactionSchema.parse(body);
    const { cartItems, payments, discountType, discountValue } = parsed;

    const subtotal = cartItems.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
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
          },
        })
      )
    );

    await prisma.$transaction(
      payments.map((p) =>
        prisma.transactionPayment.create({
          data: {
            transaction_id: transaction.id,
            payment_method: p.method,
            amount: p.amount,
          },
        })
      )
    );

    await prisma.$transaction(
      cartItems.map((item) =>
        prisma.product.update({
          where: { id: item.productId },
          data: { stock: { decrement: item.quantity } },
        })
      )
    );

    return NextResponse.json(
      { success: true, transactionId: transaction.id },
      { status: 201 }
    );
  } catch (err: any) {
    console.error("Transaction error:", err);
    if (err instanceof z.ZodError) {
      return NextResponse.json(
        { success: false, error: err.errors },
        { status: 400 }
      );
    }
    return NextResponse.json(
      { success: false, error: "Internal server error" },
      { status: 500 }
    );
  }
}
