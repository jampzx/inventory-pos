"use client";

import { motion } from "framer-motion";
import { Users, UserCheck, UserPlus } from "lucide-react";

interface CustomerData {
  total_customers: number;
  active_customers: number;
  new_customers_this_month: number;
}

interface Props {
  data: CustomerData;
}

const CustomerInsightsCard = ({ data }: Props) => {
  const activeRate =
    data.total_customers > 0
      ? ((data.active_customers / data.total_customers) * 100).toFixed(1)
      : 0;

  return (
    <motion.div
      className="bg-gradient-to-br from-pink-50 via-white to-rose-50 rounded-2xl shadow-lg p-6 border border-pink-100"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="flex items-center gap-2 mb-6">
        <Users className="w-6 h-6 text-pink-600" />
        <h3 className="text-xl font-bold text-gray-800">Customer Insights</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <motion.div
          className="bg-white rounded-xl p-5 shadow-sm border-t-4 border-blue-400"
          whileHover={{ scale: 1.03, y: -3 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <div className="flex items-center gap-3 mb-2">
            <div className="bg-blue-100 p-2 rounded-lg">
              <Users className="w-5 h-5 text-blue-600" />
            </div>
            <p className="text-sm font-medium text-gray-600">Total Customers</p>
          </div>
          <p className="text-3xl font-bold text-blue-600">
            {data.total_customers.toLocaleString()}
          </p>
        </motion.div>

        <motion.div
          className="bg-white rounded-xl p-5 shadow-sm border-t-4 border-green-400"
          whileHover={{ scale: 1.03, y: -3 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <div className="flex items-center gap-3 mb-2">
            <div className="bg-green-100 p-2 rounded-lg">
              <UserCheck className="w-5 h-5 text-green-600" />
            </div>
            <p className="text-sm font-medium text-gray-600">
              Active Customers
            </p>
          </div>
          <p className="text-3xl font-bold text-green-600">
            {data.active_customers.toLocaleString()}
          </p>
          <p className="text-xs text-gray-500 mt-1">{activeRate}% of total</p>
        </motion.div>

        <motion.div
          className="bg-white rounded-xl p-5 shadow-sm border-t-4 border-purple-400"
          whileHover={{ scale: 1.03, y: -3 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <div className="flex items-center gap-3 mb-2">
            <div className="bg-purple-100 p-2 rounded-lg">
              <UserPlus className="w-5 h-5 text-purple-600" />
            </div>
            <p className="text-sm font-medium text-gray-600">New This Month</p>
          </div>
          <p className="text-3xl font-bold text-purple-600">
            {data.new_customers_this_month.toLocaleString()}
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default CustomerInsightsCard;
