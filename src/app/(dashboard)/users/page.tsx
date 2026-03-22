"use client";

import { useEffect, useMemo, useState } from "react";
import FormModal from "@/components/FormModal";
import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import TableSearch from "@/components/TableSearch";
import { useUser } from "@/hooks/useUser";
import SingleUserModal from "@/components/SingleUserModal";
import Spinner from "@/components/Spinner";
import { FiArrowDown, FiArrowUp, FiEye } from "react-icons/fi";

type User = {
  id: number;
  name: string;
  username?: string;
  user_type: string;
  status: string;
  company?: {
    company_id: number;
    company_name: string;
    company_email: string;
    company_contact_number: string;
    company_address: string;
    subscription_start: string;
    subscription_end: string;
    created_at: string;
    updated_at: string;
  };
};

const columns = [
  { header: "Name", accessor: "name" },
  { header: "User Name", accessor: "username" },
  { header: "Company", accessor: "company_name" },
  { header: "User Type", accessor: "user_type" },
  { header: "Status", accessor: "status" },
  { header: "Actions", accessor: "action" },
];

const ITEMS_PER_PAGE = 15;

const UsersListPage = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [sortKey, setSortKey] = useState("name");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const fetchUsers = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/user/listing");
      const result = await res.json();
      if (result.success) {
        setUsers(result.data);
      }
    } catch (err) {
      console.error("Error fetching users:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const filteredAndSortedUsers = useMemo(() => {
    let filtered = [...users];

    if (searchTerm) {
      const lowerSearch = searchTerm.toLowerCase();
      filtered = filtered.filter(
        (u) =>
          u.name.toLowerCase().includes(lowerSearch) ||
          u.username?.toLowerCase().includes(lowerSearch),
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
  }, [users, sortKey, sortOrder, searchTerm]);

  const totalPages = Math.ceil(filteredAndSortedUsers.length / ITEMS_PER_PAGE);

  const paginatedData = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredAndSortedUsers.slice(start, start + ITEMS_PER_PAGE);
  }, [currentPage, filteredAndSortedUsers]);

  const renderRow = (item: User) => (
    <tr
      key={item.id}
      className="text-sm transition-colors duration-150 hover:bg-lamaSkyLight/40"
    >
      <td className="p-2">{item.name}</td>
      <td className="p-2">{item.username}</td>
      <td className="p-2">{item.company?.company_name || "-"}</td>
      <td className="p-2 capitalize">{item.user_type}</td>
      <td className="p-2">
        <span
          className={`font-medium ${
            item.status === "active" ? "text-green-600" : "text-red-600"
          }`}
        >
          {item.status}
        </span>
      </td>

      <td className="p-2">
        <div className="flex items-center gap-2">
          <button
            onClick={() => setSelectedUser(item)}
            title="View"
            className="flex h-8 w-8 items-center justify-center rounded-lg bg-lamaSky/15 border border-lamaSky/30 text-[#0f9f9d] hover:bg-lamaSky/25 transition-colors"
          >
            <FiEye size={15} />
          </button>
          <>
            <FormModal
              table="user"
              type="update"
              id={item.id}
              data={item}
              onSuccess={fetchUsers}
            />

            <FormModal
              table="user"
              type="delete"
              id={item.id}
              onSuccess={fetchUsers}
            />
          </>
        </div>
      </td>
    </tr>
  );

  return (
    <div className="neo-panel rounded-2xl flex-1 m-2 sm:m-4 mt-0 p-2 sm:p-4">
      <div className="neo-panel flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between p-4 mb-4">
        <div>
          <p className="neo-subtitle">Management</p>
          <h1 className="neo-title text-xl font-semibold text-gray-800">
            Users
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
              <option value="name">Name</option>
              <option value="user_type">User Type</option>
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
            <FormModal table="user" type="create" onSuccess={fetchUsers} />
          </div>
        </div>
      </div>

      {loading ? (
        <div className="flex justify-center items-center p-8">
          <div className="flex flex-col items-center gap-3">
            <Spinner size={32} color="lamaSky" />
            <span className="text-sm text-gray-500">Loading users...</span>
          </div>
        </div>
      ) : (
        <Table columns={columns} renderRow={renderRow} data={paginatedData} />
      )}

      {selectedUser && (
        <SingleUserModal
          user={selectedUser}
          onClose={() => setSelectedUser(null)}
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

export default UsersListPage;
