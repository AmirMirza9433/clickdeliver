'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

export function PageLoader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Under 1.5s as required (1.2s total)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            y: -20,
            transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
          }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#060911]"
        >
          {/* Ambient Glow */}
          <div className="absolute w-72 h-72 rounded-full bg-blue-600/20 blur-[100px] pointer-events-none" />

          {/* Logo Reveal */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0, y: 10 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="relative flex flex-col items-center"
          >
            <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-2xl p-2 bg-gradient-to-b from-white/10 to-transparent border border-white/10 shadow-2xl shadow-blue-500/20 flex items-center justify-center backdrop-blur-md">
              <Image
                src="/logo.png"
                alt="ClickDeliver Logo"
                width={84}
                height={84}
                className="w-auto h-auto max-w-[80px] max-h-[80px] object-contain drop-shadow"
                priority
              />
              <span className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-blue-500 to-cyan-400 opacity-30 blur-sm animate-pulse" />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.4 }}
              className="mt-4 text-center"
            >
              <h1 className="text-xl font-heading font-bold text-white tracking-tight">
                Click<span className="text-blue-500">Deliver</span>
              </h1>
              <p className="text-xs font-body text-slate-400 mt-0.5">
                Alipur Chattha &middot; Delivery or Ride dono asan
              </p>
            </motion.div>

            {/* Quick Loading Bar */}
            <div className="w-36 h-1 bg-white/10 rounded-full mt-5 overflow-hidden">
              <motion.div
                initial={{ x: '-100%' }}
                animate={{ x: '100%' }}
                transition={{
                  repeat: Infinity,
                  duration: 0.9,
                  ease: 'easeInOut',
                }}
                className="w-full h-full bg-gradient-to-r from-transparent via-blue-500 to-transparent"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
