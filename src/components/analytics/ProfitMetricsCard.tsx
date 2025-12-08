"use client";

import { motion } from "framer-motion";
import {
  TrendingUp,
  TrendingDown,
  DollarSign,
  ShoppingCart,
} from "lucide-react";

interface ProfitAnalysis {
  totalRevenue: number;
  totalCost: number;
  totalProfit: number;
  orderCount: number;
  profitMargin: number;
}

interface Props {
  data: ProfitAnalysis | null;
}

const formatCurrency = (amount: number) =>
  `₱${amount.toLocaleString(undefined, { maximumFractionDigits: 0 })}`;

const ProfitMetricsCard = ({ data }: Props) => {
  if (!data) return null;

  const isPositive = data.totalProfit > 0;

  return (
    <motion.div
      className="bg-gradient-to-br from-emerald-50 via-white to-teal-50 rounded-2xl shadow-lg p-6 border border-emerald-100"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-bold text-gray-800 flex items-center gap-2">
          <DollarSign className="w-6 h-6 text-emerald-600" />
          Profit Analysis
        </h3>
        {isPositive ? (
          <TrendingUp className="w-8 h-8 text-emerald-600" />
        ) : (
          <TrendingDown className="w-8 h-8 text-red-600" />
        )}
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <motion.div
          className="bg-white rounded-xl p-4 shadow-sm border border-blue-100"
          whileHover={{ scale: 1.02, y: -2 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <p className="text-xs font-medium text-gray-500 mb-1">
            Total Revenue
          </p>
          <p className="text-lg font-bold text-blue-600">
            {formatCurrency(data.totalRevenue)}
          </p>
        </motion.div>

        <motion.div
          className="bg-white rounded-xl p-4 shadow-sm border border-orange-100"
          whileHover={{ scale: 1.02, y: -2 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <p className="text-xs font-medium text-gray-500 mb-1">Total Cost</p>
          <p className="text-lg font-bold text-orange-600">
            {formatCurrency(data.totalCost)}
          </p>
        </motion.div>

        <motion.div
          className="bg-white rounded-xl p-4 shadow-sm border border-emerald-100"
          whileHover={{ scale: 1.02, y: -2 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <p className="text-xs font-medium text-gray-500 mb-1">Net Profit</p>
          <p
            className={`text-lg font-bold ${
              isPositive ? "text-emerald-600" : "text-red-600"
            }`}
          >
            {formatCurrency(data.totalProfit)}
          </p>
        </motion.div>

        <motion.div
          className="bg-white rounded-xl p-4 shadow-sm border border-purple-100"
          whileHover={{ scale: 1.02, y: -2 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <p className="text-xs font-medium text-gray-500 mb-1">
            Profit Margin
          </p>
          <p className="text-lg font-bold text-purple-600">
            {data.profitMargin.toFixed(1)}%
          </p>
        </motion.div>
      </div>

      <div className="mt-4 pt-4 border-t border-gray-200">
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <ShoppingCart className="w-4 h-4" />
          <span>
            Based on {data.orderCount.toLocaleString()} completed orders
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default ProfitMetricsCard;
