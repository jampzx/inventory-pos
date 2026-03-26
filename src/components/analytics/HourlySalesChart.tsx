"use client";

import { useMemo } from "react";
import { motion } from "framer-motion";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { Clock } from "lucide-react";

interface HourlyData {
  hour: number;
  sales: number;
  count: number;
}

interface Props {
  data: HourlyData[];
}

const HourlySalesChart = ({ data }: Props) => {
  const chartData = useMemo(
    () =>
      data.map((item) => ({
        hour: `${item.hour}:00`,
        sales: item.sales,
        transactions: item.count,
      })),
    [data],
  );

  const peakHour = useMemo(
    () =>
      data.reduce(
        (max, item) => (item.sales > max.sales ? item : max),
        data[0],
      ),
    [data],
  );

  return (
    <motion.div
      className="bg-gradient-to-br from-cyan-50 via-white to-blue-50 rounded-2xl shadow-lg p-6 border border-cyan-100"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
    >
      <div className="flex items-center gap-2 mb-6">
        <Clock className="w-6 h-6 text-cyan-600" />
        <h3 className="text-xl font-bold text-gray-800">
          Hourly Sales Pattern (Last 7 Days)
        </h3>
      </div>

      <ResponsiveContainer width="100%" height={300}>
        <AreaChart data={chartData}>
          <defs>
            <linearGradient id="colorSales" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#06b6d4" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#06b6d4" stopOpacity={0.1} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
          <XAxis dataKey="hour" tick={{ fontSize: 11 }} />
          <YAxis tick={{ fontSize: 12 }} />
          <Tooltip
            contentStyle={{
              backgroundColor: "rgba(255, 255, 255, 0.95)",
              borderRadius: "12px",
              border: "1px solid #e5e7eb",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            }}
            formatter={(value: number, name: string) => {
              if (name === "sales") {
                return [`₱${value.toLocaleString()}`, "Sales"];
              }
              return [value, "Transactions"];
            }}
          />
          <Area
            type="monotone"
            dataKey="sales"
            stroke="#06b6d4"
            strokeWidth={2}
            fillOpacity={1}
            fill="url(#colorSales)"
          />
        </AreaChart>
      </ResponsiveContainer>

      {peakHour && (
        <div className="mt-4 pt-4 border-t border-gray-200 text-center">
          <p className="text-sm text-gray-600">
            Peak Sales Hour:{" "}
            <span className="font-bold text-cyan-600">{peakHour.hour}:00</span>{" "}
            with ₱{peakHour.sales.toLocaleString()} ({peakHour.count}{" "}
            transactions)
          </p>
        </div>
      )}
    </motion.div>
  );
};

export default HourlySalesChart;
