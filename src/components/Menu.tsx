"use client";

import { motion, AnimatePresence } from "framer-motion";
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
  FiUsers,
  FiSettings,
  FiChevronDown,
} from "react-icons/fi";
import { BsCashCoin } from "react-icons/bs";

type MenuItem = {
  icon: JSX.Element;
  label: string;
  href: string;
};

interface MenuProps {
  onItemClick?: () => void;
}

const menuItems: { title: string; items: MenuItem[] }[] = [
  {
    title: "Dashboard",
    items: [
      {
        icon: <FiFileText />,
        label: "Analytics",
        href: "/analytics",
      },
    ],
  },
  {
    title: "Menu",
    items: [
      {
        icon: <FiShoppingCart />,
        label: "POS",
        href: "/pos",
      },
      {
        icon: <FiPackage />,
        label: "Products",
        href: "/products",
      },
      {
        icon: <FiTruck />,
        label: "Orders",
        href: "/orders",
      },
      {
        icon: <BsCashCoin />,
        label: "Expenses",
        href: "/expenses",
      },
      {
        icon: <FiCreditCard />,
        label: "Transactions",
        href: "/transactions",
      },
    ],
  },
  {
    title: "Account",
    items: [
      {
        icon: <FiSettings />,
        label: "Settings",
        href: "/settings",
      },
      {
        icon: <FiUsers />,
        label: "Users",
        href: "/users",
      },
      {
        icon: <FiUsers />,
        label: "Customers",
        href: "/customers",
      },
      {
        icon: <FiUsers />,
        label: "Companies",
        href: "/companies",
      },
      {
        icon: <FiLogOut />,
        label: "Logout",
        href: "/logout",
      },
    ],
  },
];

const Menu = ({ onItemClick }: MenuProps) => {
  const pathname = usePathname();
  const router = useRouter();
  const { user, authorizedUserType } = useUser();
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
      <motion.div
        className="mt-4 text-sm"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {menuItems.map((section, sectionIndex) => {
          // Filter out Users and Companies menu items for non-authorized users
          const visibleItems = section.items.filter((item) => {
            if (
              user.user_type !== authorizedUserType &&
              (item.label === "Users" || item.label === "Companies")
            ) {
              return false;
            }
            return true;
          });

          if (visibleItems.length === 0) return null;

          const isExpanded = expandedSections[section.title] ?? true;

          return (
            <motion.div
              className="mb-2 flex flex-col gap-1.5"
              key={section.title}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.3,
                delay: 0.3 + sectionIndex * 0.1,
                ease: "easeOut",
              }}
            >
              <motion.button
                onClick={() => toggleSection(section.title)}
                className="flex w-full items-center justify-between rounded-lg px-2 py-2 text-gray-700"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="neo-subtitle tracking-[0.16em] text-[0.65rem] text-gray-500">
                  {section.title}
                </span>
                <motion.div
                  animate={{ rotate: isExpanded ? 180 : 0 }}
                  transition={{ duration: 0.2, ease: "easeInOut" }}
                >
                  <FiChevronDown className="text-sm" />
                </motion.div>
              </motion.button>

              <AnimatePresence>
                {isExpanded &&
                  visibleItems.map((item, itemIndex) => {
                    const isActive = pathname === item.href;
                    const itemBaseClass =
                      "group flex w-full items-center gap-3 rounded-xl border px-3 py-2.5 text-left transition-all duration-200";
                    const itemStateClass = isActive
                      ? "border-lamaSky/40 bg-lamaSky/15 text-gray-800 shadow-sm"
                      : "border-transparent bg-transparent text-gray-600 hover:border-black/10 hover:bg-white/70 hover:text-gray-800";
                    const iconClass = isActive
                      ? "border-lamaSky/30 bg-lamaSky/20 text-lamaSky"
                      : "border-black/10 bg-white/70 text-gray-500 group-hover:text-gray-700";

                    if (item.label === "Logout") {
                      return (
                        <motion.button
                          key={item.label}
                          onClick={() => {
                            setShowLogoutModal(true);
                            onItemClick?.();
                          }}
                          className={clsx(
                            itemBaseClass,
                            "mt-1 border-red-200/70 bg-red-50/70 text-red-700 hover:border-red-300 hover:bg-red-100/70",
                          )}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -10 }}
                          transition={{
                            duration: 0.2,
                            delay: itemIndex * 0.05,
                            ease: "easeOut",
                          }}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <motion.span
                            className="flex h-8 w-8 items-center justify-center rounded-lg border border-red-300/70 bg-white/90 text-base sm:text-lg"
                            whileHover={{ scale: 1.1 }}
                            transition={{ type: "spring", stiffness: 400 }}
                          >
                            {item.icon}
                          </motion.span>
                          <span className="text-sm font-semibold tracking-[0.01em]">
                            {item.label}
                          </span>
                        </motion.button>
                      );
                    }

                    return (
                      <motion.div
                        key={item.label}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -10 }}
                        transition={{
                          duration: 0.2,
                          delay: itemIndex * 0.05,
                          ease: "easeOut",
                        }}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Link
                          href={item.href}
                          onClick={onItemClick}
                          className={clsx(itemBaseClass, itemStateClass)}
                        >
                          <motion.span
                            className={clsx(
                              "flex h-8 w-8 items-center justify-center rounded-lg border text-base sm:text-lg",
                              iconClass,
                            )}
                            whileHover={{ scale: 1.1 }}
                            transition={{ type: "spring", stiffness: 400 }}
                          >
                            {item.icon}
                          </motion.span>

                          <span className="text-sm font-medium tracking-[0.01em]">
                            {item.label}
                          </span>
                        </Link>
                      </motion.div>
                    );
                  })}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </motion.div>

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
