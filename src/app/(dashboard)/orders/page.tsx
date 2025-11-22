"use client";

import { useEffect, useMemo, useState } from "react";
import FormModal from "@/components/FormModal";
import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import TableSearch from "@/components/TableSearch";
import { useUser } from "@/hooks/useUser";
import Image from "next/image";
import StockInModal from "@/components/StockInModal";
import { FaCartPlus, FaBan, FaFileExport } from "react-icons/fa";
import ConfirmationModal from "@/components/ConfirmationModal";
import { toast } from "sonner";
import ExportModal from "@/components/ExportModal";
import { useRouter } from "next/navigation";
import * as XLSX from "xlsx";
import Spinner from "@/components/Spinner";

type Order = {
  id: number;
  product: string;
  quantity: number;
  remaining_quantity: number;
  order_price: number;
  selling_price: number;
  order_date: string;
  status: string;
};

const columns = [
  { header: "Product", accessor: "product" },
  { header: "Quantity", accessor: "quantity" },
  { header: "Remaining Quantity", accessor: "remaining_quantity" },
  { header: "Order Price", accessor: "order_price" },
  { header: "Selling Price", accessor: "selling_price" },
  { header: "Net Profit", accessor: "net_profit" },
  { header: "Order Date", accessor: "order_date" },
  { header: "Status", accessor: "status" },
  { header: "Actions", accessor: "action" },
];

const ITEMS_PER_PAGE = 10;

