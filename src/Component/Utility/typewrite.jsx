import React, { useEffect, useState } from "react";

export default function TypewriterEffect() {
  const words = [
    "Creative Developer",
    "React Designer",
    "Frontend Engineer",
    "UI/UX Lover",
  ];

  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];

    const typingSpeed = isDeleting ? 60 : 120;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setText(currentWord.substring(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);

        if (charIndex + 1 === currentWord.length) {
          setTimeout(() => setIsDeleting(true), 1000);
        }
      } else {
        setText(currentWord.substring(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);

        if (charIndex === 0) {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, wordIndex]);

  return (
    <div className=" flex flex-col">
     <span className=" text-6xl font-semibold text-[rgb(var(--color-mossVelvet))] md:text-6xl">
         I am a{" "}
        </span>
      <span className=" text-5xl    font-semibold  md:text-6xl text-[rgb(var(--color-mossVelvet))] ">
        {/* --color-cloudMilk */}
        {text}
        <span className="animate-pulse text-[rgb(var(--color-mossVelvet))]/50 rounded-2xl">
          |
        </span>
      </span>
    </div>
  );
}
