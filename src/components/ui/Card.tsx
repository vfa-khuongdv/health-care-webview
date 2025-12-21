import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  padding?: boolean;
}

const Card: React.FC<CardProps> = ({ children, className = '', padding = true }) => {
  return (
    <div className={`bg-white rounded-3xl shadow-premium border border-gray-50 ${padding ? 'p-6' : ''} ${className}`}>
      {children}
    </div>
  );
};

export default Card;
