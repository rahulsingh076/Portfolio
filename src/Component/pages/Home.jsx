import React from "react";
import { PageShell } from "../Common/PageShell";
import { HeroSection } from "../Sections/HeroSection";
import { BioSection } from "../Sections/BioSection";
import { ServicesSection } from "../Sections/ServicesSection";
import { SkillsSection } from "../Sections/SkillsSection";
import { ProjectsPreview } from "../Sections/ProjectsPreview";
import { TimelineSection } from "../Sections/TimelineSection";
import { CtaSection } from "../Sections/CtaSection";

export const Home = () => {
  return (
    <PageShell>
      <HeroSection />
      <BioSection />
      <ServicesSection />
      <SkillsSection />
      <ProjectsPreview />
      <TimelineSection title="My learning and development path" />
      <CtaSection />
    </PageShell>
  );
};
