"use client";

import { motion } from "framer-motion";
import { TrendingUp, TrendingDown, Activity } from "lucide-react";

interface GrowthData {
  salesGrowth: number;
  transactionGrowth: number;
  currentMonthSales: number;
  previousMonthSales: number;
}

interface Props {
  data: GrowthData;
}

const GrowthMetricsCard = ({ data }: Props) => {
  const isSalesGrowthPositive = data.salesGrowth >= 0;
  const isTransactionGrowthPositive = data.transactionGrowth >= 0;

  return (
    <motion.div
      className="bg-gradient-to-br from-teal-50 via-white to-green-50 rounded-2xl shadow-lg p-6 border border-teal-100"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.6 }}
    >
      <div className="flex items-center gap-2 mb-6">
        <Activity className="w-6 h-6 text-teal-600" />
        <h3 className="text-xl font-bold text-gray-800">
          Growth Metrics (Month over Month)
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <motion.div
          className="bg-white rounded-xl p-6 shadow-md"
          whileHover={{ scale: 1.02, y: -3 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <div className="flex items-center justify-between mb-4">
            <p className="text-sm font-semibold text-gray-600">Sales Growth</p>
            {isSalesGrowthPositive ? (
              <TrendingUp className="w-6 h-6 text-green-600" />
            ) : (
              <TrendingDown className="w-6 h-6 text-red-600" />
            )}
          </div>

          <div className="flex items-baseline gap-2 mb-3">
            <p
              className={`text-4xl font-bold ${
                isSalesGrowthPositive ? "text-green-600" : "text-red-600"
              }`}
            >
              {isSalesGrowthPositive ? "+" : ""}
              {data.salesGrowth.toFixed(1)}%
            </p>
          </div>

          <div className="space-y-1 text-sm">
            <p className="text-gray-600">
              Current Month:{" "}
              <span className="font-semibold text-gray-800">
                ₱{data.currentMonthSales.toLocaleString()}
              </span>
            </p>
            <p className="text-gray-600">
              Previous Month:{" "}
              <span className="font-semibold text-gray-800">
                ₱{data.previousMonthSales.toLocaleString()}
              </span>
            </p>
          </div>
        </motion.div>

        <motion.div
          className="bg-white rounded-xl p-6 shadow-md"
          whileHover={{ scale: 1.02, y: -3 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <div className="flex items-center justify-between mb-4">
            <p className="text-sm font-semibold text-gray-600">
              Transaction Growth
            </p>
            {isTransactionGrowthPositive ? (
              <TrendingUp className="w-6 h-6 text-green-600" />
            ) : (
              <TrendingDown className="w-6 h-6 text-red-600" />
            )}
          </div>

          <div className="flex items-baseline gap-2 mb-3">
            <p
              className={`text-4xl font-bold ${
                isTransactionGrowthPositive ? "text-green-600" : "text-red-600"
              }`}
            >
              {isTransactionGrowthPositive ? "+" : ""}
              {data.transactionGrowth.toFixed(1)}%
            </p>
          </div>

          <div className="pt-8">
            <p className="text-sm text-gray-600">
              {isTransactionGrowthPositive ? "Increase" : "Decrease"} in number
              of transactions compared to last month
            </p>
          </div>
        </motion.div>
      </div>

      <div className="mt-4 pt-4 border-t border-gray-200">
        <div className="bg-gradient-to-r from-teal-100 to-green-100 rounded-lg p-3">
          <p className="text-xs text-gray-700 text-center">
            {isSalesGrowthPositive && isTransactionGrowthPositive ? (
              <span className="font-semibold text-green-700">
                🎉 Great job! Both sales and transactions are growing!
              </span>
            ) : isSalesGrowthPositive || isTransactionGrowthPositive ? (
              <span className="font-semibold text-amber-700">
                📈 Positive trend detected. Keep pushing forward!
              </span>
            ) : (
              <span className="font-semibold text-red-700">
                ⚠️ Performance needs attention. Review your strategies.
              </span>
            )}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default GrowthMetricsCard;
