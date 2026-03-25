import { motion } from "framer-motion";

const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
}: {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}) => {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  const visiblePages = (() => {
    if (totalPages <= 7) return pages;

    const neighbors = [
      1,
      totalPages,
      currentPage - 2,
      currentPage - 1,
      currentPage,
      currentPage + 1,
      currentPage + 2,
    ].filter((page) => page >= 1 && page <= totalPages);

    return Array.from(new Set(neighbors)).sort((a, b) => a - b);
  })();

  return (
    <motion.div
      className="neo-panel mt-3 flex items-center justify-between gap-2 rounded-xl border border-black/10 bg-white/70 px-2 py-2 text-gray-600 sm:gap-3 sm:px-4 sm:py-3"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <motion.button
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
        className="neo-btn-ghost px-2.5 py-1.5 text-xs font-semibold disabled:cursor-not-allowed disabled:opacity-50 sm:px-4 sm:py-2"
        whileHover={{
          scale: currentPage === 1 ? 1 : 1.05,
        }}
        whileTap={{ scale: currentPage === 1 ? 1 : 0.95 }}
      >
        Prev
      </motion.button>

      <motion.div
        className="neo-scrollbar flex max-w-[58%] items-center gap-1 overflow-x-auto text-xs sm:gap-2 sm:text-sm"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3, delay: 0.1 }}
      >
        {visiblePages.map((page, index) => {
          const previousPage = visiblePages[index - 1];
          const showEllipsis =
            typeof previousPage === "number" && page - previousPage > 1;

          return (
            <div key={page} className="flex items-center gap-1 sm:gap-2">
              {showEllipsis && <span className="px-1 text-gray-400">...</span>}
              <motion.button
                onClick={() => onPageChange(page)}
                className={`min-w-[30px] flex-shrink-0 rounded-lg border px-2 py-1 transition-colors ${
                  page === currentPage
                    ? "border-lamaSky/40 bg-lamaSky/20 text-gray-800"
                    : "border-black/10 bg-white/70 text-gray-600 hover:bg-white"
                }`}
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.2,
                  delay: 0.1 + index * 0.03,
                  ease: "easeOut",
                }}
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
              >
                {page}
              </motion.button>
            </div>
          );
        })}
      </motion.div>

      <motion.button
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
        className="neo-btn-ghost px-2.5 py-1.5 text-xs font-semibold disabled:cursor-not-allowed disabled:opacity-50 sm:px-4 sm:py-2"
        whileHover={{
          scale: currentPage === totalPages ? 1 : 1.05,
        }}
        whileTap={{ scale: currentPage === totalPages ? 1 : 0.95 }}
      >
        Next
      </motion.button>
    </motion.div>
  );
};

export default Pagination;
