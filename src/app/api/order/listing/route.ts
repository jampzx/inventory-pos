import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { withAuth } from "@/lib/authMiddleware";

export const GET = withAuth(async (req: NextRequest, user) => {
  try {
    const orders = await prisma.order.findMany({
      where: { company_id: user.company_id },
      orderBy: { order_date: "desc" },
    });

    return NextResponse.json(orders);
  } catch (error) {
    console.error("Failed to fetch orders:", error);
    return NextResponse.json(
      { error: "Failed to fetch orders" },
      { status: 500 },
    );
  }
});
