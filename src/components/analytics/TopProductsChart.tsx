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

interface TopProductsData {
  name: string;
  quantity: number;
  revenue: number;
}

interface TopProductsChartProps {
  data: TopProductsData[];
}

const TopProductsChart = ({ data }: TopProductsChartProps) => {
  const topProduct = data.length > 0 ? data[0] : null;

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 1.0 }}
      className="bg-white/80 backdrop-blur-sm border border-lamaPurpleLight/80 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
    >
      <div className="p-3 sm:p-4 md:p-5 lg:p-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3 sm:mb-4 gap-2">
          <div className="flex-1">
            <h2 className="text-base sm:text-lg md:text-xl font-semibold text-gray-900">
              Top-Selling Products
            </h2>
            <p className="text-[10px] sm:text-xs text-gray-500">
              Compare quantity sold and revenue side by side.
            </p>
          </div>
          {topProduct && (
            <div className="flex flex-col items-start sm:items-end text-xs text-gray-500">
              <span className="font-medium text-gray-700 text-xs sm:text-sm">
                Best performer
              </span>
              <span className="text-[10px] sm:text-xs truncate max-w-[120px]">
                {topProduct.name}
              </span>
            </div>
          )}
        </div>
        <div className="h-[280px] sm:h-[320px] md:h-[360px] lg:h-[400px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data} layout="vertical" margin={{ left: 60 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
              <XAxis type="number" tick={{ fontSize: 9 }} />
              <YAxis
                dataKey="name"
                type="category"
                width={80}
                tick={{ fontSize: 9 }}
              />
              <Tooltip
                formatter={(value: number, name: string) => {
                  if (name === "quantity") {
                    return [`${value} units`, "Quantity"];
                  }
                  return [`₱${value.toLocaleString()}`, "Revenue"];
                }}
              />
              <Legend />
              <Bar
                dataKey="quantity"
                fill="#C3EBFA" // lamaSky
                name="Quantity Sold"
                radius={[6, 6, 6, 6]}
              />
              <Bar
                dataKey="revenue"
                fill="#CFCEFF" // lamaPurple
                name="Revenue"
                radius={[6, 6, 6, 6]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </motion.section>
  );
};

export default TopProductsChart;
