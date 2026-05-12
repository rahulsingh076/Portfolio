import React, { useEffect, useRef, useState } from "react";

export const Reveal = ({
  children,
  className = "",
  delay = 0,
  as: Component = "div",
}) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;

    if (!node) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(node);
        }
      },
      { threshold: 0.18 }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  return React.createElement(
    Component,
    {
      ref,
      className: `reveal-in ${visible ? "is-visible" : ""} ${className}`,
      style: { "--reveal-delay": `${delay}ms` },
    },
    children
  );
};
