import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../Common/Button";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import TypewriterEffect from "../Utility/typewrite";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const Home = () => {
  const boxRef = useRef(null);
  const para = useRef(null);
  const link1 = useRef(null);
  const link2 = useRef(null);
  const skillRef = useRef(null);
  const card = useRef(null);
  const rotat1 = useRef(null);
  const rotat2 = useRef(null);
  const rotat3 = useRef(null);
  const rotat4 = useRef(null);
  useEffect(() => {
    gsap.fromTo(
      boxRef.current,
      { opacity: 0, x: -50, scale: 0.3 },
      {
        opacity: 1,
        x: 0,
        scale: 1,
        duration: 0.7,
        ease: "power3.out",
      }
    );

    gsap.fromTo(
      para.current,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.55,
        delay: 0.25,
        ease: "power3.out",
      }
    );

    gsap.fromTo(
      [link1.current, link2.current],
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        delay: 0.45,
        ease: "power3.out",
        stagger: 0.15,
      }
    );

    gsap.fromTo(
      card.current,
      { opacity: 0, scale: 0.55 },
      {
        opacity: 1,
        scale: 1,
        duration: 0.75,
        delay: 0.75,
        ease: "power3.out",
      }
    );

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".skill-item",
        {
          y: 18,
          opacity: 0,
          scale: 0.9,
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.5,
          delay: 1,
          ease: "power3.out",

          stagger: 0.12,
        }
      );
    }, skillRef);


    gsap.fromTo(
      rotat1.current,
      { rotate: 0, },
      {
        rotate: -3,
        duration: 1.5,
        ease: "none",
        scrollTrigger: {
          trigger: card.current,
          start: "top 80%",
          end: "top 25%",
          scrub: true,
          // markers: true,
        },
      }
    )
    gsap.fromTo(
      rotat2.current,
      { rotate: 0, },
      {
        rotate: 3,
        duration: 1.5,
      }
    )
    gsap.fromTo(
      rotat3.current,
      { rotate: 0, },
      {
        rotate: 3,
        duration: 1.5,
      }
    )
    gsap.fromTo(
      rotat4.current,
      { rotate: 0, },
      {
        rotate: -3,
        duration: 1.5,
      }
    )
    return () => ctx.revert();
  }, []);
  return (
    <main className="  h-screen bg-[rgb(var(--color-cloudMilk))] text-[rgb(var(--color-charcoal))]">
      <section className="max-w-8xl mx-auto px-8 py-16 md:px-12 lg:flex lg:items-center lg:justify-around">
        <div className="relative space-y-8 lg:max-w-2xl">
          {/* Soft background glow */}
          <div className="pointer-events-none absolute -left-10 -top-10 h-40 w-40 rounded-full bg-[rgb(var(--color-mossVelvet))]/10 blur-3xl" />

          {/* Intro Badge */}
          <p
            ref={boxRef}
            className="relative inline-flex items-center gap-2 rounded-full border border-[rgb(var(--color-mossVelvet))]/15 bg-white/70 px-5 py-2.5 text-sm font-semibold tracking-wide text-[rgb(var(--color-mossVelvet))] shadow-sm backdrop-blur-md"
          >
            <span className="h-2 w-2 animate-pulse rounded-full bg-[rgb(var(--color-mossVelvet))]" />
            Hi there — I build polished web experiences.
          </p>

          {/* Hero Content */}
          <div className="relative space-y-6">
            <TypewriterEffect />

            <p ref={para} className="max-w-2xl text-base leading-8 text-[rgb(var(--color-charcoal))]/85 sm:text-lg">
              I design responsive, accessible, and memorable web pages that help
              creatives and businesses stand out online. Explore my work, learn
              about my process, or get in touch to start your next project.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col gap-4 pt-2 sm:flex-row sm:items-center">
            <Link ref={link1} to="/projects" className="w-full sm:w-auto">
              <Button className="group w-full rounded-full bg-[rgb(var(--color-mossVelvet))] px-7 py-3 text-sm font-semibold 
              text-white shadow-lg shadow-[rgb(var(--color-mossVelvet))]/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-[rgb(var(--color-mossVelvet))]/30 sm:w-auto">
                View Projects
                <span className="ml-2 inline-block transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Button>
            </Link>

            <Link ref={link2} to="/contact" className="w-full sm:w-auto">
              <Button className="w-full border border-black bg-transparent text-green-950">
                Contact Me
              </Button>
            </Link>
          </div>

          {/* Small trust / highlight line */}
          <div ref={skillRef} className="flex flex-wrap items-center gap-3 pt-2 text-xs font-medium uppercase tracking-[0.25em] text-[rgb(var(--color-charcoal))]/50">
            <span className="skill-item">React</span>
            <span className="h-1 w-1 rounded-full bg-[rgb(var(--color-mossVelvet))]/40" />
            <span className="skill-item">Tailwind CSS</span>
            <span className="h-1 w-1 rounded-full bg-[rgb(var(--color-mossVelvet))]/40" />
            <span className="skill-item">Premium UI</span>
          </div>
        </div>

        <div ref={card} className="mt-12 lg:mt-0 lg:w-[42%]">
          <div
            className="premium-skill-card rounded-lg"
            style={{
              "--card-grad": "rgb(255, 255, 255)",
            }}
          >
            <div className="relative z-[2] rounded-lg bg-white p-8 shadow">
              <p className="mb-6 text-sm uppercase tracking-[0.35em] text-[rgb(var(--color-mossVelvet))]/80">
                Featured Skills
              </p>

              <div className="grid gap-4 sm:grid-cols-2 ">
                <div ref={rotat1} className="rounded-md  border border-[rgb(var(--color-mossVelvet))]/10 bg-[rgb(var(--color-cloudMilk))] p-6">
                  <h2 className="text-lg font-semibold">React</h2>
                  <p className="mt-2 text-sm text-[rgb(var(--color-charcoal))]/80">
                    Building reusable components and interactive UI states.
                  </p>
                </div>

                <div ref={rotat2} className="rounded-md border border-[rgb(var(--color-mossVelvet))]/10 bg-[rgb(var(--color-cloudMilk))] p-6">
                  <h2 className="text-lg font-semibold">Tailwind CSS</h2>
                  <p className="mt-2 text-sm text-[rgb(var(--color-charcoal))]/80">
                    Creating responsive layouts with clean, modern styling.
                  </p>
                </div>

                <div ref={rotat3} className="rounded-md border border-[rgb(var(--color-mossVelvet))]/10 bg-[rgb(var(--color-cloudMilk))] p-6">
                  <h2 className="text-lg font-semibold">UI/UX</h2>
                  <p className="mt-2 text-sm text-[rgb(var(--color-charcoal))]/80">
                    Delivering polished experiences that feel intuitive and professional.
                  </p>
                </div>

                <div ref={rotat4} className="rounded-md border border-[rgb(var(--color-mossVelvet))]/10 bg-[rgb(var(--color-cloudMilk))] p-6">
                  <h2 className="text-lg font-semibold">Fast Performance</h2>
                  <p className="mt-2 text-sm text-[rgb(var(--color-charcoal))]/80">
                    Optimized builds and smooth interactions for every screen.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
};
