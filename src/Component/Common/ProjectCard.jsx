import React from "react";
import { ArrowUpRight } from "lucide-react";

export const ProjectCard = ({ project, index = 0 }) => {
  return (
    <article className="hover-card group flex h-full flex-col rounded-lg border border-[rgb(var(--color-mossVelvet))]/15 bg-white/70 shadow-sm backdrop-blur">
      <div className="relative min-h-44 overflow-hidden rounded-t-lg bg-[rgb(var(--color-cloudMilk))]">
        <div className="absolute inset-6 rounded-lg border border-[rgb(var(--color-mossVelvet))]/20" />
        <div className="absolute left-8 top-8 h-16 w-24 rounded-lg bg-[rgb(var(--color-mossVelvet))]/10 transition-transform duration-500 group-hover:scale-110" />
        <div className="absolute bottom-7 right-8 grid grid-cols-4 gap-2 opacity-60 transition-transform duration-500 group-hover:-translate-y-2">
          {Array.from({ length: 16 }).map((_, dotIndex) => (
            <span
              key={dotIndex}
              className="h-1.5 w-1.5 rounded-full bg-[rgb(var(--color-mossVelvet))]/45"
            />
          ))}
        </div>
        <span className="absolute left-5 top-5 rounded-md bg-white/80 px-3 py-1 text-xs font-semibold text-[rgb(var(--color-mossVelvet))] shadow-sm">
          0{index + 1}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-sm font-semibold text-[rgb(var(--color-mossVelvet))]/65">
              {project.category}
            </p>
            <h3 className="mt-2 font-heading text-xl font-bold">
              {project.title}
            </h3>
          </div>
          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg border border-[rgb(var(--color-mossVelvet))]/15 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:bg-[rgb(var(--color-mossVelvet))] group-hover:text-white">
            <ArrowUpRight size={19} aria-hidden="true" />
          </span>
        </div>

        <p className="mt-4 flex-1 text-sm leading-7 text-[rgb(var(--color-mossVelvet))]/70">
          {project.description}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.tools.map((tool) => (
            <span
              key={tool}
              className="rounded-md border border-[rgb(var(--color-mossVelvet))]/15 px-3 py-1 text-xs font-semibold"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
};
