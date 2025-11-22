"use client";

import { motion, AnimatePresence } from "framer-motion";
import dynamic from "next/dynamic";
import Image from "next/image";
import { useState } from "react";
import { toast } from "sonner";
import Spinner from "@/components/Spinner";

const ProductForm = dynamic(() => import("./forms/ProductForm"), {
  loading: () => (
    <div className="flex justify-center items-center p-8">
      <div className="flex flex-col items-center gap-3">
        <Spinner size={32} color="lamaSky" />
        <span className="text-sm text-gray-500">Loading form...</span>
      </div>
    </div>
  ),
});

const OrderForm = dynamic(() => import("./forms/OrderForm"), {
  loading: () => (
    <div className="flex justify-center items-center p-8">
      <div className="flex flex-col items-center gap-3">
        <Spinner size={32} color="lamaSky" />
        <span className="text-sm text-gray-500">Loading form...</span>
      </div>
    </div>
  ),
});

const UserForm = dynamic(() => import("./forms/UserForm"), {
  loading: () => (
    <div className="flex justify-center items-center p-8">
      <div className="flex flex-col items-center gap-3">
        <Spinner size={32} color="lamaSky" />
        <span className="text-sm text-gray-500">Loading form...</span>
      </div>
    </div>
  ),
});

const ExpenseForm = dynamic(() => import("./forms/ExpenseForm"), {
  loading: () => (
    <div className="flex justify-center items-center p-8">
      <div className="flex flex-col items-center gap-3">
        <Spinner size={32} color="lamaSky" />
        <span className="text-sm text-gray-500">Loading form...</span>
      </div>
    </div>
  ),
});

const CompanyForm = dynamic(() => import("./forms/CompanyForm"), {
  loading: () => (
    <div className="flex justify-center items-center p-8">
      <div className="flex flex-col items-center gap-3">
        <Spinner size={32} color="lamaSky" />
        <span className="text-sm text-gray-500">Loading form...</span>
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
        toast.error(result.message || "❌ Failed to delete.");
      }
    } catch (error) {
      toast.error("❌ Server error while deleting.");
    } finally {
      setIsDeleting(false);
    }
  };

  const Form = () => {
    if (type === "delete" && id) {
      return (
        <div className="p-4 flex flex-col gap-4">
          <h2 className="text-center font-semibold text-lg">
            Confirm Deletion
          </h2>
          <p className="text-center text-sm text-gray-600">
            Are you sure you want to delete this {table}?
          </p>
          <div className="flex justify-center gap-4 mt-4">
            <button
              className="bg-gray-300 hover:bg-gray-400 text-black px-4 py-2 rounded"
              onClick={handleClose}
              disabled={isDeleting}
            >
              Cancel
            </button>
            <button
              className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded"
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

  const size = type === "create" ? "w-8 h-8" : "w-7 h-7";
  const bgColor =
    type === "create"
      ? "bg-lamaYellow"
      : type === "update"
      ? "bg-lamaSky"
      : "bg-lamaPurple";

  return (
    <>
      <button
        className={`${size} flex items-center justify-center rounded-full ${bgColor}`}
        onClick={() => setOpen(true)}
      >
        <Image src={`/${type}.png`} alt={type} width={16} height={16} />
      </button>
      {open && (
        <AnimatePresence>
          <motion.div
            className="w-screen h-screen fixed left-0 top-0 z-50 flex items-center justify-center backdrop-blur-sm bg-black/30"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <motion.div
              className="bg-white p-4 rounded-md relative w-[90%] md:w-[70%] lg:w-[60%] xl:w-[50%] 2xl:w-[40%]"
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <Form />
              <motion.div
                className="absolute top-4 right-4 cursor-pointer"
                onClick={handleClose}
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
              >
                <Image src="/close.png" alt="close" width={14} height={14} />
              </motion.div>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      )}
    </>
  );
};

export default FormModal;
