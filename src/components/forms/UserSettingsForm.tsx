"use client";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import InputField from "../InputField";
import { toast } from "sonner";
import Spinner from "@/components/Spinner";
import {
  FiBriefcase,
  FiCalendar,
  FiCheckCircle,
  FiInfo,
  FiSave,
  FiShield,
  FiUser,
} from "react-icons/fi";

type Props = {
  onSuccess?: () => void;
};

type ProfileData = {
  full_name: string;
  username: string;
  user_type: string;
  status: string;
  company?: {
    company_name?: string;
    subscription_start?: string | null;
    subscription_end?: string | null;
  };
};

type UpdatePayload = {
  full_name: string;
  username: string;
  current_password?: string;
  new_password?: string;
  confirm_password?: string;
};

const UserSettingsForm = ({ onSuccess }: Props) => {
  const [userProfile, setUserProfile] = useState<ProfileData | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingProfile, setIsLoadingProfile] = useState(true);

  const schema = z
    .object({
      full_name: z.string().min(1, "Full name is required"),
      username: z.string().min(1, "Username is required"),
      current_password: z.string().optional(),
      new_password: z
        .string()
        .optional()
        .refine((val) => !val || val.length >= 6, {
          message: "Password must be at least 6 characters",
        }),
      confirm_password: z.string().optional(),
    })
    .refine(
      (data) => {
        // If new_password is provided, current_password must also be provided
        if (data.new_password && !data.current_password) {
          return false;
        }
        return true;
      },
      {
        path: ["current_password"],
        message: "Current password is required when setting a new password",
      },
    )
    .refine(
      (data) => {
        // If new_password is provided, confirm_password must match
        if (data.new_password && data.new_password !== data.confirm_password) {
          return false;
        }
        return true;
      },
      {
        path: ["confirm_password"],
        message: "Passwords do not match",
      },
    );

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
    watch,
  } = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
  });

  // Watch for new_password to show/hide password fields
  const newPassword = watch("new_password");

  // Fetch current user profile
  useEffect(() => {
    const fetchProfile = async () => {
      setIsLoadingProfile(true);
      try {
        const res = await fetch("/api/me/profile");
        const result = await res.json();
        if (result.success) {
          setUserProfile(result.data);
          reset({
            full_name: result.data.full_name,
            username: result.data.username,
            current_password: "",
            new_password: "",
            confirm_password: "",
          });
        } else {
          toast.error("Failed to load profile");
        }
      } catch {
        toast.error("Error loading profile");
      } finally {
        setIsLoadingProfile(false);
      }
    };
    fetchProfile();
  }, [reset]);

  const onSubmit = handleSubmit(async (formData) => {
    setIsLoading(true);

    try {
      const payload: UpdatePayload = {
        full_name: formData.full_name,
        username: formData.username,
      };

      // Only include password fields if new password is provided
      if (formData.new_password) {
        payload.current_password = formData.current_password;
        payload.new_password = formData.new_password;
        payload.confirm_password = formData.confirm_password;
      }

      const res = await fetch("/api/me/profile", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result = await res.json();
      if (result.success) {
        toast.success("Profile updated successfully!");
        setUserProfile(result.data);
        // Clear password fields after successful update
        reset({
          full_name: result.data.full_name,
          username: result.data.username,
          current_password: "",
          new_password: "",
          confirm_password: "",
        });
        onSuccess?.();
      } else {
        if (result.errors) {
          const field = Object.keys(result.errors)[0];
          const message = result.errors[field][0];
          toast.error(
            `${field.charAt(0).toUpperCase() + field.slice(1)}: ${message}`,
          );
        } else {
          toast.error(result.message || "Failed to update profile");
        }
      }
    } catch (error) {
      console.error("Submit failed", error);
      toast.error("Server error occurred");
    } finally {
      setIsLoading(false);
    }
  });

  if (isLoadingProfile) {
    return (
      <div className="neo-panel-strong border border-black/10 flex justify-center items-center py-16 px-4">
        <div className="flex flex-col items-center gap-4">
          <Spinner size={40} color="lamaSky" />
          <p className="text-gray-600 text-sm font-medium">
            Loading profile...
          </p>
        </div>
      </div>
    );
  }

  return (
    <form
      className="neo-panel-strong overflow-hidden border border-black/10"
      onSubmit={onSubmit}
    >
      <div className="border-b border-black/10 bg-[linear-gradient(135deg,rgba(15,159,157,0.2),rgba(245,121,47,0.2))] px-6 py-5">
        <p className="neo-subtitle text-gray-700">Account Preferences</p>
        <h1 className="neo-title mt-1 text-2xl font-semibold text-gray-900">
          Profile Settings
        </h1>
        <p className="mt-2 text-sm text-gray-700">
          Update your personal details and security information.
        </p>
      </div>

      <div className="p-4 sm:p-6 md:p-7">
        <div className="grid gap-5 lg:grid-cols-2">
          <section className="neo-panel h-full border border-black/10 p-5">
            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-lamaSky/30 bg-lamaSky/15 text-[#0f9f9d]">
                <FiShield size={18} />
              </div>
              <div>
                <h2 className="neo-title text-lg font-semibold text-gray-800">
                  Basic Information
                </h2>
                <p className="text-xs uppercase tracking-[0.1em] text-gray-500">
                  Identity And Credentials
                </p>
              </div>
            </div>

            <div className="space-y-4">
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
                label="Current Password"
                name="current_password"
                type="password"
                register={register}
                error={errors.current_password}
                inputProps={{
                  placeholder: "Required only when changing password",
                }}
              />
              <InputField
                label="New Password"
                name="new_password"
                type="password"
                register={register}
                error={errors.new_password}
                inputProps={{ placeholder: "Minimum 6 characters" }}
              />
              {newPassword && (
                <InputField
                  label="Confirm New Password"
                  name="confirm_password"
                  type="password"
                  register={register}
                  error={errors.confirm_password}
                  inputProps={{ placeholder: "Repeat your new password" }}
                />
              )}
            </div>
          </section>

          {userProfile && (
            <section className="neo-panel h-full border border-black/10 p-5">
              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-black/10 bg-white/80 text-gray-700">
                  <FiInfo size={18} />
                </div>
                <div>
                  <h2 className="neo-title text-lg font-semibold text-gray-800">
                    Current Account Details
                  </h2>
                  <p className="text-xs uppercase tracking-[0.1em] text-gray-500">
                    Snapshot
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                <div className="rounded-xl border border-black/10 bg-white/70 p-3.5 text-sm">
                  <p className="mb-1 text-[11px] font-semibold uppercase tracking-[0.1em] text-gray-500">
                    Company
                  </p>
                  <div className="flex items-center gap-2 text-gray-800">
                    <FiBriefcase size={14} className="text-gray-500" />
                    <span>{userProfile.company?.company_name || "N/A"}</span>
                  </div>
                </div>

                <div className="rounded-xl border border-black/10 bg-white/70 p-3.5 text-sm">
                  <p className="mb-1 text-[11px] font-semibold uppercase tracking-[0.1em] text-gray-500">
                    User Type
                  </p>
                  <div className="flex items-center gap-2 text-gray-800">
                    <FiUser size={14} className="text-gray-500" />
                    <span className="inline-flex rounded-full border border-lamaSky/30 bg-lamaSky/15 px-2.5 py-0.5 text-xs font-semibold capitalize text-[#0f9f9d]">
                      {userProfile.user_type}
                    </span>
                  </div>
                </div>

                <div className="rounded-xl border border-black/10 bg-white/70 p-3.5 text-sm">
                  <p className="mb-1 text-[11px] font-semibold uppercase tracking-[0.1em] text-gray-500">
                    Status
                  </p>
                  <div className="flex items-center gap-2 text-gray-800">
                    <FiCheckCircle size={14} className="text-gray-500" />
                    <span
                      className={`inline-flex rounded-full border px-2.5 py-0.5 text-xs font-semibold capitalize ${
                        userProfile.status === "active"
                          ? "border-emerald-300/60 bg-emerald-100 text-emerald-700"
                          : "border-gray-300/70 bg-gray-100 text-gray-700"
                      }`}
                    >
                      {userProfile.status}
                    </span>
                  </div>
                </div>

                {userProfile.company?.subscription_start && (
                  <div className="rounded-xl border border-black/10 bg-white/70 p-3.5 text-sm">
                    <p className="mb-1 text-[11px] font-semibold uppercase tracking-[0.1em] text-gray-500">
                      Subscription Start
                    </p>
                    <div className="flex items-center gap-2 text-gray-800">
                      <FiCalendar size={14} className="text-gray-500" />
                      <span>
                        {new Date(
                          userProfile.company.subscription_start,
                        ).toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                )}

                {userProfile.company?.subscription_end && (
                  <div className="rounded-xl border border-black/10 bg-white/70 p-3.5 text-sm">
                    <p className="mb-1 text-[11px] font-semibold uppercase tracking-[0.1em] text-gray-500">
                      Subscription End
                    </p>
                    <div className="flex items-center gap-2 text-gray-800">
                      <FiCalendar size={14} className="text-gray-500" />
                      <span>
                        {new Date(
                          userProfile.company.subscription_end,
                        ).toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                )}
              </div>
            </section>
          )}
        </div>

        <div className="mt-6 flex justify-end border-t border-black/10 pt-5">
          <button
            type="submit"
            className="neo-btn flex items-center gap-2 px-5 py-2.5 text-sm disabled:cursor-not-allowed disabled:opacity-50"
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <Spinner size={14} color="white" />
                <span>Updating Profile...</span>
              </>
            ) : (
              <>
                <FiSave size={14} />
                <span>Update Profile</span>
              </>
            )}
          </button>
        </div>
      </div>
    </form>
  );
};

export default UserSettingsForm;
