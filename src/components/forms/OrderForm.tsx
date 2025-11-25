"use client";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import InputField from "../InputField";
import DropdownField from "../DropdownField";
import { toast } from "sonner";
import Spinner from "@/components/Spinner";

type Props = {
  type: "create" | "update";
  data?: any;
  onClose?: () => void;
  onSuccess?: () => void;
};

const orderSchema = z.object({
  product_id: z.coerce.number().min(1, "Product is required"),
  quantity: z.coerce.number().min(1, "Quantity is required"),
  order_price: z.coerce.number().min(1, "Order price is required"),
  selling_price: z.coerce.number().min(1, "Selling price is required"),
  order_date: z.string().min(1, "Order date is required"),
});

const OrderForm = ({ type, data, onClose, onSuccess }: Props) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<z.infer<typeof orderSchema>>({
    resolver: zodResolver(orderSchema),
  });

  const [isLoading, setIsLoading] = useState(false);
  const [productOptions, setProductOptions] = useState<
    { label: string; value: string }[]
  >([]);

  useEffect(() => {
    if (type === "update" && data) {
      reset({
        product_id: data.product_id,
        quantity: data.quantity,
        order_price: data.order_price,
        selling_price: data.selling_price,
        order_date: data.order_date?.split("T")[0],
      });
    }
  }, [type, data, reset]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("/api/product/listing");
        const result = await res.json();

        if (Array.isArray(result.data)) {
          const options = result.data.map(
            (prod: { id: number; name: string }) => ({
              label: prod.name,
              value: prod.id.toString(),
            })
          );
          setProductOptions(options);
        }
      } catch (error) {
        console.error("Failed to load products:", error);
      }
    };

    fetchProducts();
  }, []);

  const onSubmit = handleSubmit(async (formData) => {
    setIsLoading(true);
    try {
      const url =
        type === "create"
          ? "/api/order/create"
          : `/api/order/update/${data.id}`;

      const res = await fetch(url, {
        method: type === "create" ? "POST" : "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await res.json();

      if (!res.ok || result.error) {
        if (result.error?.fieldErrors) {
          const field = Object.keys(result.error.fieldErrors)[0];
          const message = result.error.fieldErrors[field][0];
          toast.error(`${field}: ${message}`);
        } else {
          toast.error(result.error || "Failed to save order.");
        }
      } else {
        toast.success(
          `Order ${type === "create" ? "created" : "updated"} successfully`
        );
        onClose?.();
        onSuccess?.();
      }
    } catch (error) {
      console.error("Error submitting order form:", error);
      toast.error("Server error occurred.");
    } finally {
      setIsLoading(false);
    }
  });

  return (
    <form className="flex flex-col gap-4 sm:gap-6" onSubmit={onSubmit}>
      <h1 className="text-base sm:text-lg md:text-xl font-semibold">
        {type === "create" ? "Create New Order" : "Update Order"}
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
        <DropdownField
          label="Product"
          name="product_id"
          register={register}
          error={errors.product_id}
          options={productOptions}
        />
        <InputField
          label="Quantity"
          name="quantity"
          register={register}
          error={errors.quantity}
          type="number"
        />
        <InputField
          label="Order Price"
          name="order_price"
          register={register}
          error={errors.order_price}
          type="number"
        />
        <InputField
          label="Selling Price"
          name="selling_price"
          register={register}
          error={errors.selling_price}
          type="number"
        />
        <InputField
          label="Order Date"
          name="order_date"
          register={register}
          error={errors.order_date}
          type="date"
        />
      </div>

      <div className="flex justify-end pt-2">
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 transition text-white px-4 sm:px-6 py-2 rounded-md w-full sm:w-auto flex items-center justify-center gap-2 text-sm"
          disabled={isLoading}
        >
          {isLoading ? (
            <>
              <Spinner size={16} color="lamaYellow" />
              <span>Processing...</span>
            </>
          ) : type === "create" ? (
            "Create"
          ) : (
            "Update"
          )}
        </button>
      </div>
    </form>
  );
};

export default OrderForm;
