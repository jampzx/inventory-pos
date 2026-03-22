"use client";

import { useEffect, useMemo, useState } from "react";
import FormModal from "@/components/FormModal";
import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import TableSearch from "@/components/TableSearch";
import { useUser } from "@/hooks/useUser";
import SingleCompanyModal from "@/components/SingleCompanyModal";
import Spinner from "@/components/Spinner";
import { FiArrowDown, FiArrowUp, FiEye } from "react-icons/fi";

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
          c.company_contact_number.toLowerCase().includes(lowerSearch),
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
    filteredAndSortedCompanies.length / ITEMS_PER_PAGE,
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
        className="text-sm transition-colors duration-150 hover:bg-lamaSkyLight/40"
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
              title="View"
              className="flex h-8 w-8 items-center justify-center rounded-lg bg-lamaSky/15 border border-lamaSky/30 text-[#0f9f9d] hover:bg-lamaSky/25 transition-colors"
            >
              <FiEye size={15} />
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
    <div className="neo-panel rounded-2xl flex-1 m-2 sm:m-4 mt-0 p-2 sm:p-4">
      <div className="neo-panel flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between p-4 mb-4">
        <div>
          <p className="neo-subtitle">Management</p>
          <h1 className="neo-title text-xl font-semibold text-gray-800">
            Companies
          </h1>
        </div>
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
          <TableSearch onSearch={(term) => setSearchTerm(term)} />
          <div className="flex items-center gap-2 sm:gap-3">
            <select
              className="text-sm px-3 py-2 rounded-xl border border-black/15 bg-white/80 shadow-sm focus:outline-none focus:ring-2 focus:ring-lamaSky/30 focus:border-lamaSky transition"
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
              className="flex h-9 w-9 items-center justify-center rounded-xl border border-black/10 bg-white/80 shadow-sm hover:-translate-y-0.5 transition-transform text-gray-600"
            >
              {sortOrder === "asc" ? (
                <FiArrowUp size={15} />
              ) : (
                <FiArrowDown size={15} />
              )}
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
