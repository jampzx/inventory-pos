"use client";

import { useEffect, useMemo, useState } from "react";
import FormModal from "@/components/FormModal";
import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import TableSearch from "@/components/TableSearch";
import { FaFileExport } from "react-icons/fa";
import { FiArrowDown, FiArrowUp } from "react-icons/fi";
import * as XLSX from "xlsx";
import { toast } from "sonner";
import ExportModal from "@/components/ExportModal";
import { useRouter } from "next/navigation";
import Spinner from "@/components/Spinner";

type Expense = {
  id: number;
  description: string;
  amount: number;
  date: string;
};

type ExpenseExportRow = {
  ID: number | string;
  Description: string;
  Amount: string;
  Date: string;
};

const columns = [
  { header: "Description", accessor: "description" },
  { header: "Amount", accessor: "amount" },
  { header: "Date", accessor: "date" },
  { header: "Actions", accessor: "action" },
];

const ITEMS_PER_PAGE = 10;

const ExpensesListPage = () => {
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortKey, setSortKey] = useState("date");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("desc");
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [showExportModal, setShowExportModal] = useState(false);
  const router = useRouter();

  const fetchExpenses = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/expense/listing");
      const result = await res.json();
      if (result.success) {
        setExpenses(result.data);
      }
    } catch (err) {
      console.error("Error fetching expenses:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchExpenses();
  }, []);

  const handleExport = async () => {
    try {
      const res = await fetch("/api/expense/listing");
      const result = await res.json();

      if (!result.success) throw new Error("Failed to fetch expense data.");

      const data: Expense[] = result.data;

      let total = 0;

      type ExportRow = {
        ID: number | string;
        Description: string;
        Amount: string;
        Date: string;
      };

      const sheetData: ExportRow[] = data.map((e) => {
        total += e.amount;

        return {
          ID: e.id,
          Description: e.description,
          Amount: e.amount.toFixed(2),
          Date: new Date(e.date).toLocaleDateString(),
        };
      });

      sheetData.push({
        ID: "—",
        Description: "TOTAL",
        Amount: total.toFixed(2),
        Date: "",
      });

      const worksheet = XLSX.utils.json_to_sheet(sheetData);
      const workbook = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(workbook, worksheet, "Expenses");

      const filename = `expenses_export_${
        new Date().toISOString().split("T")[0]
      }.xlsx`;
      XLSX.writeFile(workbook, filename);
    } catch (err) {
      console.error("Export failed:", err);
      toast.error("Failed to export expenses.");
    }
  };

  const filteredAndSorted = useMemo(() => {
    let filtered = [...expenses];

    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      filtered = filtered.filter((e) =>
        e.description.toLowerCase().includes(term),
      );
    }

    return filtered.sort((a, b) => {
      const aVal = (a as any)[sortKey] ?? "";
      const bVal = (b as any)[sortKey] ?? "";
      const aStr = aVal.toString().toLowerCase();
      const bStr = bVal.toString().toLowerCase();
      return sortOrder === "asc"
        ? aStr.localeCompare(bStr)
        : bStr.localeCompare(aStr);
    });
  }, [expenses, searchTerm, sortKey, sortOrder]);

  const paginated = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredAndSorted.slice(start, start + ITEMS_PER_PAGE);
  }, [filteredAndSorted, currentPage]);

  const totalPages = Math.ceil(filteredAndSorted.length / ITEMS_PER_PAGE);

  const renderRow = (item: Expense) => (
    <tr
      key={item.id}
      className="text-sm transition-colors duration-150 hover:bg-lamaSkyLight/40"
    >
      <td className="p-4">{item.description}</td>
      <td className="p-4">₱ {item.amount.toFixed(2)}</td>
      <td className="p-4">{new Date(item.date).toLocaleDateString()}</td>
      <td className="p-4">
        <div className="flex items-center gap-2">
          <>
            <FormModal
              table="expense"
              type="update"
              data={item}
              id={item.id}
              onSuccess={fetchExpenses}
            />
            <FormModal
              table="expense"
              type="delete"
              id={item.id}
              onSuccess={fetchExpenses}
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
          <p className="neo-subtitle">Finance</p>
          <h1 className="neo-title text-xl font-semibold text-gray-800">
            Expenses
          </h1>
        </div>
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
          <TableSearch onSearch={setSearchTerm} />
          <div className="flex items-center gap-2 sm:gap-3">
            <select
              className="text-sm px-3 py-2 rounded-xl border border-black/15 bg-white/80 shadow-sm focus:outline-none focus:ring-2 focus:ring-lamaSky/30 focus:border-lamaSky transition"
              value={sortKey}
              onChange={(e) => setSortKey(e.target.value)}
            >
              <option value="description">Description</option>
              <option value="amount">Amount</option>
              <option value="category.name">Category</option>
              <option value="date">Date</option>
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
              table="expense"
              type="create"
              onSuccess={fetchExpenses}
            />
            <button
              onClick={() => setShowExportModal(true)}
              title="Export Expenses"
              className="flex h-9 w-9 items-center justify-center rounded-xl border border-emerald-200/60 bg-emerald-100/80 text-emerald-700 shadow-sm hover:-translate-y-0.5 transition-transform"
            >
              <FaFileExport size={14} />
            </button>
          </div>
        </div>
      </div>

      {loading ? (
        <div className="flex justify-center items-center p-8">
          <div className="flex flex-col items-center gap-3">
            <Spinner size={32} color="lamaSky" />
            <span className="text-sm text-gray-500">Loading expenses...</span>
          </div>
        </div>
      ) : (
        <>
          <Table columns={columns} renderRow={renderRow} data={paginated} />
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        </>
      )}

      <ExportModal
        isOpen={showExportModal}
        onClose={() => setShowExportModal(false)}
        onExport={async (options) => {
          setShowExportModal(false);

          if (options.format === "table") {
            router.push(`/report/expense/${options.from}/${options.to}`);
            return;
          }

          try {
            const res = await fetch("/api/expense/export", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                startDate: options.from,
                endDate: options.to,
              }),
            });

            const result = await res.json();
            if (!result.success)
              throw new Error(result.error || "Failed to export");

            const expenses: Expense[] = result.data;

            let total = 0;

            const worksheetData: ExpenseExportRow[] = expenses.map((e) => {
              total += Number(e.amount);
              return {
                ID: e.id,
                Description: e.description,
                Amount: Number(e.amount).toFixed(2),
                Date: new Date(e.date).toLocaleString(),
              };
            });

            worksheetData.push({
              ID: "—",
              Description: "TOTAL",
              Amount: total.toFixed(2),
              Date: "",
            });

            const worksheet = XLSX.utils.json_to_sheet(worksheetData);
            const workbook = XLSX.utils.book_new();
            XLSX.utils.book_append_sheet(workbook, worksheet, "Expenses");

            const filename = `expenses_${options.from}_${options.to}.xlsx`;
            XLSX.writeFile(workbook, filename);
          } catch (err) {
            console.error("Export failed:", err);
            toast.error("Failed to export expenses");
          }
        }}
      />
    </div>
  );
};

export default ExpensesListPage;
