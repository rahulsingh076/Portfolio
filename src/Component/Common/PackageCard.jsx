import React from "react";
import { Check } from "lucide-react";
import { ActionLink } from "./ActionLink";

export const PackageCard = ({ item, featured = false }) => {
  return (
    <article
      className={`hover-card flex h-full flex-col rounded-lg border p-6 shadow-sm backdrop-blur ${
        featured
          ? "border-[rgb(var(--color-mossVelvet))]/35 bg-[rgb(var(--color-mossVelvet))] text-white"
          : "border-[rgb(var(--color-mossVelvet))]/15 bg-white/70"
      }`}
    >
      <p
        className={`text-sm font-semibold ${
          featured ? "text-white/75" : "text-[rgb(var(--color-mossVelvet))]/65"
        }`}
      >
        {item.price}
      </p>
      <h3 className="mt-3 font-heading text-2xl font-bold">{item.name}</h3>
      <p
        className={`mt-4 text-sm leading-7 ${
          featured ? "text-white/75" : "text-[rgb(var(--color-mossVelvet))]/70"
        }`}
      >
        {item.description}
      </p>
      <ul className="mt-6 space-y-3">
        {item.features.map((feature) => (
          <li key={feature} className="flex items-center gap-3 text-sm">
            <Check size={17} aria-hidden="true" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <ActionLink
        to="/contact"
        variant={featured ? "ghost" : "outline"}
        className="mt-8"
      >
        Start this
      </ActionLink>
    </article>
  );
};
