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

  return (
    <motion.div
      className="p-4 flex items-center justify-between text-gray-500"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <motion.button
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
        className="py-2 px-4 rounded-md bg-slate-200 text-xs font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
        whileHover={{
          scale: currentPage === 1 ? 1 : 1.05,
          backgroundColor: currentPage === 1 ? undefined : "rgb(203, 213, 225)",
        }}
        whileTap={{ scale: currentPage === 1 ? 1 : 0.95 }}
      >
        Prev
      </motion.button>
      <motion.div
        className="flex items-center gap-2 text-sm"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3, delay: 0.1 }}
      >
        {pages.map((page, index) => (
          <motion.button
            key={page}
            onClick={() => onPageChange(page)}
            className={`px-2 rounded-sm transition-colors ${
              page === currentPage ? "bg-lamaSky text-white" : ""
            }`}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.2,
              delay: 0.1 + index * 0.02,
              ease: "easeOut",
            }}
            whileHover={{
              scale: 1.1,
              backgroundColor:
                page === currentPage
                  ? "rgb(195, 235, 250)"
                  : "rgb(241, 245, 249)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            {page}
          </motion.button>
        ))}
      </motion.div>
      <motion.button
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
        className="py-2 px-4 rounded-md bg-slate-200 text-xs font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
        whileHover={{
          scale: currentPage === totalPages ? 1 : 1.05,
          backgroundColor:
            currentPage === totalPages ? undefined : "rgb(203, 213, 225)",
        }}
        whileTap={{ scale: currentPage === totalPages ? 1 : 0.95 }}
      >
        Next
      </motion.button>
    </motion.div>
  );
};

export default Pagination;
