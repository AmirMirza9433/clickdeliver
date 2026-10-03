'use client';

import { useState } from 'react';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { APP_CONFIG } from '@/data/siteConfig';
import {
  Sparkles,
  QrCode,
  ShieldCheck,
  CheckCircle2,
  Download,
} from 'lucide-react';
import { TextReveal } from '@/components/animations/TextReveal';
import { Reveal } from '@/components/animations/Reveal';
import { Magnetic } from '@/components/animations/Magnetic';
import { MOTION_EASE } from '@/lib/motion';

export function DownloadSection() {
  const perks = [
    'Direct instant free install from Google Play & App Store',
    'No complicated account setups',
    'Lightweight & fast application',
    'Full coverage across Alipur Chattha',
  ];

  const [activeQR, setActiveQR] = useState<'android' | 'ios'>('android');

  return (
    <section id="download" className="relative py-20 lg:py-28 overflow-hidden">
      {/* Background Gradient Mesh */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/20 to-transparent pointer-events-none" />
      <div className="absolute right-10 bottom-10 w-96 h-96 bg-blue-600/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="rounded-3xl p-8 sm:p-12 lg:p-16 bg-gradient-to-br from-blue-50/90 via-white to-indigo-50/70 dark:from-slate-900/90 dark:to-slate-950/90 border border-blue-200/80 dark:border-white/10 backdrop-blur-2xl shadow-2xl shadow-blue-500/10 relative overflow-hidden">
          {/* Ambient Lighting Corner */}
          <div className="absolute -top-32 -left-32 w-80 h-80 bg-blue-500/10 dark:bg-blue-500/20 rounded-full blur-[100px] pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Badges & Copy */}
            <div className="lg:col-span-7">
              <Reveal direction="up" delay={0.05}>
                <div className="section-tag mb-4">
                  <Download className="w-3.5 h-3.5 text-blue-500 dark:text-blue-400" />
                  <span>Get ClickDeliver Now</span>
                </div>
              </Reveal>

              <TextReveal
                text="Download Karo — 100% Free Hai!"
                highlightWords={['100%', 'Free', 'Hai!']}
                as="h2"
                className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-slate-900 dark:text-white mb-4 tracking-tight leading-tight"
                delay={0.15}
              />

              <Reveal direction="up" delay={0.25}>
                <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 font-body leading-relaxed mb-8">
                  Chahe rozmarra ki grocery mangwani ho, emergency dawaai ya foran bike ride —
                  ClickDeliver aapke phone mein hona zaroori hai. Abhi download karein!
                </p>
              </Reveal>

              {/* Badges Row */}
              <div className="flex flex-col sm:flex-row items-center gap-4 mb-8">
                {/* Google Play Badge with subtle shine sweep + pulse + Magnetic */}
                <Magnetic strength={0.25}>
                  <a
                    href={APP_CONFIG.playStoreUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    id="download-section-google-play"
                    className="group relative block overflow-hidden rounded-2xl p-1 transition-transform duration-300 hover:scale-105 active:scale-95"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-cyan-400 to-blue-500 opacity-30 rounded-2xl group-hover:opacity-70 transition-opacity " />
                    <div className="relative bg-black rounded-xl p-1.5 flex items-center overflow-hidden">
                      {/* Subtle shine sweep effect */}
                      <Image
                        src="/google-play-badge.svg"
                        alt="Get ClickDeliver on Google Play"
                        width={190}
                        height={56}
                        className="h-[54px] w-auto drop-shadow-md"
                        unoptimized
                      />
                    </div>
                  </a>
                </Magnetic>

                {/* App Store Badge with subtle shine sweep + pulse + Magnetic */}
                <Magnetic strength={0.25}>
                  <a
                    href={APP_CONFIG.appStoreUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    id="download-section-app-store"
                    className="group relative block overflow-hidden rounded-2xl p-1 transition-transform duration-300 hover:scale-105 active:scale-95"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-cyan-400 to-blue-500 opacity-30 rounded-2xl group-hover:opacity-70 transition-opacity " />
                    <div className="relative bg-black rounded-xl p-1.5 flex items-center overflow-hidden">
                      {/* Subtle shine sweep effect */}
                      <Image
                        src="/app-store-badge.svg"
                        alt="Download ClickDeliver on the App Store"
                        width={190}
                        height={56}
                        className="h-[54px] w-auto drop-shadow-md"
                        unoptimized
                      />
                    </div>
                  </a>
                </Magnetic>
              </div>

              {/* Bullet Points */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-6 border-t border-slate-200 dark:border-white/10">
                {perks.map((p, idx) => (
                  <Reveal key={idx} direction="up" delay={0.35 + idx * 0.06}>
                    <div className="flex items-center gap-2 text-xs text-slate-700 dark:text-slate-300 font-medium">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 dark:text-emerald-400 flex-shrink-0" />
                      <span>{p}</span>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>

            {/* Right Column: Animated QR Card with floating parallax, scale-in and hover lift */}
            <div className="lg:col-span-5 flex justify-center">
              <div>
                <motion.div
                  initial={false}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.48, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ y: -6, scale: 1.015 }}
                  className="relative rounded-3xl p-6 sm:p-8 bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-white/15 shadow-xl shadow-blue-500/10 flex flex-col items-center text-center max-w-sm w-full"
                >
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-heading font-semibold bg-blue-500/10 dark:bg-blue-500/20 text-blue-600 dark:text-blue-300 border border-blue-500/20 dark:border-blue-500/30 mb-4">
                    <QrCode className="w-3.5 h-3.5" />
                    <span>Scan From Phone</span>
                  </div>

                  {/* QR Toggle Tabs */}
                  <div className="flex bg-slate-100 dark:bg-slate-800/50 p-1 rounded-xl mb-4 w-full">
                    <button
                      onClick={() => setActiveQR('android')} aria-pressed={activeQR === 'android'}
                      className={`flex-1 py-1.5 text-xs font-heading font-bold rounded-lg transition-all ${
                        activeQR === 'android'
                          ? 'bg-white dark:bg-slate-700 shadow-sm text-blue-600 dark:text-blue-200'
                          : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                      }`}
                    >
                      Android
                    </button>
                    <button
                      onClick={() => setActiveQR('ios')} aria-pressed={activeQR === 'ios'}
                      className={`flex-1 py-1.5 text-xs font-heading font-bold rounded-lg transition-all ${
                        activeQR === 'ios'
                          ? 'bg-white dark:bg-slate-700 shadow-sm text-blue-600 dark:text-blue-200'
                          : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                      }`}
                    >
                      iPhone
                    </button>
                  </div>

                  {/* QR Code Box */}
                  <div className="p-4 rounded-2xl bg-white shadow-lg border-4 border-blue-500/20 dark:border-blue-500/30 mb-4 relative group transition-all duration-300">
                    <Image
                      src={activeQR === 'android' ? "/qr-android.png" : "/apple_qr.png"}
                      alt={`Scan ClickDeliver ${activeQR === 'android' ? 'Android' : 'iOS'} QR Code`}
                      width={180}
                      height={180}
                      className="w-44 h-44 object-contain rounded-lg transition-opacity duration-300"
                      unoptimized
                    />
                    <div className="absolute inset-0 rounded-xl bg-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                  </div>

                  <h4 className="text-base font-heading font-bold text-slate-900 dark:text-white mb-1">
                    Point Camera to Download
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400 font-body leading-relaxed">
                    Apne phone camera ya QR scanner se scan karein aur foran app install karein.
                  </p>

                  <div className="mt-4 pt-4 border-t border-slate-200 dark:border-white/10 w-full flex flex-col gap-2 items-center justify-center text-[11px] font-medium">
                    <div className="flex items-center gap-1.5 text-blue-600 dark:text-blue-400">
                      <ShieldCheck className="w-4 h-4 text-emerald-500 dark:text-emerald-400" />
                      <span>{activeQR === 'android' ? 'Google Play Protect Verified' : 'App Store Verified'}</span>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
