"use client";

import { useEffect, ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { createPortal } from "react-dom";

type Props = {
  isOpen: boolean;
  title?: string;
  message?: string;
  onConfirm: () => void;
  onCancel: () => void;
  confirmLabel?: string;
  cancelLabel?: string;
  confirmColor?: string;
  children?: ReactNode;
};

const ConfirmationModal = ({
  isOpen,
  title = "Are you sure?",
  message,
  onConfirm,
  onCancel,
  confirmLabel = "Confirm",
  cancelLabel = "Cancel",
  confirmColor = "bg-red-600 hover:bg-red-700",
  children,
}: Props) => {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onCancel();
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [onCancel]);

  if (!isOpen) return null;

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/35 px-4 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onCancel}
        >
          <motion.div
            className="neo-panel-strong w-full max-w-md border border-black/10 p-6"
            initial={{ opacity: 0, y: 18, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 18, scale: 0.96 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            onClick={(event) => event.stopPropagation()}
          >
            <p className="neo-subtitle">Confirmation Required</p>
            <h2 className="neo-title mt-1 text-xl font-semibold text-gray-800">
              {title}
            </h2>

            {message && <p className="mt-2 text-sm text-gray-600">{message}</p>}

            {children && <div className="mt-3">{children}</div>}

            <div className="mt-5 flex justify-end gap-2.5">
              <button
                onClick={onCancel}
                className="neo-btn-ghost px-4 py-2 text-sm"
              >
                {cancelLabel}
              </button>
              <button
                onClick={onConfirm}
                className={`px-4 py-2 text-sm text-white rounded-xl font-semibold shadow-sm ${confirmColor}`}
              >
                {confirmLabel}
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body,
  );
};

export default ConfirmationModal;
