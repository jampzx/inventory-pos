import { motion, AnimatePresence } from "framer-motion";

const Table = ({
  columns,
  renderRow,
  data,
}: {
  columns: { header: string; accessor: string; className?: string }[];
  renderRow: (item: any) => React.ReactNode;
  data: any[];
}) => {
  return (
    <motion.div
      className="w-full overflow-x-auto mt-3 sm:mt-4 bg-white rounded-xl border border-gray-200 shadow-lg"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <motion.table
        className="min-w-full w-full text-xs sm:text-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.2 }}
      >
        <motion.thead
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          <tr className="text-left text-gray-700 whitespace-nowrap bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 border-b-2 border-purple-100">
            {columns.map((col, index) => (
              <motion.th
                key={col.accessor}
                className={`p-2 sm:p-3 font-medium text-xs sm:text-sm ${
                  col.className || ""
                }`}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.3,
                  delay: 0.1 + index * 0.05,
                  ease: "easeOut",
                }}
              >
                {col.header}
              </motion.th>
            ))}
          </tr>
        </motion.thead>
        <motion.tbody
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.3 }}
        >
          <AnimatePresence>
            {data.map((item) => renderRow(item))}
          </AnimatePresence>
        </motion.tbody>
      </motion.table>
    </motion.div>
  );
};

export default Table;
