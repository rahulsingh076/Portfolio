import React from "react";
import { ArrowUpRight } from "lucide-react";

export const BlogCard = ({ post }) => {
  return (
    <article className="hover-card group rounded-lg border border-[rgb(var(--color-mossVelvet))]/15 bg-white/70 p-6 shadow-sm backdrop-blur">
      <div className="mb-8 flex items-center justify-between gap-4">
        <span className="rounded-md bg-[rgb(var(--color-cloudMilk))] px-3 py-1 text-sm font-semibold">
          {post.tag}
        </span>
        <span className="text-sm text-[rgb(var(--color-mossVelvet))]/60">
          {post.readTime}
        </span>
      </div>
      <h3 className="font-heading text-2xl font-bold leading-snug">
        {post.title}
      </h3>
      <p className="mt-4 text-sm leading-7 text-[rgb(var(--color-mossVelvet))]/70">
        {post.excerpt}
      </p>
      <span className="mt-8 inline-flex items-center gap-2 font-heading text-sm font-semibold">
        Read note
        <ArrowUpRight
          size={17}
          className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
          aria-hidden="true"
        />
      </span>
    </article>
  );
};
