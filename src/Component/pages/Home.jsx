import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../Common/Button";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import TypewriterEffect from "../Utility/typewrite";

export const Home = () => {
  const boxRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      boxRef.current,
      { opacity: 0, x: -50, scale: 0.3 },
      { opacity: 1, x: 0, scale: 1, duration: 1, ease: "power3.out" }
    );
  }, []);

  return (
    <main className="  min-h-[calc(100vh-6rem)] bg-[rgb(var(--color-cloudMilk))] text-[rgb(var(--color-charcoal))]">
      <section className="max-w-8xl mx-auto px-8 py-16 md:px-12 lg:flex lg:items-center lg:justify-around">
        <div className="space-y-8 lg:max-w-2xl">
          <p
            ref={boxRef}
            className="inline-flex items-center rounded-full bg-[rgb(var(--color-mossVelvet))]/10 px-4 py-2 text-sm font-medium text-[rgb(var(--color-mossVelvet))]"
          >
            Hi there — I build polished web experiences.
          </p>
          <div className="space-y-6">
            <TypewriterEffect />
            {/* <h1 className="text-4xl font-bold tracking-tight text-[rgb(var(--color-mossVelvet))] sm:text-5xl">
              Crafting modern portfolio websites with React & Tailwind.
            </h1> */}
            <p className="max-w-2xl text-base leading-8 text-[rgb(var(--color-charcoal))]/90">
              I design responsive, accessible, and memorable web pages that help
              creatives and businesses stand out online. Explore my work, learn
              about my process, or get in touch to start your next project.
            </p>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row">
            <Link to="/projects">
              <Button>View Projects</Button>
            </Link>
            <Link to="/contact">
              {/* <Button className="bg-white/90 text-[rgb(var(--color-mossVelvet))]/10 hover:bg-[rgb(var(--color-mossVelvet))]/10 hover:text-[rgb(var(--color-mossVelvet))]">
                Contact Me
              </Button> */}
              <Button className="bg-[rgb(var(--color-mossVelvet))] ">
                Contact Me
              </Button>
            </Link>
          </div>
        </div>

        <div className="mt-12 lg:mt-0 lg:w-[42%]">
          <div className="rounded-4xl border border-[rgb(var(--color-mossVelvet))]/10 bg-white p-8 shadow-[0_35px_60px_-30px_rgba(0,0,0,0.2)]">
            <p className="mb-6 text-sm uppercase tracking-[0.35em] text-[rgb(var(--color-mossVelvet))]/80">
              Featured Skills
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl border border-[rgb(var(--color-mossVelvet))]/10 bg-[rgb(var(--color-cloudMilk))] p-6">
                <h2 className="text-lg font-semibold">React</h2>
                <p className="mt-2 text-sm text-[rgb(var(--color-charcoal))]/80">
                  Building reusable components and interactive UI states.
                </p>
              </div>
              <div className="rounded-3xl border border-[rgb(var(--color-mossVelvet))]/10 bg-[rgb(var(--color-cloudMilk))] p-6">
                <h2 className="text-lg font-semibold">Tailwind CSS</h2>
                <p className="mt-2 text-sm text-[rgb(var(--color-charcoal))]/80">
                  Creating responsive layouts with clean, modern styling.
                </p>
              </div>
              <div className="rounded-3xl border border-[rgb(var(--color-mossVelvet))]/10 bg-[rgb(var(--color-cloudMilk))] p-6">
                <h2 className="text-lg font-semibold">UI/UX</h2>
                <p className="mt-2 text-sm text-[rgb(var(--color-charcoal))]/80">
                  Delivering polished experiences that feel intuitive and
                  professional.
                </p>
              </div>
              <div className="rounded-3xl border border-[rgb(var(--color-mossVelvet))]/10 bg-[rgb(var(--color-cloudMilk))] p-6">
                <h2 className="text-lg font-semibold">Fast Performance</h2>
                <p className="mt-2 text-sm text-[rgb(var(--color-charcoal))]/80">
                  Optimized builds and smooth interactions for every screen.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
