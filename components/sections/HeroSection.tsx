'use client';

import { motion, useReducedMotion } from 'framer-motion';
import Image from 'next/image';
import { APP_CONFIG } from '@/data/siteConfig';
import {
  ShoppingBag,
  Pill,
  Utensils,
  Bike,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Star,
  MapPin,
  Clock,
  ChevronDown,
} from 'lucide-react';
import { useSplashFinished } from '@/hooks/useSplashFinished';
import { Magnetic } from '@/components/animations/Magnetic';
import { MOTION_EASE } from '@/lib/motion';

const headlineWords = ['Delivery', 'or', 'Ride', 'dono', 'asan.'];

const floatingChips = [
  {
    label: 'Fresh Grocery',
    sub: 'Under 25m',
    icon: ShoppingBag,
    color: 'from-emerald-500/20 to-emerald-600/10 border-emerald-500/30 text-emerald-400',
    position: '-top-6 -left-6 sm:-top-8 sm:-left-10',
    animate: { y: [0, -12, 0], x: [0, 4, 0] },
    transition: { duration: 4.5, repeat: Infinity, ease: 'easeInOut' as const },
  },
  {
    label: 'Pharmacy Urgent',
    sub: 'Verified shops',
    icon: Pill,
    color: 'from-rose-500/20 to-rose-600/10 border-rose-500/30 text-rose-400',
    position: 'top-20 -right-6 sm:top-24 sm:-right-12',
    animate: { y: [0, 14, 0], x: [0, -6, 0] },
    transition: { duration: 5.2, repeat: Infinity, ease: 'easeInOut' as const, delay: 0.5 },
  },
  {
    label: 'Hot Food Delivery',
    sub: 'Local restaurants',
    icon: Utensils,
    color: 'from-amber-500/20 to-amber-600/10 border-amber-500/30 text-amber-400',
    position: 'bottom-28 -left-8 sm:bottom-32 sm:-left-12',
    animate: { y: [0, -10, 0], x: [0, -4, 0] },
    transition: { duration: 4.8, repeat: Infinity, ease: 'easeInOut' as const, delay: 1 },
  },
  {
    label: 'Bike Ride Booking',
    sub: 'From Rs. 60',
    icon: Bike,
    color: 'from-blue-500/20 to-blue-600/10 border-blue-500/30 text-blue-400',
    position: '-bottom-6 -right-4 sm:-bottom-8 sm:-right-8',
    animate: { y: [0, 12, 0], x: [0, 6, 0] },
    transition: { duration: 4.2, repeat: Infinity, ease: 'easeInOut' as const, delay: 1.5 },
  },
];

