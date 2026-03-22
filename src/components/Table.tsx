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
      className="neo-panel neo-scrollbar mt-3 w-full overflow-x-auto rounded-2xl border border-black/10 sm:mt-4"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <motion.table
        className="min-w-full w-full text-xs text-gray-700 sm:text-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.2 }}
      >
        <motion.thead
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          <tr className="whitespace-nowrap border-b border-black/10 bg-[linear-gradient(135deg,rgba(15,159,157,0.14),rgba(245,121,47,0.1))] text-left text-gray-800">
            {columns.map((col, index) => (
              <motion.th
                key={col.accessor}
                className={`px-3 py-2.5 text-[11px] font-semibold uppercase tracking-[0.14em] sm:px-4 sm:py-3 ${
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
          className="divide-y divide-black/5"
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
