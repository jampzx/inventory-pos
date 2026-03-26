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
  Legend,
  ResponsiveContainer,
} from "recharts";
import { Layers } from "lucide-react";

interface CategoryData {
  type: string;
  sales: number;
  quantity: number;
  productCount: number;
}

interface Props {
  data: CategoryData[];
}

const CategoryPerformanceChart = ({ data }: Props) => {
  const chartData = useMemo(
    () =>
      data.map((item) => ({
        category: item.type.charAt(0).toUpperCase() + item.type.slice(1),
        sales: item.sales,
        quantity: item.quantity,
        products: item.productCount,
      })),
    [data],
  );

  return (
    <motion.div
      className="bg-gradient-to-br from-amber-50 via-white to-yellow-50 rounded-2xl shadow-lg p-6 border border-amber-100"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
    >
      <div className="flex items-center gap-2 mb-6">
        <Layers className="w-6 h-6 text-amber-600" />
        <h3 className="text-xl font-bold text-gray-800">
          Category Performance
        </h3>
      </div>

      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
          <XAxis dataKey="category" tick={{ fontSize: 12 }} />
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
                return [`₱${value.toLocaleString()}`, "Total Sales"];
              }
              if (name === "quantity") {
                return [value.toLocaleString(), "Units Sold"];
              }
              return [value, "Products"];
            }}
          />
          <Legend />
          <Bar dataKey="sales" fill="#f59e0b" radius={[8, 8, 0, 0]} />
          <Bar dataKey="quantity" fill="#3b82f6" radius={[8, 8, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>

      <div className="mt-4 pt-4 border-t border-gray-200 grid grid-cols-1 md:grid-cols-3 gap-3">
        {data.map((item, index) => (
          <div key={index} className="bg-white rounded-lg p-3 shadow-sm">
            <p className="text-sm font-semibold text-gray-700 capitalize">
              {item.type}
            </p>
            <p className="text-xs text-gray-500">
              {item.productCount} products
            </p>
            <p className="text-lg font-bold text-amber-600">
              ₱{item.sales.toLocaleString()}
            </p>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default CategoryPerformanceChart;
