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
            title="Frontend projects and practice work."
            description="These project cards show the kind of interfaces I am building while sharpening React, Tailwind CSS, JavaScript, and data-driven UI skills."
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
        title="Have a frontend idea to build?"
        description="I can help organize the layout, choose the right components, and turn the idea into a responsive web page."
      />
    </PageShell>
  );
};
