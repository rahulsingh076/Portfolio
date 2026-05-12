import React from "react";
import { blogPosts } from "../Data/portfolioData";
import { BlogCard } from "../Common/BlogCard";
import { PageShell } from "../Common/PageShell";
import { Reveal } from "../Common/Reveal";
import { SectionHeading } from "../Common/SectionHeading";
import { CtaSection } from "../Sections/CtaSection";

export const Blog = () => {
  return (
    <PageShell>
      <section className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-12">
        <Reveal>
          <SectionHeading
            eyebrow="Blog"
            title="Notes from my frontend learning path."
            description="Short writing topics about frontend development, MERN stack learning, and studying while building practical web projects."
            align="center"
          />
        </Reveal>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {blogPosts.map((post, index) => (
            <Reveal key={post.title} delay={index * 80}>
              <BlogCard post={post} />
            </Reveal>
          ))}
        </div>
      </section>

      <CtaSection
        title="Want to talk about frontend work?"
        description="Reach out with your project idea, learning goal, or website plan and I will help shape the next step."
      />
    </PageShell>
  );
};
