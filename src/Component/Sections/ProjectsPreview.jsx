import React from "react";
import { projects } from "../Data/portfolioData";
import { ActionLink } from "../Common/ActionLink";
import { ProjectCard } from "../Common/ProjectCard";
import { Reveal } from "../Common/Reveal";
import { SectionHeading } from "../Common/SectionHeading";

export const ProjectsPreview = ({ showAll = false, dense = false }) => {
  const visibleProjects = showAll ? projects : projects.slice(0, 3);

  return (
    <section
      className={`mx-auto max-w-7xl px-6 ${dense ? "py-10" : "py-16"} sm:px-8 lg:px-12`}
    >
      <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <Reveal>
          <SectionHeading
            eyebrow="My Work"
            title={showAll ? "Project collection" : "Selected projects"}
            description="Each card gives a quick sense of the goal, stack, and finish so visitors can scan the work without friction."
          />
        </Reveal>
        {!showAll && (
          <Reveal delay={120}>
            <ActionLink to="/projects" variant="outline">
              See All Projects
            </ActionLink>
          </Reveal>
        )}
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {visibleProjects.map((project, index) => (
          <Reveal key={project.title} delay={index * 80}>
            <ProjectCard project={project} index={index} />
          </Reveal>
        ))}
      </div>
    </section>
  );
};
