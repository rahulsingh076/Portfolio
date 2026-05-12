import React from "react";
import { Send } from "lucide-react";
import { ActionLink } from "../Common/ActionLink";
import { Reveal } from "../Common/Reveal";

export const CtaSection = ({
  title = "Ready to build a clean frontend experience?",
  description = "Share the page idea, preferred technology, and the content you want visitors to see first.",
}) => {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-12">
      <Reveal>
        <div className="relative overflow-hidden rounded-lg border border-[rgb(var(--color-mossVelvet))]/15 bg-[rgb(var(--color-mossVelvet))] p-8 text-white shadow-xl shadow-[rgb(var(--color-mossVelvet))]/15 md:p-10">
          <div className="absolute inset-y-0 right-0 w-1/3 bg-white/10 [clip-path:polygon(18%_0,100%_0,100%_100%,0_100%)]" />
          <div className="relative flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="max-w-2xl">
              <h2 className="font-heading text-3xl font-bold leading-tight sm:text-4xl">
                {title}
              </h2>
              <p className="mt-4 leading-8 text-white/75">{description}</p>
            </div>
            <ActionLink to="/contact" variant="ghost" icon={Send}>
              Contact Me
            </ActionLink>
          </div>
        </div>
      </Reveal>
    </section>
  );
};
