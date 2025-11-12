"use client";

import { useState } from "react";
import { FaFileExcel, FaTable } from "react-icons/fa";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  onExport: (options: {
    from: string;
    to: string;
    status: string;
    format: "table" | "excel";
  }) => void;
  showStatusFilter?: boolean;
  showTableExport?: boolean;
};

export default function ExportModal({
  isOpen,
  onClose,
  onExport,
  showStatusFilter = true,
  showTableExport = true,
}: Props) {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [status, setStatus] = useState("all");
  const [error, setError] = useState("");

  if (!isOpen) return null;

  const validate = () => {
    if (!from || !to) {
      setError("Both start and end dates are required.");
      return false;
    }

    if (new Date(from) > new Date(to)) {
      setError("Start date cannot be after end date.");
      return false;
    }

    setError("");
    return true;
  };

  const handleExport = (format: "table" | "excel") => {
    if (!validate()) return;

    onExport({
      from,
      to,
      status,
      format,
    });
  };

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center px-4">
      <div className="bg-white rounded-lg shadow-xl p-6 w-full max-w-md">
        <h2 className="text-lg font-bold text-gray-800 mb-4">
          Export Transactions
        </h2>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Start Date
            </label>
            <input
              type="date"
              value={from}
              onChange={(e) => setFrom(e.target.value)}
              className="mt-1 block w-full border rounded px-3 py-2 text-sm"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              End Date
            </label>
            <input
              type="date"
              value={to}
              onChange={(e) => setTo(e.target.value)}
              className="mt-1 block w-full border rounded px-3 py-2 text-sm"
            />
          </div>

          {showStatusFilter && (
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Status
              </label>
              <select
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                className="mt-1 block w-full border rounded px-3 py-2 text-sm"
              >
                <option value="all">All</option>
                <option value="completed">Completed</option>
                <option value="voided">Voided</option>
                <option value="pending">Pending</option>
              </select>
            </div>
          )}

          {error && (
            <p className="text-sm text-red-600 mt-2 font-medium">{error}</p>
          )}
        </div>

        <div className="mt-6 flex justify-between gap-2">
          <button
            onClick={onClose}
            className="w-full py-2 text-sm bg-gray-100 hover:bg-gray-200 rounded text-gray-800"
          >
            Cancel
          </button>

          {showTableExport && (
            <button
              onClick={() => handleExport("table")}
              className="w-full py-2 text-sm flex items-center justify-center gap-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:bg-blue-300"
            >
              <FaTable /> View Table
            </button>
          )}

          <button
            onClick={() => handleExport("excel")}
            className="w-full py-2 text-sm flex items-center justify-center gap-2 bg-green-600 text-white rounded hover:bg-green-700"
          >
            <FaFileExcel /> Export Excel
          </button>
        </div>
      </div>
    </div>
  );
}
