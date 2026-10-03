"use client";
import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { MOTION_EASE } from "@/lib/motion";
interface StaggerProps {
  children: React.ReactNode;
  staggerGap?: number;
  delay?: number;
  className?: string;
  once?: boolean;
  amount?: number | "some" | "all";
}
export function Stagger({
  children,
  staggerGap = 0.08,
  delay = 0,
  className = "",
  once = true,
  amount = 0.12,
}: StaggerProps) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      initial={false}
      whileInView="visible"
      viewport={{ once, amount }}
      variants={{
        visible: {
          transition: {
            staggerChildren: reduced
              ? 0
              : Math.min(0.1, Math.max(0.06, staggerGap)),
            delayChildren: reduced ? 0 : Math.min(delay, 0.2),
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
interface StaggerItemProps {
  children: React.ReactNode;
  className?: string;
  yOffset?: number;
  duration?: number;
}
export function StaggerItem({
  children,
  className = "",
  yOffset = 16,
  duration = 0.48,
}: StaggerItemProps) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      data-motion-reveal
      variants={{
        visible: {
          opacity: reduced ? 1 : [0.25, 1],
          y: reduced ? 0 : [Math.min(yOffset, 20), 0],
          transition: { duration: reduced ? 0 : duration, ease: MOTION_EASE },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
