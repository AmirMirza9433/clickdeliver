import { Variants, Transition } from 'framer-motion';

/**
 * ClickDeliver Motion Design System
 * Inspired by modern startup landing pages (Uber, Careem, Linear, Stripe, Vercel).
 * All animations prioritize 60fps performance: only transform & opacity.
 */

// Custom cubic-bezier easing curve
export const MOTION_EASE = [0.16, 1, 0.3, 1] as const;
export const MOTION_EASE_OUT = [0.16, 1, 0.3, 1] as const;
export const MOTION_EASE_SPRING = { type: 'spring', stiffness: 420, damping: 32 } as const;

// Standard durations (0.5s - 0.9s per prompt instructions)
export const DURATION_FAST = 0.24;
export const DURATION_NORMAL = 0.48;
export const DURATION_SLOW = 0.64;

export const transitionDefault: Transition = {
  duration: DURATION_NORMAL,
  ease: MOTION_EASE,
};

export const transitionFast: Transition = {
  duration: DURATION_FAST,
  ease: MOTION_EASE,
};

export const transitionSlow: Transition = {
  duration: DURATION_SLOW,
  ease: MOTION_EASE,
};

export type RevealDirection = 'up' | 'down' | 'left' | 'right' | 'none';

export const getRevealVariants = (
  direction: RevealDirection = 'up',
  distance = 48
): Variants => {
  let x = 0;
  let y = 0;

  if (direction === 'up') y = distance;
  if (direction === 'down') y = -distance;
  if (direction === 'left') x = distance;
  if (direction === 'right') x = -distance;

  return {
    hidden: {
      opacity: 0,
      x,
      y,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: DURATION_NORMAL,
        ease: MOTION_EASE,
      },
    },
  };
};

export const staggerContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.03,
    },
  },
};

export const staggerItemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: DURATION_NORMAL,
      ease: MOTION_EASE,
    },
  },
};

export const floatKeyframes = {
  y: [0, -12, 0],
};

export const floatTransition = {
  duration: 4,
  repeat: Infinity,
  ease: 'easeInOut' as const,
};
