import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { startOfDay, endOfDay } from "date-fns";

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const dateParam = searchParams.get("date");
    const date = dateParam ? new Date(dateParam) : new Date();
    const from = startOfDay(date);
    const to = endOfDay(date);

    // Get all completed transactions for the day
    const transactions = await prisma.transaction.findMany({
      where: {
        created_at: {
          gte: from,
          lte: to,
        },
        status: "completed",
      },
      include: {
        payments: true,
      },
    });

    // Calculate totals
    const totalSales = transactions.reduce(
      (sum, t) => sum + Number(t.total_paid),
      0
    );
    const totalTransactions = transactions.length;
    const paymentBreakdown: Record<string, number> = {};
    transactions.forEach((t) => {
      t.payments.forEach((p) => {
        paymentBreakdown[p.payment_method] =
          (paymentBreakdown[p.payment_method] || 0) + Number(p.amount);
      });
    });

    return NextResponse.json({
      success: true,
      data: {
        totalSales,
        totalTransactions,
        paymentBreakdown,
      },
    });
  } catch (error) {
    return NextResponse.json({ success: false, error: error?.toString() });
  }
}
