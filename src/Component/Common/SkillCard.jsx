import React from "react";

export const SkillCard = ({ name, level, detail, icon: Icon }) => {
  return (
    <article className="hover-card group rounded-lg border border-[rgb(var(--color-mossVelvet))]/15 bg-white/70 p-5 shadow-sm backdrop-blur">
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          {Icon && (
            <span className="grid h-11 w-11 place-items-center rounded-lg bg-[rgb(var(--color-cloudMilk))] text-[rgb(var(--color-mossVelvet))] transition-transform duration-300 group-hover:-rotate-3 group-hover:scale-105">
              <Icon size={23} aria-hidden="true" />
            </span>
          )}
          <h3 className="font-heading text-lg font-semibold">{name}</h3>
        </div>
        <span className="text-sm font-semibold text-[rgb(var(--color-mossVelvet))]/70">
          {level}
        </span>
      </div>
      <p className="mt-4 text-sm leading-6 text-[rgb(var(--color-mossVelvet))]/70">
        {detail}
      </p>
      <div className="mt-5 h-2 overflow-hidden rounded-full bg-[rgb(var(--color-mossVelvet))]/10">
        <span
          className="block h-full rounded-full bg-[rgb(var(--color-mossVelvet))] transition-all duration-700 group-hover:brightness-110"
          style={{ width: level }}
        />
      </div>
    </article>
  );
};
