"use client";
import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { RevealDirection, MOTION_EASE } from "@/lib/motion";
interface RevealProps {
  children: React.ReactNode;
  direction?: RevealDirection;
  delay?: number;
  duration?: number;
  distance?: number;
  className?: string;
  once?: boolean;
  amount?: number | "some" | "all";
}
export function Reveal({
  children,
  direction = "up",
  delay = 0,
  duration = 0.5,
  distance = 32,
  className = "",
  once = true,
  amount = 0.15,
}: RevealProps) {
  const reduced = useReducedMotion();
  const travel = Math.min(Math.abs(distance), 48);
  const x =
    direction === "left"
      ? [-travel, 0]
      : direction === "right"
        ? [travel, 0]
        : 0;
  const y =
    direction === "up"
      ? [travel, 0]
      : direction === "down"
        ? [-travel, 0]
        : 0;

  return (
    <motion.div
      data-motion-reveal
      initial={false}
      whileInView={
        reduced
          ? { opacity: 1, x: 0, y: 0 }
          : { opacity: [0.18, 1], x, y }
      }
      viewport={{ once, amount }}
      transition={{
        duration: reduced ? 0 : duration,
        delay: reduced ? 0 : Math.min(delay, 0.24),
        ease: MOTION_EASE,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
