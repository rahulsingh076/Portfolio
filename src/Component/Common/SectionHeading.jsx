import React from "react";

export const SectionHeading = ({
  eyebrow,
  title,
  description,
  align = "left",
  className = "",
}) => {
  const centered = align === "center";

  return (
    <div
      className={`${centered ? "mx-auto text-center" : ""} max-w-2xl ${className}`}
    >
      {eyebrow && (
        <p className="mb-3 font-heading text-sm font-semibold uppercase tracking-[0] text-[rgb(var(--color-mossVelvet))]/70">
          {eyebrow}
        </p>
      )}
      <h2 className="font-heading text-3xl font-bold leading-tight tracking-[0] text-[rgb(var(--color-mossVelvet))] sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-8 text-[rgb(var(--color-mossVelvet))]/75">
          {description}
        </p>
      )}
    </div>
  );
};
