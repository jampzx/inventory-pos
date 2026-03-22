"use client";

import { useState, useEffect } from "react";
import { Customer } from "@/types/types";
import { toast } from "sonner";
import Pagination from "@/components/Pagination";
import TableSearch from "@/components/TableSearch";
import FormModal from "@/components/FormModal";
import Table from "@/components/Table";
import Spinner from "@/components/Spinner";

const columns = [
  { header: "Name", accessor: "name" },
  { header: "Phone", accessor: "phone" },
  { header: "Email", accessor: "email" },
  { header: "Status", accessor: "status" },
  { header: "Actions", accessor: "action" },
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
        `/api/customer/listing?search=${encodeURIComponent(searchTerm)}`,
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

  const filteredCustomers = customers.filter((c) =>
    c.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const totalPages = Math.ceil(filteredCustomers.length / itemsPerPage);
  const paginatedData = filteredCustomers.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

  const renderRow = (customer: Customer) => (
    <tr
      key={customer.id}
      className="text-sm transition-colors duration-150 hover:bg-lamaSkyLight/40"
    >
      <td className="p-3">{customer.name}</td>
      <td className="p-3">{customer.phone || "—"}</td>
      <td className="p-3">{customer.email || "—"}</td>
      <td className="p-3">
        <span
          className={`inline-flex rounded-full px-2.5 py-1 text-xs font-semibold ${
            customer.status === "active"
              ? "bg-green-100 text-green-800"
              : "bg-red-100 text-red-800"
          }`}
        >
          {customer.status}
        </span>
      </td>
      <td className="p-3">
        <div className="flex items-center gap-2">
          <FormModal
            table="customer"
            type="update"
            data={customer}
            id={customer.id}
            onSuccess={fetchCustomers}
          />
          <FormModal
            table="customer"
            type="delete"
            id={customer.id}
            onSuccess={fetchCustomers}
          />
        </div>
      </td>
    </tr>
  );

  if (isLoading) {
    return (
      <div className="neo-panel rounded-2xl flex-1 m-2 sm:m-4 mt-0 p-6">
        <div className="flex items-center justify-center h-64">
          <div className="flex flex-col items-center gap-3">
            <Spinner size={32} color="lamaSky" />
            <span className="text-sm text-gray-500">Loading customers...</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="neo-panel rounded-2xl flex-1 m-2 sm:m-4 mt-0 p-2 sm:p-4">
      <div className="neo-panel flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between p-4 mb-4">
        <div>
          <p className="neo-subtitle">CRM</p>
          <h1 className="neo-title text-xl font-semibold text-gray-800">
            Customers
          </h1>
        </div>
        <div className="flex items-center gap-3">
          <TableSearch onSearch={setSearchTerm} />
          <FormModal
            table="customer"
            type="create"
            onSuccess={fetchCustomers}
          />
        </div>
      </div>

      <Table columns={columns} renderRow={renderRow} data={paginatedData} />

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
}
