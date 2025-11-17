import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { withAuth } from "@/lib/authMiddleware";

export const POST = withAuth(async (req: NextRequest, user) => {
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
      company_id: user.company_id,
      created_at: {
        gte: start,
        lte: end,
      },
    };

    if (status && status !== "all") {
      filters.status = status;
    }

    const transactions = await prisma.transaction.findMany({
      where: filters,
      include: {
        items: {
          include: {
            product: true,
          },
        },
        payments: true,
        details: true,
      },
      orderBy: {
        created_at: "desc",
      },
    });

    return NextResponse.json({ success: true, data: transactions });
  } catch (error) {
    console.error("Error exporting transaction reports:", error);
    return NextResponse.json(
      { success: false, error: "Internal Server Error" },
      { status: 500 }
    );
  }
});
