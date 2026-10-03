"use client";
import React from "react";
import { Reveal } from "./Reveal";
import { RevealDirection } from "@/lib/motion";
interface TextRevealProps {
  text: string;
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span" | "div";
  className?: string;
  wordClassName?: string;
  delay?: number;
  duration?: number;
  once?: boolean;
  direction?: RevealDirection;
  highlightWords?: string[];
  highlightClassName?: string;
}
export function TextReveal({
  text,
  as: Component = "h2",
  className = "",
  wordClassName = "",
  delay = 0,
  duration = 0.5,
  once = true,
  direction = "up",
  highlightWords = [],
  highlightClassName = "text-blue-600 dark:text-blue-300",
}: TextRevealProps) {
  return (
    <Reveal
      direction={direction}
      delay={delay}
      duration={duration}
      once={once}
    >
      <Component className={className}>
        {text.split(" ").map((word, i) => (
          <React.Fragment key={i}>
            {i > 0 && " "}
            <span
              className={
                highlightWords.includes(word)
                  ? highlightClassName
                  : wordClassName
              }
            >
              {word}
            </span>
          </React.Fragment>
        ))}
      </Component>
    </Reveal>
  );
}
