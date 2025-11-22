import { motion } from "framer-motion";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

interface DailySalesData {
  date: string;
  sales: number;
}

interface DailySalesChartProps {
  data: DailySalesData[];
}

const DailySalesChart = ({ data }: DailySalesChartProps) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.6 }}
      className="bg-white/80 backdrop-blur-sm border border-lamaSky/40 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
    >
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
            <LineChart data={data}>
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
    </motion.section>
  );
};

export default DailySalesChart;
