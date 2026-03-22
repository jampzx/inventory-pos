import { motion, AnimatePresence } from "framer-motion";
import { createPortal } from "react-dom";
import { FiX } from "react-icons/fi";
import React from "react";

type Company = {
  company_id: number;
  company_name: string;
  company_email: string;
  company_contact_number: string;
  company_address: string;
  subscription_start: string | null;
  subscription_end: string | null;
  created_at: string;
  updated_at: string;
};

type Props = {
  company: Company;
  onClose: () => void;
};

const SingleCompanyModal = ({ company, onClose }: Props) => {
  const formatDate = (dateStr: string | null) => {
    if (!dateStr) return "Not Set";
    return new Date(dateStr).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const getSubscriptionStatus = () => {
    if (!company.subscription_start || !company.subscription_end) {
      return { text: "No Subscription", color: "text-gray-600 bg-gray-100" };
    }

    const now = new Date();
    const start = new Date(company.subscription_start);
    const end = new Date(company.subscription_end);

    if (now < start) {
      return { text: "Not Started", color: "text-blue-600 bg-blue-100" };
    } else if (now > end) {
      return { text: "Expired", color: "text-red-600 bg-red-100" };
    } else {
      return { text: "Active", color: "text-green-600 bg-green-100" };
    }
  };

  const subscriptionStatus = getSubscriptionStatus();

  return createPortal(
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/45 p-4 backdrop-blur-sm"
        onClick={onClose}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        <motion.div
          className="neo-panel-strong max-h-[90vh] w-full max-w-2xl overflow-y-auto border border-black/10"
          onClick={(e) => e.stopPropagation()}
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          {/* Header */}
          <motion.div
            className="flex items-center justify-between border-b border-black/10 p-6"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            <div>
              <p className="neo-subtitle">Account Details</p>
              <h2 className="neo-title text-2xl font-semibold text-gray-800">
                Company Details
              </h2>
            </div>
            <motion.button
              onClick={onClose}
              className="rounded-lg border border-black/10 bg-white/80 p-1.5 text-gray-500 transition hover:text-gray-700"
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
            >
              <FiX size={16} />
            </motion.button>
          </motion.div>

          {/* Content */}
          <motion.div
            className="p-6 space-y-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            {/* Company Information */}
            <div>
              <h3 className="neo-title text-lg font-semibold text-gray-700 mb-4">
                Company Information
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 rounded-xl border border-black/10 bg-white/65 p-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-[0.08em] text-gray-500 mb-1">
                    Company ID
                  </label>
                  <p className="text-gray-900">{company.company_id}</p>
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-[0.08em] text-gray-500 mb-1">
                    Company Name
                  </label>
                  <p className="text-gray-900 font-medium">
                    {company.company_name}
                  </p>
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-[0.08em] text-gray-500 mb-1">
                    Email
                  </label>
                  <p className="text-gray-900">{company.company_email}</p>
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-[0.08em] text-gray-500 mb-1">
                    Contact Number
                  </label>
                  <p className="text-gray-900">
                    {company.company_contact_number}
                  </p>
                </div>
                <div className="md:col-span-2">
                  <label className="block text-xs font-semibold uppercase tracking-[0.08em] text-gray-500 mb-1">
                    Address
                  </label>
                  <p className="text-gray-900">{company.company_address}</p>
                </div>
              </div>
            </div>

            {/* Subscription Information */}
            <div>
              <h3 className="neo-title text-lg font-semibold text-gray-700 mb-4">
                Subscription Information
              </h3>
              <div className="space-y-4 rounded-xl border border-black/10 bg-white/65 p-4">
                <div className="flex items-center justify-between">
                  <label className="block text-xs font-semibold uppercase tracking-[0.08em] text-gray-500">
                    Status
                  </label>
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-semibold border ${subscriptionStatus.color}`}
                  >
                    {subscriptionStatus.text}
                  </span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-[0.08em] text-gray-500 mb-1">
                      Subscription Start
                    </label>
                    <p className="text-gray-900">
                      {formatDate(company.subscription_start)}
                    </p>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-[0.08em] text-gray-500 mb-1">
                      Subscription End
                    </label>
                    <p className="text-gray-900">
                      {formatDate(company.subscription_end)}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Timestamps */}
            <div>
              <h3 className="neo-title text-lg font-semibold text-gray-700 mb-4">
                Record Information
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 rounded-xl border border-black/10 bg-white/65 p-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-[0.08em] text-gray-500 mb-1">
                    Created At
                  </label>
                  <p className="text-gray-900">
                    {formatDate(company.created_at)}
                  </p>
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-[0.08em] text-gray-500 mb-1">
                    Last Updated
                  </label>
                  <p className="text-gray-900">
                    {formatDate(company.updated_at)}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Footer */}
          <motion.div
            className="flex justify-end border-t border-black/10 p-6"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.3 }}
          >
            <motion.button
              onClick={onClose}
              className="neo-btn-ghost px-4 py-2"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Close
            </motion.button>
          </motion.div>
        </motion.div>
      </motion.div>
    </AnimatePresence>,
    document.body,
  );
};

export default SingleCompanyModal;
