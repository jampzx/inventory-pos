import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import {
  startOfMonth,
  endOfMonth,
  format,
  subDays,
  startOfDay,
  endOfDay,
} from "date-fns";
import { withAuth } from "@/lib/authMiddleware";

export const dynamic = "force-dynamic";

export const GET = withAuth(async (req: NextRequest, user) => {
  try {
    const company_id = user.company_id;

    // Get daily sales for the last 30 days
    const last30Days = subDays(new Date(), 30);
    const dailySales = await prisma.$queryRaw<
      Array<{ date: string; sales: number }>
    >`
      SELECT 
        DATE(created_at) as date,
        SUM(total_paid)::numeric as sales
      FROM transactions
      WHERE created_at >= ${last30Days}
        AND status = 'completed'
        AND company_id = ${company_id}
      GROUP BY DATE(created_at)
      ORDER BY date ASC
    `;

    // Get monthly expenses for the last 12 months
    const last12Months = subDays(new Date(), 365);
    const monthlyExpenses = await prisma.$queryRaw<
      Array<{ month: string; expenses: number }>
    >`
      SELECT 
        TO_CHAR(date, 'YYYY-MM') as month,
        SUM(amount)::numeric as expenses
      FROM expenses
      WHERE date >= ${last12Months}
        AND company_id = ${company_id}
      GROUP BY TO_CHAR(date, 'YYYY-MM')
      ORDER BY month ASC
    `;

    // Get payment method breakdown
    const paymentBreakdown = await prisma.$queryRaw<
      Array<{ payment_method: string; total: number; count: number }>
    >`
      SELECT 
        payment_method,
        SUM(amount)::numeric as total,
        COUNT(*)::integer as count
      FROM transaction_payments
      WHERE transaction_id IN (
        SELECT id FROM transactions WHERE status = 'completed' AND company_id = ${company_id}
      )
        AND company_id = ${company_id}
      GROUP BY payment_method
      ORDER BY total DESC
    `;

    // Get top-selling products (by quantity sold)
    const topProducts = await prisma.$queryRaw<
      Array<{ product_name: string; quantity_sold: number; revenue: number }>
    >`
      SELECT 
        p.name as product_name,
        SUM(ti.quantity)::integer as quantity_sold,
        SUM(ti.quantity * ti.price)::numeric as revenue
      FROM transaction_items ti
      INNER JOIN products p ON ti.product_id = p.id
      INNER JOIN transactions t ON ti.transaction_id = t.id
      WHERE t.status = 'completed'
        AND ti.company_id = ${company_id}
      GROUP BY p.id, p.name
      ORDER BY quantity_sold DESC
      LIMIT 10
    `;

    // Get worst-selling/low-activity products (least sold but still in stock)
    const worstProducts = await prisma.$queryRaw<
      Array<{ product_name: string; quantity_sold: number; stock: number }>
    >`
      SELECT 
        p.name as product_name,
        COALESCE(SUM(ti.quantity), 0)::integer as quantity_sold,
        p.stock::integer
      FROM products p
      LEFT JOIN transaction_items ti ON p.id = ti.product_id
      LEFT JOIN transactions t ON ti.transaction_id = t.id AND t.status = 'completed'
      WHERE p.status = 'active'
        AND p.company_id = ${company_id}
      GROUP BY p.id, p.name, p.stock
      ORDER BY quantity_sold ASC, p.stock DESC
      LIMIT 10
    `;

    return NextResponse.json({
      success: true,
      data: {
        dailySales: dailySales.map((item) => ({
          date: format(new Date(item.date), "MMM dd"),
          sales: Number(item.sales),
        })),
        monthlyExpenses: monthlyExpenses.map((item) => ({
          month: format(new Date(item.month + "-01"), "MMM yyyy"),
          expenses: Number(item.expenses),
        })),
        paymentBreakdown: paymentBreakdown.map((item) => ({
          name: item.payment_method,
          value: Number(item.total),
          count: item.count,
        })),
        topProducts: topProducts.map((item) => ({
          name: item.product_name,
          quantity: item.quantity_sold,
          revenue: Number(item.revenue),
        })),
        worstProducts: worstProducts.map((item) => ({
          name: item.product_name,
          quantity: item.quantity_sold,
          stock: item.stock,
        })),
      },
    });
  } catch (error) {
    console.error("Failed to fetch analytics data:", error);
    return NextResponse.json(
      { success: false, error: "Failed to load analytics data" },
      { status: 500 }
    );
  }
});
