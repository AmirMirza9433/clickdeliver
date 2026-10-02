'use client';

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { MOTION_EASE } from '@/lib/motion';

interface TextRevealProps {
  text: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span' | 'div';
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
  as: Component = 'h2',
  className = '',
  wordClassName = '',
  delay = 0,
  duration = 0.44,
  once = true,
  highlightWords = [],
  highlightClassName = 'bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent',
}: TextRevealProps) {
  const shouldReduceMotion = useReducedMotion();
  const words = text.split(' ');

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.045,
        delayChildren: shouldReduceMotion ? 0 : Math.min(delay * 0.7, 0.3),
      },
    },
  };

  const wordVariants = {
    hidden: {
      opacity: shouldReduceMotion ? 1 : 0,
      y: shouldReduceMotion ? 0 : '100%',
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

  const MotionComponent = motion[Component] || motion.h2;

  return (
    <MotionComponent
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: 0.3 }}
      className={className}
    >
      {words.map((word, i) => {
        // Strip out punctuation for matching highlights if needed
        const cleanWord = word.replace(/[^a-zA-Z0-9—]/g, '');
        const isHighlight = highlightWords.some(
          (hw) => hw.toLowerCase() === word.toLowerCase() || hw.toLowerCase() === cleanWord.toLowerCase()
        );

        return (
          <span
            key={i}
            className="inline-block overflow-hidden align-top mr-[0.28em] last:mr-0"
          >
            <motion.span
              variants={wordVariants}
              className={`inline-block ${
                isHighlight ? highlightClassName : wordClassName
              }`}
            >
              {word}
            </motion.span>
          </span>
        );
      })}
    </MotionComponent>
  );
}
