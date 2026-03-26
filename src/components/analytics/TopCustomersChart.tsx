"use client";

import { useMemo } from "react";
import { motion } from "framer-motion";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";
import { Crown, TrendingUp } from "lucide-react";

interface Customer {
  name: string;
  totalSpent: number;
  transactionCount: number;
}

interface Props {
  data: Customer[];
}

const COLORS = [
  "#8b5cf6",
  "#ec4899",
  "#f59e0b",
  "#10b981",
  "#3b82f6",
  "#ef4444",
  "#06b6d4",
  "#84cc16",
  "#f97316",
  "#6366f1",
];

const TopCustomersChart = ({ data }: Props) => {
  const chartData = useMemo(
    () =>
      data.map((customer) => ({
        name:
          customer.name.length > 15
            ? customer.name.substring(0, 15) + "..."
            : customer.name,
        amount: customer.totalSpent,
        transactions: customer.transactionCount,
      })),
    [data],
  );

  return (
    <motion.div
      className="bg-gradient-to-br from-violet-50 via-white to-fuchsia-50 rounded-2xl shadow-lg p-6 border border-violet-100"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
    >
      <div className="flex items-center gap-2 mb-6">
        <Crown className="w-6 h-6 text-violet-600" />
        <h3 className="text-xl font-bold text-gray-800">
          Top Customers by Spending
        </h3>
      </div>

      <ResponsiveContainer width="100%" height={350}>
        <BarChart data={chartData} layout="vertical">
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
          <XAxis type="number" tick={{ fontSize: 12 }} />
          <YAxis
            dataKey="name"
            type="category"
            width={120}
            tick={{ fontSize: 11 }}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: "rgba(255, 255, 255, 0.95)",
              borderRadius: "12px",
              border: "1px solid #e5e7eb",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            }}
            formatter={(value: number, name: string) => {
              if (name === "amount") {
                return [`₱${value.toLocaleString()}`, "Total Spent"];
              }
              return [value, "Transactions"];
            }}
          />
          <Bar dataKey="amount" radius={[0, 8, 8, 0]}>
            {chartData.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>

      {data.length > 0 && (
        <div className="mt-4 pt-4 border-t border-gray-200">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <TrendingUp className="w-4 h-4 text-violet-600" />
            <span>
              Top customer:{" "}
              <span className="font-semibold text-violet-600">
                {data[0].name}
              </span>{" "}
              with ₱{data[0].totalSpent.toLocaleString()} (
              {data[0].transactionCount} transactions)
            </span>
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default TopCustomersChart;
