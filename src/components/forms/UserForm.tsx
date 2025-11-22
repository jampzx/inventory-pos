"use client";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
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

const UserForm = ({ type, data, onClose, onSuccess }: Props) => {
  const [companies, setCompanies] = useState<
    { label: string; value: string }[]
  >([]);
  const [companyLoading, setCompanyLoading] = useState(true);

  useEffect(() => {
    const fetchCompanies = async () => {
      setCompanyLoading(true);
      try {
        const res = await fetch("/api/company/listing");
        const result = await res.json();
        if (result.success && Array.isArray(result.data)) {
          setCompanies(
            result.data.map((c: any) => ({
              label: c.company_name,
              value: c.company_id.toString(),
            }))
          );
        }
      } catch (e) {
        setCompanies([]);
      } finally {
        setCompanyLoading(false);
      }
    };
    fetchCompanies();
  }, []);
  const schema = z
    .object({
      full_name: z.string().min(1, "Full name is required"),
      username:
        type === "create"
          ? z.string().min(1, "Username is required")
          : z.string().optional(),
      password:
        type === "create"
          ? z.string().min(6, "Password must be at least 6 characters")
          : z
              .string()
              .optional()
              .refine((val) => !val || val.length >= 6, {
                message: "Password must be at least 6 characters",
              }),
      confirm_password: z.string().optional(),
      user_type: z.enum(["admin", "user"]),
      status: z.enum(["active", "inactive"]),
      company_id: z.string().min(1, "Company is required"),
    })
    .refine(
      (data) =>
        !data.password ||
        !data.confirm_password ||
        data.password === data.confirm_password,
      {
        path: ["confirm_password"],
        message: "Passwords do not match",
      }
    );

  const {
    control,
    handleSubmit,
    register,
    reset,
    formState: { errors },
    setValue,
  } = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
  });

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (type === "update" && data && !companyLoading && companies.length > 0) {
      reset({
        full_name: data.name,
        username: data.email?.split("@")[0] || data.username,
        user_type: data.user_type,
        status: data.status,
        company_id: data.company?.company_id?.toString() || "",
      });
    }
  }, [type, data, reset, companyLoading, companies]);

  const onSubmit = handleSubmit(async (formData) => {
    setIsLoading(true);

    try {
      const { confirm_password, ...rest } = formData;

      const payload: any = {
        ...rest,
      };

      if (!payload.password) {
        delete payload.password;
      }

      const url =
        type === "create" ? "/api/user/create" : `/api/user/update/${data.id}`;

      const res = await fetch(url, {
        method: type === "create" ? "POST" : "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result = await res.json();
      if (result.success) {
        toast.success(`User ${type}d successfully!`);
        onClose?.();
        onSuccess?.();
      }
      if (!result.success) {
        if (result.errors) {
          const field = Object.keys(result.errors)[0];
          const message = result.errors[field][0];
          toast.error(
            `${field.charAt(0).toUpperCase() + field.slice(1)}: ${message}`
          );
        } else {
          toast.error(result.message || `❌ Failed to ${type} user.`);
        }
        return;
      }
    } catch (error) {
      console.error("Submit failed", error);
      toast.error("❌ Server error occurred.");
    } finally {
      setIsLoading(false);
    }
  });

  return (
    <form className="flex flex-col gap-6" onSubmit={onSubmit}>
      <h1 className="text-lg md:text-xl font-semibold">
        {type === "create" ? "Create New User" : "Update User"}
      </h1>

      <div className="flex flex-wrap gap-4">
        <DropdownField
          label="Company"
          name="company_id"
          register={register}
          error={errors.company_id}
          options={companies}
          selectProps={{
            disabled: companyLoading || companies.length === 0,
          }}
        />
        <InputField
          label="Full Name"
          name="full_name"
          register={register}
          error={errors.full_name}
        />
        <InputField
          label="Username"
          name="username"
          register={register}
          error={errors.username}
        />
        <InputField
          label="Password"
          name="password"
          type="password"
          register={register}
          error={errors.password}
        />
        <InputField
          label="Confirm Password"
          name="confirm_password"
          type="password"
          register={register}
          error={errors.confirm_password}
        />
        <DropdownField
          label="User Type"
          name="user_type"
          register={register}
          error={errors.user_type}
          options={[
            { label: "Admin", value: "admin" },
            { label: "User", value: "user" },
          ]}
        />
        <DropdownField
          label="Status"
          name="status"
          register={register}
          error={errors.status}
          options={[
            { label: "Active", value: "active" },
            { label: "Inactive", value: "inactive" },
          ]}
        />
      </div>

      <div className="flex justify-end">
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 transition text-white px-6 py-2 rounded-md mt-4 w-full sm:w-auto flex items-center justify-center gap-2"
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

export default UserForm;
