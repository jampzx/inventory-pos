"use client";

import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import Menu from "components/Menu";
import Navbar from "components/Navbar";
import Image from "next/image";
import Link from "next/link";
import { useSessionMonitor } from "@/hooks/useSessionMonitor";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  // Monitor session status and handle automatic logout
  useSessionMonitor();

  return (
    <div className="h-screen flex">
      {/* LEFT */}
      <motion.div
        className="w-[14%] md:w-[8%] lg:w-[16%] xl:w-[14%] p-4"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
          <Link
            href="/"
            className="flex items-center justify-center lg:justify-start gap-2"
          >
            <motion.div
              whileHover={{ rotate: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Image src="/logo.png" alt="Logo" width={50} height={50} />
            </motion.div>
            <motion.span
              className="hidden lg:block italic"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.3 }}
            >
              PapiSy Hairs
            </motion.span>
          </Link>
        </motion.div>
        <Menu />
      </motion.div>
      {/* RIGHT */}
      <motion.div
        className="w-[86%] md:w-[92%] lg:w-[84%] xl:w-[86%] bg-[#F7F8FA] overflow-scroll flex flex-col"
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
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
