"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import InputField from "../InputField";
import { z } from "zod";
import { useState } from "react";
import { toast } from "sonner";
import Spinner from "@/components/Spinner";

const schema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  phone: z.string().optional(),
  email: z
    .string()
    .email({ message: "Invalid email address" })
    .optional()
    .or(z.literal("")),
  address: z.string().optional(),
  notes: z.string().optional(),
});

type Inputs = z.infer<typeof schema>;

const CustomerForm = ({
  type,
  data,
  onSuccess,
  onClose,
}: {
  type: "create" | "update";
  data?: any;
  onSuccess?: () => void;
  onClose?: () => void;
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<Inputs>({
    resolver: zodResolver(schema),
    defaultValues: data
      ? {
          name: data.name || "",
          phone: data.phone || "",
          email: data.email || "",
          address: data.address || "",
          notes: data.notes || "",
        }
      : undefined,
  });

  const [message, setMessage] = useState<{
    type: "success" | "error";
    text: string;
  } | null>(null);

  const onSubmit = handleSubmit(async (formData) => {
    setMessage(null);

    try {
      const url =
        type === "create" ? "/api/customer/create" : `/api/customer/${data.id}`;

      const method = type === "create" ? "POST" : "PUT";

      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await res.json();

      if (result.success) {
        toast.success(
          `Customer ${type === "create" ? "created" : "updated"} successfully!`
        );
        setMessage({
          type: "success",
          text: `Customer ${
            type === "create" ? "created" : "updated"
          } successfully!`,
        });
        if (type === "create") {
          reset();
        }
        onSuccess?.();
        onClose?.();
      } else {
        toast.error(result.message || result.error || "Something went wrong");
        setMessage({
          type: "error",
          text: result.message || result.error || "Something went wrong",
        });
      }
    } catch (err) {
      console.error("Error submitting form:", err);
      toast.error("Failed to submit form");
      setMessage({ type: "error", text: "Failed to submit form" });
    }
  });

  return (
    <form className="flex flex-col gap-4 sm:gap-6" onSubmit={onSubmit}>
      <h1 className="text-base sm:text-lg md:text-xl font-semibold">
        {type === "create" ? "Create a new customer" : "Update customer"}
      </h1>

      {message && (
        <div
          className={`p-3 rounded-md text-sm ${
            message.type === "success"
              ? "bg-green-100 text-green-700"
              : "bg-red-100 text-red-700"
          }`}
        >
          {message.text}
        </div>
      )}

      {/* Customer Fields */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
        <InputField
          label="Name"
          name="name"
          register={register}
          error={errors.name}
        />

        <InputField
          label="Phone"
          name="phone"
          type="tel"
          register={register}
          error={errors.phone}
        />

        <InputField
          label="Email"
          name="email"
          type="email"
          register={register}
          error={errors.email}
        />

        <InputField
          label="Address"
          name="address"
          register={register}
          error={errors.address}
        />
      </div>

      {/* Notes Field */}
      <div className="border-t pt-3 sm:pt-4 mt-2">
        <h3 className="text-sm font-semibold mb-3 text-gray-700">
          Additional Information (Optional)
        </h3>

        <div className="flex flex-col gap-2">
          <label className="text-xs text-gray-600">Notes</label>
          <textarea
            {...register("notes")}
            className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm resize-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            rows={3}
            placeholder="Add any additional notes about this customer..."
          />
          {errors.notes && (
            <p className="text-xs text-red-600">{errors.notes.message}</p>
          )}
        </div>
      </div>

      <div className="flex justify-end pt-2">
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 transition text-white px-4 sm:px-6 py-2 rounded-md w-full sm:w-auto flex items-center justify-center gap-2 text-sm"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <Spinner size={16} color="lamaYellow" />
              <span>Submitting...</span>
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

export default CustomerForm;
