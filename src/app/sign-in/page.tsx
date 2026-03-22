"use client";

import { useState } from "react";
import { toast } from "sonner";
import Image from "next/image";
import { useRouter } from "next/navigation";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showConcurrentSessionModal, setShowConcurrentSessionModal] =
    useState(false);
  const [sessionConflictData, setSessionConflictData] = useState<any>(null);

  const router = useRouter();

  const handleSignIn = async (e: React.FormEvent, forceLogin = false) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password, forceLogin }),
      });

      const result = await res.json();

      if (!result.success) {
        if (result.requiresConfirmation) {
          setSessionConflictData(result);
          setShowConcurrentSessionModal(true);
        } else {
          setError(result.message || "Invalid credentials");
        }
      } else {
        const { name, user_type } = result.user;
        toast.success(`Welcome ${name}!`);
        setShowConcurrentSessionModal(false);
        router.push(`/analytics`);
      }
    } catch (err) {
      console.error(err);
      setError("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleForceLogin = (e: React.FormEvent) => {
    handleSignIn(e, true);
  };

  const handleCancelForceLogin = () => {
    setShowConcurrentSessionModal(false);
    setSessionConflictData(null);
  };

  return (
    <div className="relative min-h-screen overflow-hidden px-4 py-8 sm:px-6 lg:px-8">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 top-12 h-72 w-72 rounded-full bg-lamaSky/20 blur-3xl" />
        <div className="absolute right-6 top-20 h-64 w-64 rounded-full bg-lamaYellow/25 blur-3xl" />
        <div className="absolute bottom-10 left-1/3 h-56 w-56 rounded-full bg-lamaPurple/20 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto grid w-full max-w-5xl overflow-hidden rounded-[1.75rem] border border-black/10 bg-white/70 shadow-[0_30px_70px_rgba(20,26,20,0.16)] backdrop-blur md:grid-cols-[1.15fr_1fr]">
        <section className="hidden border-r border-black/10 bg-[linear-gradient(145deg,rgba(15,159,157,0.22),rgba(245,121,47,0.2))] p-8 md:flex md:flex-col md:justify-between">
          <div>
            <p className="neo-subtitle text-gray-700">Inventory + Checkout</p>
            <h1 className="neo-title mt-2 text-4xl font-semibold leading-tight text-gray-900">
              Sell smarter.
              <br />
              Operate faster.
            </h1>
            <p className="mt-4 max-w-sm text-sm text-gray-700">
              Manage products, transactions, and customer flow from one retail
              command center built for daily speed.
            </p>
          </div>

          <div className="rounded-2xl border border-black/10 bg-white/65 p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-gray-500">
              Trusted Operations Surface
            </p>
            <p className="mt-2 text-sm text-gray-700">
              Real-time analytics, stock control, and cashier workflows across
              your branches.
            </p>
          </div>
        </section>

        <form
          onSubmit={handleSignIn}
          className="p-8 sm:p-10 flex flex-col gap-4"
        >
          <div className="mb-2 flex items-center gap-3">
            <div className="rounded-xl border border-black/10 bg-white/80 p-1.5">
              <Image src="/logo.png" alt="Logo" width={58} height={58} />
            </div>
            <div>
              <p className="neo-subtitle">JA POS</p>
              <h2 className="neo-title text-2xl font-semibold text-gray-900">
                Welcome Back
              </h2>
            </div>
          </div>

          <p className="text-sm text-gray-600">
            Sign in to continue to your workspace.
          </p>

          {error && (
            <p className="rounded-xl border border-red-300/70 bg-red-50/90 px-3 py-2 text-sm font-medium text-red-600">
              {error}
            </p>
          )}

          <div className="flex flex-col gap-1.5">
            <label className="text-[11px] font-semibold uppercase tracking-[0.12em] text-gray-500">
              Username
            </label>
            <input
              type="text"
              className="rounded-xl border border-black/15 bg-white/80 p-2.5 text-sm"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-[11px] font-semibold uppercase tracking-[0.12em] text-gray-500">
              Password
            </label>
            <input
              type="password"
              className="rounded-xl border border-black/15 bg-white/80 p-2.5 text-sm"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="neo-btn mt-2 py-2.5 text-sm disabled:cursor-not-allowed disabled:opacity-50"
          >
            {isLoading ? "Signing In..." : "Sign In"}
          </button>

          <p className="pt-2 text-xs text-gray-500">
            Secure session monitoring is enabled for this account.
          </p>
        </form>
      </div>

      {/* Concurrent Session Modal */}
      {showConcurrentSessionModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm">
          <div className="neo-panel-strong w-full max-w-md border border-black/10 p-6">
            <p className="neo-subtitle">Session Conflict</p>
            <h3 className="neo-title mb-3 text-2xl font-semibold text-gray-800">
              Account Already Logged In
            </h3>

            <p className="text-sm text-gray-600 mb-4">
              {sessionConflictData?.message}
            </p>
            {sessionConflictData?.lastLoginAt && (
              <p className="mb-6 rounded-xl border border-black/10 bg-white/70 px-3 py-2 text-xs text-gray-500">
                Last login:{" "}
                {new Date(sessionConflictData.lastLoginAt).toLocaleString()}
              </p>
            )}

            <div className="flex gap-3">
              <button
                onClick={handleCancelForceLogin}
                className="neo-btn-ghost flex-1 px-4 py-2"
              >
                Cancel
              </button>
              <button
                onClick={handleForceLogin}
                disabled={isLoading}
                className="neo-btn-danger flex-1 px-4 py-2 disabled:opacity-50"
              >
                {isLoading ? "Logging In..." : "Force Login"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LoginPage;
