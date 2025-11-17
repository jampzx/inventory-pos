import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { withAuth } from "@/lib/authMiddleware";

export const dynamic = "force-dynamic";

export const GET = withAuth(async (req: NextRequest, user) => {
  try {
    const orders = await prisma.order.findMany({
      where: { company_id: user.company_id },
      include: {
        productRef: true,
      },
    });

    const formatted = orders.map((order) => ({
      ...order,
    }));

    return NextResponse.json(formatted);
  } catch (error) {
    console.error("Failed to fetch orders:", error);
    return NextResponse.json(
      { error: "Failed to fetch orders" },
      { status: 500 }
    );
  }
});
