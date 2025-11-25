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
              className="flex flex-col gap-2"
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
                className="flex items-center justify-between text-gray-400 font-light my-4 px-2 w-full"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>{section.title}</span>
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

                    if (item.label === "Logout") {
                      return (
                        <motion.button
                          key={item.label}
                          onClick={() => {
                            setShowLogoutModal(true);
                            onItemClick?.();
                          }}
                          className={clsx(
                            "flex items-center justify-start gap-4 py-2 md:px-2 rounded-md hover:bg-lamaSkyLight text-left w-full",
                            isActive
                              ? "text-gray-500 bg-lamaSky"
                              : "text-gray-500"
                          )}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -10 }}
                          transition={{
                            duration: 0.2,
                            delay: itemIndex * 0.05,
                            ease: "easeOut",
                          }}
                          whileHover={{
                            scale: 1.02,
                            backgroundColor: "rgba(195, 235, 250, 0.4)",
                          }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <motion.span
                            className="text-base sm:text-lg"
                            whileHover={{ scale: 1.1 }}
                            transition={{ type: "spring", stiffness: 400 }}
                          >
                            {item.icon}
                          </motion.span>
                          <span>{item.label}</span>
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
                          className={clsx(
                            "flex items-center justify-start gap-4 py-2 md:px-2 rounded-md hover:bg-lamaSkyLight transition-colors",
                            isActive
                              ? "text-gray-500 bg-lamaSky"
                              : "text-gray-500"
                          )}
                        >
                          <motion.span
                            className="text-base sm:text-lg"
                            whileHover={{ scale: 1.1 }}
                            transition={{ type: "spring", stiffness: 400 }}
                          >
                            {item.icon}
                          </motion.span>
                          <span>{item.label}</span>
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
