"use client";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import InputField from "@/components/InputField";
import { toast } from "sonner";
import Spinner from "@/components/Spinner";

type Props = {
  type: "create" | "update";
  data?: {
    id: number;
    description: string;
    amount: number;
    date: string;
  };
  onClose?: () => void;
  onSuccess?: () => void;
};

const schema = z.object({
  description: z.string().min(1, "Description is required"),
  amount: z
    .string()
    .min(1, "Amount is required")
    .refine((val) => !isNaN(Number(val)), {
      message: "Amount must be a number",
    })
    .transform((val) => Number(val))
    .refine((val) => val > 0, {
      message: "Amount must be greater than 0",
    }),

  date: z.string().optional(),
});

const ExpenseForm = ({ type, data, onClose, onSuccess }: Props) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<z.input<typeof schema>>({
    resolver: zodResolver(schema),
  });

  const [isLoading, setIsLoading] = useState(false);
  const [categories, setCategories] = useState<{ id: number; name: string }[]>(
    []
  );

  useEffect(() => {
    if (type === "update" && data) {
      reset({
        description: data.description,
        amount: data.amount.toString(),
        date: data.date.split("T")[0],
      });
    }
  }, [type, data, reset]);

  const onSubmit = handleSubmit(async (formData) => {
    setIsLoading(true);
    try {
      const url =
        type === "create"
          ? "/api/expense/create"
          : `/api/expense/update/${data?.id}`;

      const res = await fetch(url, {
        method: type === "create" ? "POST" : "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await res.json();

      if (result.success) {
        toast.success(
          `Expense ${type === "create" ? "created" : "updated"} successfully`
        );
        onClose?.();
        onSuccess?.();
      } else {
        toast.error(result.message || "Something went wrong.");
      }
    } catch (err) {
      console.error(err);
      toast.error("Server error occurred.");
    } finally {
      setIsLoading(false);
    }
  });

  return (
    <form className="flex flex-col gap-4 sm:gap-6" onSubmit={onSubmit}>
      <h1 className="text-base sm:text-lg font-semibold">
        {type === "create" ? "Create Expense" : "Update Expense"}
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
        <InputField
          label="Description"
          name="description"
          register={register}
          error={errors.description}
        />
        <InputField
          label="Amount"
          name="amount"
          type="number"
          register={register}
          error={errors.amount}
        />
        <InputField
          label="Date"
          name="date"
          type="date"
          register={register}
          error={errors.date}
        />
      </div>

      <div className="flex justify-end pt-2">
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 sm:px-6 py-2 rounded-md w-full sm:w-auto flex items-center justify-center gap-2 text-sm"
          disabled={isLoading}
        >
          {isLoading ? (
            <>
              <Spinner size={16} color="lamaYellow" />
              <span>Saving...</span>
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

export default ExpenseForm;
