import { motion, AnimatePresence } from "framer-motion";
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

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
        onClick={onClose}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        <motion.div
          className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          {/* Header */}
          <motion.div
            className="flex items-center justify-between p-6 border-b border-gray-200"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            <h2 className="text-xl font-semibold text-gray-800">
              Company Details
            </h2>
            <motion.button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 transition"
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
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
              <h3 className="text-lg font-semibold text-gray-700 mb-4">
                Company Information
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-500 mb-1">
                    Company ID
                  </label>
                  <p className="text-gray-900">{company.company_id}</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-500 mb-1">
                    Company Name
                  </label>
                  <p className="text-gray-900 font-medium">
                    {company.company_name}
                  </p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-500 mb-1">
                    Email
                  </label>
                  <p className="text-gray-900">{company.company_email}</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-500 mb-1">
                    Contact Number
                  </label>
                  <p className="text-gray-900">
                    {company.company_contact_number}
                  </p>
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-500 mb-1">
                    Address
                  </label>
                  <p className="text-gray-900">{company.company_address}</p>
                </div>
              </div>
            </div>

            {/* Subscription Information */}
            <div>
              <h3 className="text-lg font-semibold text-gray-700 mb-4">
                Subscription Information
              </h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <label className="block text-sm font-medium text-gray-500">
                    Status
                  </label>
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${subscriptionStatus.color}`}
                  >
                    {subscriptionStatus.text}
                  </span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-500 mb-1">
                      Subscription Start
                    </label>
                    <p className="text-gray-900">
                      {formatDate(company.subscription_start)}
                    </p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-500 mb-1">
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
              <h3 className="text-lg font-semibold text-gray-700 mb-4">
                Record Information
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-500 mb-1">
                    Created At
                  </label>
                  <p className="text-gray-900">
                    {formatDate(company.created_at)}
                  </p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-500 mb-1">
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
            className="flex justify-end p-6 border-t border-gray-200"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.3 }}
          >
            <motion.button
              onClick={onClose}
              className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Close
            </motion.button>
          </motion.div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default SingleCompanyModal;
