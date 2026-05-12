import React from "react";
import { packages } from "../Data/portfolioData";
import { PageShell } from "../Common/PageShell";
import { PackageCard } from "../Common/PackageCard";
import { Reveal } from "../Common/Reveal";
import { SectionHeading } from "../Common/SectionHeading";
import { TimelineSection } from "../Sections/TimelineSection";
import { CtaSection } from "../Sections/CtaSection";

export const Hire = () => {
  return (
    <PageShell>
      <section className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-12">
        <Reveal>
          <SectionHeading
            eyebrow="Hire Me"
            title="Choose the kind of web upgrade you need."
            description="From a focused one-page build to a complete portfolio refresh, each option keeps the same brand colors and typography while improving structure, motion, and responsiveness."
            align="center"
          />
        </Reveal>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {packages.map((item, index) => (
            <Reveal key={item.name} delay={index * 80}>
              <PackageCard item={item} featured={index === 1} />
            </Reveal>
          ))}
        </div>
      </section>

      <TimelineSection title="What happens after you reach out" />
      <CtaSection
        title="Let us make the next version feel intentional."
        description="A sharper portfolio can still feel like the same brand. It just needs better structure, better rhythm, and smarter interaction."
      />
    </PageShell>
  );
};
