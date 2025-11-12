import { NextResponse } from "next/server";
import { prisma } from "lib/prisma";

export async function POST(req: Request) {
  try {
    const { orderId, quantity } = await req.json();

    if (!orderId || !quantity || quantity <= 0) {
      return NextResponse.json(
        { success: false, message: "Invalid order ID or quantity." },
        { status: 400 }
      );
    }

    // Fetch the order
    const order = await prisma.order.findUnique({
      where: { id: orderId },
      include: { productRef: true },
    });

    if (!order) {
      return NextResponse.json(
        { success: false, message: "Order not found." },
        { status: 404 }
      );
    }

    if (quantity > order.remaining_quantity) {
      return NextResponse.json(
        {
          success: false,
          message: "Quantity exceeds remaining order quantity.",
        },
        { status: 400 }
      );
    }

    // Update the product stock
    await prisma.product.update({
      where: { id: order.product_id },
      data: {
        stock: {
          increment: quantity, // Add the quantity to the product's stock
        },
      },
    });

    // Update the order's remaining quantity
    await prisma.order.update({
      where: { id: orderId },
      data: {
        remaining_quantity: {
          decrement: quantity, // Subtract the quantity from the order's remaining quantity
        },
      },
    });

    return NextResponse.json({
      success: true,
      message: "Stock updated successfully.",
    });
  } catch (error) {
    console.error("Error in stock-in API:", error);
    return NextResponse.json(
      { success: false, message: "Server error during stock operation." },
      { status: 500 }
    );
  }
}
