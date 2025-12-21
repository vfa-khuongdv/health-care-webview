import React, { type SelectHTMLAttributes, type ReactNode } from "react";
import { ChevronDown } from "lucide-react";

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  containerClassName?: string;
  labelClassName?: string;
  wrapperClassName?: string;
}

const Select: React.FC<SelectProps> = ({
  label,
  leftIcon,
  rightIcon,
  className = "",
  containerClassName = "",
  labelClassName = "",
  wrapperClassName = "",
  children,
  ...props
}) => {
  return (
    <div className={`w-full ${containerClassName}`}>
      {label && (
        <label
          className={`text-[10px] font-bold text-healthcare-muted dark:text-slate-400 uppercase tracking-widest px-1 mb-1 block ${labelClassName}`}
        >
          {label}
        </label>
      )}
      <div
        className={`relative flex items-center bg-healthcare-surface dark:bg-slate-800 rounded-2xl border border-gray-100/80 dark:border-slate-700 focus-within:border-healthcare-primary/40 focus-within:shadow-sm transition-all ${
          leftIcon ? "pl-4" : ""
        } ${wrapperClassName}`}
      >
        {leftIcon && (
          <div className="flex items-center justify-center text-gray-400 mr-2">
            {leftIcon}
          </div>
        )}
        <select
          className={`w-full bg-transparent outline-none p-4 text-sm font-medium text-healthcare-dark dark:text-white appearance-none cursor-pointer ${
            leftIcon ? "pl-0" : ""
          } ${rightIcon !== null ? "pr-10" : ""} ${className}`}
          {...props}
        >
          {children}
        </select>
        <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center justify-center text-gray-400 pointer-events-none">
          {rightIcon || <ChevronDown className="w-4 h-4" />}
        </div>
      </div>
    </div>
  );
};

export default Select;
