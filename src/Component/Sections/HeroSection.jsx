import React from "react";
import { Download, Send, Sparkles } from "lucide-react";
import profileImage from "../../assets/Photos/Logo.png";
import TypewriterEffect from "../Utility/typewrite";
import { ActionLink } from "../Common/ActionLink";
import { Reveal } from "../Common/Reveal";
import { StatCard } from "../Common/StatCard";
import { profile, stats } from "../Data/portfolioData";

export const HeroSection = () => {
  return (
    <section className="mx-auto grid max-w-7xl items-center gap-12 px-6 pb-16 pt-10 sm:px-8 lg:min-h-[calc(100vh-6rem)] lg:grid-cols-[1fr_0.9fr] lg:px-12">
      <Reveal className="space-y-8">
        <p className="inline-flex items-center gap-2 rounded-lg border border-[rgb(var(--color-mossVelvet))]/15 bg-white/70 px-4 py-2 text-sm font-semibold shadow-sm backdrop-blur">
          <span className="h-2 w-2 animate-pulse rounded-full bg-[rgb(var(--color-mossVelvet))]" />
          Hi, I am {profile.name}.
        </p>

        <TypewriterEffect />

        <p className="max-w-2xl text-base leading-8 text-[rgb(var(--color-mossVelvet))]/75 sm:text-lg">
          {profile.tagline} I specialize in frontend development, study at{" "}
          {profile.education} in South Korea, and I am currently learning the{" "}
          {profile.learning}.
        </p>

        <div className="flex flex-col gap-4 sm:flex-row">
          <ActionLink to="/hire" icon={Send}>
            Hire Me
          </ActionLink>
          <ActionLink to="/projects" variant="outline" icon={Download}>
            View Projects
          </ActionLink>
        </div>
      </Reveal>

      <Reveal delay={160} className="relative">
        <div className="hero-card relative rounded-lg border border-[rgb(var(--color-mossVelvet))]/15 bg-white/70 p-5 shadow-xl shadow-[rgb(var(--color-mossVelvet))]/10 backdrop-blur">
          <div className="relative overflow-hidden rounded-lg bg-[rgb(var(--color-cloudMilk))] p-6">
            <div className="absolute right-8 top-8 grid grid-cols-6 gap-2 opacity-50">
              {Array.from({ length: 36 }).map((_, index) => (
                <span
                  key={index}
                  className="h-1.5 w-1.5 rounded-full bg-[rgb(var(--color-mossVelvet))]/50"
                />
              ))}
            </div>
            <div className="relative flex min-h-72 flex-col justify-between">
              <div className="max-w-sm">
                <span className="grid h-12 w-12 place-items-center rounded-lg bg-white text-[rgb(var(--color-mossVelvet))] shadow-sm">
                  <Sparkles size={24} aria-hidden="true" />
                </span>
                <h2 className="mt-6 font-heading text-4xl font-bold leading-tight">
                  {profile.name}
                </h2>
                <p className="mt-3 text-sm font-semibold uppercase text-[rgb(var(--color-mossVelvet))]/65">
                  {profile.role} | {profile.education}
                </p>
              </div>
              <div className="my-6 overflow-hidden rounded-lg border border-[rgb(var(--color-mossVelvet))]/15 bg-white/70">
                <img
                  src={profileImage}
                  alt={`${profile.name} portfolio identity`}
                  className="h-44 w-full object-cover"
                />
              </div>
              <div className="grid gap-4 sm:grid-cols-3">
                {stats.map((item) => (
                  <StatCard key={item.label} {...item} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
};
