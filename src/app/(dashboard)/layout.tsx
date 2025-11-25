"use client";

import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import Menu from "components/Menu";
import Navbar from "components/Navbar";
import Image from "next/image";
import Link from "next/link";
import { useSessionMonitor } from "@/hooks/useSessionMonitor";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Monitor session status and handle automatic logout
  useSessionMonitor();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="h-screen flex relative">
      {/* Mobile Menu Button */}
      <button
        onClick={toggleMobileMenu}
        className="md:hidden fixed top-4 left-4 z-50 bg-white rounded-lg shadow-lg p-2 transition-colors hover:bg-gray-50"
      >
        {isMobileMenuOpen ? <FiX size={20} /> : <FiMenu size={20} />}
      </button>

      {/* Mobile Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="md:hidden fixed inset-0 bg-black/50 z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* LEFT SIDEBAR */}
      <motion.div
        className={`
          fixed md:static inset-y-0 left-0 z-40 md:z-auto
          w-64 md:w-[14%] lg:w-[16%] xl:w-[14%] 
          bg-white md:bg-transparent
          p-4 md:p-4
          transform transition-transform duration-300 ease-in-out
          ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0 md:transform-none
          shadow-lg md:shadow-none
        `}
      >
        <motion.div
          className="pt-12 md:pt-0"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: "easeOut", delay: 0.1 }}
        >
          <Link
            href="/"
            className="flex items-center justify-start md:justify-center lg:justify-start gap-2"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <motion.div
              whileHover={{ rotate: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Image
                src="/logo.png"
                alt="Logo"
                width={40}
                height={40}
                className="md:w-[50px] md:h-[50px]"
              />
            </motion.div>
            <motion.span
              className="block md:hidden lg:block italic font-semibold text-gray-800 text-sm xl:text-base"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.3 }}
            >
              PapiSy Hairs
            </motion.span>
          </Link>
        </motion.div>
        <Menu onItemClick={() => setIsMobileMenuOpen(false)} />
      </motion.div>

      {/* RIGHT CONTENT */}
      <motion.div
        className="flex-1 md:w-[86%] lg:w-[84%] xl:w-[86%] bg-[#F7F8FA] overflow-auto flex flex-col min-h-screen"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.1 }}
      >
        <Navbar />
        <AnimatePresence mode="wait">
          <motion.div
            key={pathname}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="flex-1"
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
