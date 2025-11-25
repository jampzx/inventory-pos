import { motion } from "framer-motion";

const AnalyticsHeader = () => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between"
    >
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-gray-900">
          Analytics Dashboard
        </h1>
        <p className="mt-1 text-xs sm:text-sm text-gray-500">
          Overview of sales, expenses, payment methods, and product performance.
        </p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, delay: 0.4 }}
        className="inline-flex items-center gap-2 rounded-full bg-lamaSkyLight px-3 py-1 text-xs font-medium text-gray-700 border border-lamaSky/60 shadow-sm"
      >
        <span className="inline-block h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
        Live data
      </motion.div>
    </motion.header>
  );
};

export default AnalyticsHeader;
