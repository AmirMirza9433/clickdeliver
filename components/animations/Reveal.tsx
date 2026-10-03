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
  delay = 0,
  duration = 0.5,
  distance = 16,
  className = "",
  once = true,
  amount = 0.15,
}: RevealProps) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      data-motion-reveal
      initial={false}
      whileInView={
        reduced
          ? { opacity: 1, y: 0 }
          : { opacity: [0.25, 1], y: [Math.min(distance, 20), 0] }
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
