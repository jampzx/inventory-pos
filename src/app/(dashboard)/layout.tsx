"use client";

import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import Menu from "components/Menu";
import Navbar from "components/Navbar";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="relative flex min-h-screen overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          className="absolute -left-10 top-20 h-80 w-80 rounded-full bg-lamaSky/15 blur-3xl"
          animate={{ y: [0, 18, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute right-2 top-52 h-72 w-72 rounded-full bg-lamaYellow/20 blur-3xl"
          animate={{ y: [0, -14, 0] }}
          transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <button
        onClick={toggleMobileMenu}
        className="md:hidden fixed top-4 left-4 z-50 neo-panel px-3 py-2 text-gray-700"
      >
        {isMobileMenuOpen ? <FiX size={20} /> : <FiMenu size={20} />}
      </button>

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

      <motion.div
        className={`
          fixed md:sticky md:top-0 inset-y-0 left-0 z-40 md:z-20
          w-72 md:w-[17rem]
          p-4 md:p-5
          transform transition-transform duration-300 ease-in-out
          ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0 md:transform-none
        `}
      >
        <motion.div
          className="neo-panel h-full px-4 pb-4 pt-12 md:px-5 md:pt-4"
          initial={{ opacity: 0, x: -16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.35, ease: "easeOut", delay: 0.05 }}
        >
          <Link
            href="/"
            className="flex items-center justify-start gap-3"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <motion.div
              whileHover={{ rotate: -6, scale: 1.05 }}
              transition={{ type: "spring", stiffness: 280 }}
              className="rounded-xl border border-black/10 bg-white/70 p-1.5"
            >
              <Image
                src="/logo.png"
                alt="Logo"
                width={42}
                height={42}
                className="h-[42px] w-[42px]"
              />
            </motion.div>

            <div className="min-w-0">
              <p className="neo-subtitle">Retail Command</p>
              <motion.span
                className="neo-title block truncate text-lg font-semibold text-gray-800"
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.12, duration: 0.3 }}
              >
                JA POS
              </motion.span>
            </div>
          </Link>

          <div className="neo-divider mt-5" />

          <Menu onItemClick={() => setIsMobileMenuOpen(false)} />
        </motion.div>
      </motion.div>

      <motion.div
        className="relative z-10 flex min-h-screen flex-1 flex-col overflow-auto"
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
            className="flex-1 px-2 pb-4 pt-1 sm:px-4 md:px-6 md:pb-6 md:pt-2"
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
