'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { APP_CONFIG } from '@/data/siteConfig';
import { ArrowRight, Smartphone } from 'lucide-react';

export function MobileDownloadBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let frameId = 0;
    const handleScroll = () => {
      if (frameId) return;
      frameId = requestAnimationFrame(() => {
        const hero = document.getElementById('home');
        const download = document.getElementById('download');
        const contact = document.getElementById('contact');
        const isVisible = (element: HTMLElement | null) => { const rect = element?.getBoundingClientRect(); return rect && rect.top < window.innerHeight && rect.bottom > 0; };
        const nextVisible = (hero?.getBoundingClientRect().bottom ?? 0) < 84 && !isVisible(download) && !isVisible(contact);
        setVisible((current) =>
          current === nextVisible ? current : nextVisible
        );
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

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
          style={{ bottom: 'max(16px, env(safe-area-inset-bottom))' }}
          className="fixed left-4 right-4 z-40 md:hidden"
        >
          <a
            href="#download"
            id="mobile-sticky-download"
            className="flex items-center justify-between gap-3 px-4 py-3 rounded-2xl bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow-2xl shadow-blue-500/40 border border-blue-400/30 backdrop-blur-md active:scale-[0.98] transition-transform"
          >
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0">
                <Smartphone className="w-5 h-5 text-white" />
              </div>
              <div className="text-left">
                <p className="text-xs font-semibold uppercase tracking-wider text-blue-100">
                  Get the App
                </p>
                <p className="text-sm font-heading font-bold text-white leading-tight">
                  Download ClickDeliver (Free)
                </p>
              </div>
            </div>
            <div className="w-8 h-8 rounded-full bg-white text-blue-600 flex items-center justify-center flex-shrink-0 shadow">
              <ArrowRight className="w-4 h-4" />
            </div>
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
