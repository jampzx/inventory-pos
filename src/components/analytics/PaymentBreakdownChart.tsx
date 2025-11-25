import { motion } from "framer-motion";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

interface PaymentBreakdownData {
  name: string;
  value: number;
  count: number;
}

interface PaymentBreakdownChartProps {
  data: PaymentBreakdownData[];
}

const PIE_COLOR_CLASSES = [
  "bg-lamaSky",
  "bg-lamaPurple",
  "bg-lamaYellow",
  "bg-lamaSkyLight",
  "bg-lamaPurpleLight",
];

const PIE_COLORS = [
  "#C3EBFA", // lamaSky
  "#CFCEFF", // lamaPurple
  "#FAE27C", // lamaYellow
  "#EDF9FD", // lamaSkyLight
  "#F1F0FF", // lamaPurpleLight
];

const PaymentBreakdownChart = ({ data }: PaymentBreakdownChartProps) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 1.6 }}
      className="bg-white/80 backdrop-blur-sm border border-lamaSky/40 rounded-2xl shadow-sm hover:shadow-md transition-shadow m2-4"
    >
      <div className="p-3 sm:p-4 md:p-5 lg:p-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3 sm:mb-4 gap-2">
          <div>
            <h2 className="text-base sm:text-lg md:text-xl font-semibold text-gray-900">
              Payment Method Breakdown
            </h2>
            <p className="text-[10px] sm:text-xs text-gray-500">
              Distribution of revenue by payment channel.
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center gap-4 sm:gap-6">
          <div className="w-full h-[200px] sm:h-[240px] md:h-[280px] lg:h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={data}
                  cx="50%"
                  cy="50%"
                  innerRadius={40}
                  outerRadius={80}
                  paddingAngle={4}
                  dataKey="value"
                  label={({ name, percent }) =>
                    `${name}: ${(percent * 100).toFixed(0)}%`
                  }
                >
                  {data.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={PIE_COLORS[index % PIE_COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip
                  formatter={(value: number) => `₱${value.toLocaleString()}`}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>

          <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-2 sm:gap-3">
            {data.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.4,
                  delay: 1.8 + index * 0.1,
                }}
                className="flex items-center justify-between gap-2 sm:gap-3 text-xs sm:text-sm p-2 sm:p-0 bg-gray-50 sm:bg-transparent rounded sm:rounded-none"
              >
                <div className="flex items-center gap-2 min-w-0">
                  <span
                    className={`h-2 w-2 sm:h-3 sm:w-3 rounded-full flex-shrink-0 ${
                      PIE_COLOR_CLASSES[index % PIE_COLOR_CLASSES.length]
                    }`}
                  />
                  <span className="font-medium text-gray-800 truncate text-xs sm:text-sm">
                    {item.name}
                  </span>
                </div>
                <div className="text-right flex-shrink-0">
                  <p className="text-gray-800 font-medium text-xs sm:text-sm">
                    ₱{item.value.toLocaleString()}
                  </p>
                  <p className="text-[10px] sm:text-[11px] text-gray-500">
                    {item.count} transactions
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default PaymentBreakdownChart;
