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
      className={`glass-card rounded-3xl ${
        padding ? "p-6" : ""
      } ${className} transition-all duration-300`}
    >
      {children}
    </div>
  );
};

export default Card;
