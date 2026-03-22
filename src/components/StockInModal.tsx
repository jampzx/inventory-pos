"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { createPortal } from "react-dom";
import { toast } from "sonner";
import Spinner from "@/components/Spinner";

type StockInModalProps = {
  order: {
    id: number;
    product: string;
    quantity: number;
    remaining_quantity: number;
  };
  onClose: () => void;
  onSuccess: () => void;
};

const StockInModal = ({ order, onClose, onSuccess }: StockInModalProps) => {
  const [quantity, setQuantity] = useState<number>(0);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async () => {
    if (quantity <= 0) {
      toast.error("Please enter a valid quantity.");
      return;
    }

    if (quantity > order.remaining_quantity) {
      toast.error("Quantity exceeds the available order quantity.");
      return;
    }

    try {
      setIsSubmitting(true);
      const res = await fetch("/api/order/stock-in", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          orderId: order.id,
          quantity,
        }),
      });
      const result = await res.json();
      if (result.success) {
        toast.success("Stock added successfully.");
        onSuccess();
      } else {
        toast.error(result.message || "Failed to add stock.");
      }
    } catch {
      toast.error("Server error during stock operation.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return createPortal(
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/45 backdrop-blur-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      <motion.div
        className="neo-panel-strong relative w-full max-w-md border border-black/10 p-6"
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        <p className="neo-subtitle">Inventory Update</p>
        <motion.h2
          className="neo-title mb-4 text-2xl font-semibold"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          Stock In: {order.product}
        </motion.h2>

        <p className="mb-3 text-sm text-gray-500">
          Available quantity to stock in:{" "}
          <strong className="text-gray-700">{order.remaining_quantity}</strong>
        </p>

        <div className="mb-4 rounded-xl border border-black/10 bg-white/65 p-3">
          <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.1em] text-gray-500">
            Quantity to Stock In
          </label>
          <input
            type="number"
            min={0}
            max={order.remaining_quantity}
            value={quantity}
            onChange={(e) => setQuantity(parseInt(e.target.value) || 0)}
            className="w-full rounded-xl border border-black/15 bg-white/90 px-3 py-2 text-sm"
            placeholder="Enter quantity"
          />
          {quantity > order.remaining_quantity && (
            <p className="mt-1 text-sm font-medium text-red-500">
              Exceeds available quantity!
            </p>
          )}
        </div>

        <motion.div
          className="mt-6 flex justify-end gap-3"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          <motion.button
            onClick={onClose}
            className="neo-btn-ghost px-4 py-2 text-sm"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Cancel
          </motion.button>
          <motion.button
            onClick={handleSubmit}
            disabled={
              isSubmitting ||
              quantity <= 0 ||
              quantity > order.remaining_quantity
            }
            className="neo-btn flex items-center justify-center gap-2 px-4 py-2 text-sm disabled:cursor-not-allowed disabled:opacity-50"
            whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
            whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
          >
            {isSubmitting ? (
              <>
                <Spinner size={14} color="white" />
                <span>Processing...</span>
              </>
            ) : (
              "Confirm Stock In"
            )}
          </motion.button>
        </motion.div>
      </motion.div>
    </motion.div>,
    document.body,
  );
};

export default StockInModal;
