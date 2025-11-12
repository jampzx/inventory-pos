"use client";

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

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-4">
      <div className="bg-white max-w-2xl w-full rounded-lg p-6 relative shadow-lg overflow-y-auto max-h-[90vh]">
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-red-500"
          onClick={onClose}
        >
          ✕
        </button>

        <h2 className="text-lg font-semibold mb-4">
          Transaction #{transaction.id}
        </h2>

        <div className="text-sm space-y-2">
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
            <strong>Payments:</strong> ₱{Number(transaction.change).toFixed(2)}
            <ul className="list-disc list-inside">
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
                <div key={i}>
                  <div className="font-semibold mb-1">{staffName}</div>
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
                            <span className="text-xs text-gray-500 ml-2">
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
        </div>
      </div>
    </div>
  );
};

export default TransactionDetailModal;
