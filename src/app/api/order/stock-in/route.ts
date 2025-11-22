import { NextRequest, NextResponse } from "next/server";
import { prisma } from "lib/prisma";
import { withAuth } from "@/lib/authMiddleware";

export const POST = withAuth(async (req: NextRequest, user) => {
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
      where: {
        id: orderId,
        company_id: user.company_id,
      },
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
      where: {
        id: order.product_id,
        company_id: user.company_id,
      },
      data: {
        stock: {
          increment: quantity, // Add the quantity to the product's stock
        },
      },
    });

    // Update the order's remaining quantity and status if completed
    await prisma.order.update({
      where: {
        id: orderId,
        company_id: user.company_id,
      },
      data: {
        remaining_quantity: {
          decrement: quantity, // Subtract the quantity from the order's remaining quantity
        },
        // Update status to "completed" if this stock-in completes the order
        status: quantity === order.remaining_quantity ? "completed" : "pending",
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
});