const OrdersPage = () => {
  const router = useRouter();
  const { user } = useUser();
  const [orders, setOrders] = useState<Order[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortKey, setSortKey] = useState("product");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [selectedStockInOrder, setSelectedStockInOrder] =
    useState<Order | null>(null);
  const [voidingOrderId, setVoidingOrderId] = useState<number | null>(null);
  const [showExportModal, setShowExportModal] = useState(false);

  const fetchOrders = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/order/listing");
      const data = await res.json();

      if (Array.isArray(data)) {
        const mapped = data.map((o: any) => {
          return {
            ...o,
            product: o.product || o.productRef?.name || "Unknown",
            order_price: Number(o.order_price),
            selling_price: Number(o.selling_price),
          };
        });
        setOrders(mapped);
      } else {
        console.error("Unexpected result:", data);
      }
    } catch (err) {
      console.error("Error fetching orders:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  const filteredAndSorted = useMemo(() => {
    let filtered = [...orders];
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      filtered = filtered.filter((c) => c.product.toLowerCase().includes(term));
    }
    return filtered.sort((a, b) => {
      const aVal = (a as any)[sortKey];
      const bVal = (b as any)[sortKey];
      const aStr = aVal?.toString().toLowerCase() || "";
      const bStr = bVal?.toString().toLowerCase() || "";
      return sortOrder === "asc"
        ? aStr.localeCompare(bStr)
        : bStr.localeCompare(aStr);
    });
  }, [orders, searchTerm, sortKey, sortOrder]);

  const paginated = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredAndSorted.slice(start, start + ITEMS_PER_PAGE);
  }, [filteredAndSorted, currentPage]);

  const totalPages = Math.ceil(filteredAndSorted.length / ITEMS_PER_PAGE);

  const renderRow = (item: Order) => {
    const profitPerUnit = item.selling_price - item.order_price;
    const netProfit = item.quantity * profitPerUnit;

    return (
      <tr
        key={item.id}
        className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-lamaPurpleLight"
      >
        <td className="p-4">{item.product}</td>
        <td className="p-4">{item.quantity}</td>
        <td className="p-4">
          <span
            className={`font-semibold ${
              item.remaining_quantity === 0
                ? "text-red-500"
                : item.remaining_quantity === item.quantity
                ? "text-green-500"
                : "text-yellow-500"
            }`}
          >
            {item.remaining_quantity}
          </span>
        </td>
        <td className="p-4">₱{item.order_price.toFixed(2)}</td>
        <td className="p-4">₱{item.selling_price.toFixed(2)}</td>
        <td className="p-4">₱{netProfit.toFixed(2)}</td>
        <td className="p-4">
          {new Date(item.order_date).toLocaleDateString()}
        </td>
        <td
          className={`p-4 capitalize font-semibold ${
            item.status === "completed"
              ? "text-green-500"
              : item.status === "pending"
              ? "text-yellow-500"
              : "text-red-500"
          }`}
        >
          {item.status}
        </td>

        <td className="p-4">
          <div className="flex items-center gap-2">
            {item.remaining_quantity > 0 && item.status == "pending" && (
              <button
                title="Stock In"
                onClick={() => setSelectedStockInOrder(item)}
                className="w-7 h-7 flex items-center justify-center rounded-full bg-lamaPurple text-white"
              >
                <FaCartPlus size={16} />
              </button>
            )}

            {item.remaining_quantity === item.quantity && (
              <>
                <FormModal
                  table="order"
                  type="update"
                  data={item}
                  id={item.id}
                  onSuccess={fetchOrders}
                />
                <FormModal
                  table="order"
                  type="delete"
                  id={item.id}
                  onSuccess={fetchOrders}
                />
              </>
            )}
            {/* Void Button - show only if not voided */}
            <>
              {item.status !== "voided" && (
                <button
                  title="Void Order"
                  onClick={() => setVoidingOrderId(item.id)}
                  className="w-7 h-7 flex items-center justify-center rounded-full bg-red-300 text-white"
                >
                  <FaBan size={14} />
                </button>
              )}
            </>
          </div>
        </td>
      </tr>
    );
  };

  return (
    <div className="bg-white p-4 rounded-md flex-1 m-4 mt-0">
      <div className="flex items-center justify-between">
        <h1 className="text-lg font-semibold">Orders</h1>
        <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
          <TableSearch onSearch={setSearchTerm} />
          <div className="flex items-center gap-4">
            <select
              className="text-sm px-3 py-2 rounded-lg border border-gray-300 bg-white shadow-sm"
              value={sortKey}
              onChange={(e) => setSortKey(e.target.value)}
            >
              {columns.map((col) => (
                <option key={col.accessor} value={col.accessor}>
                  {col.header}
                </option>
              ))}
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
            <FormModal table="order" type="create" onSuccess={fetchOrders} />
          </div>
        </div>
      </div>

      {/* Summary Metrics */}
      <div className="text-sm font-medium text-gray-700 mb-4 space-y-1">
        <div>
          Total Expenses:{" "}
          <span className="text-red-600 font-semibold">
            ₱
            {filteredAndSorted
              .filter((o) => o.status !== "voided")
              .reduce((sum, o) => sum + Number(o.order_price) * o.quantity, 0)
              .toLocaleString(undefined, {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
          </span>
        </div>

        <div>
          Net Profit:{" "}
          <span className="text-blue-600 font-semibold">
            ₱
            {filteredAndSorted
              .filter((o) => o.status !== "voided")
              .reduce(
                (sum, o) =>
                  sum +
                  (Number(o.selling_price) - Number(o.order_price)) *
                    o.quantity,
                0
              )
              .toLocaleString(undefined, {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
          </span>
        </div>
      </div>

      {loading ? (
        <div className="flex justify-center items-center p-8">
          <div className="flex flex-col items-center gap-3">
            <Spinner size={32} color="lamaSky" />
            <span className="text-sm text-gray-500">Loading orders...</span>
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

      {selectedStockInOrder && (
        <StockInModal
          order={selectedStockInOrder}
          onClose={() => setSelectedStockInOrder(null)}
          onSuccess={() => {
            setSelectedStockInOrder(null);
            fetchOrders();
          }}
        />
      )}

      <ConfirmationModal
        isOpen={voidingOrderId !== null}
        title="Void Order"
        message="Are you sure you want to void this order? This action cannot be undone."
        confirmLabel="Void"
        cancelLabel="Cancel"
        confirmColor="bg-red-500 hover:bg-red-600"
        onCancel={() => setVoidingOrderId(null)}
        onConfirm={async () => {
          if (voidingOrderId == null) return;

          const res = await fetch(`/api/order/void/${voidingOrderId}`, {
            method: "POST",
          });
          const data = await res.json();

          if (data.success) {
            toast.success("Order voided successfully.");

            fetchOrders();
          } else {
            toast.error("Failed to void the order.");
          }

          setVoidingOrderId(null);
        }}
      />

      <ExportModal
        isOpen={showExportModal}
        onClose={() => setShowExportModal(false)}
        onExport={async (options) => {
          setShowExportModal(false);

          if (options.format === "table") {
            router.push(
              `/report/order/${options.from}/${options.to}/${options.status}`
            );
            return;
          }

          try {
            const res = await fetch("/api/order/export", {
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

            const orders = result.data;

            let totalNet = 0;

            const worksheetData = orders.map((order: any) => {
              const isVoided = order.status === "voided";
              const netProfit = isVoided ? 0 : Number(order.net_profit);

              if (!isVoided) {
                totalNet += netProfit;
              }

              return {
                ID: order.id,
                Product: order.product,
                Quantity: order.quantity,
                OrderPrice: Number(order.order_price).toFixed(2),
                SellingPrice: Number(order.selling_price).toFixed(2),
                ProfitPerUnit: Number(order.profit_per_unit).toFixed(2),
                NetProfit: netProfit.toFixed(2),
                Date: new Date(order.order_date).toLocaleDateString(),
                Status: order.status,
              };
            });

            // Summary row
            worksheetData.push({
              ID: "",
              Product: "",
              Quantity: "",
              OrderPrice: "",
              SellingPrice: "",
              ProfitPerUnit: "TOTAL",
              NetProfit: totalNet.toFixed(2),
              Date: "",
              Status: "",
            });

            const worksheet = XLSX.utils.json_to_sheet(worksheetData);
            const workbook = XLSX.utils.book_new();
            XLSX.utils.book_append_sheet(workbook, worksheet, "Orders");

            const filename = `orders_${options.from}_${options.to}.xlsx`;
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

export default OrdersPage;
