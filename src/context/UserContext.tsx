"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { useCallback } from "react";
import { usePathname, useRouter } from "next/navigation";
import { toast } from "sonner";
import { usePermissions } from "@/context/PermissionContext";
import type { JwtUserPayload } from "@/types/auth";

type Permission = { group: string; action: string };

type UserContextType = {
  user: JwtUserPayload | null;
  authorizedUserType: string;
  loadingUseUser: boolean;
  refreshUser: () => Promise<void>;
};

type MeResponse = {
  user: JwtUserPayload;
  authorizedUserType?: string;
  permissions?: Permission[];
};

const UserContext = createContext<UserContextType | undefined>(undefined);

let hasRedirectedOnce = false;
let hasLoadedUser = false;
let cachedUser: JwtUserPayload | null = null;
let cachedAuthorizedUserType = "";
let cachedPermissions: Permission[] = [];
let inFlightRequest: Promise<MeResponse | null> | null = null;

const PUBLIC_PATHS = ["/sign-in", "/unauthorized"];

const isPublicPath = (pathname: string) =>
  PUBLIC_PATHS.some((path) => pathname.startsWith(path));

const fetchCurrentUser = async (): Promise<MeResponse | null> => {
  if (inFlightRequest) {
    return inFlightRequest;
  }

  inFlightRequest = (async () => {
    const res = await fetch("/api/me", { credentials: "include" });

    if (!res.ok) {
      return null;
    }

    return (await res.json()) as MeResponse;
  })();

  try {
    return await inFlightRequest;
  } finally {
    inFlightRequest = null;
  }
};

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<JwtUserPayload | null>(cachedUser);
  const [authorizedUserType, setAuthorizedUserType] = useState<string>(
    cachedAuthorizedUserType,
  );
  const [loadingUseUser, setLoadingUseUser] = useState<boolean>(!hasLoadedUser);

  const pathname = usePathname();
  const router = useRouter();
  const { setPermissions } = usePermissions();

  const hydrateFromCache = useCallback(() => {
    setUser(cachedUser);
    setAuthorizedUserType(cachedAuthorizedUserType);
    setPermissions(cachedPermissions);
    setLoadingUseUser(false);
  }, [setPermissions]);

  const handleUnauthenticated = useCallback(() => {
    cachedUser = null;
    cachedAuthorizedUserType = "";
    cachedPermissions = [];
    hasLoadedUser = false;

    setUser(null);
    setAuthorizedUserType("");
    setPermissions([]);

    if (!isPublicPath(pathname) && !hasRedirectedOnce) {
      hasRedirectedOnce = true;
      toast.error("User unauthenticated. Please log in again.");
      router.push("/sign-in");
    }
  }, [pathname, router, setPermissions]);

  const loadUser = useCallback(
    async (force = false) => {
      if (isPublicPath(pathname)) {
        setLoadingUseUser(false);
        return;
      }

      if (!force && hasLoadedUser) {
        hydrateFromCache();
        return;
      }

      setLoadingUseUser(true);

      try {
        const data = await fetchCurrentUser();

        if (!data?.user) {
          handleUnauthenticated();
          return;
        }

        cachedUser = data.user;
        cachedAuthorizedUserType = data.authorizedUserType || "admin";
        cachedPermissions = data.permissions || [];
        hasLoadedUser = true;
        hasRedirectedOnce = false;

        setUser(cachedUser);
        setAuthorizedUserType(cachedAuthorizedUserType);
        setPermissions(cachedPermissions);
      } catch (error) {
        console.error("Failed to fetch user:", error);
        handleUnauthenticated();
      } finally {
        setLoadingUseUser(false);
      }
    },
    [handleUnauthenticated, hydrateFromCache, pathname, setPermissions],
  );

  useEffect(() => {
    loadUser();
  }, [loadUser]);

  const value: UserContextType = {
    user,
    authorizedUserType,
    loadingUseUser,
    refreshUser: async () => loadUser(true),
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export const useUserContext = () => {
  const ctx = useContext(UserContext);

  if (!ctx) {
    throw new Error("useUserContext must be used within UserProvider");
  }

  return ctx;
};
