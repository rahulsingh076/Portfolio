import React from "react";

export const PageShell = ({ children, className = "" }) => {
  return (
    <main
      className={`page-shell min-h-screen overflow-hidden bg-[rgb(var(--color-cloudMilk))] pt-10 text-[rgb(var(--color-mossVelvet))] ${className}`}
    >
      {children}
    </main>
  );
};
