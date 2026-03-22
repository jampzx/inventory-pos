"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { createPortal } from "react-dom";
import { FiX } from "react-icons/fi";

const SingleProductModal = ({
  product,
  onClose,
}: {
  product: {
    id: number;
    name: string;
    description?: string;
    product_type: string;
    price: number;
    image_url?: string;
    status: string;
  };
  onClose: () => void;
}) => {
  if (!product) return null;

  return createPortal(
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/45 px-2 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        onClick={onClose}
      >
        <motion.div
          className="neo-panel-strong relative max-h-[90vh] w-full max-w-4xl overflow-y-auto border border-black/10 p-4 sm:p-6 md:p-8"
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          onClick={(event) => event.stopPropagation()}
        >
          <motion.button
            onClick={onClose}
            className="absolute right-4 top-4 rounded-lg border border-black/10 bg-white/80 p-1.5 text-gray-500 hover:text-gray-800"
            whileHover={{ scale: 1.1, rotate: 90 }}
            whileTap={{ scale: 0.9 }}
          >
            <FiX size={16} />
          </motion.button>

          <div className="flex flex-col gap-6 lg:flex-row">
            {/* LEFT SECTION */}
            <div className="flex-1 flex flex-col gap-6">
              {/* PRODUCT CARD */}
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-start">
                {/* IMAGE */}
                <div className="w-full sm:w-36 sm:h-36 aspect-square rounded-xl overflow-hidden bg-white/80 flex items-center justify-center border border-black/10 shrink-0">
                  {product.image_url ? (
                    <Image
                      src={product.image_url}
                      alt={product.name}
                      width={144}
                      height={144}
                      className="object-cover w-full h-full"
                    />
                  ) : (
                    <span className="text-sm text-gray-400">No Image</span>
                  )}
                </div>

                {/* TEXT INFO */}
                <div className="flex-1 w-full space-y-6">
                  {/* Header: Name + Status */}
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                    <h1 className="neo-title text-2xl font-semibold text-gray-900 break-words">
                      {product.name}
                    </h1>
                    <span
                      className={`inline-block px-3 py-1 rounded-full text-sm font-semibold capitalize border ${
                        product.status === "active"
                          ? "border-green-300/60 bg-green-100 text-green-700"
                          : "border-red-300/60 bg-red-100 text-red-700"
                      }`}
                    >
                      {product.status}
                    </span>
                  </div>

                  {/* Description */}
                  {product.description && (
                    <p className="rounded-xl border border-black/10 bg-white/65 p-3 text-sm leading-relaxed text-gray-600">
                      {product.description}
                    </p>
                  )}

                  {/* Product Meta Info */}
                  <div className="rounded-xl border border-black/10 bg-white/65 p-4">
                    <h2 className="mb-2 text-xs font-semibold uppercase tracking-[0.1em] text-gray-500">
                      Product Details
                    </h2>
                    <dl className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-3 text-sm text-gray-800">
                      <div>
                        <dt className="font-medium text-gray-500">Type</dt>
                        <dd>{product.product_type}</dd>
                      </div>
                      <div>
                        <dt className="font-medium text-gray-500">Price</dt>
                        <dd>
                          ₱{parseFloat(product.price.toString()).toFixed(2)}
                        </dd>
                      </div>
                    </dl>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>,
    document.body,
  );
};

export default SingleProductModal;
