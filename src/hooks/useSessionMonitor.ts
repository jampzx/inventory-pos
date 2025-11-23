import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export function useSessionMonitor() {
  const router = useRouter();
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const isCheckingRef = useRef(false);

  useEffect(() => {
    const checkSessionStatus = async () => {
      // Prevent multiple simultaneous checks
      if (isCheckingRef.current) return;
      isCheckingRef.current = true;

      try {
        const response = await fetch("/api/auth/session/status", {
          credentials: "include",
        });

        if (response.ok) {
          const result = await response.json();

          if (!result.valid) {
            // Clear interval to stop further checks
            if (intervalRef.current) {
              clearInterval(intervalRef.current);
              intervalRef.current = null;
            }

            if (result.reason === "session_invalidated") {
              toast.error(
                result.message ||
                  "Security Alert: Your session has been terminated because this account was accessed from another device or browser. For your security, please log in again to continue using the application.",
                {
                  duration: 8000,
                }
              );
            }

            // Redirect to login page
            router.push("/sign-in");
          }
        }
      } catch (error) {
        console.error("Error checking session status:", error);
      } finally {
        isCheckingRef.current = false;
      }
    };

    // Start monitoring every 5 seconds
    intervalRef.current = setInterval(checkSessionStatus, 5000);

    // Cleanup on unmount
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [router]);

  // Return cleanup function for manual use
  const stopMonitoring = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  return { stopMonitoring };
}
