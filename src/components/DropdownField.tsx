import { motion, AnimatePresence } from "framer-motion";
import { FieldError } from "react-hook-form";

type Option = {
  label: string;
  value: string;
};

type DropdownFieldProps = {
  label: string;
  name: string;
  register: any;
  error?: FieldError;
  options: Option[];
  selectProps?: React.SelectHTMLAttributes<HTMLSelectElement>;
};

const DropdownField = ({
  label,
  name,
  register,
  error,
  options,
  selectProps,
}: DropdownFieldProps) => {
  return (
    <motion.div
      className="flex flex-col gap-2 w-full"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <motion.label
        className="text-[11px] font-semibold uppercase tracking-[0.12em] text-gray-500 sm:text-xs"
        initial={{ opacity: 0, x: -5 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.2, delay: 0.1 }}
      >
        {label}
      </motion.label>
      <motion.select
        {...register(name)}
        className={`w-full rounded-xl border px-3 py-2.5 text-sm text-gray-700 transition-all duration-200 sm:px-3.5 sm:py-3 ${
          error
            ? "border-red-300 bg-red-50/70 focus:border-red-400 focus:ring-red-200"
            : "border-black/15 bg-white/80 focus:border-lamaSky focus:ring-lamaSky/25"
        }`}
        {...selectProps}
        whileFocus={{
          scale: 1.01,
          boxShadow: "0 0 0 3px rgba(15, 159, 157, 0.14)",
        }}
        transition={{ duration: 0.2 }}
      >
        <option className="text-sm text-gray-500" value="" disabled hidden>
          Select {label.toLowerCase()}
        </option>
        {options.map((opt, index) => (
          <motion.option
            className="text-sm text-gray-700"
            key={opt.value}
            value={opt.value}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2, delay: index * 0.02 }}
          >
            {opt.label}
          </motion.option>
        ))}
      </motion.select>
      <AnimatePresence>
        {error?.message && (
          <motion.p
            className="text-xs font-medium text-red-500"
            initial={{ opacity: 0, y: -5, height: 0 }}
            animate={{ opacity: 1, y: 0, height: "auto" }}
            exit={{ opacity: 0, y: -5, height: 0 }}
            transition={{ duration: 0.2 }}
          >
            {error.message.toString()}
          </motion.p>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default DropdownField;
