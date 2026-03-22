import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { withAuth } from "@/lib/authMiddleware";

export async function POST(
  _req: NextRequest,
  { params }: { params: { id: string } },
) {
  return withAuth(async (req, user) => {
    const orderId = parseInt(params.id, 10);

    if (isNaN(orderId)) {
      return NextResponse.json(
        { success: false, error: "Invalid order ID" },
        { status: 400 },
      );
    }

    try {
      const existingOrder = await prisma.order.findUnique({
        where: {
          id: orderId,
          company_id: user.company_id,
        },
        include: {
          productRef: {
            select: {
              id: true,
              stock: true,
              product_type: true,
            },
          },
        },
      });

      if (!existingOrder) {
        return NextResponse.json(
          { success: false, error: "Order not found" },
          { status: 404 },
        );
      }

      if (existingOrder.status === "voided") {
        return NextResponse.json(
          { success: false, error: "Order is already voided" },
          { status: 400 },
        );
      }

      const isServiceOrder =
        existingOrder.productRef.product_type === "service";

      if (
        !isServiceOrder &&
        existingOrder.quantity > existingOrder.productRef.stock
      ) {
        return NextResponse.json(
          {
            success: false,
            error:
              "Cannot void this order because the current product stock is lower than the order quantity.",
          },
          { status: 400 },
        );
      }

      const [, voidedOrder] = await prisma.$transaction([
        ...(isServiceOrder
          ? []
          : [
              prisma.product.update({
                where: {
                  id: existingOrder.productRef.id,
                  company_id: user.company_id,
                },
                data: {
                  stock: {
                    decrement: existingOrder.quantity,
                  },
                },
              }),
            ]),
        prisma.order.update({
          where: {
            id: orderId,
            company_id: user.company_id,
          },
          data: {
            status: "voided",
            remaining_quantity: 0,
          },
        }),
      ]);

      return NextResponse.json({ success: true, data: voidedOrder });
    } catch (error) {
      console.error("Error voiding order:", error);
      return NextResponse.json(
        { success: false, error: "Internal Server Error" },
        { status: 500 },
      );
    }
  })(_req);
}
