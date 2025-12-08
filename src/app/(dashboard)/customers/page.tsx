"use client";

import { useState, useEffect } from "react";
import { Customer } from "@/types/types";
import { toast } from "sonner";
import Pagination from "@/components/Pagination";
import TableSearch from "@/components/TableSearch";
import FormModal from "@/components/FormModal";

const columns = [
  { header: "Name", accessor: "name" },
  { header: "Phone", accessor: "phone" },
  { header: "Email", accessor: "email" },
  { header: "Status", accessor: "status" },
  { header: "Actions", accessor: "actions" },
];

export default function CustomersPage() {
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const itemsPerPage = 10;

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
      toast.error("Failed to load customers");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchCustomers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchTerm]);

  const handleDelete = async (id: number) => {
    if (!confirm("Are you sure you want to delete this customer?")) return;

    try {
      const response = await fetch(`/api/customer/${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        toast.success("Customer deleted successfully");
        fetchCustomers();
      } else {
        toast.error("Failed to delete customer");
      }
    } catch (error) {
      toast.error("An error occurred");
    }
  };

  const filteredCustomers = customers.filter((c) =>
    c.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredCustomers.length / itemsPerPage);
  const paginatedData = filteredCustomers.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const renderRow = (customer: Customer) => (
    <tr
      key={customer.id}
      className="border-b border-gray-100 even:bg-gradient-to-r even:from-pink-50/30 even:to-purple-50/30 text-sm hover:bg-gradient-to-r hover:from-pink-50 hover:to-purple-50 transition-all duration-200"
    >
      <td className="px-4 py-2">{customer.name}</td>
      <td className="px-4 py-2">{customer.phone || "—"}</td>
      <td className="px-4 py-2">{customer.email || "—"}</td>
      <td className="px-4 py-2">
        <span
          className={`px-2 py-1 rounded-full text-xs ${
            customer.status === "active"
              ? "bg-green-100 text-green-800"
              : "bg-red-100 text-red-800"
          }`}
        >
          {customer.status}
        </span>
      </td>
      <td className="px-4 py-2">
        <div className="flex items-center gap-2">
          <FormModal
            table="customer"
            type="update"
            data={customer}
            onSuccess={fetchCustomers}
          />
          <button
            onClick={() => handleDelete(customer.id)}
            className="w-7 h-7 flex items-center justify-center rounded-full bg-lamaPurple"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
              />
            </svg>
          </button>
        </div>
      </td>
    </tr>
  );

  if (isLoading) {
    return (
      <div className="bg-white p-4 rounded-md flex-1 m-4 mt-0">
        <div className="flex items-center justify-center h-64">
          <div className="text-gray-500">Loading...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white p-4 rounded-md flex-1 m-4 mt-0">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-lg font-semibold">All Customers</h1>
        <FormModal table="customer" type="create" onSuccess={fetchCustomers} />
      </div>

      <TableSearch onSearch={setSearchTerm} />

      <table className="w-full mt-4">
        <thead>
          <tr className="text-left text-gray-500 text-sm">
            {columns.map((col) => (
              <th key={col.accessor} className="px-4 py-2">
                {col.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {paginatedData.length > 0 ? (
            paginatedData.map(renderRow)
          ) : (
            <tr>
              <td
                colSpan={columns.length}
                className="text-center py-8 text-gray-500"
              >
                No customers found
              </td>
            </tr>
          )}
        </tbody>
      </table>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
}
