import React from "react";
import { PageShell } from "../Common/PageShell";
import { HeroSection } from "../Sections/HeroSection";
import { ServicesSection } from "../Sections/ServicesSection";
import { SkillsSection } from "../Sections/SkillsSection";
import { ProjectsPreview } from "../Sections/ProjectsPreview";
import { TimelineSection } from "../Sections/TimelineSection";
import { CtaSection } from "../Sections/CtaSection";

export const Home = () => {
  return (
    <PageShell>
      <HeroSection />
      <ServicesSection />
      <SkillsSection />
      <ProjectsPreview />
      <TimelineSection title="From idea to finished page" />
      <CtaSection />
    </PageShell>
  );
};
