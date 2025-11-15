"use client";

import { usePathname, useRouter } from "next/navigation";
import { useUser } from "@/hooks/useUser";
import clsx from "clsx";
import Link from "next/link";
import ConfirmationModal from "@/components/ConfirmationModal";
import { useState } from "react";
import { toast } from "sonner";
import {
  FiShoppingCart,
  FiTruck,
  FiPackage,
  FiCreditCard,
  FiLogOut,
  FiFileText,
} from "react-icons/fi";
import { BsCashCoin } from "react-icons/bs";

type MenuItem = {
  icon: JSX.Element;
  label: string;
  href: string;
};

const menuItems: { title: string; items: MenuItem[] }[] = [
  {
    title: "Menu",
    items: [
      {
        icon: <FiShoppingCart />,
        label: "POS",
        href: "/pos",
      },
      {
        icon: <FiShoppingCart />,
        label: "Transactions",
        href: "/transactions",
      },
      {
        icon: <FiTruck />,
        label: "Purchase Order",
        href: "/orders",
      },
      {
        icon: <FiPackage />,
        label: "Products",
        href: "/products",
      },
      {
        icon: <FiFileText />,
        label: "Daily Sales Summary",
        href: "/report/daily-summary",
      },
    ],
  },
  {
    title: "Account",
    items: [
      {
        icon: <FiPackage />,
        label: "Users",
        href: "/users",
      },
      {
        icon: <FiLogOut />,
        label: "Logout",
        href: "/logout",
      },
    ],
  },
];

const Menu = () => {
  const pathname = usePathname();
  const router = useRouter();
  const { user } = useUser();
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const [expandedSections, setExpandedSections] = useState<
    Record<string, boolean>
  >({});

  const toggleSection = (title: string) => {
    setExpandedSections((prev) => ({
      ...prev,
      [title]: !prev[title],
    }));
  };

  const handleLogout = async () => {
    try {
      await fetch("/api/auth/logout", { method: "GET" });
      toast.success("Logged out successfully");
      router.push("/sign-in");
    } catch (err) {
      console.error("Logout error:", err);
      toast.error("Failed to log out");
    }
  };

  if (!user) return null;

  return (
    <>
      <div className="mt-4 text-sm">
        {menuItems.map((section) => {
          const visibleItems = section.items;

          if (visibleItems.length === 0) return null;

          const isExpanded = expandedSections[section.title] ?? true;

          return (
            <div className="flex flex-col gap-2" key={section.title}>
              <button
                onClick={() => toggleSection(section.title)}
                className="hidden lg:flex items-center justify-between text-gray-400 font-light my-4 px-2 w-full"
              >
                <span>{section.title}</span>
              </button>

              {isExpanded &&
                visibleItems.map((item) => {
                  const isActive = pathname === item.href;

                  if (item.label === "Logout") {
                    return (
                      <button
                        key={item.label}
                        onClick={() => setShowLogoutModal(true)}
                        className={clsx(
                          "flex items-center justify-center lg:justify-start gap-4 py-2 md:px-2 rounded-md hover:bg-lamaSkyLight text-left w-full",
                          isActive
                            ? "text-gray-500 bg-lamaSky"
                            : "text-gray-500"
                        )}
                      >
                        <span className="text-lg">{item.icon}</span>
                        <span className="hidden lg:block">{item.label}</span>
                      </button>
                    );
                  }

                  return (
                    <Link
                      href={item.href}
                      key={item.label}
                      className={clsx(
                        "flex items-center justify-center lg:justify-start gap-4 py-2 md:px-2 rounded-md hover:bg-lamaSkyLight",
                        isActive ? "text-gray-500 bg-lamaSky" : "text-gray-500"
                      )}
                    >
                      <span className="text-lg">{item.icon}</span>
                      <span className="hidden lg:block">{item.label}</span>
                    </Link>
                  );
                })}
            </div>
          );
        })}
      </div>

      <ConfirmationModal
        isOpen={showLogoutModal}
        title="Confirm Logout"
        message="Are you sure you want to log out of your account?"
        confirmLabel="Logout"
        cancelLabel="Stay"
        confirmColor="bg-blue-600 hover:bg-blue-700"
        onCancel={() => setShowLogoutModal(false)}
        onConfirm={handleLogout}
      />
    </>
  );
};

export default Menu;
