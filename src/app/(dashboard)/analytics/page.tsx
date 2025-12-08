"use client";

import { useEffect, useState } from "react";
import Spinner from "@/components/Spinner";
import {
  AnalyticsHeader,
  MetricCard,
  DailySalesChart,
  MonthlyExpensesChart,
  TopProductsChart,
  LowActivityProducts,
  PaymentBreakdownChart,
  ProfitMetricsCard,
  InventoryStatusChart,
  CustomerInsightsCard,
  TopCustomersChart,
  HourlySalesChart,
  CategoryPerformanceChart,
  GrowthMetricsCard,
} from "@/components/analytics";

interface AnalyticsData {
  dailySales: Array<{ date: string; sales: number }>;
  monthlyExpenses: Array<{ month: string; expenses: number }>;
  paymentBreakdown: Array<{ name: string; value: number; count: number }>;
  topProducts: Array<{ name: string; quantity: number; revenue: number }>;
  worstProducts: Array<{ name: string; quantity: number; stock: number }>;
  profitAnalysis: {
    totalRevenue: number;
    totalCost: number;
    totalProfit: number;
    orderCount: number;
    profitMargin: number;
  } | null;
  inventoryStatus: Array<{ status: string; count: number; value: number }>;
  customerInsights: {
    total_customers: number;
    active_customers: number;
    new_customers_this_month: number;
  };
  topCustomers: Array<{
    name: string;
    totalSpent: number;
    transactionCount: number;
  }>;
  hourlySales: Array<{ hour: number; sales: number; count: number }>;
  categoryPerformance: Array<{
    type: string;
    sales: number;
    quantity: number;
    productCount: number;
  }>;
  growthMetrics: {
    salesGrowth: number;
    transactionGrowth: number;
    currentMonthSales: number;
    previousMonthSales: number;
  };
}

const formatCurrency = (amount: number) =>
  `₱${amount.toLocaleString(undefined, {
    maximumFractionDigits: 0,
  })}`;

const Analytics = () => {
  const [data, setData] = useState<AnalyticsData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAnalytics = async () => {
      try {
        setLoading(true);
        const response = await fetch("/api/analytics");
        const result = await response.json();

        if (result.success) {
          setData(result.data);
        } else {
          setError(result.error || "Failed to load analytics");
        }
      } catch (err) {
        setError("Failed to fetch analytics data");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchAnalytics();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-lamaSkyLight via-white to-lamaPurpleLight">
        <div className="flex flex-col items-center gap-4 px-6 py-4 bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm border border-lamaSky/40">
          <Spinner size={40} color="lamaSky" />
          <p className="text-sm font-medium text-gray-600 tracking-wide">
            Loading analytics…
          </p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-lamaSkyLight via-white to-lamaPurpleLight">
        <div className="px-6 py-4 bg-red-50 border border-red-200 rounded-2xl shadow-sm">
          <p className="text-sm font-semibold text-red-700">{error}</p>
        </div>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-lamaSkyLight via-white to-lamaPurpleLight">
        <div className="px-6 py-4 bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm border border-gray-200">
          <p className="text-sm font-medium text-gray-600">
            No analytics data available.
          </p>
        </div>
      </div>
    );
  }

  // ---- Derived Metrics for Cards ----
  const totalSales = data.dailySales.reduce((sum, day) => sum + day.sales, 0);
  const avgDailySales =
    data.dailySales.length > 0 ? totalSales / data.dailySales.length : 0;

  const totalExpenses = data.monthlyExpenses.reduce(
    (sum, m) => sum + m.expenses,
    0
  );

  const totalTransactions = data.paymentBreakdown.reduce(
    (sum, p) => sum + p.count,
    0
  );

  const topPaymentMethod =
    data.paymentBreakdown.length > 0
      ? data.paymentBreakdown.reduce((prev, cur) =>
          cur.value > prev.value ? cur : prev
        )
      : null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 p-2 sm:p-4 md:p-6 lg:p-8">
      <div className="max-w-[1600px] mx-auto space-y-6">
        <AnalyticsHeader />

        {/* Growth Metrics - Featured Section */}
        <GrowthMetricsCard data={data.growthMetrics} />

        {/* Primary Metric Cards */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
          <MetricCard
            title="Total Sales (Last 30 Days)"
            value={formatCurrency(totalSales)}
            subtitle={`Across ${data.dailySales.length} day(s)`}
            colorScheme="purple"
            index={0}
          />
          <MetricCard
            title="Avg Daily Sales"
            value={formatCurrency(avgDailySales)}
            subtitle="Based on recent daily performance"
            colorScheme="sky"
            index={1}
          />
          <MetricCard
            title="Total Tracked Expenses"
            value={formatCurrency(totalExpenses)}
            subtitle={`Across ${data.monthlyExpenses.length} month(s)`}
            colorScheme="yellow"
            index={2}
          />
          <MetricCard
            title="Total Transactions"
            value={totalTransactions.toLocaleString()}
            subtitle={`Top method: ${
              topPaymentMethod ? topPaymentMethod.name : "—"
            }`}
            colorScheme="sky"
            index={3}
          />
        </section>

        {/* Profit Analysis */}
        {data.profitAnalysis && (
          <ProfitMetricsCard data={data.profitAnalysis} />
        )}

        {/* Customer & Inventory Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <CustomerInsightsCard data={data.customerInsights} />
          <InventoryStatusChart data={data.inventoryStatus} />
        </div>

        {/* Sales Pattern Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <DailySalesChart data={data.dailySales} />
          <HourlySalesChart data={data.hourlySales} />
        </div>

        {/* Customer Performance */}
        {data.topCustomers.length > 0 && (
          <TopCustomersChart data={data.topCustomers} />
        )}

        {/* Category & Product Performance */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {data.categoryPerformance.length > 0 && (
            <CategoryPerformanceChart data={data.categoryPerformance} />
          )}
          <TopProductsChart data={data.topProducts} />
        </div>

        {/* Financial Analysis */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <MonthlyExpensesChart data={data.monthlyExpenses} />
          <PaymentBreakdownChart data={data.paymentBreakdown} />
        </div>

        {/* Low Activity Products */}
        <LowActivityProducts data={data.worstProducts} />

        {/* Footer Info */}
        <div className="text-center py-6">
          <p className="text-sm text-gray-500">
            Analytics data is updated in real-time based on your business
            transactions
          </p>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
