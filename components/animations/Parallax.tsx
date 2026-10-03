'use client';

import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useSpring, useTransform, useReducedMotion } from 'framer-motion';

interface ParallaxProps {
  children: React.ReactNode;
  speed?: number; // e.g. 0.2 means +20% scroll translation, -0.2 means opposite
  className?: string;
}

export function Parallax({
  children,
  speed = 0.15,
  className = '',
}: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    const isTouch =
      window.matchMedia('(pointer: coarse)').matches ||
      'ontouchstart' in window ||
      navigator.maxTouchPoints > 0;
    setIsTouchDevice(isTouch);
  }, []);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  // Calculate subtle offset (-50px to 50px scaled by speed)
  const offsetDistance = 100 * speed;
  const rawY = useTransform(
    scrollYProgress,
    [0, 1],
    [-offsetDistance, offsetDistance]
  );
  const y = useSpring(rawY, { stiffness: 180, damping: 30, mass: 0.3 });

  if (shouldReduceMotion || isTouchDevice) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div ref={ref} style={{ y }} className={className}>
      {children}
    </motion.div>
  );
}
