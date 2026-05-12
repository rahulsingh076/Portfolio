import React from "react";
import { BookOpen, Code2, GraduationCap, MapPin } from "lucide-react";
import profileImage from "../../assets/Photos/Logo.png";
import { profile } from "../Data/portfolioData";
import { Reveal } from "../Common/Reveal";
import { SectionHeading } from "../Common/SectionHeading";

const bioFacts = [
  { icon: GraduationCap, label: "University", value: profile.education },
  { icon: MapPin, label: "Location", value: profile.location },
  { icon: Code2, label: "Specialist", value: profile.focus },
  { icon: BookOpen, label: "Learning", value: profile.learning },
];

export const BioSection = () => {
  return (
    <section className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-16 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:px-12">
      <Reveal className="relative">
        <div className="relative overflow-hidden rounded-lg border border-[rgb(var(--color-mossVelvet))]/15 bg-white/75 p-4 shadow-xl shadow-[rgb(var(--color-mossVelvet))]/10 backdrop-blur">
          <div className="aspect-[4/3] overflow-hidden rounded-lg bg-[rgb(var(--color-cloudMilk))]">
            <img
              src={profileImage}
              alt={`${profile.name} portfolio brand`}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute bottom-7 left-7 right-7 rounded-lg border border-white/60 bg-white/80 p-4 shadow-lg backdrop-blur">
            <p className="font-heading text-xl font-bold">{profile.name}</p>
            <p className="mt-1 text-sm font-semibold text-[rgb(var(--color-mossVelvet))]/70">
              {profile.role} | {profile.education}
            </p>
          </div>
        </div>
      </Reveal>

      <Reveal delay={120} className="space-y-8">
        <SectionHeading
          eyebrow="Bio"
          title="Frontend developer studying in South Korea."
          description={profile.bio}
        />

        <div className="grid gap-4 sm:grid-cols-2">
          {bioFacts.map(({ icon, label, value }) => (
            <article
              key={label}
              className="hover-card rounded-lg border border-[rgb(var(--color-mossVelvet))]/15 bg-white/70 p-5 shadow-sm backdrop-blur"
            >
              <span className="grid h-11 w-11 place-items-center rounded-lg bg-[rgb(var(--color-cloudMilk))] text-[rgb(var(--color-mossVelvet))]">
                {React.createElement(icon, {
                  size: 22,
                  "aria-hidden": "true",
                })}
              </span>
              <p className="mt-4 text-sm font-semibold uppercase text-[rgb(var(--color-mossVelvet))]/60">
                {label}
              </p>
              <p className="mt-1 font-heading text-lg font-bold">{value}</p>
            </article>
          ))}
        </div>

        <div className="flex flex-wrap gap-2">
          {profile.techStack.map((item) => (
            <span
              key={item}
              className="rounded-lg border border-[rgb(var(--color-mossVelvet))]/15 bg-white/70 px-3 py-2 text-sm font-semibold text-[rgb(var(--color-mossVelvet))]/80 shadow-sm"
            >
              {item}
            </span>
          ))}
        </div>
      </Reveal>
    </section>
  );
};
