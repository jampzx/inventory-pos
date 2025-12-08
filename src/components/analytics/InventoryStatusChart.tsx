"use client";

import { motion } from "framer-motion";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Legend,
  Tooltip,
} from "recharts";
import { Package } from "lucide-react";

interface InventoryItem {
  status: string;
  count: number;
  value: number;
}

interface Props {
  data: InventoryItem[];
}

const STATUS_CONFIG: Record<string, { label: string; color: string }> = {
  out_of_stock: { label: "Out of Stock", color: "#ef4444" },
  low_stock: { label: "Low Stock", color: "#f59e0b" },
  medium_stock: { label: "Medium Stock", color: "#3b82f6" },
  high_stock: { label: "High Stock", color: "#10b981" },
};

const InventoryStatusChart = ({ data }: Props) => {
  const chartData = data.map((item) => ({
    name: STATUS_CONFIG[item.status]?.label || item.status,
    value: item.count,
    color: STATUS_CONFIG[item.status]?.color || "#gray",
  }));

  const totalProducts = data.reduce((sum, item) => sum + item.count, 0);

  return (
    <motion.div
      className="bg-gradient-to-br from-indigo-50 via-white to-purple-50 rounded-2xl shadow-lg p-6 border border-indigo-100"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
    >
      <div className="flex items-center gap-2 mb-6">
        <Package className="w-6 h-6 text-indigo-600" />
        <h3 className="text-xl font-bold text-gray-800">Inventory Status</h3>
      </div>

      <div className="flex flex-col md:flex-row items-center gap-6">
        <div className="w-full md:w-1/2">
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={chartData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ percent }) => `${(percent * 100).toFixed(0)}%`}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {chartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="w-full md:w-1/2 space-y-3">
          {data.map((item, index) => (
            <motion.div
              key={item.status}
              className="bg-white rounded-lg p-3 shadow-sm border-l-4"
              style={{
                borderLeftColor: STATUS_CONFIG[item.status]?.color || "#gray",
              }}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-semibold text-gray-800">
                    {STATUS_CONFIG[item.status]?.label || item.status}
                  </p>
                  <p className="text-xs text-gray-500">
                    ₱
                    {item.value.toLocaleString(undefined, {
                      maximumFractionDigits: 0,
                    })}{" "}
                    value
                  </p>
                </div>
                <p
                  className="text-2xl font-bold"
                  style={{ color: STATUS_CONFIG[item.status]?.color }}
                >
                  {item.count}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="mt-4 pt-4 border-t border-gray-200 text-center">
        <p className="text-sm text-gray-600">
          Total Products:{" "}
          <span className="font-bold text-indigo-600">{totalProducts}</span>
        </p>
      </div>
    </motion.div>
  );
};

export default InventoryStatusChart;
