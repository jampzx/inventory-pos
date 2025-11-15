"use client";

import { useEffect, useState } from "react";

export default function DailySalesSummaryPage() {
  const [summary, setSummary] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [date, setDate] = useState(() => new Date().toISOString().slice(0, 10));

  const fetchSummary = async (dateStr: string) => {
    setLoading(true);
    try {
      const res = await fetch(`/api/report/daily-summary?date=${dateStr}`);
      const result = await res.json();
      if (result.success) setSummary(result.data);
      else setSummary(null);
    } catch (e) {
      setSummary(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSummary(date);
  }, [date]);

  return (
    <div className="max-w-xl mx-auto p-6 bg-white rounded shadow mt-8">
      <h1 className="text-2xl font-bold mb-4">Daily Sales Summary</h1>
      <div className="mb-4">
        <label className="mr-2 font-medium">Date:</label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="border rounded px-2 py-1"
        />
      </div>
      {loading ? (
        <div>Loading...</div>
      ) : summary ? (
        <div>
          <div className="mb-2">
            Total Sales: <b>₱{summary.totalSales.toFixed(2)}</b>
          </div>
          <div className="mb-2">
            Total Transactions: <b>{summary.totalTransactions}</b>
          </div>
          <div className="mb-2">
            <div className="font-medium">Payment Breakdown:</div>
            <ul className="ml-4 list-disc">
              {Object.entries(summary.paymentBreakdown).map(
                ([method, amount]) => (
                  <li key={method}>
                    {method}: ₱{Number(amount).toFixed(2)}
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      ) : (
        <div>No data found for this date.</div>
      )}
    </div>
  );
}
