import React from "react";

export const Button = ({ children, className, ...props }) => {
  return (
    <button
      className={`
        px-6 py-3
        rounded-lg
        bg-[rgb(var(--color-mossVelvet))]
        transition-all duration-300
        text-white
        hover:opacity-90
        hover:scale-105
        
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
};
