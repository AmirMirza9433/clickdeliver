'use client';

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export function PageLoader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, reducedMotion ? 80 : 650);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
          key="loader"
          aria-hidden="true"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            y: -20,
            transition: { duration: 0.24, ease: [0.16, 1, 0.3, 1] },
          }}
          className="site-loader fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#07101f]"
        >
          {/* Ambient Glow */}
          <div className="absolute w-72 h-72 rounded-full bg-blue-600/20 blur-[100px] pointer-events-none" />

          {/* Logo Reveal */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0, y: 10 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            transition={{ duration: 0.42, ease: [0.16, 1, 0.3, 1] }}
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
              <span className="loader-logo-ring absolute -inset-0.5 rounded-2xl border border-blue-400/35" />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.14, duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="mt-4 text-center"
            >
              <div className="text-xl font-heading font-bold text-white tracking-tight">
                Click<span className="text-blue-500">Deliver</span>
              </div>
              <p className="text-xs font-body text-slate-400 mt-0.5">
                Alipur Chattha &middot; Delivery or Ride dono asan
              </p>
            </motion.div>

            {/* Short progress cue */}
            <div className="w-36 h-1 bg-white/10 rounded-full mt-5 overflow-hidden">
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{
                  duration: 0.58,
                  ease: [0.16, 1, 0.3, 1],
                }}
                style={{ transformOrigin: "left" }}
                className="w-full h-full bg-gradient-to-r from-blue-600 to-cyan-400"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
