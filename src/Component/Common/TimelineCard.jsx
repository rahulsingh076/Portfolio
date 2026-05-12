import React from "react";

export const TimelineCard = ({ period, title, description, index }) => {
  return (
    <article className="hover-card rounded-lg border border-[rgb(var(--color-mossVelvet))]/15 bg-white/65 p-6 shadow-sm backdrop-blur">
      <div className="flex items-center justify-between gap-4">
        <span className="rounded-md bg-[rgb(var(--color-cloudMilk))] px-3 py-1 text-sm font-semibold">
          {period}
        </span>
        <span className="font-heading text-3xl font-bold text-[rgb(var(--color-mossVelvet))]/15">
          0{index + 1}
        </span>
      </div>
      <h3 className="mt-5 font-heading text-xl font-bold">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-[rgb(var(--color-mossVelvet))]/70">
        {description}
      </p>
    </article>
  );
};
