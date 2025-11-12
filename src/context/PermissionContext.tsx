"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type Permission = { group: string; action: string };

type PermissionContextType = {
  permissions: Permission[];
  setPermissions: (perms: Permission[]) => void;
  can: (group: string, action: string) => boolean;
};

const PermissionContext = createContext<PermissionContextType | undefined>(
  undefined
);

export const PermissionProvider = ({ children }: { children: ReactNode }) => {
  const [permissions, setPermissions] = useState<Permission[]>([]);

  const can = (group: string, action: string) => {
    const result = permissions.some(
      (p) => p.group === group && p.action === action
    );
    console.log(`Checking permission for ${group}:${action} -> ${result}`);
    return result;
  };

  return (
    <PermissionContext.Provider value={{ permissions, setPermissions, can }}>
      {children}
    </PermissionContext.Provider>
  );
};

export const usePermissions = () => {
  const ctx = useContext(PermissionContext);
  if (!ctx)
    throw new Error("usePermissions must be used within PermissionProvider");
  return ctx;
};
