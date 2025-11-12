"use client";

import { useEffect, useState } from "react";
import Table from "@/components/Table";
import { toast } from "sonner";
import { useParams } from "next/navigation";

type Order = {
  id: number;
  product: string;
  quantity: number;
  order_price: number;
  selling_price: number;
  profit_per_unit: number;
  net_profit: number;
  remaining_quantity: number;
  stocked_in: boolean;
  order_date: string;
  status: string;
};

const columns = [
  { header: "Date", accessor: "order_date" },
  { header: "Product", accessor: "product" },
  { header: "Quantity", accessor: "quantity" },
  { header: "Order Price", accessor: "order_price" },
  { header: "Selling Price", accessor: "selling_price" },
  { header: "Total Cost", accessor: "total_cost" },
  { header: "Net Profit", accessor: "net_profit" },
  { header: "Remaining", accessor: "remaining_quantity" },
  { header: "Status", accessor: "status" },
];

export default function OrderReportPage() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);
  const params = useParams();
  const from = params.from;
  const to = params.to;
  const status = params.status;

  useEffect(() => {
    const fetchExport = async () => {
      setLoading(true);
      try {
        const res = await fetch("/api/order/export", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            startDate: from,
            endDate: to,
            status,
            format: "table",
          }),
        });
        const data = await res.json();
        if (data.success) {
          setOrders(data.data);
        } else {
          toast.error(data.error || "Failed to fetch order export data.");
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

  const renderRow = (order: Order) => {
    const totalCost = order.quantity * order.order_price;

    const statusColor =
      order.status === "completed"
        ? "text-green-600"
        : order.status === "voided"
        ? "text-red-600"
        : "text-yellow-500";

    return (
      <tr
        key={order.id}
        className="border-b border-gray-200 even:bg-slate-50 text-sm"
      >
        <td className="p-4">
          {new Date(order.order_date).toLocaleDateString()}
        </td>
        <td className="p-4">{order.product}</td>
        <td className="p-4">{order.quantity}</td>
        <td className="p-4">₱{Number(order.order_price).toFixed(2)}</td>
        <td className="p-4">₱{Number(order.selling_price).toFixed(2)}</td>
        <td className="p-4">₱{totalCost.toFixed(2)}</td>
        <td className="p-4 text-green-600 font-semibold">
          ₱{Number(order.net_profit).toFixed(2)}
        </td>
        <td className="p-4">{order.remaining_quantity}</td>
        <td className={`p-4 font-semibold capitalize ${statusColor}`}>
          {order.status}
        </td>
      </tr>
    );
  };

  return (
    <div className="bg-white p-4 rounded-md flex-1 m-4 mt-0">
      <h1 className="text-lg font-semibold mb-4">Order Report</h1>
      {loading ? (
        <div className="text-center text-sm text-gray-500 p-4">Loading...</div>
      ) : orders.length === 0 ? (
        <div className="text-center text-sm text-gray-500 p-4">
          No data found.
        </div>
      ) : (
        <Table columns={columns} renderRow={renderRow} data={orders} />
      )}
    </div>
  );
}
