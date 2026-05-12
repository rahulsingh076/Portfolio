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
            title="Frontend help for portfolios and responsive websites."
            description="I focus on clean structure, reusable React sections, responsive styling, and clear content that helps visitors understand the page quickly."
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
        title="Let us build something clear and responsive."
        description="Send the goal, the pages you need, and the technologies you prefer. I will shape the frontend around that."
      />
    </PageShell>
  );
};
