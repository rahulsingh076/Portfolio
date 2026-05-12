import React from "react";

const variants = {
  solid:
    "bg-[rgb(var(--color-mossVelvet))] text-white shadow-lg shadow-[rgb(var(--color-mossVelvet))]/20",
  outline:
    "border border-[rgb(var(--color-mossVelvet))]/25 bg-transparent text-[rgb(var(--color-mossVelvet))]",
  ghost:
    "bg-white/55 text-[rgb(var(--color-mossVelvet))] shadow-sm shadow-[rgb(var(--color-mossVelvet))]/10",
};

export const Button = ({ children, className = "", variant = "solid", ...props }) => {
  return (
    <button
      className={`
        magnetic-button inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3
        font-semibold transition-all duration-300 hover:-translate-y-1
        focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2
        focus-visible:outline-[rgb(var(--color-mossVelvet))]
        ${variants[variant] || variants.solid}
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
};
