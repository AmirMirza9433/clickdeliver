'use client';

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { RevealDirection, MOTION_EASE } from '@/lib/motion';

interface RevealProps {
  children: React.ReactNode;
  direction?: RevealDirection;
  delay?: number;
  duration?: number;
  distance?: number;
  className?: string;
  once?: boolean;
  amount?: number | 'some' | 'all';
}

export function Reveal({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.65,
  distance = 50,
  className = '',
  once = true,
  amount = 0.2,
}: RevealProps) {
  const shouldReduceMotion = useReducedMotion();

  let initialX = 0;
  let initialY = 0;

  if (!shouldReduceMotion) {
    if (direction === 'up') initialY = distance;
    else if (direction === 'down') initialY = -distance;
    else if (direction === 'left') initialX = distance;
    else if (direction === 'right') initialX = -distance;
  }

  return (
    <motion.div
      initial={{
        opacity: 0,
        x: initialX,
        y: initialY,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
      }}
      viewport={{ once, amount }}
      transition={{
        duration: shouldReduceMotion ? 0.3 : duration,
        delay,
        ease: MOTION_EASE,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
