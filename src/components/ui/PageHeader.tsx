import React from 'react';
import { ChevronLeft } from 'lucide-react';

interface PageHeaderProps {
  title: string;
  onBack: () => void;
  className?: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, onBack, className = '' }) => {
  return (
    <div className={`flex items-center px-6 py-4 ${className}`}>
      <button 
        onClick={onBack}
        className="w-10 h-10 rounded-xl bg-white dark:bg-slate-800 shadow-sm flex items-center justify-center text-healthcare-dark dark:text-white hover:bg-healthcare-surface dark:hover:bg-slate-700 transition-colors"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <h2 className="ml-4 text-xl font-bold text-healthcare-dark dark:text-white">{title}</h2>
    </div>
  );
};

export default PageHeader;
