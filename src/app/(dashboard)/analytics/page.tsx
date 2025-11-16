"use client";

import { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

interface AnalyticsData {
  dailySales: Array<{ date: string; sales: number }>;
  monthlyExpenses: Array<{ month: string; expenses: number }>;
  paymentBreakdown: Array<{ name: string; value: number; count: number }>;
  topProducts: Array<{ name: string; quantity: number; revenue: number }>;
  worstProducts: Array<{ name: string; quantity: number; stock: number }>;
}

// Tailwind color class names for charts (use with twMerge or style prop)
const PIE_COLOR_CLASSES = [
  "bg-lamaSky",
  "bg-lamaPurple",
  "bg-lamaYellow",
  "bg-lamaSkyLight",
  "bg-lamaPurpleLight",
];

const PIE_COLORS = [
  "#C3EBFA", // lamaSky
  "#CFCEFF", // lamaPurple
  "#FAE27C", // lamaYellow
  "#EDF9FD", // lamaSkyLight
  "#F1F0FF", // lamaPurpleLight
];

const CHART_COLORS = {
  sales: "#a5a3fa", // fallback to a Tailwind color if possible, else use closest
  expenses: "#fae27c",
  quantity: "#C3EBFA",
  revenue: "#CFCEFF",
};

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
        <div className="px-6 py-4 bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm border border-lamaSky/40">
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

  const topProduct = data.topProducts.length > 0 ? data.topProducts[0] : null;

  return (
    <div className="min-h-screen bg-gradient-to-br  via-white to-lamaPurpleLight p-6 md:p-8">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <header className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900">
              Analytics Dashboard
            </h1>
            <p className="mt-1 text-sm text-gray-500">
              Overview of sales, expenses, payment methods, and product
              performance.
            </p>
          </div>
          <div className="inline-flex items-center gap-2 rounded-full bg-lamaSkyLight px-3 py-1 text-xs font-medium text-gray-700 border border-lamaSky/60 shadow-sm">
            <span className="inline-block h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            Live data
          </div>
        </header>

        {/* Metric Cards */}
        <section className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
          {/* Total Sales */}
          <div className="relative overflow-hidden rounded-2xl bg-white/80 backdrop-blur-sm border border-lamaPurple/40 shadow-sm">
            <div className="absolute -right-6 -top-6 h-20 w-20 rounded-full bg-lamaPurpleLight" />
            <div className="p-4 md:p-5 relative z-10">
              <p className="text-xs font-medium text-gray-500 uppercase tracking-wider">
                Total Sales (Last 30 Days)
              </p>
              <p className="mt-2 text-2xl font-bold text-gray-900">
                {formatCurrency(totalSales)}
              </p>
              <p className="mt-1 text-xs text-gray-500">
                Across {data.dailySales.length} day(s)
              </p>
            </div>
          </div>

          {/* Average Daily Sales */}
          <div className="relative overflow-hidden rounded-2xl bg-white/80 backdrop-blur-sm border border-lamaSky/40 shadow-sm">
            <div className="absolute -right-6 -top-6 h-20 w-20 rounded-full bg-lamaSkyLight" />
            <div className="p-4 md:p-5 relative z-10">
              <p className="text-xs font-medium text-gray-500 uppercase tracking-wider">
                Avg Daily Sales
              </p>
              <p className="mt-2 text-2xl font-bold text-gray-900">
                {formatCurrency(avgDailySales)}
              </p>
              <p className="mt-1 text-xs text-gray-500">
                Based on recent daily performance
              </p>
            </div>
          </div>

          {/* Total Expenses */}
          <div className="relative overflow-hidden rounded-2xl bg-white/80 backdrop-blur-sm border border-lamaYellow/40 shadow-sm">
            <div className="absolute -right-6 -top-6 h-20 w-20 rounded-full bg-lamaYellowLight" />
            <div className="p-4 md:p-5 relative z-10">
              <p className="text-xs font-medium text-gray-500 uppercase tracking-wider">
                Total Tracked Expenses
              </p>
              <p className="mt-2 text-2xl font-bold text-gray-900">
                {formatCurrency(totalExpenses)}
              </p>
              <p className="mt-1 text-xs text-gray-500">
                Across {data.monthlyExpenses.length} month(s)
              </p>
            </div>
          </div>

          {/* Transactions / Top Method */}
          <div className="relative overflow-hidden rounded-2xl bg-white/80 backdrop-blur-sm border border-lamaSky/40 shadow-sm">
            <div className="absolute -right-6 -top-6 h-20 w-20 rounded-full bg-lamaPurpleLight" />
            <div className="p-4 md:p-5 relative z-10">
              <p className="text-xs font-medium text-gray-500 uppercase tracking-wider">
                Total Transactions
              </p>
              <p className="mt-2 text-2xl font-bold text-gray-900">
                {totalTransactions.toLocaleString()}
              </p>
              <p className="mt-1 text-xs text-gray-500">
                Top method: {topPaymentMethod ? topPaymentMethod.name : "—"}
              </p>
            </div>
          </div>
        </section>

        {/* Daily Sales Line Chart */}
        <section className="bg-white/80 backdrop-blur-sm border border-lamaSky/40 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
          <div className="p-5 md:p-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h2 className="text-lg md:text-xl font-semibold text-gray-900">
                  Daily Sales (Last 30 Days)
                </h2>
                <p className="text-xs text-gray-500">
                  Track daily performance and trends.
                </p>
              </div>
            </div>
            <div className="h-[260px] md:h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data.dailySales}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                  <XAxis dataKey="date" tick={{ fontSize: 11 }} />
                  <YAxis tick={{ fontSize: 11 }} />
                  <Tooltip
                    formatter={(value: number) => `₱${value.toLocaleString()}`}
                  />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="sales"
                    stroke="#CFCEFF" // lamaPurple
                    strokeWidth={2.5}
                    dot={{ r: 3 }}
                    activeDot={{ r: 5 }}
                    name="Sales"
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </section>

        {/* Monthly Expenses Bar Chart */}
        <section className="bg-white/80 backdrop-blur-sm border border-lamaSky/40 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
          <div className="p-5 md:p-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h2 className="text-lg md:text-xl font-semibold text-gray-900">
                  Monthly Expenses
                </h2>
                <p className="text-xs text-gray-500">
                  Visualize outflows across recent months.
                </p>
              </div>
            </div>
            <div className="h-[260px] md:h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data.monthlyExpenses}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                  <XAxis dataKey="month" tick={{ fontSize: 11 }} />
                  <YAxis tick={{ fontSize: 11 }} />
                  <Tooltip
                    formatter={(value: number) => `₱${value.toLocaleString()}`}
                  />
                  <Legend />
                  <Bar
                    dataKey="expenses"
                    fill="#FAE27C" // lamaYellow
                    name="Expenses"
                    radius={[6, 6, 0, 0]}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </section>

        {/* Top-Selling Products */}
        <section className="bg-white/80 backdrop-blur-sm border border-lamaPurpleLight/80 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
          <div className="p-5 md:p-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h2 className="text-lg md:text-xl font-semibold text-gray-900">
                  Top-Selling Products
                </h2>
                <p className="text-xs text-gray-500">
                  Compare quantity sold and revenue side by side.
                </p>
              </div>
              {topProduct && (
                <div className="hidden md:flex flex-col items-end text-xs text-gray-500">
                  <span className="font-medium text-gray-700">
                    Best performer
                  </span>
                  <span>{topProduct.name}</span>
                </div>
              )}
            </div>
            <div className="h-[320px] md:h-[400px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={data.topProducts}
                  layout="vertical"
                  margin={{ left: 100 }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                  <XAxis type="number" tick={{ fontSize: 11 }} />
                  <YAxis
                    dataKey="name"
                    type="category"
                    width={140}
                    tick={{ fontSize: 11 }}
                  />
                  <Tooltip
                    formatter={(value: number, name: string) => {
                      if (name === "quantity") {
                        return [`${value} units`, "Quantity"];
                      }
                      return [`₱${value.toLocaleString()}`, "Revenue"];
                    }}
                  />
                  <Legend />
                  <Bar
                    dataKey="quantity"
                    fill="#C3EBFA" // lamaSky
                    name="Quantity Sold"
                    radius={[6, 6, 6, 6]}
                  />
                  <Bar
                    dataKey="revenue"
                    fill="#CFCEFF" // lamaPurple
                    name="Revenue"
                    radius={[6, 6, 6, 6]}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </section>

        {/* Low-Activity Products Table */}
        <section className="bg-white/80 backdrop-blur-sm border border-lamaYellowLight/80 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
          <div className="p-5 md:p-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h2 className="text-lg md:text-xl font-semibold text-gray-900">
                  Low-Activity Products
                </h2>
                <p className="text-xs text-gray-500">
                  Identify items with minimal sales activity.
                </p>
              </div>
            </div>

            <div className="overflow-x-auto rounded-xl border border-gray-100">
              <table className="min-w-full divide-y divide-gray-200 text-sm">
                <thead className="bg-lamaYellowLight">
                  <tr>
                    <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Rank
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Product Name
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Quantity Sold
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Current Stock
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-100">
                  {data.worstProducts.map((product, index) => {
                    const isNoSales = product.quantity === 0;
                    const isLowActivity =
                      product.quantity > 0 && product.quantity < 5;

                    let badgeClass =
                      "px-2.5 py-1 inline-flex text-xs leading-5 font-semibold rounded-full";
                    if (isNoSales) {
                      badgeClass +=
                        " bg-red-100 text-red-800 border border-red-200";
                    } else if (isLowActivity) {
                      badgeClass +=
                        " bg-lamaYellowLight text-amber-800 border border-amber-200";
                    } else {
                      badgeClass +=
                        " bg-emerald-50 text-emerald-800 border border-emerald-200";
                    }

                    return (
                      <tr
                        key={index}
                        className="hover:bg-lamaSkyLight/60 transition-colors"
                      >
                        <td className="px-4 py-3 whitespace-nowrap text-gray-900">
                          {index + 1}
                        </td>
                        <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">
                          {product.name}
                        </td>
                        <td className="px-4 py-3 whitespace-nowrap text-gray-600">
                          {product.quantity}
                        </td>
                        <td className="px-4 py-3 whitespace-nowrap text-gray-600">
                          {product.stock}
                        </td>
                        <td className="px-4 py-3 whitespace-nowrap">
                          <span className={badgeClass}>
                            {isNoSales
                              ? "No Sales"
                              : isLowActivity
                              ? "Low Activity"
                              : "Normal"}
                          </span>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Payment Method Breakdown Donut Chart */}
        <section className="bg-white/80 backdrop-blur-sm border border-lamaSky/40 rounded-2xl shadow-sm hover:shadow-md transition-shadow m2-4">
          <div className="p-5 md:p-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h2 className="text-lg md:text-xl font-semibold text-gray-900">
                  Payment Method Breakdown
                </h2>
                <p className="text-xs text-gray-500">
                  Distribution of revenue by payment channel.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
              <div className="w-full md:w-2/3 h-[260px] md:h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={data.paymentBreakdown}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={100}
                      paddingAngle={4}
                      dataKey="value"
                      label={({ name, percent }) =>
                        `${name}: ${(percent * 100).toFixed(0)}%`
                      }
                    >
                      {data.paymentBreakdown.map((entry, index) => (
                        <Cell
                          key={`cell-${index}`}
                          fill={PIE_COLORS[index % PIE_COLORS.length]}
                        />
                      ))}
                    </Pie>
                    <Tooltip
                      formatter={(value: number) =>
                        `₱${value.toLocaleString()}`
                      }
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>

              <div className="w-full md:w-1/3 space-y-3">
                {data.paymentBreakdown.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between gap-3 text-sm"
                  >
                    <div className="flex items-center gap-2">
                      <span
                        className={`h-3 w-3 rounded-full ${
                          PIE_COLOR_CLASSES[index % PIE_COLOR_CLASSES.length]
                        }`}
                      />
                      <span className="font-medium text-gray-800">
                        {item.name}
                      </span>
                    </div>
                    <div className="text-right">
                      <p className="text-gray-800 font-medium">
                        ₱{item.value.toLocaleString()}
                      </p>
                      <p className="text-[11px] text-gray-500">
                        {item.count} transactions
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Analytics;
