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
      <div className="p-5 md:p-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-lg md:text-xl font-semibold text-gray-900">
              Payment Method Breakdown
            </h2>
            <p className="text-xs text-gray-500">
              Distribution of revenue by payment channel.
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
          <div className="w-full md:w-2/3 h-[260px] md:h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={data}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
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

          <div className="w-full md:w-1/3 space-y-3">
            {data.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.4,
                  delay: 1.8 + index * 0.1,
                }}
                className="flex items-center justify-between gap-3 text-sm"
              >
                <div className="flex items-center gap-2">
                  <span
                    className={`h-3 w-3 rounded-full ${
                      PIE_COLOR_CLASSES[index % PIE_COLOR_CLASSES.length]
                    }`}
                  />
                  <span className="font-medium text-gray-800">{item.name}</span>
                </div>
                <div className="text-right">
                  <p className="text-gray-800 font-medium">
                    ₱{item.value.toLocaleString()}
                  </p>
                  <p className="text-[11px] text-gray-500">
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
