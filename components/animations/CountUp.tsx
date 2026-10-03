'use client';

import React, { useEffect, useRef } from 'react';
import { useInView, useReducedMotion } from 'framer-motion';

interface CountUpProps {
  end: number;
  start?: number;
  duration?: number; // duration in seconds, default 1.8
  prefix?: string;
  suffix?: string;
  decimals?: number;
  className?: string;
  once?: boolean;
  verified?: boolean;
}

export function CountUp({
  end,
  start = 0,
  duration = 1.4,
  prefix = '',
  suffix = '',
  decimals = 0,
  className = '',
  once = true,
  verified = false,
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const valueRef = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once, margin: '-20px' });
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (!isInView || !verified) return;

    if (shouldReduceMotion) {
      if (valueRef.current) {
        valueRef.current.textContent = formatValue(end, decimals);
      }
      return;
    }

    let startTimestamp: number | null = null;
    let frameId: number;
    const durationMs = duration * 1000;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / durationMs, 1);
      // easeOutExpo for crisp modern deceleration
      const easeOut = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const current = start + (end - start) * easeOut;

      // Updating text directly avoids a React render on every animation frame.
      if (valueRef.current) {
        valueRef.current.textContent = formatValue(current, decimals);
      }

      if (progress < 1) {
        frameId = requestAnimationFrame(step);
      } else {
        if (valueRef.current) {
          valueRef.current.textContent = formatValue(end, decimals);
        }
      }
    };

    frameId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frameId);
  }, [isInView, end, start, duration, decimals, shouldReduceMotion, verified]);

  return (
    <span ref={ref} className={`tabular-nums ${className}`}>
      {prefix}
      <span ref={valueRef}>{formatValue(end, decimals)}</span>
      {suffix}
    </span>
  );
}

function formatValue(value: number, decimals: number) {
  return decimals > 0
    ? value.toFixed(decimals)
    : Math.floor(value).toLocaleString();
}
