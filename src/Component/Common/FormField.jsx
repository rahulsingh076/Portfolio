import React from "react";

export const FormField = ({ label, textarea = false, ...props }) => {
  const Control = textarea ? "textarea" : "input";

  return (
    <label className="block">
      <span className="mb-2 block text-sm font-semibold text-[rgb(var(--color-mossVelvet))]/75">
        {label}
      </span>
      <Control
        className="w-full rounded-lg border border-[rgb(var(--color-mossVelvet))]/20 bg-white/70 px-4 py-3 text-[rgb(var(--color-mossVelvet))] outline-none transition-all duration-300 placeholder:text-[rgb(var(--color-mossVelvet))]/45 focus:-translate-y-0.5 focus:border-[rgb(var(--color-mossVelvet))] focus:shadow-lg focus:shadow-[rgb(var(--color-mossVelvet))]/10"
        {...props}
      />
    </label>
  );
};
