"use client";
import React from "react";
import { Reveal } from "./Reveal";
interface TextRevealProps {
  text: string;
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span" | "div";
  className?: string;
  wordClassName?: string;
  delay?: number;
  duration?: number;
  once?: boolean;
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
  highlightWords = [],
  highlightClassName = "text-blue-600 dark:text-blue-300",
}: TextRevealProps) {
  return (
    <Reveal delay={delay} duration={duration} once={once}>
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
