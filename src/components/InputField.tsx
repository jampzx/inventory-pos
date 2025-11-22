import { motion, AnimatePresence } from "framer-motion";
import { FieldError } from "react-hook-form";

type InputFieldProps = {
  label: string;
  type?: string;
  register: any;
  name: string;
  defaultValue?: string;
  error?: FieldError;
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
  mdWidthClass?: string; // e.g., 'md:w-1/2', 'md:w-1/3', etc.
};

const InputField = ({
  label,
  type = "text",
  register,
  name,
  defaultValue,
  error,
  inputProps,
  mdWidthClass = "md:w-1/4",
}: InputFieldProps) => {
  return (
    <motion.div
      className={`flex flex-col gap-2 w-full ${mdWidthClass}`}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <motion.label
        className="text-xs text-gray-500"
        initial={{ opacity: 0, x: -5 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.2, delay: 0.1 }}
      >
        {label}
      </motion.label>
      <motion.input
        type={type}
        {...register(name)}
        className={`ring-[1.5px] ring-gray-300 p-2 rounded-md text-sm w-full transition-all duration-200 ${
          error ? "ring-red-400 focus:ring-red-500" : "focus:ring-blue-500"
        }`}
        {...inputProps}
        defaultValue={defaultValue}
        whileFocus={{
          scale: 1.01,
          boxShadow: "0 0 0 3px rgba(59, 130, 246, 0.1)",
        }}
        transition={{ duration: 0.2 }}
      />
      <AnimatePresence>
        {error?.message && (
          <motion.p
            className="text-xs text-red-400"
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

export default InputField;
