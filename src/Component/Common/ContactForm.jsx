import React, { useState } from "react";
import { Send } from "lucide-react";
import { Button } from "./Button";
import { FormField } from "./FormField";

export const ContactForm = () => {
  const [sent, setSent] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSent(true);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-lg border border-[rgb(var(--color-mossVelvet))]/15 bg-white/70 p-6 shadow-sm backdrop-blur"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <FormField label="Your Name" name="name" placeholder="Your name" />
        <FormField label="Your Email" name="email" placeholder="Your email" type="email" />
      </div>
      <div className="mt-5">
        <FormField label="Subject" name="subject" placeholder="Project subject" />
      </div>
      <div className="mt-5">
        <FormField
          label="Message"
          name="message"
          placeholder="Tell me what you want to build"
          textarea
          rows={6}
        />
      </div>
      <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center">
        <Button type="submit" className="w-full sm:w-auto">
          Send Message
          <Send size={18} aria-hidden="true" />
        </Button>
        {sent && (
          <p className="text-sm font-semibold text-[rgb(var(--color-mossVelvet))]/70">
            Message preview received. Connect this form to your email service
            when you are ready.
          </p>
        )}
      </div>
    </form>
  );
};
