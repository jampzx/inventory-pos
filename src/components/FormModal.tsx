"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import { useState } from "react";
import { toast } from "sonner";

const ProductForm = dynamic(() => import("./forms/ProductForm"), {
  loading: () => <h1>Loading...</h1>,
});

const OrderForm = dynamic(() => import("./forms/OrderForm"), {
  loading: () => <h1>Loading...</h1>,
});

const forms: Record<string, any> = {
  product: (type: string, data: any, props: any) => (
    <ProductForm type={type} data={data} {...props} />
  ),
  order: (type: string, data: any, props: any) => (
    <OrderForm type={type} data={data} {...props} />
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
        <div className="w-screen h-screen fixed left-0 top-0 z-50 flex items-center justify-center backdrop-blur-sm bg-black/30">
          <div className="bg-white p-4 rounded-md relative w-[90%] md:w-[70%] lg:w-[60%] xl:w-[50%] 2xl:w-[40%]">
            <Form />
            <div
              className="absolute top-4 right-4 cursor-pointer"
              onClick={handleClose}
            >
              <Image src="/close.png" alt="close" width={14} height={14} />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FormModal;
