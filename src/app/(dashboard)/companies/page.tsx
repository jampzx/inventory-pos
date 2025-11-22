"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import FormModal from "@/components/FormModal";
import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import TableSearch from "@/components/TableSearch";
import { useUser } from "@/hooks/useUser";
import SingleCompanyModal from "@/components/SingleCompanyModal";
import Spinner from "@/components/Spinner";

type Company = {
  company_id: number;
  company_name: string;
  company_email: string;
  company_contact_number: string;
  company_address: string;
  subscription_start: string | null;
  subscription_end: string | null;
  created_at: string;
  updated_at: string;
};

const columns = [
  { header: "Company Name", accessor: "company_name" },
  { header: "Email", accessor: "company_email" },
  { header: "Contact", accessor: "company_contact_number" },
  { header: "Address", accessor: "company_address" },
  { header: "Subscription", accessor: "subscription" },
  { header: "Actions", accessor: "action" },
];

const ITEMS_PER_PAGE = 15;

const CompanyListPage = () => {
  const { user, loadingUseUser } = useUser();
  const [companies, setCompanies] = useState<Company[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [sortKey, setSortKey] = useState("company_name");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCompany, setSelectedCompany] = useState<Company | null>(null);

  const fetchCompanies = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/company/listing");
      const result = await res.json();
      if (result.success) {
        setCompanies(result.data);
      }
    } catch (err) {
      console.error("Error fetching companies:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCompanies();
  }, []);

  const filteredAndSortedCompanies = useMemo(() => {
    let filtered = [...companies];

    if (searchTerm) {
      const lowerSearch = searchTerm.toLowerCase();
      filtered = filtered.filter(
        (c) =>
          c.company_name.toLowerCase().includes(lowerSearch) ||
          c.company_email.toLowerCase().includes(lowerSearch) ||
          c.company_contact_number.toLowerCase().includes(lowerSearch)
      );
    }

    return filtered.sort((a, b) => {
      const aValue = (a as any)[sortKey];
      const bValue = (b as any)[sortKey];

      if (typeof aValue === "number" && typeof bValue === "number") {
        return sortOrder === "asc" ? aValue - bValue : bValue - aValue;
      }

      const aStr = aValue?.toString().toLowerCase() || "";
      const bStr = bValue?.toString().toLowerCase() || "";

      if (aStr < bStr) return sortOrder === "asc" ? -1 : 1;
      if (aStr > bStr) return sortOrder === "asc" ? 1 : -1;
      return 0;
    });
  }, [companies, sortKey, sortOrder, searchTerm]);

  const totalPages = Math.ceil(
    filteredAndSortedCompanies.length / ITEMS_PER_PAGE
  );

  const paginatedData = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredAndSortedCompanies.slice(start, start + ITEMS_PER_PAGE);
  }, [currentPage, filteredAndSortedCompanies]);

  const getSubscriptionStatus = (company: Company) => {
    if (!company.subscription_start || !company.subscription_end) {
      return { text: "No Subscription", color: "text-gray-600" };
    }

    const now = new Date();
    const start = new Date(company.subscription_start);
    const end = new Date(company.subscription_end);

    if (now < start) {
      return { text: "Not Started", color: "text-blue-600" };
    } else if (now > end) {
      return { text: "Expired", color: "text-red-600" };
    } else {
      return { text: "Active", color: "text-green-600" };
    }
  };

  const renderRow = (item: Company) => {
    const subscriptionStatus = getSubscriptionStatus(item);

    return (
      <tr
        key={item.company_id}
        className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-lamaPurpleLight"
      >
        <td className="p-2 font-medium">{item.company_name}</td>
        <td className="p-2">{item.company_email}</td>
        <td className="p-2">{item.company_contact_number}</td>
        <td className="p-2 max-w-xs truncate" title={item.company_address}>
          {item.company_address}
        </td>
        <td className="p-2">
          <span className={`font-medium ${subscriptionStatus.color}`}>
            {subscriptionStatus.text}
          </span>
        </td>
        <td className="p-2">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setSelectedCompany(item)}
              className="w-7 h-7 flex items-center justify-center rounded-full bg-lamaSky"
            >
              <Image src="/view.png" alt="View" width={16} height={16} />
            </button>
            <>
              <FormModal
                table="company"
                type="update"
                id={item.company_id}
                data={item}
                onSuccess={fetchCompanies}
              />

              <FormModal
                table="company"
                type="delete"
                id={item.company_id}
                onSuccess={fetchCompanies}
              />
            </>
          </div>
        </td>
      </tr>
    );
  };

  return (
    <div className="bg-white p-4 rounded-md flex-1 m-4 mt-0">
      <div className="flex items-center justify-between">
        <h1 className="hidden md:block text-lg font-semibold">All Companies</h1>
        <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
          <TableSearch onSearch={(term) => setSearchTerm(term)} />
          <div className="flex items-center gap-4 self-end">
            <select
              className="text-sm px-3 py-2 rounded-lg border border-gray-300 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-lamaPurple focus:border-lamaPurple transition"
              value={sortKey}
              onChange={(e) => setSortKey(e.target.value)}
            >
              <option value="company_name">Company Name</option>
              <option value="company_email">Email</option>
            </select>

            <button
              title="Toggle Sort"
              onClick={() =>
                setSortOrder((prev) => (prev === "asc" ? "desc" : "asc"))
              }
              className="w-8 h-8 flex items-center justify-center rounded-full bg-lamaYellow"
            >
              <Image src="/sort.png" alt="sort" width={14} height={14} />
            </button>
            <FormModal
              table="company"
              type="create"
              onSuccess={fetchCompanies}
            />
          </div>
        </div>
      </div>

      {loading ? (
        <div className="flex justify-center items-center p-8">
          <div className="flex flex-col items-center gap-3">
            <Spinner size={32} color="lamaSky" />
            <span className="text-sm text-gray-500">Loading companies...</span>
          </div>
        </div>
      ) : (
        <Table columns={columns} renderRow={renderRow} data={paginatedData} />
      )}

      {selectedCompany && (
        <SingleCompanyModal
          company={selectedCompany}
          onClose={() => setSelectedCompany(null)}
        />
      )}

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default CompanyListPage;
