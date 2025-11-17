import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { withAuth } from "@/lib/authMiddleware";

export const POST = withAuth(async (req: NextRequest, user) => {
  try {
    const { startDate, endDate } = await req.json();

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

    const expenses = await prisma.expense.findMany({
      where: {
        company_id: user.company_id,
        date: {
          gte: start,
          lte: end,
        },
      },

      orderBy: {
        date: "desc",
      },
    });

    return NextResponse.json({ success: true, data: expenses });
  } catch (error) {
    console.error("Error exporting expenses:", error);
    return NextResponse.json(
      { success: false, error: "Internal Server Error" },
      { status: 500 }
    );
  }
});
