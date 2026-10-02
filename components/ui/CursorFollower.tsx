'use client';

import { useEffect, useState } from 'react';
import { motion, useMotionValue, useReducedMotion, useSpring } from 'framer-motion';

export function CursorFollower() {
  const [isVisible, setIsVisible] = useState(false);
  const [isPointer, setIsPointer] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 250, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Only enable on desktop pointer devices
    const isTouch =
      window.matchMedia('(pointer: coarse)').matches ||
      'ontouchstart' in window ||
      navigator.maxTouchPoints > 0;

    if (isTouch || shouldReduceMotion) return;

    setIsVisible(true);

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);

      const target = e.target as HTMLElement | null;
      const nextIsPointer = Boolean(
        target &&
        (target.tagName === 'A' ||
          target.tagName === 'BUTTON' ||
          target.closest('a') ||
          target.closest('button') ||
          target.getAttribute('role') === 'button')
      );
      setIsPointer((current) =>
        current === nextIsPointer ? current : nextIsPointer
      );
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [mouseX, mouseY, shouldReduceMotion]);

  if (!isVisible) return null;

  return (
    <>
      {/* Outer subtle glow circle */}
      <motion.div
        animate={{ width: isPointer ? 44 : 28, height: isPointer ? 44 : 28 }}
        transition={{ type: 'spring', stiffness: 420, damping: 34 }}
        className="pointer-events-none fixed top-0 left-0 z-50 rounded-full border border-blue-400/40 bg-blue-500/10 backdrop-blur-[1px]"
        style={{
          x: smoothX,
          y: smoothY,
          translateX: '-50%',
          translateY: '-50%',
        }}
      />
      {/* Center pinpoint */}
      <motion.div
        animate={{ width: isPointer ? 6 : 4, height: isPointer ? 6 : 4 }}
        transition={{ duration: 0.16, ease: 'easeOut' }}
        className="pointer-events-none fixed top-0 left-0 z-50 rounded-full bg-blue-400"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: '-50%',
          translateY: '-50%',
        }}
      />
    </>
  );
}
