import React, { useEffect, useMemo, useState } from "react";

export default function TypewriterEffect() {
    const words = useMemo(
        () => [
            "Web Developer",
            "React Builder",
            "UI Designer",
            "UX Thinker",
        ],
        []
    );

    const [text, setText] = useState("");
    const [wordIndex, setWordIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const currentWord = words[wordIndex];

        let typingSpeed = isDeleting ? 45 : 95;

        if (!isDeleting && charIndex === currentWord.length) {
            typingSpeed = 1200;
        }

        const timer = setTimeout(() => {
            if (!isDeleting) {
                if (charIndex < currentWord.length) {
                    setText(currentWord.substring(0, charIndex + 1));
                    setCharIndex((prev) => prev + 1);
                } else {
                    setIsDeleting(true);
                }
            } else {
                if (charIndex > 0) {
                    setText(currentWord.substring(0, charIndex - 1));
                    setCharIndex((prev) => prev - 1);
                } else {
                    setIsDeleting(false);
                    setWordIndex((prev) => (prev + 1) % words.length);
                }
            }
        }, typingSpeed);

        return () => clearTimeout(timer);
    }, [charIndex, isDeleting, wordIndex, words]);

    return (
        <div className="relative flex flex-col">
            <h1 className="relative font-heading font-black leading-[1] tracking-[0] text-[rgb(var(--color-mossVelvet))]">
                <span className="block text-4xl font-semibold leading-tight text-[rgb(var(--color-mossVelvet))]/80 sm:text-5xl">
                    I am a
                </span>

                <span
                    aria-live="polite"
                    className="mt-2 inline-block min-h-[1.1em] bg-clip-text text-4xl text-[rgb(var(--color-mossVelvet))] sm:text-6xl"
                >
                    {text}
                </span>

                <span className="ml-2 inline-block h-[2em] w-[5px]  animate-pulse rounded-full bg-[rgb(var(--color-mossVelvet))]/60" />
            </h1>

            <div className="mt-5 flex items-center gap-3">
                <span className="h-[2px] w-16 rounded-full bg-[rgb(var(--color-mossVelvet))]" />
                <span className="h-[2px] w-8 rounded-full bg-[rgb(var(--color-mossVelvet))]/40" />
                <span className="h-[2px] w-4 rounded-full bg-[rgb(var(--color-mossVelvet))]/20" />
            </div>
        </div>
    );
}
