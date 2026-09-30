'use client';

import { useState, useEffect } from 'react';

/**
 * Ensures entrance animations for the Hero section wait until the
 * PageLoader splash animation completes (1.2s display + 0.45s fade out).
 */
export function useSplashFinished(delayMs: number = 1600): boolean {
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsFinished(true);
    }, delayMs);

    return () => clearTimeout(timer);
  }, [delayMs]);

  return isFinished;
}
