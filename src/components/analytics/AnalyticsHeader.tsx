import { motion } from "framer-motion";
import { FiBarChart, FiActivity } from "react-icons/fi";

const AnalyticsHeader = () => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="neo-panel rounded-2xl p-6 sm:p-7"
    >
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex items-center gap-4"
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-lamaSky/30 bg-lamaSky/15 text-[#0f9f9d]">
            <FiBarChart size={22} />
          </div>
          <div>
            <h1 className="neo-title text-2xl sm:text-3xl font-semibold text-gray-900 flex items-center gap-2">
              Analytics
              <motion.span
                animate={{ rotate: [0, 20, -20, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <FiActivity size={20} className="text-lamaYellow" />
              </motion.span>
            </h1>
            <p className="mt-1 text-xs uppercase tracking-[0.1em] text-gray-600 sm:text-sm">
              Sales · Performance · Insights
            </p>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          className="neo-pill flex items-center gap-2"
        >
          <span className="inline-block h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse shadow-lg shadow-emerald-500/50" />
          Live Data
        </motion.div>
      </div>
    </motion.header>
  );
};

export default AnalyticsHeader;
