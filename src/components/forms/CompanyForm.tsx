"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import InputField from "../InputField";
import { z } from "zod";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import Spinner from "@/components/Spinner";

const schema = z.object({
  company_name: z.string().min(1, { message: "Company name is required" }),
  company_email: z.string().email({ message: "Invalid email address" }),
  company_contact_number: z
    .string()
    .min(1, { message: "Contact number is required" }),
  company_address: z.string().min(1, { message: "Address is required" }),
  subscription_start: z.string().optional(),
  subscription_end: z.string().optional(),
});

type Inputs = z.infer<typeof schema>;

const CompanyForm = ({
  type,
  data,
  onSuccess,
}: {
  type: "create" | "update";
  data?: any;
  onSuccess?: () => void;
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
          company_name: data.company_name,
          company_email: data.company_email,
          company_contact_number: data.company_contact_number,
          company_address: data.company_address,
          subscription_start: data.subscription_start
            ? new Date(data.subscription_start).toISOString().split("T")[0]
            : "",
          subscription_end: data.subscription_end
            ? new Date(data.subscription_end).toISOString().split("T")[0]
            : "",
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
        type === "create"
          ? "/api/company/create"
          : `/api/company/update/${data.company_id}`;

      const method = type === "create" ? "POST" : "PUT";

      const payload = {
        ...formData,
        subscription_start: formData.subscription_start || null,
        subscription_end: formData.subscription_end || null,
      };

      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result = await res.json();

      if (result.success) {
        toast.success(
          `Company ${type === "create" ? "created" : "updated"} successfully!`
        );
        setMessage({
          type: "success",
          text: `Company ${
            type === "create" ? "created" : "updated"
          } successfully!`,
        });
        if (type === "create") {
          reset();
        }
        onSuccess?.();
      } else {
        toast.error(result.message || "Something went wrong");
        setMessage({
          type: "error",
          text: result.message || "Something went wrong",
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
        {type === "create" ? "Create a new company" : "Update company"}
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

      {/* Company Fields */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
        <InputField
          label="Company Name"
          name="company_name"
          register={register}
          error={errors.company_name}
        />

        <InputField
          label="Email"
          name="company_email"
          type="email"
          register={register}
          error={errors.company_email}
        />

        <InputField
          label="Contact Number"
          name="company_contact_number"
          register={register}
          error={errors.company_contact_number}
        />

        <InputField
          label="Address"
          name="company_address"
          register={register}
          error={errors.company_address}
        />
      </div>

      {/* Subscription Fields */}
      <div className="border-t pt-3 sm:pt-4 mt-2">
        <h3 className="text-sm font-semibold mb-3 text-gray-700">
          Subscription Period (Optional)
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
          <InputField
            label="Subscription Start"
            name="subscription_start"
            type="date"
            register={register}
            error={errors.subscription_start}
          />

          <InputField
            label="Subscription End"
            name="subscription_end"
            type="date"
            register={register}
            error={errors.subscription_end}
          />
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

export default CompanyForm;
