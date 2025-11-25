"use client";

import { useEffect, useState } from "react";
import Table from "@/components/Table";
import { toast } from "sonner";
import { useParams } from "next/navigation";
import Spinner from "@/components/Spinner";

type TransactionItem = {
  product: { name: string };
  quantity: number;
  price: number;
  staff?: { staff_name: string } | null;
};

type Payment = {
  payment_method: string;
  amount: number;
};

type Transaction = {
  id: number;
  created_at: string;
  branch: { name: string };
  staff: { staff_name: string } | null;
  items: TransactionItem[];
  payments: Payment[];
  subtotal: number;
  total_paid: number;
  change: number;
  status: string;
  discount_value: number;
  discount_type: string;
};

const columns = [
  { header: "Date", accessor: "created_at" },
  { header: "Branch", accessor: "branch" },
  { header: "Items and Staffs", accessor: "items" },
  { header: "Subtotal", accessor: "subtotal" },
  { header: "Discount", accessor: "discount" },
  { header: "Discount Type", accessor: "discountType" },
  { header: "Payments", accessor: "payments" },
  { header: "Total Paid", accessor: "total_paid" },
  { header: "Change", accessor: "change" },
  { header: "Status", accessor: "status" },
];

export default function TransactionReportPage() {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [loading, setLoading] = useState(true);
  const params = useParams();
  const from = params.from;
  const to = params.to;
  const status = params.status;

  useEffect(() => {
    const fetchExport = async () => {
      setLoading(true);
      try {
        const res = await fetch("/api/transaction/export", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            startDate: from,
            endDate: to,
            status,
          }),
        });
        const result = await res.json();
        if (result.success) {
          setTransactions(result.data);
        } else {
          toast.error(result.error || "Failed to fetch transactions.");
        }
      } catch (err) {
        toast.error("An error occurred.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    if (from && to) {
      fetchExport();
    }
  }, [from, to, status]);

  const renderRow = (tx: Transaction) => {
    const paymentSummary = tx.payments
      .map(
        (p) =>
          `${p.payment_method}: ₱${Number(p.amount).toLocaleString(undefined, {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })}`
      )
      .join(", ");

    const itemSummary = tx.items
      .map((i) => {
        const total = Number(i.price) * i.quantity;
        const priceStr = `₱${Number(i.price).toFixed(2)}`;
        const totalStr = `₱${total.toFixed(2)}`;
        const staffStr = i.staff?.staff_name ? ` [${i.staff.staff_name}]` : "";
        return `${i.product.name} x${i.quantity} @ ${priceStr} = ${totalStr}${staffStr}`;
      })
      .join("; ");

    return (
      <tr
        key={tx.id}
        className="border-b border-gray-200 even:bg-slate-50 text-sm"
      >
        <td className="p-4">{new Date(tx.created_at).toLocaleDateString()}</td>
        <td className="p-4">{tx.branch?.name || "-"}</td>
        <td className="p-4">{itemSummary}</td>
        <td className="p-4">₱{Number(tx.subtotal).toFixed(2)}</td>
        <td className="p-4">₱{Number(tx.discount_value).toFixed(2)}</td>
        <td className="p-4">{tx.discount_type}</td>
        <td className="p-4">{paymentSummary || "-"}</td>
        <td className="p-4">₱{Number(tx.total_paid).toFixed(2)}</td>
        <td className="p-4">₱{Number(tx.change).toFixed(2)}</td>
        <td
          className={`p-4 font-semibold ${
            tx.status === "completed" ? "text-green-600" : "text-red-600"
          }`}
        >
          {tx.status}
        </td>
      </tr>
    );
  };

  return (
    <div className="bg-white p-2 sm:p-4 rounded-md flex-1 m-2 sm:m-4 mt-0">
      <h1 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">
        Transaction Reports
      </h1>
      {loading ? (
        <div className="flex justify-center items-center p-6 sm:p-8">
          <div className="flex flex-col items-center gap-3">
            <Spinner size={32} color="lamaSky" />
            <span className="text-sm text-gray-500">Loading report...</span>
          </div>
        </div>
      ) : transactions.length === 0 ? (
        <div className="text-center text-sm text-gray-500 p-4 sm:p-8 bg-gray-50 rounded">
          No data found for the selected date range and status.
        </div>
      ) : (
        <>
          <div className="mb-3 sm:mb-4 p-2 sm:p-3 bg-gray-50 rounded text-xs sm:text-sm">
            <div className="font-medium text-gray-700">
              Total Transactions: {transactions.length}
            </div>
            <div className="font-medium text-gray-700">
              Total Sales: ₱
              {transactions
                .reduce((sum, tx) => sum + Number(tx.total_paid), 0)
                .toFixed(2)}
            </div>
          </div>
          <Table columns={columns} renderRow={renderRow} data={transactions} />
        </>
      )}
    </div>
  );
}
