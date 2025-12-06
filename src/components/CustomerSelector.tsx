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
        `/api/customer/listing?search=${encodeURIComponent(searchTerm)}`
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
          <div className="flex items-center gap-2 bg-blue-50 border border-blue-200 rounded-md px-3 py-2 flex-1">
            <div className="flex-1">
              <div className="text-sm font-medium text-gray-800">
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
              className="text-gray-400 hover:text-red-500"
            >
              <FiX size={18} />
            </button>
          </div>
        ) : (
          <button
            onClick={() => setIsOpen(true)}
            className="flex items-center gap-2 border border-gray-300 rounded-md px-3 py-2 hover:bg-gray-50 transition flex-1 text-left text-sm text-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <FiUserPlus size={16} />
            <span>Add Customer (Optional)</span>
          </button>
        )}
      </div>

      {/* Customer Selection Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-4 backdrop-blur-sm">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-md relative max-h-[85vh] flex flex-col animate-fadeIn">
            {/* Header */}
            <div className="p-4 sm:p-5 border-b flex items-center justify-between bg-gray-50 rounded-t-lg">
              <h3 className="text-base sm:text-lg font-semibold text-gray-800">
                Select Customer
              </h3>
              <button
                onClick={() => {
                  setIsOpen(false);
                  setShowQuickForm(false);
                  reset();
                }}
                className="text-gray-400 hover:text-gray-600 transition p-1 hover:bg-gray-200 rounded-full"
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
                <h4 className="font-semibold text-gray-800 text-sm sm:text-base">
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
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-md text-sm hover:bg-gray-50 transition disabled:opacity-50"
                    disabled={isSubmitting}
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-md text-sm hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition flex items-center justify-center gap-2"
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
                <div className="p-4 sm:p-5 border-b space-y-3 bg-gray-50">
                  <div className="relative">
                    <input
                      type="text"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      placeholder="Search by name, phone, or email..."
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                    />
                    <FiSearch className="absolute left-3 top-2.5 text-gray-400" />
                  </div>
                  <button
                    onClick={() => setShowQuickForm(true)}
                    className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-green-600 text-white rounded-md text-sm hover:bg-green-700 transition"
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
                      <span className="text-sm mt-3">Loading customers...</span>
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
                          className="w-full text-left p-3 border border-gray-200 rounded-md hover:bg-blue-50 hover:border-blue-300 transition duration-150"
                        >
                          <div className="font-medium text-gray-800 text-sm">
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
