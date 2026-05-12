import React from "react";
import { Component, MonitorSmartphone, MousePointer2 } from "lucide-react";
import { services } from "../Data/portfolioData";
import { Reveal } from "../Common/Reveal";
import { SectionHeading } from "../Common/SectionHeading";
import { ServiceCard } from "../Common/ServiceCard";

const icons = [MonitorSmartphone, MousePointer2, Component];

export const ServicesSection = () => {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-12">
      <Reveal>
        <SectionHeading
          eyebrow="What I Do"
          title="Design, build, and polish"
          description="Clear sections, confident spacing, and interactions that help visitors move from first impression to action."
        />
      </Reveal>
      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {services.map((service, index) => (
          <Reveal key={service.title} delay={index * 80}>
            <ServiceCard {...service} icon={icons[index]} />
          </Reveal>
        ))}
      </div>
    </section>
  );
};
