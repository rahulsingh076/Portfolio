import React from "react";
import {
  Braces,
  Code2,
  Coffee,
  Database,
  FileCode2,
  Layers3,
  Palette,
  Smartphone,
  Terminal,
} from "lucide-react";
import { SectionHeading } from "../Common/SectionHeading";
import { Reveal } from "../Common/Reveal";
import { SkillCard } from "../Common/SkillCard";
import { skills } from "../Data/portfolioData";

const icons = [
  FileCode2,
  Palette,
  Code2,
  Smartphone,
  Layers3,
  Braces,
  Terminal,
  Code2,
  Coffee,
  Database,
  Braces,
];

export const SkillsSection = () => {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-12">
      <Reveal>
        <SectionHeading
          eyebrow="My Skills"
          title="Skills and technologies"
          description="A practical frontend stack with programming foundations and a growing MERN direction."
          align="center"
        />
      </Reveal>

      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((skill, index) => (
          <Reveal key={skill.name} delay={index * 70}>
            <SkillCard {...skill} icon={icons[index % icons.length]} />
          </Reveal>
        ))}
      </div>
    </section>
  );
};
