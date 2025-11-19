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

  const router = useRouter();

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      const result = await res.json();

      if (!result.success) {
        setError(result.message || "Invalid credentials");
      } else {
        const { name, user_type } = result.user;
        toast.success(`Welcome ${name}!`);
        router.push(`/analytics`);
      }
    } catch (err) {
      console.error(err);
      setError("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
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
    </div>
  );
};

export default LoginPage;
