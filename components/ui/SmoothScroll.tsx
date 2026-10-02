'use client';

import { useEffect } from 'react';
import Lenis from 'lenis';

export function SmoothScroll() {
  useEffect(() => {
    // Respect prefers-reduced-motion
    if (typeof window === 'undefined') return;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const lenis = new Lenis({
      duration: 0.85,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      touchMultiplier: 1.5,
      infinite: false,
    });

    let frameId: number;
    function raf(time: number) {
      lenis.raf(time);
      frameId = requestAnimationFrame(raf);
    }

    const startRaf = () => {
      cancelAnimationFrame(frameId);
      frameId = requestAnimationFrame(raf);
    };

    const handleVisibilityChange = () => {
      if (document.hidden) {
        cancelAnimationFrame(frameId);
      } else {
        startRaf();
      }
    };

    startRaf();

    // Smoothly scroll for internal hash links with navbar offset
    const handleAnchorClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement)?.closest('a');
      if (!target) return;
      const href = target.getAttribute('href');
      if (href && href.startsWith('#') && href.length > 1) {
        const targetElement = document.querySelector(href);
        if (targetElement) {
          e.preventDefault();
          lenis.scrollTo(targetElement as HTMLElement, { offset: -70 });
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      cancelAnimationFrame(frameId);
      document.removeEventListener('click', handleAnchorClick);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      lenis.destroy();
    };
  }, []);

  return null;
}
