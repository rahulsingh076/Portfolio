import React from "react";
import { PageShell } from "../Common/PageShell";
import { ProjectCard } from "../Common/ProjectCard";
import { Reveal } from "../Common/Reveal";
import { SectionHeading } from "../Common/SectionHeading";
import { TimelineSection } from "../Sections/TimelineSection";
import { CtaSection } from "../Sections/CtaSection";
import { projects } from "../Data/portfolioData";

export const Project = () => {
  return (
    <PageShell>
      <section className="mx-auto max-w-7xl px-6 py-14 sm:px-8 lg:px-12">
        <Reveal>
          <SectionHeading
            eyebrow="Projects"
            title="Work built around structure, motion, and clarity."
            description="Each project focuses on a clear message, responsive flow, and a visual rhythm that helps the work feel easy to understand."
            align="center"
          />
        </Reveal>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Reveal key={project.title} delay={index * 80}>
              <ProjectCard project={project} index={index} />
            </Reveal>
          ))}
        </div>
      </section>

      <TimelineSection title="How each project moves" />
      <CtaSection
        title="Have a project that needs a stronger web presence?"
        description="Bring the idea and the must-have sections. The component system can handle the rest."
      />
    </PageShell>
  );
};
