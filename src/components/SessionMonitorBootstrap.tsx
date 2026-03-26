"use client";

import { usePathname } from "next/navigation";
import { useSessionMonitor } from "@/hooks/useSessionMonitor";

const PUBLIC_PATHS = ["/sign-in", "/unauthorized"];

export default function SessionMonitorBootstrap() {
  const pathname = usePathname();
  const shouldMonitor = !PUBLIC_PATHS.some((path) => pathname.startsWith(path));

  useSessionMonitor({
    enabled: shouldMonitor,
    intervalMs: 60 * 60 * 1000,
    triggerKey: pathname,
  });

  return null;
}
