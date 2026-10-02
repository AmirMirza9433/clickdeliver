'use client';

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { MOTION_EASE } from '@/lib/motion';

interface StaggerProps {
  children: React.ReactNode;
  staggerGap?: number;
  delay?: number;
  className?: string;
  once?: boolean;
  amount?: number | 'some' | 'all';
}

export function Stagger({
  children,
  staggerGap = 0.075,
  delay = 0,
  className = '',
  once = true,
  amount = 0.2,
}: StaggerProps) {
  const shouldReduceMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: shouldReduceMotion ? 1 : 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : staggerGap,
        delayChildren: shouldReduceMotion ? 0 : Math.min(delay * 0.7, 0.3),
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
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
  className = '',
  yOffset = 24,
  duration = 0.46,
}: StaggerItemProps) {
  const shouldReduceMotion = useReducedMotion();

  const itemVariants = {
    hidden: {
      opacity: shouldReduceMotion ? 1 : 0,
      y: shouldReduceMotion ? 0 : yOffset,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0 : duration,
        ease: MOTION_EASE,
      },
    },
  };

  return (
    <motion.div variants={itemVariants} className={className}>
      {children}
    </motion.div>
  );
}
