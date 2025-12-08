import { motion } from "framer-motion";
import { BarChart3, Sparkles } from "lucide-react";

const AnalyticsHeader = () => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 rounded-2xl p-6 shadow-xl"
    >
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="flex items-center gap-3"
      >
        <div className="bg-white/20 backdrop-blur-sm p-3 rounded-xl">
          <BarChart3 className="w-8 h-8 text-white" />
        </div>
        <div>
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-white flex items-center gap-2">
            Analytics Dashboard
            <Sparkles className="w-6 h-6 text-yellow-300" />
          </h1>
          <p className="mt-1 text-xs sm:text-sm text-white/90">
            Comprehensive insights into sales, profit, customers, inventory &
            performance metrics
          </p>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, delay: 0.4 }}
        className="inline-flex items-center gap-2 rounded-full bg-white/20 backdrop-blur-md px-4 py-2 text-sm font-semibold text-white border border-white/30 shadow-lg"
      >
        <span className="inline-block h-2.5 w-2.5 rounded-full bg-green-400 animate-pulse shadow-lg shadow-green-400/50" />
        Live Data
      </motion.div>
    </motion.header>
  );
};

export default AnalyticsHeader;
