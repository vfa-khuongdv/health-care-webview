import React from "react";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  padding?: boolean;
}

const Card: React.FC<CardProps> = ({
  children,
  className = "",
  padding = true,
}) => {
  return (
    <div
      className={`bg-white dark:bg-slate-900 rounded-3xl shadow-premium border border-gray-50 dark:border-slate-800 ${
        padding ? "p-6" : ""
      } ${className} transition-colors`}
    >
      {children}
    </div>
  );
};

export default Card;