export function HeroSection() {
  const splashFinished = useSplashFinished(1600);
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden pt-28 pb-20 lg:py-32">
      {/* Background Animated Gradient Blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={
            shouldReduceMotion
              ? {}
              : {
                  scale: [1, 1.08, 1],
                  opacity: [0.18, 0.25, 0.18],
                }
          }
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-gradient-to-b from-blue-600/25 via-cyan-500/15 to-transparent rounded-full blur-[120px]"
        />
        <motion.div
          animate={
            shouldReduceMotion
              ? {}
              : {
                  x: [0, 20, 0],
                  y: [0, -20, 0],
                }
          }
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/3 -left-32 w-96 h-96 bg-blue-700/20 rounded-full blur-[100px]"
        />
        <motion.div
          animate={
            shouldReduceMotion
              ? {}
              : {
                  x: [0, -25, 0],
                  y: [0, 20, 0],
                }
          }
          transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          className="absolute bottom-10 -right-32 w-96 h-96 bg-indigo-600/20 rounded-full blur-[100px]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Staggered Word Reveal & Actions (Triggered AFTER splash completes) */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left z-10">
            {/* Location Pill */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={splashFinished ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
              transition={{ duration: 0.5, ease: MOTION_EASE }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 backdrop-blur-md mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span className="text-xs font-heading font-semibold text-blue-300">
                Live in Alipur Chattha &amp; Surrounding Areas
              </span>
            </motion.div>

            {/* Staggered Word-by-Word Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold text-white tracking-tight leading-[1.1] mb-6">
              {headlineWords.map((word, idx) => (
                <span key={idx} className="inline-block overflow-hidden align-top mr-3 last:mr-0">
                  <motion.span
                    initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 36, filter: 'blur(6px)' }}
                    animate={
                      splashFinished
                        ? { opacity: 1, y: 0, filter: 'blur(0px)' }
                        : { opacity: 0, y: shouldReduceMotion ? 0 : 36, filter: 'blur(6px)' }
                    }
                    transition={{
                      duration: 0.6,
                      delay: 0.1 + idx * 0.08,
                      ease: MOTION_EASE,
                    }}
                    className={`inline-block ${
                      word === 'dono' || word === 'asan.'
                        ? 'bg-gradient-to-r from-blue-400 via-brand-primary to-cyan-300 bg-clip-text text-transparent'
                        : 'text-white'
                    }`}
                  >
                    {word}
                  </motion.span>
                </span>
              ))}
            </h1>

            {/* Roman Urdu Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={splashFinished ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
              transition={{ duration: 0.6, delay: 0.55, ease: MOTION_EASE }}
              className="text-base sm:text-lg text-slate-300 max-w-xl font-body leading-relaxed mb-8"
            >
              Grocery, dawaai, garma garam khana aur unique{' '}
              <span className="text-white font-medium underline decoration-blue-500/50 underline-offset-4">
                Custom Orders
              </span>{' '}
              — sab kuch aapke darwaze tak. Fast bike ride booking bhi available,
              shandar rates par!
            </motion.p>

            {/* Store Badges with Shine & Magnetic Hover */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={splashFinished ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
              transition={{ duration: 0.6, delay: 0.7, ease: MOTION_EASE }}
              className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
            >
              {/* Google Play Store Badge with Magnetic wrapper */}
              <Magnetic strength={0.25}>
                <a
                  href={APP_CONFIG.playStoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="hero-google-play-btn"
                  className="group relative block overflow-hidden rounded-2xl p-1 transition-transform duration-300 hover:scale-105 active:scale-95"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-cyan-400 to-blue-500 opacity-60 rounded-2xl blur-sm group-hover:opacity-100 transition-opacity" />
                  <div className="relative bg-black rounded-xl p-1.5 flex items-center">
                    <Image
                      src="/google-play-badge.svg"
                      alt="Get ClickDeliver on Google Play"
                      width={180}
                      height={54}
                      className="h-[50px] w-auto drop-shadow-md"
                      unoptimized
                      priority
                    />
                  </div>
                </a>
              </Magnetic>

              {/* iOS App Store Badge (Coming Soon) */}
              <div className="relative group">
                <div className="opacity-60 cursor-not-allowed filter grayscale hover:grayscale-0 transition-all p-1.5 rounded-xl bg-white/5 border border-white/10">
                  <Image
                    src="/app-store-badge.svg"
                    alt="Download on the App Store (Coming Soon)"
                    width={180}
                    height={54}
                    className="h-[50px] w-auto"
                    unoptimized
                  />
                </div>
                <span className="absolute -top-2.5 -right-2 bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-[10px] font-heading font-bold px-2 py-0.5 rounded-full shadow-lg border border-white/20 animate-pulse">
                  iOS Soon
                </span>
              </div>
            </motion.div>

            {/* Social Trust Metrics */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={splashFinished ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.9, ease: MOTION_EASE }}
              className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-slate-400 font-body"
            >
              <div className="flex items-center gap-1.5">
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                  ))}
                </div>
                <span className="text-white font-semibold">5.0 / 5.0</span>
                <span>User Rating</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Verified Local Riders</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-blue-400" />
                <span>Avg. 8–12 Min Rides</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Interactive Phone Mockup with Route Animation & Floating Chips */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            {/* Floating Category Chips (Different drifting speeds) */}
            {floatingChips.map((chip) => {
              const Icon = chip.icon;
              return (
                <motion.div
                  key={chip.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={
                    splashFinished
                      ? {
                          opacity: 1,
                          scale: 1,
                          ...(!shouldReduceMotion ? chip.animate : {}),
                        }
                      : { opacity: 0, scale: 0.8 }
                  }
                  transition={
                    splashFinished && !shouldReduceMotion
                      ? chip.transition
                      : { duration: 0.5 }
                  }
                  className={`absolute z-20 hidden sm:flex items-center gap-3 px-3.5 py-2 rounded-2xl bg-slate-900/90 border backdrop-blur-xl shadow-xl ${chip.color} ${chip.position}`}
                >
                  <div className="p-1.5 rounded-xl bg-white/10">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div className="text-left">
                    <p className="text-xs font-heading font-bold text-white leading-tight">
                      {chip.label}
                    </p>
                    <p className="text-[10px] text-slate-400">{chip.sub}</p>
                  </div>
                </motion.div>
              );
            })}

            {/* Central Phone Mockup with continuous float (translateY +-12px, 4s loop) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={
                splashFinished
                  ? {
                      opacity: 1,
                      scale: 1,
                      y: shouldReduceMotion ? 0 : [0, -12, 0],
                    }
                  : { opacity: 0, scale: 0.9, y: 30 }
              }
              transition={
                splashFinished && !shouldReduceMotion
                  ? {
                      y: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
                      opacity: { duration: 0.8, ease: 'easeOut' },
                      scale: { duration: 0.8, ease: 'easeOut' },
                    }
                  : { duration: 0.6 }
              }
              className="relative w-[290px] sm:w-[320px] aspect-[9/18.5] rounded-[48px] bg-slate-950 p-3 shadow-2xl shadow-blue-500/20 border-4 border-slate-700/80"
            >
              {/* Phone Speaker & Camera Notch */}
              <div className="absolute top-4 left-1/2 -translate-x-1/2 w-28 h-5 bg-black rounded-full z-30 flex items-center justify-end px-3">
                <span className="w-2.5 h-2.5 rounded-full bg-blue-900/80 border border-blue-500/50" />
              </div>

              {/* Inner Screen */}
              <div className="w-full h-full rounded-[38px] bg-gradient-to-b from-[#0b1329] via-[#090e1f] to-[#050811] overflow-hidden flex flex-col p-4 pt-9 border border-white/5 relative">
                {/* Top App Header */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-lg bg-blue-600/30 border border-blue-500/40 p-1 flex items-center justify-center">
                      <Image
                        src="/logo.png"
                        alt="CD"
                        width={20}
                        height={20}
                        className="object-contain"
                      />
                    </div>
                    <div>
                      <p className="text-[11px] font-heading font-bold text-white leading-none">
                        ClickDeliver
                      </p>
                      <p className="text-[9px] text-blue-400 flex items-center gap-0.5 mt-0.5">
                        <MapPin className="w-2.5 h-2.5" /> Alipur Chattha
                      </p>
                    </div>
                  </div>
                  <span className="px-2 py-0.5 rounded-full text-[9px] font-semibold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                    Live Active
                  </span>
                </div>

                {/* Animated Simulated Map with Scooter Moving on loop along dashed curved route */}
                <div className="relative w-full h-44 rounded-2xl bg-slate-900/90 border border-white/10 overflow-hidden mb-3 flex items-center justify-center">
                  <svg
                    className="w-full h-full"
                    viewBox="0 0 260 170"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <defs>
                      <filter id="hero-bike-glow" x="-50%" y="-50%" width="200%" height="200%">
                        <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#f59e0b" floodOpacity="0.6" />
                      </filter>
                      <filter id="hero-route-glow" x="-20%" y="-20%" width="140%" height="140%">
                        <feDropShadow dx="0" dy="0" stdDeviation="4" floodColor="#3b82f6" floodOpacity="0.6" />
                      </filter>
                    </defs>

                    {/* Map Grid Roads */}
                    <g opacity="0.3">
                      <path
                        d="M 10 30 L 250 30 M 10 90 L 250 90 M 10 140 L 250 140"
                        stroke="#475569"
                        strokeWidth="3"
                      />
                      <path
                        d="M 50 10 L 50 160 M 140 10 L 140 160 M 210 10 L 210 160"
                        stroke="#475569"
                        strokeWidth="3"
                      />
                    </g>

                    {/* Glow Route Line */}
                    <path
                      d="M 35 130 Q 110 30, 220 50"
                      stroke="#2563eb"
                      strokeWidth="6"
                      strokeLinecap="round"
                      filter="url(#hero-route-glow)"
                      opacity="0.5"
                    />

                    {/* Animated Dashed Route Path */}
                    <path
                      d="M 35 130 Q 110 30, 220 50"
                      stroke="#60a5fa"
                      strokeWidth="3"
                      strokeDasharray="6 4"
                      strokeLinecap="round"
                    />

                    {/* Start Point Pin (Store at 35, 130) with pulsing ripple */}
                    <g transform="translate(35, 130)">
                      <circle cx="0" cy="0" r="12" fill="#3b82f6" opacity="0.4">
                        <animate attributeName="r" values="8;16;8" dur="2.4s" repeatCount="indefinite" />
                        <animate attributeName="opacity" values="0.5;0;0.5" dur="2.4s" repeatCount="indefinite" />
                      </circle>
                      <circle cx="0" cy="0" r="9" fill="#2563eb" stroke="#ffffff" strokeWidth="2" />
                      <g transform="translate(-5, -5) scale(0.42)" stroke="#ffffff" strokeWidth="2.5" fill="none">
                        <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
                        <path d="M3 6h18" />
                        <path d="M16 10a4 4 0 0 1-8 0" />
                      </g>
                    </g>

                    {/* End Destination Pin (Customer Gate at 220, 50) with pulsing ripple */}
                    <g transform="translate(220, 50)">
                      <circle cx="0" cy="0" r="12" fill="#10b981" opacity="0.4">
                        <animate attributeName="r" values="8;16;8" dur="2.4s" repeatCount="indefinite" />
                        <animate attributeName="opacity" values="0.5;0;0.5" dur="2.4s" repeatCount="indefinite" />
                      </circle>
                      <circle cx="0" cy="0" r="9" fill="#10b981" stroke="#ffffff" strokeWidth="2" />
                      <circle cx="0" cy="0" r="3" fill="#ffffff" />
                    </g>

                    {/* Animated Scooter strictly locked to the route on loop */}
                    <g>
                      <animateMotion
                        path="M 35 130 Q 110 30, 220 50"
                        dur="4s"
                        repeatCount="indefinite"
                        rotate="auto"
                      />
                      {/* Outer pulsing halo */}
                      <circle cx="0" cy="0" r="16" fill="#f59e0b" opacity="0.3">
                        <animate attributeName="r" values="12;18;12" dur="1.5s" repeatCount="indefinite" />
                        <animate attributeName="opacity" values="0.4;0.1;0.4" dur="1.5s" repeatCount="indefinite" />
                      </circle>

                      {/* Amber badge */}
                      <circle cx="0" cy="0" r="12" fill="#f59e0b" stroke="#ffffff" strokeWidth="1.8" filter="url(#hero-bike-glow)" />

                      {/* Bike icon centered at (0, 0) */}
                      <g
                        transform="translate(-8, -8) scale(0.67)"
                        stroke="#090d16"
                        strokeWidth="2.4"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <circle cx="18.5" cy="17.5" r="3.5" />
                        <circle cx="5.5" cy="17.5" r="3.5" />
                        <circle cx="15" cy="5" r="1" />
                        <path d="M12 17.5V14l-3-3 4-3 2 3h2" />
                      </g>
                    </g>
                  </svg>

                  {/* Map status overlay */}
                  <div className="absolute bottom-2 left-2 right-2 px-2.5 py-1.5 rounded-xl bg-slate-950/85 backdrop-blur-md border border-white/10 flex items-center justify-between text-[10px]">
                    <span className="text-slate-300 font-medium flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                      Rider on the way
                    </span>
                    <span className="text-amber-400 font-bold">ETA 6 Mins</span>
                  </div>
                </div>

                {/* Quick Order Live Card */}
                <div className="p-2.5 rounded-2xl bg-white/5 border border-white/10 mb-2">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[10px] font-semibold text-slate-400">Current Order</span>
                    <span className="text-[9px] px-1.5 py-0.5 rounded bg-blue-500/20 text-blue-300">
                      COD: Rs. 380
                    </span>
                  </div>
                  <p className="text-xs font-heading font-bold text-white truncate">
                    Bismillah Medicos &middot; Urgent Medicines
                  </p>
                  <p className="text-[10px] text-slate-400 mt-0.5">
                    Rider: Naveed Ahmed (Honda 125)
                  </p>
                </div>

                {/* 4 Quick Category Pills */}
                <div className="grid grid-cols-4 gap-1.5 mt-auto">
                  {[
                    { label: 'Grocery', icon: ShoppingBag, color: 'text-emerald-400' },
                    { label: 'Medicine', icon: Pill, color: 'text-rose-400' },
                    { label: 'Food', icon: Utensils, color: 'text-amber-400' },
                    { label: 'Ride', icon: Bike, color: 'text-blue-400' },
                  ].map((cat) => {
                    const CatIcon = cat.icon;
                    return (
                      <div
                        key={cat.label}
                        className="flex flex-col items-center justify-center p-1.5 rounded-xl bg-white/5 border border-white/5 text-center"
                      >
                        <CatIcon className={`w-3.5 h-3.5 ${cat.color} mb-1`} />
                        <span className="text-[8px] font-heading font-medium text-slate-300">
                          {cat.label}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll-down indicator bounce */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={splashFinished ? { opacity: 1 } : { opacity: 0 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-5 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-1.5 pointer-events-none"
      >
        <span className="text-[9px] uppercase font-heading font-semibold tracking-widest text-slate-400/80">
          Scroll Down
        </span>
        <motion.div
          animate={shouldReduceMotion ? {} : { y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          className="w-5 h-8 rounded-full border border-white/20 bg-white/5 flex items-start justify-center p-1 backdrop-blur-sm"
        >
          <motion.div
            animate={shouldReduceMotion ? {} : { y: [0, 10, 0], opacity: [1, 0.2, 1] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
            className="w-1 h-2 rounded-full bg-blue-400"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
