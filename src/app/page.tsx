"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useUser } from "@/hooks/useUser";
import Spinner from "@/components/Spinner";

const Homepage = () => {
  const router = useRouter();
  const { user, loadingUseUser } = useUser();

  useEffect(() => {
    if (loadingUseUser) return;

    if (!user) {
      router.push("/sign-in");
      return;
    }

    if (user.user_type) {
      router.push("/analytics");
    } else {
      router.push("/sign-in");
    }
  }, [user, loadingUseUser, router]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/20 backdrop-blur-sm">
      <div className="neo-panel flex items-center gap-3 rounded-2xl border border-black/10 px-5 py-4">
        <Spinner size={36} color="lamaSky" />
        <div>
          <p className="neo-subtitle">Redirecting</p>
          <p className="text-sm font-medium text-gray-700">
            Preparing dashboard...
          </p>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
