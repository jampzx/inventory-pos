"use client";

import { motion, AnimatePresence } from "framer-motion";
import { createPortal } from "react-dom";
import { FiX } from "react-icons/fi";
import { TransactionType } from "@/types/types";
import React from "react";

type Props = {
  transaction: TransactionType | null;
  onClose: () => void;
};

const TransactionDetailModal: React.FC<Props> = ({ transaction, onClose }) => {
  if (!transaction) return null;

  const itemsByStaff: Record<string, TransactionType["items"]> = {};

  for (const item of transaction.items) {
    const key = item.staff?.staff_name || "Unassigned";
    if (!itemsByStaff[key]) {
      itemsByStaff[key] = [];
    }
    itemsByStaff[key].push(item);
  }

  return createPortal(
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/45 px-4 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        <motion.div
          className="neo-panel-strong relative max-h-[90vh] w-full max-w-2xl overflow-y-auto border border-black/10 p-6"
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <motion.button
            className="absolute right-3 top-3 rounded-lg border border-black/10 bg-white/80 p-1.5 text-gray-500 hover:text-red-500"
            onClick={onClose}
            whileHover={{ scale: 1.1, rotate: 90 }}
            whileTap={{ scale: 0.9 }}
          >
            <FiX size={14} />
          </motion.button>

          <p className="neo-subtitle">Transaction Breakdown</p>
          <motion.h2
            className="neo-title mb-4 text-2xl font-semibold"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            Transaction #{transaction.id}
          </motion.h2>

          <motion.div
            className="space-y-2 rounded-xl border border-black/10 bg-white/70 p-4 text-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.2, staggerChildren: 0.05 }}
          >
            <div>
              <strong>Branch:</strong> {transaction.branch?.name}
            </div>

            <div>
              <strong>Subtotal:</strong> ₱
              {Number(transaction.subtotal).toFixed(2)}
            </div>

            <div>
              <strong>Discount:</strong> ₱
              {Number(transaction.discount_value).toFixed(2)}
            </div>

            <div>
              <strong>Discount Type:</strong> {transaction.discount_type}
            </div>

            <div>
              <strong>Total Paid:</strong> ₱
              {Number(transaction.total_paid).toFixed(2)}
            </div>
            <div>
              <strong>Change:</strong> ₱{Number(transaction.change).toFixed(2)}
            </div>
            <div>
              <strong>Date:</strong>
              {new Date(transaction.created_at).toLocaleString()}
            </div>

            <div>
              <strong>Payments:</strong> ₱
              {Number(transaction.change).toFixed(2)}
              <ul className="list-disc list-inside mt-1 space-y-1">
                {transaction.payments.map((p, i) => (
                  <li key={i}>
                    {p.payment_method}: ₱{Number(p.amount).toFixed(2)}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <strong>Items by Staff:</strong>
              <div className="space-y-4 mt-2">
                {Object.entries(itemsByStaff).map(([staffName, items], i) => (
                  <div
                    key={i}
                    className="rounded-lg border border-black/10 bg-white/80 p-3"
                  >
                    <div className="mb-1 font-semibold text-gray-700">
                      {staffName}
                    </div>
                    <ul className="list-disc list-inside ml-4 space-y-1">
                      {items.map((item, j) => {
                        const price = Number(item.price);
                        const total = price * item.quantity;
                        return (
                          <li key={j}>
                            {item.product.name} – Qty: {item.quantity} – ₱
                            {price.toFixed(2)} each ={" "}
                            <strong>₱{total.toFixed(2)}</strong>
                            {item.bundledWith && (
                              <span className="ml-2 text-xs text-gray-500">
                                (bundled with {item.bundledWith.product.name})
                              </span>
                            )}
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </AnimatePresence>,
    document.body,
  );
};

export default TransactionDetailModal;
