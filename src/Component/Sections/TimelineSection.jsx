import React from "react";
import { timeline } from "../Data/portfolioData";
import { Reveal } from "../Common/Reveal";
import { SectionHeading } from "../Common/SectionHeading";
import { TimelineCard } from "../Common/TimelineCard";

export const TimelineSection = ({ title = "A simple build process" }) => {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-12">
      <Reveal>
        <SectionHeading
          eyebrow="Process"
          title={title}
          description="A quick look at my current path as a student, frontend developer, and MERN stack learner."
          align="center"
        />
      </Reveal>

      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {timeline.map((item, index) => (
          <Reveal key={item.period} delay={index * 80}>
            <TimelineCard {...item} index={index} />
          </Reveal>
        ))}
      </div>
    </section>
  );
};
