import React, { type InputHTMLAttributes, type ReactNode } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  containerClassName?: string;
  labelClassName?: string;
  wrapperClassName?: string;
}

const Input: React.FC<InputProps> = ({
  label,
  leftIcon,
  rightIcon,
  className = "",
  containerClassName = "",
  labelClassName = "",
  wrapperClassName = "",
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
        className={`relative flex items-center bg-white/20 dark:bg-slate-800/30 backdrop-blur-md rounded-2xl border border-white/30 dark:border-slate-700/50 focus-within:border-healthcare-primary/40 focus-within:shadow-sm transition-all ${
          leftIcon ? "pl-4" : ""
        } ${rightIcon ? "pr-4" : ""} ${wrapperClassName}`}
      >
        {leftIcon && (
          <div className="flex items-center justify-center text-gray-400">
            {leftIcon}
          </div>
        )}
        <input
          className={`w-full bg-transparent outline-none p-4 text-sm font-medium text-healthcare-dark dark:text-white/70 placeholder:text-healthcare-muted/50 dark:placeholder:text-slate-500 ${
            leftIcon ? "pl-3" : ""
          } ${rightIcon ? "pr-3" : ""} ${className}`}
          {...props}
        />
        {rightIcon && (
          <div className="flex items-center justify-center text-gray-400">
            {rightIcon}
          </div>
        )}
      </div>
    </div>
  );
};

export default Input;
