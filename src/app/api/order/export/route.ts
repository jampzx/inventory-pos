import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(req: NextRequest) {
  try {
    const { startDate, endDate, status } = await req.json();

    if (!startDate || !endDate) {
      return NextResponse.json(
        { success: false, error: "startDate and endDate are required." },
        { status: 400 }
      );
    }

    const start = new Date(startDate);
    start.setHours(0, 0, 0, 0);
    const end = new Date(endDate);
    end.setHours(23, 59, 59, 999);

    const filters: any = {
      order_date: {
        gte: start,
        lte: end,
      },
    };

    if (status && status !== "all") {
      filters.status = status;
    }

    const orders = await prisma.order.findMany({
      where: filters,
      orderBy: {
        order_date: "desc",
      },
    });

    return NextResponse.json({ success: true, data: orders });
  } catch (error) {
    console.error("Error exporting orders:", error);
    return NextResponse.json(
      { success: false, error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
