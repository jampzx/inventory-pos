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
    <div className="h-screen flex items-center justify-center bg-lamaSkyLight px-4">
      <form
        onSubmit={handleSignIn}
        className="bg-white p-8 sm:p-10 rounded-xl shadow-2xl flex flex-col gap-4 w-full max-w-md"
      >
        <div className="flex items-center gap-2 justify-center mb-2">
          <Image src="/logo.png" alt="Logo" width={120} height={120} />
        </div>
        <p className="text-center text-sm text-gray-500 mb-2">
          Sign in to your account
        </p>

        {error && <p className="text-sm text-red-500 text-center">{error}</p>}

        <div className="flex flex-col gap-1">
          <label className="text-xs text-gray-600">Username</label>
          <input
            type="text"
            className="p-2 rounded-md ring-1 ring-gray-300 text-sm"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-xs text-gray-600">Password</label>
          <input
            type="password"
            className="p-2 rounded-md ring-1 ring-gray-300 text-sm"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="bg-blue-600 hover:bg-blue-700 transition text-white text-sm py-2 px-4 rounded-md mt-2 disabled:opacity-50"
        >
          {isLoading ? "Signing In..." : "Sign In"}
        </button>
      </form>

      {/* Concurrent Session Modal */}
      {showConcurrentSessionModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg p-6 max-w-md w-full">
            <h3 className="text-lg font-semibold mb-4">
              Account Already Logged In
            </h3>
            <p className="text-sm text-gray-600 mb-4">
              {sessionConflictData?.message}
            </p>
            {sessionConflictData?.lastLoginAt && (
              <p className="text-xs text-gray-500 mb-6">
                Last login:{" "}
                {new Date(sessionConflictData.lastLoginAt).toLocaleString()}
              </p>
            )}
            <div className="flex gap-3">
              <button
                onClick={handleCancelForceLogin}
                className="flex-1 px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition"
              >
                Cancel
              </button>
              <button
                onClick={handleForceLogin}
                disabled={isLoading}
                className="flex-1 px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition disabled:opacity-50"
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
