import React from "react";

export const StatCard = ({ value, label, icon: Icon }) => {
  return (
    <div className="hover-card rounded-lg border border-[rgb(var(--color-mossVelvet))]/15 bg-white/65 p-5 text-center shadow-sm backdrop-blur">
      {Icon && (
        <Icon
          size={24}
          className="mx-auto mb-3 text-[rgb(var(--color-mossVelvet))]"
          aria-hidden="true"
        />
      )}
      <p className="font-heading text-2xl font-bold">{value}</p>
      <p className="mt-1 text-sm leading-5 text-[rgb(var(--color-mossVelvet))]/70">
        {label}
      </p>
    </div>
  );
};
