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

interface MonthlyExpensesData {
  month: string;
  expenses: number;
}

interface MonthlyExpensesChartProps {
  data: MonthlyExpensesData[];
}

const MonthlyExpensesChart = ({ data }: MonthlyExpensesChartProps) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.8 }}
      className="bg-white/80 backdrop-blur-sm border border-lamaSky/40 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
    >
      <div className="p-3 sm:p-4 md:p-5 lg:p-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3 sm:mb-4 gap-2">
          <div>
            <h2 className="text-base sm:text-lg md:text-xl font-semibold text-gray-900">
              Monthly Expenses
            </h2>
            <p className="text-[10px] sm:text-xs text-gray-500">
              Visualize outflows across recent months.
            </p>
          </div>
        </div>
        <div className="h-[200px] sm:h-[240px] md:h-[260px] lg:h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
              <XAxis dataKey="month" tick={{ fontSize: 10 }} />
              <YAxis tick={{ fontSize: 10 }} />
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
    </motion.section>
  );
};

export default MonthlyExpensesChart;
