import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { JwtUserPayload } from "@/types/auth";
import { toast } from "sonner";
import { usePermissions } from "@/context/PermissionContext";

let hasRedirectedOnce = false;

export function useUser() {
  const [user, setUser] = useState<JwtUserPayload | null>(null);
  const [loadingUseUser, setLoadingUseUser] = useState(true);
  const router = useRouter();
  const { setPermissions } = usePermissions();
  useEffect(() => {
    async function fetchUser() {
      try {
        const res = await fetch("/api/me");

        if (!res.ok) {
          if (!hasRedirectedOnce) {
            hasRedirectedOnce = true;
            toast.error("User unauthenticated. Please log in again.");
            router.push("/sign-in");
          }
          return;
        }

        const data = await res.json();
        setUser(data.user);
        setPermissions(data.permissions);
      } catch (err) {
        console.error("Failed to fetch user:", err);
        if (!hasRedirectedOnce) {
          hasRedirectedOnce = true;
          router.push("/sign-in");
        }
      } finally {
        setLoadingUseUser(false);
      }
    }

    fetchUser();
  }, [router, setPermissions]);

  return { user, loadingUseUser };
}
