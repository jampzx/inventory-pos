import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const orderId = parseInt(params.id, 10);

  if (isNaN(orderId)) {
    return NextResponse.json(
      { success: false, error: "Invalid order ID" },
      { status: 400 }
    );
  }

  try {
    const existingOrder = await prisma.order.findUnique({
      where: { id: orderId },
    });

    if (!existingOrder) {
      return NextResponse.json(
        { success: false, error: "Order not found" },
        { status: 404 }
      );
    }

    if (existingOrder.status === "voided") {
      return NextResponse.json(
        { success: false, error: "Order is already voided" },
        { status: 400 }
      );
    }

    // Update order status
    const voidedOrder = await prisma.order.update({
      where: { id: orderId },
      data: {
        status: "voided",
        remaining_quantity: 0,
      },
    });

    return NextResponse.json({ success: true, data: voidedOrder });
  } catch (error) {
    console.error("Error voiding order:", error);
    return NextResponse.json(
      { success: false, error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
