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
            title="Notes on frontend design and polish."
            description="A dedicated writing page gives the portfolio one more way to show process, taste, and practical frontend thinking."
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
        title="Want a portfolio with writing, projects, and services?"
        description="Use the writing page to show your thinking, project taste, and the decisions behind the finished work."
      />
    </PageShell>
  );
};
