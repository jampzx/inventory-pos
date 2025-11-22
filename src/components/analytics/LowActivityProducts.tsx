import { motion } from "framer-motion";

interface LowActivityProduct {
  name: string;
  quantity: number;
  stock: number;
}

interface LowActivityProductsProps {
  data: LowActivityProduct[];
}

const LowActivityProducts = ({ data }: LowActivityProductsProps) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 1.2 }}
      className="bg-white/80 backdrop-blur-sm border border-lamaYellowLight/80 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
    >
      <div className="p-5 md:p-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-lg md:text-xl font-semibold text-gray-900">
              Low-Activity Products
            </h2>
            <p className="text-xs text-gray-500">
              Identify items with minimal sales activity.
            </p>
          </div>
        </div>

        <div className="overflow-x-auto rounded-xl border border-gray-100">
          <table className="min-w-full divide-y divide-gray-200 text-sm">
            <thead className="bg-lamaYellowLight">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Rank
                </th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Product Name
                </th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Quantity Sold
                </th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Current Stock
                </th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-100">
              {data.map((product, index) => {
                const isNoSales = product.quantity === 0;
                const isLowActivity =
                  product.quantity > 0 && product.quantity < 5;

                let badgeClass =
                  "px-2.5 py-1 inline-flex text-xs leading-5 font-semibold rounded-full";
                if (isNoSales) {
                  badgeClass +=
                    " bg-red-100 text-red-800 border border-red-200";
                } else if (isLowActivity) {
                  badgeClass +=
                    " bg-lamaYellowLight text-amber-800 border border-amber-200";
                } else {
                  badgeClass +=
                    " bg-emerald-50 text-emerald-800 border border-emerald-200";
                }

                return (
                  <motion.tr
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.3,
                      delay: 1.4 + index * 0.1,
                    }}
                    className="hover:bg-lamaSkyLight/60 transition-colors"
                  >
                    <td className="px-4 py-3 whitespace-nowrap text-gray-900">
                      {index + 1}
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">
                      {product.name}
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap text-gray-600">
                      {product.quantity}
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap text-gray-600">
                      {product.stock}
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap">
                      <span className={badgeClass}>
                        {isNoSales
                          ? "No Sales"
                          : isLowActivity
                          ? "Low Activity"
                          : "Normal"}
                      </span>
                    </td>
                  </motion.tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </motion.section>
  );
};

export default LowActivityProducts;
