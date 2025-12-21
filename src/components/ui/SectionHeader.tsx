import React from "react";

interface SectionHeaderProps {
  children: React.ReactNode;
  className?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
  children,
  className = "",
}) => {
  return (
    <h3
      className={`text-[10px] font-bold text-healthcare-muted dark:text-slate-500 uppercase tracking-widest px-1 ${className}`}
    >
      {children}
    </h3>
  );
};

export default SectionHeader;
