import React from "react";

export const ContactMethodCard = ({ title, value, icon: Icon }) => {
  return (
    <article className="hover-card flex items-start gap-4 rounded-lg border border-[rgb(var(--color-mossVelvet))]/15 bg-white/70 p-5 shadow-sm backdrop-blur">
      {Icon && (
        <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-[rgb(var(--color-cloudMilk))]">
          <Icon size={22} aria-hidden="true" />
        </span>
      )}
      <div>
        <h3 className="font-heading text-lg font-semibold">{title}</h3>
        <p className="mt-1 text-sm leading-6 text-[rgb(var(--color-mossVelvet))]/70">
          {value}
        </p>
      </div>
    </article>
  );
};
