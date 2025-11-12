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

    if (user.user_type === "admin") {
      router.push("/admin");
    } else if (user.user_type === "cashier") {
      router.push("/cashier");
    } else {
      router.push("/sign-in");
    }
  }, [user, loadingUseUser, router]);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white/30 backdrop-blur-sm z-50">
      <Spinner size={48} color="lamaSky" />
    </div>
  );
};

export default Homepage;
