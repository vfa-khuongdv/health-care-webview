import React from 'react';

interface ToggleProps {
  value: boolean;
  onToggle: () => void;
  className?: string;
}

const Toggle: React.FC<ToggleProps> = ({ value, onToggle, className = '' }) => {
  return (
    <button 
      onClick={onToggle}
      className={`w-12 h-6 rounded-full transition-colors relative shrink-0 ${value ? 'bg-healthcare-primary' : 'bg-gray-200 dark:bg-slate-800'} ${className}`}
    >
      <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-transform ${value ? 'left-7' : 'left-1'}`} />
    </button>
  );
};

export default Toggle;
