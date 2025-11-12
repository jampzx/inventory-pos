"use client";

import { useState } from "react";
import { toast } from "sonner";

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
      const res = await fetch("/api/stock-in", {
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

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm z-50 flex items-center justify-center">
      <div className="bg-white rounded-lg p-6 w-full max-w-md relative">
        <h2 className="text-lg font-semibold mb-4">
          Stock In: {order.product}
        </h2>

        <p className="text-sm mb-3 text-gray-500">
          Available quantity to stock in:{" "}
          <strong>{order.remaining_quantity}</strong>
        </p>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Quantity to Stock In
          </label>
          <input
            type="number"
            min={0}
            max={order.remaining_quantity}
            value={quantity}
            onChange={(e) => setQuantity(parseInt(e.target.value) || 0)}
            className="border px-3 py-2 w-full rounded text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter quantity"
          />
          {quantity > order.remaining_quantity && (
            <p className="text-sm text-red-500 mt-1">
              Exceeds available quantity!
            </p>
          )}
        </div>

        <div className="flex justify-end gap-3 mt-6">
          <button
            onClick={onClose}
            className="px-4 py-2 text-sm border rounded text-gray-600 hover:bg-gray-100"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            disabled={
              isSubmitting ||
              quantity <= 0 ||
              quantity > order.remaining_quantity
            }
            className="px-4 py-2 text-sm bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? "Processing..." : "Confirm Stock In"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default StockInModal;
