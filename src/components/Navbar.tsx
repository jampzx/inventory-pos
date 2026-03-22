"use client";
import Image from "next/image";
import { useUser } from "@/hooks/useUser";
import Spinner from "@/components/Spinner";
import { usePathname } from "next/navigation";
import { useMemo } from "react";

const Navbar = () => {
  const { user, loadingUseUser } = useUser();
  const pathname = usePathname();

  const pageTitle = useMemo(() => {
    const segment = pathname.split("/").filter(Boolean)[0] || "analytics";
    return segment
      .replace(/-/g, " ")
      .replace(/\b\w/g, (char) => char.toUpperCase());
  }, [pathname]);

  const todayLabel = useMemo(
    () =>
      new Intl.DateTimeFormat("en-US", {
        weekday: "short",
        month: "long",
        day: "numeric",
      }).format(new Date()),
    [],
  );

  return (
    <header className="sticky top-0 z-30 px-2 pt-2 sm:px-4 md:px-6 md:pt-4">
      <div className="neo-panel px-4 py-3 sm:px-5 sm:py-4">
        <div className="flex items-center justify-between gap-4 pl-12 md:pl-0">
          <div className="min-w-0">
            <p className="neo-subtitle">Operations Dashboard</p>
            <h1 className="neo-title truncate text-lg font-semibold text-gray-800 sm:text-2xl">
              {pageTitle}
            </h1>
          </div>

          <div className="ml-auto flex items-center gap-3 sm:gap-4">
            <div className="neo-pill hidden sm:flex">{todayLabel}</div>

            <div className="flex items-center gap-2.5 rounded-xl border border-black/10 bg-white/70 px-2.5 py-1.5 shadow-sm sm:gap-3 sm:px-3">
              <div className="flex flex-col items-end">
                <span className="text-xs leading-4 font-semibold text-gray-800 sm:text-sm">
                  {loadingUseUser ? (
                    <span className="inline-flex items-center gap-2">
                      <Spinner size={12} color="lamaSky" />
                      Loading...
                    </span>
                  ) : (
                    user?.name || "Guest"
                  )}
                </span>
                <span className="text-[10px] uppercase tracking-[0.12em] text-gray-500">
                  {user?.user_type || "viewer"}
                </span>
              </div>

              <div className="h-9 w-9 overflow-hidden rounded-lg border border-black/10 bg-lamaYellowLight sm:h-10 sm:w-10">
                <Image
                  src="/avatar.png"
                  alt="User avatar"
                  width={40}
                  height={40}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
