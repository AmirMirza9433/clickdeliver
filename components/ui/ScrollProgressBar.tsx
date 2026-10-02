'use client';

import { motion, useReducedMotion, useScroll, useSpring } from 'framer-motion';

export function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();
  const shouldReduceMotion = useReducedMotion();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 180,
    damping: 32,
    restDelta: 0.001,
  });

  return (
    <motion.div
      style={{ scaleX: shouldReduceMotion ? scrollYProgress : scaleX }}
      className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-blue-600 via-brand-primary to-cyan-400 origin-left z-[100] shadow-sm shadow-blue-500/50"
    />
  );
}
