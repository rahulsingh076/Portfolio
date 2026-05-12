import React from "react";

export const ServiceCard = ({ title, description, icon: Icon }) => {
  return (
    <article className="hover-card group rounded-lg border border-[rgb(var(--color-mossVelvet))]/15 bg-white/70 p-6 shadow-sm backdrop-blur">
      {Icon && (
        <span className="grid h-12 w-12 place-items-center rounded-lg bg-[rgb(var(--color-cloudMilk))] transition-transform duration-300 group-hover:-rotate-3">
          <Icon size={24} aria-hidden="true" />
        </span>
      )}
      <h3 className="mt-5 font-heading text-xl font-bold">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-[rgb(var(--color-mossVelvet))]/70">
        {description}
      </p>
    </article>
  );
};
