'use client';

import { motion } from 'framer-motion';
import {
  Bike,
  MapPin,
  Clock,
  Banknote,
  ShieldCheck,
  Navigation2,
  Sparkles,
  ArrowRight,
} from 'lucide-react';
import { CountUp } from '@/components/animations/CountUp';
import { TextReveal } from '@/components/animations/TextReveal';
import { Reveal } from '@/components/animations/Reveal';
import { Magnetic } from '@/components/animations/Magnetic';

export function RideSection() {
  const ridePerks = [
    {
      icon: MapPin,
      title: 'Doorstep Pickup Anywhere',
      desc: 'Ghar, dukaan ya bazar — jahan bhi hon, captain aapki exact location par aayega.',
    },
    {
      icon: Banknote,
      title: 'Sab Se Sasta Kiraya',
      desc: 'Rickshaw se aadhi qeemat mein safar karein. Transparent rates without bargaining.',
    },
    {
      icon: Navigation2,
      title: 'Live GPS Navigation',
      desc: 'Aapka aur captain ka rasta map par real-time track hota hai.',
    },
    {
      icon: ShieldCheck,
      title: 'Verified Local Captains',
      desc: 'Helmet, CNIC aur driving record verified captains for maximum safety.',
    },
  ];

  return (
    <section id="ride" className="relative py-20 lg:py-28 overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute left-1/4 top-1/3 w-[600px] h-[400px] bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Interactive Animated Map with Self-Drawing Route & Bike */}
          <div className="lg:col-span-6 order-2 lg:order-1">
            <Reveal direction="left" delay={0.1}>
              <div className="relative aspect-square sm:aspect-[4/3] rounded-3xl bg-slate-900/90 border border-white/10 backdrop-blur-2xl p-4 shadow-2xl shadow-blue-500/10 overflow-hidden flex flex-col justify-between">
                {/* Map UI Header Overlay */}
                <div className="flex items-center justify-between z-20 px-2 py-1">
                  <div className="flex items-center gap-2">
                    <div className="p-2 rounded-xl bg-blue-600 text-white shadow-md">
                      <Bike className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-heading font-bold text-white leading-none">
                        ClickDeliver Moto Ride
                      </h4>
                      <p className="text-[10px] text-blue-300 mt-0.5">Alipur Chattha Safe Route</p>
                    </div>
                  </div>
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                    Captain Live
                  </span>
                </div>

                {/* Map SVG Canvas */}
                <div className="relative flex-1 w-full my-2 rounded-2xl bg-[#070d1d] border border-white/5 overflow-hidden min-h-[260px] flex items-center justify-center">
                  <svg
                    className="w-full h-full"
                    viewBox="0 0 400 300"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <defs>
                      <filter id="bike-glow" x="-50%" y="-50%" width="200%" height="200%">
                        <feDropShadow dx="0" dy="2" stdDeviation="4" floodColor="#f59e0b" floodOpacity="0.6" />
                      </filter>
                      <filter id="route-glow" x="-20%" y="-20%" width="140%" height="140%">
                        <feDropShadow dx="0" dy="0" stdDeviation="6" floodColor="#3b82f6" floodOpacity="0.6" />
                      </filter>
                    </defs>

                    {/* Roads / Street Grid */}
                    <g opacity="0.25">
                      <path d="M 0 60 L 400 60 M 0 160 L 400 160 M 0 240 L 400 240" stroke="#475569" strokeWidth="6" />
                      <path d="M 80 0 L 80 300 M 200 0 L 200 300 M 320 0 L 320 300" stroke="#475569" strokeWidth="6" />
                      <circle cx="200" cy="160" r="28" stroke="#334155" strokeWidth="4" fill="none" />
                    </g>

                    {/* Outer glow route */}
                    <motion.path
                      d="M 65 225 C 135 225, 165 115, 335 75"
                      stroke="#2563eb"
                      strokeWidth="8"
                      strokeLinecap="round"
                      filter="url(#route-glow)"
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.8, ease: 'easeInOut' }}
                      opacity="0.6"
                    />

                    {/* Core animated route line drawing */}
                    <motion.path
                      d="M 65 225 C 135 225, 165 115, 335 75"
                      stroke="#60a5fa"
                      strokeWidth="3.5"
                      strokeLinecap="round"
                      strokeDasharray="6 6"
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.8, ease: 'easeInOut' }}
                    />

                    {/* Pickup Location Pin at (65, 225) with pulsing ripple rings */}
                    <g transform="translate(65, 225)">
                      {/* Outer ripple ring */}
                      <circle cx="0" cy="0" r="16" fill="#3b82f6" opacity="0.3">
                        <animate attributeName="r" values="8;22;8" dur="2.4s" repeatCount="indefinite" />
                        <animate attributeName="opacity" values="0.6;0;0.6" dur="2.4s" repeatCount="indefinite" />
                      </circle>
                      {/* Inner ripple ring */}
                      <circle cx="0" cy="0" r="10" fill="#3b82f6" opacity="0.5">
                        <animate attributeName="r" values="6;14;6" dur="2.4s" repeatCount="indefinite" />
                        <animate attributeName="opacity" values="0.7;0.2;0.7" dur="2.4s" repeatCount="indefinite" />
                      </circle>
                      {/* Pin base */}
                      <circle cx="0" cy="0" r="10" fill="#2563eb" stroke="#ffffff" strokeWidth="2.5" />
                      <circle cx="0" cy="0" r="3.5" fill="#ffffff" />

                      {/* Tooltip Badge */}
                      <g transform="translate(0, -22)">
                        <rect x="-48" y="-12" width="96" height="20" rx="6" fill="#1d4ed8" stroke="#60a5fa" strokeWidth="1" />
                        <text
                          x="0"
                          y="2"
                          textAnchor="middle"
                          fill="#ffffff"
                          fontSize="9"
                          fontWeight="700"
                          fontFamily="var(--font-heading), sans-serif"
                        >
                          Pickup: Model Town
                        </text>
                      </g>
                    </g>

                    {/* Dropoff Location Pin at (335, 75) with pulsing ripple rings */}
                    <g transform="translate(335, 75)">
                      {/* Outer ripple ring */}
                      <circle cx="0" cy="0" r="16" fill="#10b981" opacity="0.3">
                        <animate attributeName="r" values="8;22;8" dur="2.4s" repeatCount="indefinite" />
                        <animate attributeName="opacity" values="0.6;0;0.6" dur="2.4s" repeatCount="indefinite" />
                      </circle>
                      {/* Inner ripple ring */}
                      <circle cx="0" cy="0" r="10" fill="#10b981" opacity="0.5">
                        <animate attributeName="r" values="6;14;6" dur="2.4s" repeatCount="indefinite" />
                        <animate attributeName="opacity" values="0.7;0.2;0.7" dur="2.4s" repeatCount="indefinite" />
                      </circle>
                      {/* Pin base */}
                      <circle cx="0" cy="0" r="10" fill="#10b981" stroke="#ffffff" strokeWidth="2.5" />
                      <text
                        x="0"
                        y="3.5"
                        textAnchor="middle"
                        fill="#ffffff"
                        fontSize="10"
                        fontWeight="bold"
                        fontFamily="var(--font-heading), sans-serif"
                      >
                        A
                      </text>

                      {/* Tooltip Badge */}
                      <g transform="translate(0, -22)">
                        <rect x="-48" y="-12" width="96" height="20" rx="6" fill="#047857" stroke="#34d399" strokeWidth="1" />
                        <text
                          x="0"
                          y="2"
                          textAnchor="middle"
                          fill="#ffffff"
                          fontSize="9"
                          fontWeight="700"
                          fontFamily="var(--font-heading), sans-serif"
                        >
                          Drop: College Road
                        </text>
                      </g>
                    </g>

                    {/* Animated Motorcycle strictly locked to the path */}
                    <g>
                      <animateMotion
                        path="M 65 225 C 135 225, 165 115, 335 75"
                        dur="4.5s"
                        repeatCount="indefinite"
                        rotate="auto"
                      />

                      {/* Outer glowing halo */}
                      <circle cx="0" cy="0" r="20" fill="#f59e0b" opacity="0.3">
                        <animate attributeName="r" values="16;24;16" dur="1.5s" repeatCount="indefinite" />
                        <animate attributeName="opacity" values="0.4;0.1;0.4" dur="1.5s" repeatCount="indefinite" />
                      </circle>

                      {/* Main amber badge */}
                      <circle cx="0" cy="0" r="15" fill="#f59e0b" stroke="#ffffff" strokeWidth="2" filter="url(#bike-glow)" />

                      {/* Lucide Bike vector centered at (0, 0) */}
                      <g
                        transform="translate(-10, -10) scale(0.83)"
                        stroke="#090d16"
                        strokeWidth="2.2"
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
                </div>

                {/* Animated CountUp Strip for "8-12 minutes" and "Rs. 60-150" */}
                <div className="grid grid-cols-2 gap-3 pt-2 z-20">
                  <div className="p-3 rounded-2xl bg-white/5 border border-white/10 flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-blue-500/10 text-blue-400">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider">
                        Average Pickup
                      </p>
                      <p className="text-base sm:text-lg font-heading font-extrabold text-white">
                        <CountUp end={8} duration={1.2} /> &ndash;{' '}
                        <CountUp end={12} duration={1.5} suffix=" Mins" />
                      </p>
                    </div>
                  </div>

                  <div className="p-3 rounded-2xl bg-white/5 border border-white/10 flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-400">
                      <Banknote className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider">
                        Trip Fair
                      </p>
                      <p className="text-base sm:text-lg font-heading font-extrabold text-white">
                        Rs. <CountUp end={60} duration={1.2} /> &ndash;{' '}
                        <CountUp end={150} duration={1.5} />
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Copy & Perks */}
          <div className="lg:col-span-6 order-1 lg:order-2">
            <Reveal direction="right" delay={0.05}>
              <div className="section-tag mb-4">
                <Sparkles className="w-3.5 h-3.5 text-blue-400" />
                <span>Fast &amp; Economical</span>
              </div>
            </Reveal>

            <TextReveal
              text="Delivery Nahi — Ride Chahiye?"
              highlightWords={['Ride', 'Chahiye?']}
              as="h2"
              className="section-heading text-left mb-6"
              delay={0.15}
            />

            <Reveal direction="right" delay={0.25}>
              <p className="text-base sm:text-lg text-slate-300 font-body leading-relaxed mb-8">
                ClickDeliver sirf delivery tak mehdood nahi hai. Agar aapko Alipur Chattha ke kisi bhi
                hissay mein foran pohnchna hai, to app se instant motorcycle ride book karein —
                behtareen captains aur affordable rates ke sath!
              </p>
            </Reveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {ridePerks.map((perk, i) => {
                const PerkIcon = perk.icon;
                return (
                  <Reveal key={i} direction="up" delay={0.3 + i * 0.08}>
                    <div className="p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-white/10 transition-colors">
                      <div className="w-9 h-9 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center mb-2.5">
                        <PerkIcon className="w-4 h-4" />
                      </div>
                      <h4 className="text-sm font-heading font-bold text-white mb-1">
                        {perk.title}
                      </h4>
                      <p className="text-xs text-slate-300 font-body leading-relaxed">
                        {perk.desc}
                      </p>
                    </div>
                  </Reveal>
                );
              })}
            </div>

            <Reveal direction="up" delay={0.6}>
              <Magnetic strength={0.2}>
                <a
                  href="#download"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-heading font-semibold text-white bg-gradient-to-r from-blue-600 to-cyan-500 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300"
                >
                  <span>Book Captain on App</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </Magnetic>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
