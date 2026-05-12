import React from "react";
import { Briefcase, Code2, Star } from "lucide-react";
import { PageShell } from "../Common/PageShell";
import { Reveal } from "../Common/Reveal";
import { SectionHeading } from "../Common/SectionHeading";
import { StatCard } from "../Common/StatCard";
import { ServicesSection } from "../Sections/ServicesSection";
import { TimelineSection } from "../Sections/TimelineSection";
import { CtaSection } from "../Sections/CtaSection";
import { stats } from "../Data/portfolioData";

const statIcons = [Briefcase, Code2, Star];

export const About = () => {
  return (
    <PageShell>
      <section className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-16 sm:px-8 lg:grid-cols-[0.9fr_1fr] lg:px-12">
        <Reveal className="relative">
          <div className="relative min-h-96 overflow-hidden rounded-lg border border-[rgb(var(--color-mossVelvet))]/15 bg-white/70 p-6 shadow-xl shadow-[rgb(var(--color-mossVelvet))]/10 backdrop-blur">
            <div className="h-full min-h-80 rounded-lg bg-[rgb(var(--color-cloudMilk))] p-6">
              <div className="h-full rounded-lg border border-[rgb(var(--color-mossVelvet))]/20 p-6">
                <div className="grid h-full place-items-center">
                  <div className="max-w-xs text-center">
                    <span className="mx-auto grid h-16 w-16 place-items-center rounded-lg bg-white shadow-sm">
                      <Code2 size={30} aria-hidden="true" />
                    </span>
                    <h1 className="mt-6 font-heading text-4xl font-bold">
                      About Me
                    </h1>
                    <p className="mt-4 leading-7 text-[rgb(var(--color-mossVelvet))]/70">
                      Frontend developer focused on modern, responsive, and
                      user-friendly web applications.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={120} className="space-y-8">
          <SectionHeading
            eyebrow="About Me"
            title="I turn clean layouts into memorable web experiences."
            description="I enjoy building React interfaces that are easy to scan, responsive by default, and animated with enough restraint to feel premium."
          />
          <div className="grid gap-4 sm:grid-cols-3">
            {stats.map((item, index) => (
              <StatCard key={item.label} {...item} icon={statIcons[index]} />
            ))}
          </div>
        </Reveal>
      </section>

      <ServicesSection />
      <TimelineSection />
      <CtaSection
        title="Need a portfolio that feels more alive?"
        description="A stronger portfolio can still keep the same colors and personality while feeling more confident on every screen."
      />
    </PageShell>
  );
};
