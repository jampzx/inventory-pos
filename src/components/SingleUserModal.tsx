"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const SingleUserModal = ({
  user,
  onClose,
}: {
  user: any;
  onClose: () => void;
}) => {
  if (!user) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm z-50 flex items-center justify-center px-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        <motion.div
          className="relative bg-white p-4 sm:p-6 md:p-8 rounded-xl shadow-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto"
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <motion.button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-lg"
            whileHover={{ scale: 1.1, rotate: 90 }}
            whileTap={{ scale: 0.9 }}
          >
            ✕
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
                <div className="w-full sm:w-36 sm:h-36 aspect-square rounded-lg overflow-hidden bg-gray-100 flex items-center justify-center border shrink-0">
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
                    <h1 className="text-xl sm:text-2xl font-semibold text-gray-800 break-words">
                      {user.full_name}
                    </h1>

                    <span
                      className={`inline-block px-2 py-1 rounded-full text-xs font-medium w-fit ${
                        user.status === "active"
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {user.status}
                    </span>
                  </div>

                  <p className="text-sm text-gray-600">
                    <strong>Username:</strong> {user.username}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-gray-700 pt-2">
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
    </AnimatePresence>
  );
};

export default SingleUserModal;
