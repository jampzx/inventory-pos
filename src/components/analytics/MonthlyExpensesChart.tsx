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
            <BarChart data={data}>
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
    </motion.section>
  );
};

export default MonthlyExpensesChart;
