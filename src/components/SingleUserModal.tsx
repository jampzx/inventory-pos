"use client";

import { motion, AnimatePresence } from "framer-motion";
import { createPortal } from "react-dom";
import { FiX } from "react-icons/fi";
import Image from "next/image";

const SingleUserModal = ({
  user,
  onClose,
}: {
  user: any;
  onClose: () => void;
}) => {
  if (!user) return null;

  return createPortal(
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/45 px-2 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        <motion.div
          className="neo-panel-strong relative max-h-[90vh] w-full max-w-3xl overflow-y-auto border border-black/10 p-4 sm:p-6 md:p-8"
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <motion.button
            onClick={onClose}
            className="absolute right-4 top-4 rounded-lg border border-black/10 bg-white/80 p-1.5 text-gray-500 hover:text-gray-800"
            whileHover={{ scale: 1.1, rotate: 90 }}
            whileTap={{ scale: 0.9 }}
          >
            <FiX size={16} />
          </motion.button>

          <motion.div
            className="flex flex-col gap-6 lg:flex-row"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            {/* LEFT SECTION */}
            <div className="flex-1 flex flex-col gap-6">
              {/* USER CARD */}
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-start">
                {/* AVATAR */}
                <div className="w-full sm:w-36 sm:h-36 aspect-square rounded-xl overflow-hidden bg-white/80 flex items-center justify-center border border-black/10 shrink-0">
                  <Image
                    src="/avatar.png"
                    alt={user.full_name}
                    width={144}
                    height={144}
                    className="object-cover w-full h-full"
                  />
                </div>

                {/* TEXT INFO */}
                <div className="flex-1 space-y-3 w-full">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <h1 className="neo-title text-xl sm:text-2xl font-semibold text-gray-800 break-words">
                      {user.full_name}
                    </h1>

                    <span
                      className={`inline-block px-2.5 py-1 rounded-full text-xs font-semibold w-fit border ${
                        user.status === "active"
                          ? "border-emerald-300/60 bg-emerald-100 text-emerald-700"
                          : "border-red-300/60 bg-red-100 text-red-700"
                      }`}
                    >
                      {user.status}
                    </span>
                  </div>

                  <p className="text-sm text-gray-600">
                    <strong>Username:</strong> {user.username}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 rounded-xl border border-black/10 bg-white/65 p-3 text-sm text-gray-700">
                    <span>
                      <strong>User Type:</strong> {user.user_type}
                    </span>
                    <span>
                      <strong>Assigned Branches:</strong>{" "}
                      {user.branches?.length > 0
                        ? user.branches.map((b: any) => b.name).join(", ")
                        : "—"}
                    </span>
                    <span>
                      <strong>Created At:</strong>{" "}
                      {new Date(user.created_at).toLocaleString()}
                    </span>
                    <span>
                      <strong>Updated At:</strong>{" "}
                      {new Date(user.updated_at).toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </AnimatePresence>,
    document.body,
  );
};

export default SingleUserModal;
