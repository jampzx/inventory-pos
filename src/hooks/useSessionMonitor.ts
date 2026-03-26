import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

type SessionMonitorOptions = {
  enabled?: boolean;
  intervalMs?: number;
  triggerKey?: string;
};

const DEFAULT_INTERVAL_MS = 60 * 60 * 1000;

export function useSessionMonitor(options: SessionMonitorOptions = {}) {
  const {
    enabled = true,
    intervalMs = DEFAULT_INTERVAL_MS,
    triggerKey,
  } = options;
  const router = useRouter();
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const isCheckingRef = useRef(false);

  useEffect(() => {
    if (!enabled) {
      return;
    }

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
                },
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

    // Run one initial check and then poll on the configured interval.
    checkSessionStatus();
    intervalRef.current = setInterval(checkSessionStatus, intervalMs);

    const handleWindowFocus = () => {
      checkSessionStatus();
    };

    const handleVisibilityChange = () => {
      if (document.visibilityState === "visible") {
        checkSessionStatus();
      }
    };

    window.addEventListener("focus", handleWindowFocus);
    document.addEventListener("visibilitychange", handleVisibilityChange);

    // Cleanup on unmount
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }

      window.removeEventListener("focus", handleWindowFocus);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [enabled, intervalMs, router, triggerKey]);

  // Return cleanup function for manual use
  const stopMonitoring = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  return { stopMonitoring };
}
