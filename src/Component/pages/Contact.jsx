import React from "react";
import { Clock3, Handshake, Mail } from "lucide-react";
import { contactMethods } from "../Data/portfolioData";
import { ContactForm } from "../Common/ContactForm";
import { ContactMethodCard } from "../Common/ContactMethodCard";
import { PageShell } from "../Common/PageShell";
import { Reveal } from "../Common/Reveal";
import { SectionHeading } from "../Common/SectionHeading";

const icons = [Mail, Handshake, Clock3];

export const Contact = () => {
  return (
    <PageShell>
      <section className="mx-auto grid max-w-7xl gap-10 px-6 py-16 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:px-12">
        <Reveal className="space-y-8">
          <SectionHeading
            eyebrow="Get In Touch"
            title="Tell me what you want to build."
            description="Send a clear project note, timeline, and page list. I will use it to understand the right structure, motion level, and next step."
          />

          <div className="grid gap-4">
            {contactMethods.map((method, index) => (
              <ContactMethodCard
                key={method.title}
                {...method}
                icon={icons[index]}
              />
            ))}
          </div>
        </Reveal>

        <Reveal delay={120}>
          <ContactForm />
        </Reveal>
      </section>
    </PageShell>
  );
};
