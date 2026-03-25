import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import { startOfMonth, format, subDays } from "date-fns";
import { withAuth } from "@/lib/authMiddleware";

export const GET = withAuth(async (req: NextRequest, user) => {
  try {
    const company_id = user.company_id;

    const now = new Date();
    const last30Days = subDays(now, 30);
    const last12Months = subDays(now, 365);
    const last7Days = subDays(now, 7);
    const thisMonthStart = startOfMonth(now);
    const lastMonthStart = startOfMonth(subDays(thisMonthStart, 1));

    const [
      dailySales,
      monthlyExpenses,
      paymentBreakdown,
      topProducts,
      worstProducts,
      profitAnalysis,
      inventoryStatus,
      customerInsights,
      topCustomers,
      hourlySales,
      categoryPerformance,
      growthMetrics,
    ] = await Promise.all([
      prisma.$queryRaw<Array<{ date: string; sales: number }>>`
        SELECT 
          DATE(created_at) as date,
          SUM(total_paid)::numeric as sales
        FROM transactions
        WHERE created_at >= ${last30Days}
          AND status = 'completed'
          AND company_id = ${company_id}
        GROUP BY DATE(created_at)
        ORDER BY date ASC
      `,
      prisma.$queryRaw<Array<{ month: string; expenses: number }>>`
        SELECT 
          TO_CHAR(date, 'YYYY-MM') as month,
          SUM(amount)::numeric as expenses
        FROM expenses
        WHERE date >= ${last12Months}
          AND company_id = ${company_id}
        GROUP BY TO_CHAR(date, 'YYYY-MM')
        ORDER BY month ASC
      `,
      prisma.$queryRaw<
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
      `,
      prisma.$queryRaw<
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
      `,
      prisma.$queryRaw<
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
      `,
      prisma.$queryRaw<
        Array<{
          total_revenue: number;
          total_cost: number;
          total_profit: number;
          order_count: number;
        }>
      >`
        SELECT 
          SUM(selling_price * quantity)::numeric as total_revenue,
          SUM(order_price * quantity)::numeric as total_cost,
          SUM(net_profit)::numeric as total_profit,
          COUNT(*)::integer as order_count
        FROM orders
        WHERE company_id = ${company_id}
          AND status = 'completed'
      `,
      prisma.$queryRaw<
        Array<{ status: string; count: number; total_value: number }>
      >`
        SELECT 
          CASE 
            WHEN stock = 0 THEN 'out_of_stock'
            WHEN stock <= 10 THEN 'low_stock'
            WHEN stock <= 50 THEN 'medium_stock'
            ELSE 'high_stock'
          END as status,
          COUNT(*)::integer as count,
          SUM(stock * price)::numeric as total_value
        FROM products
        WHERE company_id = ${company_id}
          AND status = 'active'
        GROUP BY CASE 
          WHEN stock = 0 THEN 'out_of_stock'
          WHEN stock <= 10 THEN 'low_stock'
          WHEN stock <= 50 THEN 'medium_stock'
          ELSE 'high_stock'
        END
      `,
      prisma.$queryRaw<
        Array<{
          total_customers: number;
          active_customers: number;
          new_customers_this_month: number;
        }>
      >`
        SELECT 
          COUNT(*)::integer as total_customers,
          COUNT(CASE WHEN status = 'active' THEN 1 END)::integer as active_customers,
          COUNT(CASE WHEN created_at >= ${thisMonthStart} THEN 1 END)::integer as new_customers_this_month
        FROM customers
        WHERE company_id = ${company_id}
      `,
      prisma.$queryRaw<
        Array<{
          customer_name: string;
          total_spent: number;
          transaction_count: number;
        }>
      >`
        SELECT 
          c.name as customer_name,
          SUM(t.total_paid)::numeric as total_spent,
          COUNT(t.id)::integer as transaction_count
        FROM customers c
        INNER JOIN transactions t ON c.id = t.customer_id
        WHERE t.status = 'completed'
          AND c.company_id = ${company_id}
        GROUP BY c.id, c.name
        ORDER BY total_spent DESC
        LIMIT 10
      `,
      prisma.$queryRaw<
        Array<{ hour: number; sales: number; transaction_count: number }>
      >`
        SELECT 
          EXTRACT(HOUR FROM created_at)::integer as hour,
          SUM(total_paid)::numeric as sales,
          COUNT(*)::integer as transaction_count
        FROM transactions
        WHERE created_at >= ${last7Days}
          AND status = 'completed'
          AND company_id = ${company_id}
        GROUP BY hour
        ORDER BY hour ASC
      `,
      prisma.$queryRaw<
        Array<{
          product_type: string;
          total_sales: number;
          quantity_sold: number;
          product_count: number;
        }>
      >`
        SELECT 
          p.product_type,
          SUM(ti.quantity * ti.price)::numeric as total_sales,
          SUM(ti.quantity)::integer as quantity_sold,
          COUNT(DISTINCT p.id)::integer as product_count
        FROM products p
        INNER JOIN transaction_items ti ON p.id = ti.product_id
        INNER JOIN transactions t ON ti.transaction_id = t.id
        WHERE t.status = 'completed'
          AND p.company_id = ${company_id}
        GROUP BY p.product_type
      `,
      prisma.$queryRaw<
        Array<{
          period: string;
          total_sales: number;
          transaction_count: number;
        }>
      >`
        SELECT 
          CASE 
            WHEN created_at >= ${thisMonthStart} THEN 'current'
            ELSE 'previous'
          END as period,
          SUM(total_paid)::numeric as total_sales,
          COUNT(*)::integer as transaction_count
        FROM transactions
        WHERE created_at >= ${lastMonthStart}
          AND status = 'completed'
          AND company_id = ${company_id}
        GROUP BY period
      `,
    ]);

    const currentMonth = growthMetrics.find((m) => m.period === "current") || {
      total_sales: 0,
      transaction_count: 0,
    };
    const previousMonth = growthMetrics.find(
      (m) => m.period === "previous",
    ) || { total_sales: 0, transaction_count: 0 };

    const salesGrowth =
      previousMonth.total_sales > 0
        ? ((Number(currentMonth.total_sales) -
            Number(previousMonth.total_sales)) /
            Number(previousMonth.total_sales)) *
          100
        : 0;

    const transactionGrowth =
      previousMonth.transaction_count > 0
        ? ((currentMonth.transaction_count - previousMonth.transaction_count) /
            previousMonth.transaction_count) *
          100
        : 0;

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
        profitAnalysis: profitAnalysis[0]
          ? {
              totalRevenue: Number(profitAnalysis[0].total_revenue || 0),
              totalCost: Number(profitAnalysis[0].total_cost || 0),
              totalProfit: Number(profitAnalysis[0].total_profit || 0),
              orderCount: profitAnalysis[0].order_count,
              profitMargin:
                profitAnalysis[0].total_revenue > 0
                  ? (Number(profitAnalysis[0].total_profit) /
                      Number(profitAnalysis[0].total_revenue)) *
                    100
                  : 0,
            }
          : null,
        inventoryStatus: inventoryStatus.map((item) => ({
          status: item.status,
          count: item.count,
          value: Number(item.total_value),
        })),
        customerInsights: customerInsights[0] || {
          total_customers: 0,
          active_customers: 0,
          new_customers_this_month: 0,
        },
        topCustomers: topCustomers.map((item) => ({
          name: item.customer_name,
          totalSpent: Number(item.total_spent),
          transactionCount: item.transaction_count,
        })),
        hourlySales: hourlySales.map((item) => ({
          hour: item.hour,
          sales: Number(item.sales),
          count: item.transaction_count,
        })),
        categoryPerformance: categoryPerformance.map((item) => ({
          type: item.product_type,
          sales: Number(item.total_sales),
          quantity: item.quantity_sold,
          productCount: item.product_count,
        })),
        growthMetrics: {
          salesGrowth: Number(salesGrowth.toFixed(2)),
          transactionGrowth: Number(transactionGrowth.toFixed(2)),
          currentMonthSales: Number(currentMonth.total_sales),
          previousMonthSales: Number(previousMonth.total_sales),
        },
      },
    });
  } catch (error) {
    console.error("Failed to fetch analytics data:", error);
    return NextResponse.json(
      { success: false, error: "Failed to load analytics data" },
      { status: 500 },
    );
  }
});
