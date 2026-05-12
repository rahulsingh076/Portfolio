import React from "react";
import { Code2, FileCode2, GitBranch, Layers3, Palette, Smartphone } from "lucide-react";
import { SectionHeading } from "../Common/SectionHeading";
import { Reveal } from "../Common/Reveal";
import { SkillCard } from "../Common/SkillCard";
import { skills } from "../Data/portfolioData";

const icons = [Code2, FileCode2, Layers3, Smartphone, Palette, GitBranch];

export const SkillsSection = () => {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-12">
      <Reveal>
        <SectionHeading
          eyebrow="My Skills"
          title="Skills and technologies"
          description="A focused frontend stack for responsive pages, polished motion, clean layouts, and smooth user journeys."
          align="center"
        />
      </Reveal>

      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((skill, index) => (
          <Reveal key={skill.name} delay={index * 70}>
            <SkillCard {...skill} icon={icons[index]} />
          </Reveal>
        ))}
      </div>
    </section>
  );
};
