"use client";

import { useState, useEffect } from "react";
import { Customer } from "@/types/types";
import { FiSearch, FiUserPlus, FiX } from "react-icons/fi";
import Spinner from "@/components/Spinner";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import InputField from "@/components/InputField";

const quickCreateSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  phone: z.string().optional(),
});

type QuickCreateInputs = z.infer<typeof quickCreateSchema>;

interface CustomerSelectorProps {
  selectedCustomer: Customer | null;
  onCustomerSelect: (customer: Customer | null) => void;
  onQuickCreate: (name: string, phone?: string) => void;
}

export default function CustomerSelector({
  selectedCustomer,
  onCustomerSelect,
  onQuickCreate,
}: CustomerSelectorProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showQuickForm, setShowQuickForm] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<QuickCreateInputs>({
    resolver: zodResolver(quickCreateSchema),
  });

  const fetchCustomers = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(
        `/api/customer/listing?search=${encodeURIComponent(searchTerm)}`,
      );
      const result = await response.json();
      if (result.success) {
        setCustomers(result.data);
      }
    } catch (error) {
      console.error("Failed to fetch customers:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      fetchCustomers();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen, searchTerm]);

  const handleQuickCreate = async (data: QuickCreateInputs) => {
    try {
      await onQuickCreate(data.name.trim(), data.phone?.trim() || undefined);
      reset();
      setShowQuickForm(false);
      setIsOpen(false);
    } catch (error) {
      console.error("Error creating customer:", error);
    }
  };

  return (
    <div className="relative">
      {/* Selected Customer Display */}
      <div className="flex items-center gap-2">
        {selectedCustomer ? (
          <div className="flex flex-1 items-center gap-2 rounded-xl border border-lamaSky/30 bg-lamaSky/10 px-3 py-2.5">
            <div className="flex-1">
              <div className="text-sm font-semibold text-gray-800">
                {selectedCustomer.name}
              </div>
              {selectedCustomer.phone && (
                <div className="text-xs text-gray-600">
                  {selectedCustomer.phone}
                </div>
              )}
            </div>
            <button
              onClick={() => onCustomerSelect(null)}
              className="rounded-lg border border-transparent p-1 text-gray-500 hover:border-red-200 hover:bg-red-50 hover:text-red-600"
            >
              <FiX size={18} />
            </button>
          </div>
        ) : (
          <button
            onClick={() => setIsOpen(true)}
            className="neo-btn-ghost flex flex-1 items-center gap-2 rounded-xl px-3 py-2.5 text-left text-sm text-gray-600"
          >
            <FiUserPlus size={16} />
            <span>Add Customer (Optional)</span>
          </button>
        )}
      </div>

      {/* Customer Selection Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/45 px-4 backdrop-blur-sm">
          <div className="neo-panel-strong relative flex max-h-[85vh] w-full max-w-md flex-col border border-black/10 animate-fadeIn">
            {/* Header */}
            <div className="flex items-center justify-between border-b border-black/10 bg-white/60 p-4 sm:p-5 rounded-t-[1.05rem]">
              <h3 className="neo-title text-base font-semibold text-gray-800 sm:text-lg">
                Select Customer
              </h3>
              <button
                onClick={() => {
                  setIsOpen(false);
                  setShowQuickForm(false);
                  reset();
                }}
                className="rounded-lg border border-black/10 bg-white/80 p-1 text-gray-500 transition hover:bg-white"
              >
                <FiX size={20} />
              </button>
            </div>

            {/* Quick Create Form */}
            {showQuickForm ? (
              <form
                onSubmit={handleSubmit(handleQuickCreate)}
                className="p-4 sm:p-5 space-y-4"
              >
                <h4 className="neo-title text-sm font-semibold text-gray-800 sm:text-base">
                  New Customer
                </h4>
                <div className="grid grid-cols-1 gap-4">
                  <InputField
                    label="Name"
                    name="name"
                    register={register}
                    error={errors.name}
                    inputProps={{
                      placeholder: "Enter customer name",
                      autoFocus: true,
                    }}
                  />
                  <InputField
                    label="Phone"
                    name="phone"
                    type="tel"
                    register={register}
                    error={errors.phone}
                    inputProps={{
                      placeholder: "Enter phone number",
                    }}
                  />
                </div>
                <div className="flex gap-2 pt-2">
                  <button
                    type="button"
                    onClick={() => {
                      setShowQuickForm(false);
                      reset();
                    }}
                    className="neo-btn-ghost flex-1 px-4 py-2 text-sm disabled:opacity-50"
                    disabled={isSubmitting}
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="neo-btn flex flex-1 items-center justify-center gap-2 px-4 py-2 text-sm disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <Spinner size={16} color="white" />
                        <span>Creating...</span>
                      </>
                    ) : (
                      "Create"
                    )}
                  </button>
                </div>
              </form>
            ) : (
              <>
                {/* Search */}
                <div className="space-y-3 border-b border-black/10 bg-white/55 p-4 sm:p-5">
                  <div className="relative">
                    <input
                      type="text"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      placeholder="Search by name, phone, or email..."
                      className="w-full rounded-xl border border-black/15 bg-white/80 py-2 pl-10 pr-4 text-sm transition"
                    />
                    <FiSearch className="absolute left-3 top-2.5 text-gray-400" />
                  </div>
                  <button
                    onClick={() => setShowQuickForm(true)}
                    className="flex w-full items-center justify-center gap-2 rounded-xl border border-emerald-600/20 bg-gradient-to-br from-emerald-500 to-emerald-700 px-4 py-2 text-sm font-semibold text-white shadow-sm"
                  >
                    <FiUserPlus size={16} />
                    Create New Customer
                  </button>
                </div>

                {/* Customer List */}
                <div className="flex-1 overflow-y-auto p-4 sm:p-5">
                  {isLoading ? (
                    <div className="flex flex-col items-center justify-center text-gray-500 py-12">
                      <Spinner size={32} color="lamaSky" />
                      <span className="mt-3 text-sm font-medium">
                        Loading customers...
                      </span>
                    </div>
                  ) : customers.length === 0 ? (
                    <div className="text-center text-gray-500 py-12">
                      <FiUserPlus
                        size={48}
                        className="mx-auto mb-3 text-gray-300"
                      />
                      <p className="text-sm">No customers found</p>
                      {searchTerm && (
                        <p className="text-xs text-gray-400 mt-1">
                          Try adjusting your search
                        </p>
                      )}
                    </div>
                  ) : (
                    <div className="space-y-2">
                      {customers.map((customer) => (
                        <button
                          key={customer.id}
                          onClick={() => {
                            onCustomerSelect(customer);
                            setIsOpen(false);
                            setSearchTerm("");
                          }}
                          className="w-full rounded-xl border border-black/10 bg-white/70 p-3 text-left transition duration-150 hover:border-lamaSky/40 hover:bg-lamaSky/10"
                        >
                          <div className="text-sm font-semibold text-gray-800">
                            {customer.name}
                          </div>
                          {(customer.phone || customer.email) && (
                            <div className="text-xs text-gray-600 mt-1">
                              {customer.phone && <span>{customer.phone}</span>}
                              {customer.phone && customer.email && (
                                <span className="mx-2">•</span>
                              )}
                              {customer.email && <span>{customer.email}</span>}
                            </div>
                          )}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
