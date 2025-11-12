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
    <div className="flex flex-col gap-2 w-full md:w-1/4">
      <label className="text-xs text-gray-500">{label}</label>
      <select
        {...register(name)}
        className="ring-[1.5px] ring-gray-300 p-2 rounded-md text-xs text-gray-500 -sm w-full"
        {...selectProps}
        defaultValue=""
      >
        <option className="text-xs text-gray-500" value="" disabled hidden>
          Select {label.toLowerCase()}
        </option>
        {options.map((opt) => (
          <option
            className="text-xs text-gray-500"
            key={opt.value}
            value={opt.value}
          >
            {opt.label}
          </option>
        ))}
      </select>
      {error?.message && (
        <p className="text-xs text-red-400">{error.message.toString()}</p>
      )}
    </div>
  );
};

export default DropdownField;
