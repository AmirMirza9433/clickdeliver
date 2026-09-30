'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { APP_CONFIG } from '@/data/siteConfig';
import { ArrowRight, Smartphone } from 'lucide-react';

export function MobileDownloadBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show when scrolled past 380px (past hero)
      if (window.scrollY > 380) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="fixed bottom-4 left-4 right-4 z-40 md:hidden"
        >
          <a
            href={APP_CONFIG.playStoreUrl}
            target="_blank"
            rel="noopener noreferrer"
            id="mobile-sticky-download"
            className="flex items-center justify-between gap-3 px-4 py-3 rounded-2xl bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow-2xl shadow-blue-500/40 border border-blue-400/30 backdrop-blur-md active:scale-[0.98] transition-transform"
          >
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0">
                <Smartphone className="w-5 h-5 text-white" />
              </div>
              <div className="text-left">
                <p className="text-xs font-semibold uppercase tracking-wider text-blue-100">
                  Google Play Store
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
