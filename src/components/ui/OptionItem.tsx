import React, { type ReactNode } from 'react';

interface OptionItemProps {
  label: string;
  sublabel?: string;
  icon?: ReactNode;
  rightElement?: ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: 'white' | 'surface';
}

const OptionItem: React.FC<OptionItemProps> = ({ 
  label, 
  sublabel, 
  icon, 
  rightElement, 
  onClick, 
  className = '',
  variant = 'white'
}) => {
  const Component = onClick ? 'button' : 'div';
  
  const bgClass = variant === 'white' ? 'bg-white' : 'bg-healthcare-surface';
  
  return (
    <Component 
      onClick={onClick}
      className={`w-full p-4 ${bgClass} rounded-2xl flex items-center justify-between border border-gray-50 shadow-sm group transition-all ${onClick ? 'active:scale-[0.98]' : ''} ${className}`}
    >
      <div className="flex items-center space-x-3 text-left">
        {icon && (
          <div className="w-10 h-10 bg-healthcare-surface rounded-xl flex items-center justify-center text-healthcare-primary">
            {icon}
          </div>
        )}
        <div>
          <h4 className="text-sm font-bold text-healthcare-dark">{label}</h4>
          {sublabel && <p className="text-[10px] text-healthcare-muted">{sublabel}</p>}
        </div>
      </div>
      {rightElement || (onClick && (
        <svg className="w-5 h-5 text-gray-300 group-hover:text-healthcare-primary transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      ))}
    </Component>
  );
};

export default OptionItem;
