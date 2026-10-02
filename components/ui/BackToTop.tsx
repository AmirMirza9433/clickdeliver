'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronUp } from 'lucide-react';

export function BackToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    let frameId = 0;
    const handleScroll = () => {
      if (frameId) return;
      frameId = requestAnimationFrame(() => {
        const nextShow = window.scrollY > 600;
        setShow((current) => (current === nextShow ? current : nextShow));
        frameId = 0;
      });
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
          onClick={scrollToTop}
          aria-label="Scroll back to top"
          className="fixed bottom-6 right-6 z-40 p-3 rounded-2xl bg-white/10 hover:bg-blue-600 border border-white/10 text-white backdrop-blur-md shadow-xl transition-[background-color,border-color,box-shadow] duration-200 hover:shadow-blue-500/25 hidden md:flex items-center justify-center group"
        >
          <ChevronUp className="w-5 h-5 transition-transform group-hover:-translate-y-0.5" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
