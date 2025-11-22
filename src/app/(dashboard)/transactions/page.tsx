"use client";

import { useEffect, useMemo, useState } from "react";
import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import TableSearch from "@/components/TableSearch";
import TransactionDetailModal from "@/components/TransactionDetailModal";
import Spinner from "@/components/Spinner";
import { TransactionType } from "@/types/types";
import Image from "next/image";
import { FaBan, FaFileExport } from "react-icons/fa";
import ConfirmationModal from "@/components/ConfirmationModal";
import { toast } from "sonner";
import ExportModal from "@/components/ExportModal";
import { useRouter } from "next/navigation";
import * as XLSX from "xlsx";

const columns = [
  { header: "ID", accessor: "id" },
  { header: "Subtotal", accessor: "subtotal" },
  { header: "Discount", accessor: "discount" },
  { header: "Discount Type", accessor: "discountType" },
  { header: "Paid", accessor: "total_paid" },
  { header: "Change", accessor: "change" },
  { header: "Payments", accessor: "paymentSummary" },
  { header: "Date", accessor: "created_at" },
  { header: "Status", accessor: "status" },
  { header: "Actions", accessor: "action" },
];

const ITEMS_PER_PAGE = 10;

const TransactionsListPage = () => {
  const router = useRouter();
  const [transactions, setTransactions] = useState<TransactionType[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortKey, setSortKey] = useState("created_at");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("desc");
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [showDetailModal, setShowDetailModal] = useState(false);
  const [selectedTransaction, setSelectedTransaction] =
    useState<TransactionType | null>(null);
  const [voidingTransactionId, setVoidingTransactionId] = useState<
    number | null
  >(null);
  const [showExportModal, setShowExportModal] = useState(false);

  const fetchTransactions = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/transaction/listing");
      const result = await res.json();
      if (result.success) {
        setTransactions(result.data);
      }
    } catch (err) {
      console.error("Error fetching transactions:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTransactions();
  }, []);

  const filteredAndSorted = useMemo(() => {
    let filtered = [...transactions];

    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      filtered = filtered.filter((t) => t.id.toString().includes(term));
    }

    return filtered.sort((a, b) => {
      const aVal = (a as any)[sortKey];
      const bVal = (b as any)[sortKey];

      if (sortKey === "created_at") {
        return sortOrder === "asc"
          ? new Date(a.created_at).getTime() - new Date(b.created_at).getTime()
          : new Date(b.created_at).getTime() - new Date(a.created_at).getTime();
      }

      if (typeof aVal === "number" && typeof bVal === "number") {
        return sortOrder === "asc" ? aVal - bVal : bVal - aVal;
      }

      const aStr = aVal?.toString().toLowerCase() || "";
      const bStr = bVal?.toString().toLowerCase() || "";
      return sortOrder === "asc"
        ? aStr.localeCompare(bStr)
        : bStr.localeCompare(aStr);
    });
  }, [transactions, sortKey, sortOrder, searchTerm]);

  const paginated = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredAndSorted.slice(start, start + ITEMS_PER_PAGE);
  }, [filteredAndSorted, currentPage]);

  const totalPages = Math.ceil(filteredAndSorted.length / ITEMS_PER_PAGE);

  const renderRow = (transaction: TransactionType) => (
    <tr
      key={transaction.id}
      className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-lamaPurpleLight"
    >
      <td className="p-2">{transaction.id}</td>
      <td className="p-2">₱{Number(transaction.subtotal).toFixed(2)}</td>
      <td className="p-2">₱{Number(transaction.discount_value).toFixed(2)}</td>
      <td className="p-2">{transaction.discount_type}</td>
      <td className="p-2">₱{Number(transaction.total_paid).toFixed(2)}</td>
      <td className="p-2">₱{Number(transaction.change).toFixed(2)}</td>
      <td className="p-2">
        {transaction.payments
          .map((p) => `${p.payment_method}: ₱${Number(p.amount).toFixed(2)}`)
          .join(", ")}
      </td>
      <td className="p-2">
        {new Date(transaction.created_at).toLocaleString()}
      </td>
      <td
        className={`p-4 capitalize font-semibold ${
          transaction.status === "completed" ? "text-green-500" : "text-red-500"
        }`}
      >
        {transaction.status}
      </td>
      <td className="p-2">
        <div className="flex items-center gap-2">
          <button
            title="View"
            onClick={() => {
              setSelectedTransaction(transaction);
              setShowDetailModal(true);
            }}
            className="w-7 h-7 flex items-center justify-center rounded-full bg-lamaSky"
          >
            <Image src="/view.png" alt="View" width={16} height={16} />
          </button>
          {/* Void Button - show only if not voided */}
          <button
            title="Void Transaction"
            onClick={() => setVoidingTransactionId(transaction.id)}
            className="w-7 h-7 flex items-center justify-center rounded-full bg-red-300 text-white"
          >
            <FaBan size={14} />
          </button>
        </div>
      </td>
    </tr>
  );

  return (
    <div className="bg-white p-4 rounded-md flex-1 m-4 mt-0">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-2">
        <h1 className="text-lg font-semibold">All Transactions</h1>

        <div className="flex flex-col md:flex-row md:items-center gap-4 w-full md:w-auto">
          <TableSearch onSearch={setSearchTerm} />
          <div className="flex items-center gap-4">
            <select
              className="text-sm px-3 py-2 rounded-lg border border-gray-300 bg-white shadow-sm"
              value={sortKey}
              onChange={(e) => setSortKey(e.target.value)}
            >
              <option value="created_at">Date</option>
              <option value="subtotal">Subtotal</option>
              <option value="total_paid">Paid</option>
              <option value="change">Change</option>
            </select>
            <button
              onClick={() =>
                setSortOrder((prev) => (prev === "asc" ? "desc" : "asc"))
              }
              className="w-8 h-8 flex items-center justify-center rounded-full bg-lamaYellow text-white hover:bg-yellow-500"
            >
              <span>{sortOrder === "asc" ? "▲" : "▼"}</span>
            </button>
            <button
              onClick={() => setShowExportModal(true)}
              title="Export Transactions"
              className="w-8 h-8 flex items-center justify-center rounded-full bg-green-300 text-white hover:bg-green-500"
            >
              <FaFileExport size={14} />
            </button>
          </div>
        </div>
      </div>

      {/* Total Paid Summary (just below the filters & controls) */}
      <div className="text-sm text-gray-600 font-medium mb-2">
        Total Sales:{" "}
        <span className="text-black font-semibold">
          ₱
          {filteredAndSorted
            .filter((tx) => tx.status !== "voided")
            .reduce((sum, tx) => sum + Number(tx.total_paid || 0), 0)
            .toLocaleString(undefined, {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
        </span>
      </div>

      {loading ? (
        <div className="flex justify-center items-center p-8">
          <div className="flex flex-col items-center gap-3">
            <Spinner size={32} color="lamaSky" />
            <span className="text-sm text-gray-500">
              Loading transactions...
            </span>
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

      <TransactionDetailModal
        transaction={selectedTransaction}
        onClose={() => {
          setSelectedTransaction(null);
          setShowDetailModal(false);
        }}
      />

      <ConfirmationModal
        isOpen={voidingTransactionId !== null}
        title="Void Transaction"
        message="Are you sure you want to void this transaction? This action cannot be undone."
        confirmLabel="Void"
        cancelLabel="Cancel"
        confirmColor="bg-red-500 hover:bg-red-600"
        onCancel={() => setVoidingTransactionId(null)}
        onConfirm={async () => {
          if (voidingTransactionId == null) return;

          const res = await fetch(
            `/api/transaction/void/${voidingTransactionId}`,
            {
              method: "POST",
            }
          );
          const data = await res.json();

          if (data.success) {
            toast.success("Transaction voided successfully.");

            fetchTransactions();
          } else {
            toast.error("Failed to void the transaction.");
          }

          setVoidingTransactionId(null);
        }}
      />

      <ExportModal
        isOpen={showExportModal}
        onClose={() => setShowExportModal(false)}
        onExport={async (options) => {
          setShowExportModal(false);

          if (options.format === "table") {
            router.push(
              `/report/pos/${options.from}/${options.to}/${options.status}`
            );
            return;
          }

          try {
            const res = await fetch("/api/transaction/export", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                startDate: options.from,
                endDate: options.to,
                status: options.status,
              }),
            });

            const result = await res.json();
            if (!result.success)
              throw new Error(result.error || "Failed to export");

            const transactions: TransactionType[] = result.data;
            let totalSubtotal = 0;
            let totalPaid = 0;
            const worksheetData = transactions.map((tx: TransactionType) => {
              const isVoided = tx.status === "voided";
              const subtotal = isVoided ? 0 : Number(tx.subtotal);
              const paid = isVoided ? 0 : Number(tx.total_paid);

              if (!isVoided) {
                totalSubtotal += subtotal;
                totalPaid += paid;
              }

              return {
                ID: tx.id,
                Date: new Date(tx.created_at).toLocaleString(),
                Subtotal: subtotal.toFixed(2),
                Discount: Number(tx.discount_value).toFixed(2),
                DiscountType: tx.discount_type,
                Paid: paid.toFixed(2),
                Change: Number(tx.change).toFixed(2),
                Payments: tx.payments
                  .map(
                    (p) =>
                      `${p.payment_method}: ₱${Number(p.amount).toFixed(2)}`
                  )
                  .join(", "),
                Status: tx.status,
              };
            });

            worksheetData.push({
              ID: null as unknown as number,
              Date: "",
              Subtotal: totalSubtotal.toFixed(2),
              Discount: "",
              DiscountType: "TOTAL",
              Paid: totalPaid.toFixed(2),
              Change: "",
              Payments: "",
              Status: "",
            });

            const itemDetails: {
              "Transaction ID": number;
              Date: string;
              Product: string;
              Qty: number;
              "Unit Price": string;
              Total: string;
            }[] = [];

            transactions.forEach((tx: TransactionType) => {
              tx.items.forEach((item) => {
                itemDetails.push({
                  "Transaction ID": tx.id,
                  Date: new Date(tx.created_at).toLocaleString(),
                  Product: item.product.name,
                  Qty: item.quantity,
                  "Unit Price": `₱${Number(item.price).toFixed(2)}`,
                  Total: `₱${(Number(item.price) * item.quantity).toFixed(2)}`,
                });
              });
            });

            const workbook = XLSX.utils.book_new();

            const mainSheet = XLSX.utils.json_to_sheet(worksheetData);
            XLSX.utils.book_append_sheet(workbook, mainSheet, "Transactions");

            const detailSheet = XLSX.utils.json_to_sheet(itemDetails);
            XLSX.utils.book_append_sheet(workbook, detailSheet, "Item Details");

            const filename = `transactions_${options.from}_${options.to}.xlsx`;
            XLSX.writeFile(workbook, filename);
          } catch (err) {
            console.error("Export failed:", err);
            toast.error("Failed to export file");
          }
        }}
      />
    </div>
  );
};

export default TransactionsListPage;
