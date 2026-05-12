import React from "react";
import { Briefcase, Code2, GraduationCap, MapPin, Star } from "lucide-react";
import profileImage from "../../assets/Photos/Logo.png";
import { PageShell } from "../Common/PageShell";
import { Reveal } from "../Common/Reveal";
import { SectionHeading } from "../Common/SectionHeading";
import { StatCard } from "../Common/StatCard";
import { ServicesSection } from "../Sections/ServicesSection";
import { TimelineSection } from "../Sections/TimelineSection";
import { CtaSection } from "../Sections/CtaSection";
import { profile, stats } from "../Data/portfolioData";

const statIcons = [Briefcase, Code2, Star];

export const About = () => {
  return (
    <PageShell>
      <section className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-16 sm:px-8 lg:grid-cols-[0.9fr_1fr] lg:px-12">
        <Reveal className="relative">
          <div className="relative min-h-96 overflow-hidden rounded-lg border border-[rgb(var(--color-mossVelvet))]/15 bg-white/70 p-6 shadow-xl shadow-[rgb(var(--color-mossVelvet))]/10 backdrop-blur">
            <div className="h-full min-h-80 overflow-hidden rounded-lg bg-[rgb(var(--color-cloudMilk))]">
              <img
                src={profileImage}
                alt={`${profile.name} portfolio brand`}
                className="h-full min-h-80 w-full object-cover"
              />
            </div>
            <div className="absolute bottom-10 left-10 right-10 rounded-lg border border-white/60 bg-white/85 p-5 text-center shadow-lg backdrop-blur">
              <span className="mx-auto grid h-14 w-14 place-items-center rounded-lg bg-[rgb(var(--color-cloudMilk))] shadow-sm">
                <Code2 size={28} aria-hidden="true" />
              </span>
              <h1 className="mt-4 font-heading text-3xl font-bold">
                {profile.name}
              </h1>
              <p className="mt-2 leading-7 text-[rgb(var(--color-mossVelvet))]/70">
                {profile.role} studying at {profile.education}.
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={120} className="space-y-8">
          <SectionHeading
            eyebrow="About Me"
            title="I turn frontend skills into useful web experiences."
            description={profile.bio}
          />
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-lg border border-[rgb(var(--color-mossVelvet))]/15 bg-white/70 p-5 shadow-sm backdrop-blur">
              <GraduationCap size={24} aria-hidden="true" />
              <p className="mt-3 font-heading text-lg font-bold">
                {profile.education}
              </p>
              <p className="mt-2 text-sm leading-6 text-[rgb(var(--color-mossVelvet))]/70">
                Student based in {profile.location}, focused on practical web
                development growth.
              </p>
            </div>
            <div className="rounded-lg border border-[rgb(var(--color-mossVelvet))]/15 bg-white/70 p-5 shadow-sm backdrop-blur">
              <MapPin size={24} aria-hidden="true" />
              <p className="mt-3 font-heading text-lg font-bold">
                {profile.focus}
              </p>
              <p className="mt-2 text-sm leading-6 text-[rgb(var(--color-mossVelvet))]/70">
                Building responsive pages while learning the {profile.learning}.
              </p>
            </div>
          </div>
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
        title="Need a frontend developer for a clean web experience?"
        description="I can help shape responsive layouts, React components, and simple portfolio pages with clear content and strong structure."
      />
    </PageShell>
  );
};
