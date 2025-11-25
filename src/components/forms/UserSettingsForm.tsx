"use client";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import InputField from "../InputField";
import { toast } from "sonner";
import Spinner from "@/components/Spinner";

type Props = {
  onSuccess?: () => void;
};

const UserSettingsForm = ({ onSuccess }: Props) => {
  const [userProfile, setUserProfile] = useState<any>(null);
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
      }
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
      }
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
      } catch (error) {
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
      const payload: any = {
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
            `${field.charAt(0).toUpperCase() + field.slice(1)}: ${message}`
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
      <div className="flex justify-center items-center py-16">
        <div className="flex flex-col items-center gap-4">
          <Spinner size={40} color="lamaSky" />
          <p className="text-gray-600 text-sm">Loading profile...</p>
        </div>
      </div>
    );
  }

  return (
    <div>
      <form
        className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden"
        onSubmit={onSubmit}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-purple-500 to-purple-600 px-8 py-6">
          <h1 className="text-2xl font-bold text-white flex items-center gap-3">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
            Profile Settings
          </h1>
          <p className="text-blue-100 mt-1">
            Update your personal information and security settings
          </p>
        </div>

        <div className="p-8">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Left Column - Form Sections */}
            <div className="space-y-8 h-full flex flex-col">
              {/* Basic Information Section */}
              <div className="space-y-6 h-full flex flex-col">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-blue-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h2 className="text-lg font-semibold text-gray-800">
                      Basic Information
                    </h2>
                    <p className="text-sm text-gray-600">
                      Update your personal details
                    </p>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6 h-full flex flex-col">
                  <div className="space-y-6">
                    {" "}
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
                        placeholder: "Enter current password to change",
                      }}
                    />
                    <InputField
                      label="New Password"
                      name="new_password"
                      type="password"
                      register={register}
                      error={errors.new_password}
                      inputProps={{
                        placeholder: "Enter new password (min. 6 characters)",
                      }}
                    />
                    {newPassword && (
                      <InputField
                        label="Confirm New Password"
                        name="confirm_password"
                        type="password"
                        register={register}
                        error={errors.confirm_password}
                        inputProps={{ placeholder: "Confirm new password" }}
                      />
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Current Information */}
            {userProfile && (
              <div className="space-y-6 h-full flex flex-col">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-green-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                      />
                    </svg>
                  </div>
                  <div>
                    <h2 className="text-lg font-semibold text-gray-800">
                      Account Information
                    </h2>
                    <p className="text-sm text-gray-600">
                      Your current account details
                    </p>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6 h-full flex flex-col">
                  <div className="space-y-6">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                        <svg
                          className="w-4 h-4 text-blue-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                          />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-700">
                          Company
                        </p>
                        <p className="text-sm text-gray-900">
                          {userProfile.company?.company_name || "N/A"}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                        <svg
                          className="w-4 h-4 text-purple-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                          />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-700">
                          User Type
                        </p>
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                          {userProfile.user_type}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                        <svg
                          className="w-4 h-4 text-green-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-700">
                          Status
                        </p>
                        <span
                          className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                            userProfile.status === "active"
                              ? "bg-green-100 text-green-800"
                              : "bg-gray-100 text-gray-800"
                          }`}
                        >
                          {userProfile.status}
                        </span>
                      </div>
                    </div>

                    {userProfile.company?.subscription_start && (
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-indigo-100 rounded-lg flex items-center justify-center">
                          <svg
                            className="w-4 h-4 text-indigo-600"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                            />
                          </svg>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-700">
                            Subscription Start
                          </p>
                          <p className="text-sm text-gray-900">
                            {new Date(
                              userProfile.company.subscription_start
                            ).toLocaleDateString()}
                          </p>
                        </div>
                      </div>
                    )}

                    {userProfile.company?.subscription_end && (
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center">
                          <svg
                            className="w-4 h-4 text-red-600"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                            />
                          </svg>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-700">
                            Subscription End
                          </p>
                          <p className="text-sm text-gray-900">
                            {new Date(
                              userProfile.company.subscription_end
                            ).toLocaleDateString()}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Action Button */}
          <div className="  pt-8">
            <div className="flex justify-end">
              <button
                type="submit"
                className="group relative bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-700 hover:to-purple-800 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-200 transform hover:scale-105 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:shadow-none flex items-center gap-2"
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <Spinner size={16} color="lamaYellow" />
                    Updating Profile...
                  </>
                ) : (
                  <>
                    <svg
                      className="w-4 h-4 group-hover:rotate-12 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Update Profile
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default UserSettingsForm;
