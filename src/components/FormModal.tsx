"use client";

import { motion, AnimatePresence } from "framer-motion";
import dynamic from "next/dynamic";
import { useState } from "react";
import { createPortal } from "react-dom";
import { FiEdit2, FiPlus, FiTrash2, FiX } from "react-icons/fi";
import { toast } from "sonner";
import Spinner from "@/components/Spinner";

const ProductForm = dynamic(() => import("./forms/ProductForm"), {
  loading: () => (
    <div className="flex items-center justify-center p-8">
      <div className="flex flex-col items-center gap-3">
        <Spinner size={32} color="lamaSky" />
        <span className="text-sm font-medium text-gray-500">
          Loading form...
        </span>
      </div>
    </div>
  ),
});

const OrderForm = dynamic(() => import("./forms/OrderForm"), {
  loading: () => (
    <div className="flex items-center justify-center p-8">
      <div className="flex flex-col items-center gap-3">
        <Spinner size={32} color="lamaSky" />
        <span className="text-sm font-medium text-gray-500">
          Loading form...
        </span>
      </div>
    </div>
  ),
});

const UserForm = dynamic(() => import("./forms/UserForm"), {
  loading: () => (
    <div className="flex items-center justify-center p-8">
      <div className="flex flex-col items-center gap-3">
        <Spinner size={32} color="lamaSky" />
        <span className="text-sm font-medium text-gray-500">
          Loading form...
        </span>
      </div>
    </div>
  ),
});

const ExpenseForm = dynamic(() => import("./forms/ExpenseForm"), {
  loading: () => (
    <div className="flex items-center justify-center p-8">
      <div className="flex flex-col items-center gap-3">
        <Spinner size={32} color="lamaSky" />
        <span className="text-sm font-medium text-gray-500">
          Loading form...
        </span>
      </div>
    </div>
  ),
});

const CompanyForm = dynamic(() => import("./forms/CompanyForm"), {
  loading: () => (
    <div className="flex items-center justify-center p-8">
      <div className="flex flex-col items-center gap-3">
        <Spinner size={32} color="lamaSky" />
        <span className="text-sm font-medium text-gray-500">
          Loading form...
        </span>
      </div>
    </div>
  ),
});

const CustomerForm = dynamic(() => import("./forms/CustomerForm"), {
  loading: () => (
    <div className="flex items-center justify-center p-8">
      <div className="flex flex-col items-center gap-3">
        <Spinner size={32} color="lamaSky" />
        <span className="text-sm font-medium text-gray-500">
          Loading form...
        </span>
      </div>
    </div>
  ),
});

const forms: Record<string, any> = {
  product: (type: string, data: any, props: any) => (
    <ProductForm type={type} data={data} {...props} />
  ),
  order: (type: string, data: any, props: any) => (
    <OrderForm type={type} data={data} {...props} />
  ),
  user: (type: string, data: any, props: any) => (
    <UserForm type={type} data={data} {...props} />
  ),
  expense: (type: string, data: any, props: any) => (
    <ExpenseForm type={type} data={data} {...props} />
  ),
  company: (type: string, data: any, props: any) => (
    <CompanyForm type={type} data={data} {...props} />
  ),
  customer: (type: string, data: any, props: any) => (
    <CustomerForm type={type} data={data} {...props} />
  ),
};

const FormModal = ({
  table,
  type,
  data,
  id,
  onSuccess,
}: {
  table: string;
  type: "create" | "update" | "delete";
  data?: any;
  id?: number;
  onSuccess?: () => void;
}) => {
  const [open, setOpen] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  const handleClose = () => setOpen(false);

  const handleDelete = async () => {
    if (!id) return;
    setIsDeleting(true);
    try {
      const res = await fetch(`/api/${table}/delete/${id}`, {
        method: "DELETE",
      });
      const result = await res.json();

      if (result.success) {
        toast.success(`${table} deleted successfully!`);
        onSuccess?.();
        handleClose();
      } else {
        toast.error(result.message || "Failed to delete.");
      }
    } catch (error) {
      toast.error("Server error while deleting.");
    } finally {
      setIsDeleting(false);
    }
  };

  const Form = () => {
    if (type === "delete" && id) {
      return (
        <div className="flex flex-col gap-4 p-4">
          <p className="neo-subtitle text-center">Danger Zone</p>
          <h2 className="neo-title text-center text-2xl font-semibold">
            Confirm Deletion
          </h2>
          <p className="text-center text-sm text-gray-600">
            Are you sure you want to delete this {table}?
          </p>
          <div className="mt-4 flex justify-center gap-4">
            <button
              className="neo-btn-ghost px-4 py-2"
              onClick={handleClose}
              disabled={isDeleting}
            >
              Cancel
            </button>
            <button
              className="neo-btn-danger px-4 py-2"
              onClick={handleDelete}
              disabled={isDeleting}
            >
              {isDeleting ? "Deleting..." : "Delete"}
            </button>
          </div>
        </div>
      );
    }

    if (type === "create" || type === "update") {
      return forms[table]?.(type, data, {
        onClose: handleClose,
        onSuccess,
      });
    }

    return <>Form not found!</>;
  };

  const iconMap = {
    create: <FiPlus size={16} />,
    update: <FiEdit2 size={14} />,
    delete: <FiTrash2 size={14} />,
  };

  const size = type === "create" ? "h-9 w-9" : "h-8 w-8";
  const bgColor =
    type === "create"
      ? "bg-lamaYellow/80 hover:bg-lamaYellow"
      : type === "update"
        ? "bg-lamaSky/20 border-lamaSky/30 text-lamaSky hover:bg-lamaSky/30"
        : "bg-red-100 border-red-200/60 text-red-500 hover:bg-red-200/60";

  return (
    <>
      <button
        title={type.charAt(0).toUpperCase() + type.slice(1)}
        className={`${size} ${bgColor} flex items-center justify-center rounded-lg border border-black/10 shadow-sm transition-all duration-200 hover:-translate-y-0.5`}
        onClick={() => setOpen(true)}
      >
        {iconMap[type]}
      </button>
      {open &&
        createPortal(
          <AnimatePresence>
            <motion.div
              className="fixed left-0 top-0 z-[9999] flex h-screen w-screen items-center justify-center bg-black/35 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <motion.div
                className="neo-panel-strong relative max-h-[95vh] w-[95%] max-w-4xl overflow-y-auto border border-black/10 p-4 sm:p-5 md:p-6"
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <Form />
                <motion.div
                  className="absolute right-4 top-4 cursor-pointer rounded-lg border border-black/10 bg-white/80 p-1.5 text-gray-500 hover:text-gray-800"
                  onClick={handleClose}
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FiX size={14} />
                </motion.div>
              </motion.div>
            </motion.div>
          </AnimatePresence>,
          document.body,
        )}
    </>
  );
};

export default FormModal;
