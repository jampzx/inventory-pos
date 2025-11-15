"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import FormModal from "@/components/FormModal";
import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import TableSearch from "@/components/TableSearch";
import { useUser } from "@/hooks/useUser";
import SingleUserModal from "@/components/SingleUserModal";

type User = {
  id: number;
  name: string;
  username?: string;
  user_type: string;
  status: string;
};

const columns = [
  { header: "Name", accessor: "name" },
  { header: "User Name", accessor: "username" },
  { header: "User Type", accessor: "user_type" },
  { header: "Status", accessor: "status" },
  { header: "Actions", accessor: "action" },
];

const ITEMS_PER_PAGE = 15;

const UsersListPage = () => {
  const { user, loadingUseUser } = useUser();
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
          u.username?.toLowerCase().includes(lowerSearch)
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
      className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-lamaPurpleLight"
    >
      <td className="p-2">{item.name}</td>
      <td className="p-2">{item.username}</td>
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
            className="w-7 h-7 flex items-center justify-center rounded-full bg-lamaSky"
          >
            <Image src="/view.png" alt="View" width={16} height={16} />
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
    <div className="bg-white p-4 rounded-md flex-1 m-4 mt-0">
      <div className="flex items-center justify-between">
        <h1 className="hidden md:block text-lg font-semibold">All Users</h1>
        <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
          <TableSearch onSearch={(term) => setSearchTerm(term)} />
          <div className="flex items-center gap-4 self-end">
            <select
              className="text-sm px-3 py-2 rounded-lg border border-gray-300 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-lamaPurple focus:border-lamaPurple transition"
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
              className="w-8 h-8 flex items-center justify-center rounded-full bg-lamaYellow"
            >
              <Image src="/sort.png" alt="sort" width={14} height={14} />
            </button>
            <FormModal table="user" type="create" onSuccess={fetchUsers} />
          </div>
        </div>
      </div>

      {loading ? (
        <div className="text-center text-sm p-4 text-gray-500">Loading...</div>
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
