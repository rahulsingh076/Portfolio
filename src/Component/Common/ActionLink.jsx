import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

const variants = {
  solid:
    "bg-[rgb(var(--color-mossVelvet))] text-white shadow-lg shadow-[rgb(var(--color-mossVelvet))]/20",
  outline:
    "border border-[rgb(var(--color-mossVelvet))]/25 bg-transparent text-[rgb(var(--color-mossVelvet))]",
  ghost:
    "bg-white/55 text-[rgb(var(--color-mossVelvet))] shadow-sm shadow-[rgb(var(--color-mossVelvet))]/10",
};

export const ActionLink = ({
  children,
  to,
  href,
  variant = "solid",
  className = "",
  icon: Icon = ArrowUpRight,
}) => {
  const classes = `
    magnetic-button group inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3
    font-heading font-semibold transition-all duration-300 hover:-translate-y-1
    focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2
    focus-visible:outline-[rgb(var(--color-mossVelvet))]
    ${variants[variant] || variants.solid}
    ${className}
  `;

  const content = (
    <>
      <span>{children}</span>
      {React.createElement(Icon, {
        size: 18,
        className:
          "transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5",
        "aria-hidden": "true",
      })}
    </>
  );

  if (href) {
    return (
      <a className={classes} href={href}>
        {content}
      </a>
    );
  }

  return (
    <Link className={classes} to={to}>
      {content}
    </Link>
  );
};
