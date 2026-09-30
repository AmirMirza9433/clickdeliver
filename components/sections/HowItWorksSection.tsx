'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HOW_IT_WORKS_STEPS } from '@/data/howItWorks';
import {
  Smartphone,
  ShoppingBag,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  MapPin,
  Clock,
  Send,
  Check,
} from 'lucide-react';

const iconMap: Record<string, any> = {
  Smartphone,
  ShoppingBag,
  CheckCircle2,
};

export function HowItWorksSection() {
  const [activeStep, setActiveStep] = useState(0);
  const currentStep = HOW_IT_WORKS_STEPS[activeStep];

  return (
    <section id="how-it-works" className="relative py-20 lg:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-tag"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>3 Simple Steps</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-heading"
          >
            Order Karna Bilkul{' '}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              Seedha &amp; Asan
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-subheading"
          >
            No complex registrations. Within 60 seconds you can place an order or book a captain.
          </motion.p>
        </div>

        {/* Steps Grid with Interactive Pinned Phone Storytelling */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Interactive Step Cards with animated connecting line */}
          <div className="lg:col-span-7 space-y-6 relative">
            {/* Self-drawing connecting vertical line on desktop */}
            <div className="hidden sm:block absolute left-8 top-10 bottom-10 w-0.5 bg-gradient-to-b from-blue-500 via-cyan-400 to-blue-600/20" />

            {HOW_IT_WORKS_STEPS.map((step, idx) => {
              const Icon = iconMap[step.iconName] || Smartphone;
              const isActive = activeStep === idx;

              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.15 }}
                  onClick={() => setActiveStep(idx)}
                  className={`cursor-pointer rounded-2xl p-6 transition-all duration-300 relative flex items-start gap-5 border ${
                    isActive
                      ? 'bg-slate-900/90 border-blue-500/60 shadow-xl shadow-blue-500/15'
                      : 'bg-slate-900/30 border-white/5 hover:border-white/20 hover:bg-slate-900/50'
                  }`}
                >
                  {/* Step Number Circle */}
                  <div
                    className={`w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 font-heading font-extrabold text-lg transition-all duration-300 z-10 ${
                      isActive
                        ? 'bg-gradient-to-br from-blue-600 to-blue-500 text-white shadow-lg shadow-blue-500/40 ring-4 ring-blue-500/20'
                        : 'bg-white/5 border border-white/10 text-slate-400'
                    }`}
                  >
                    {step.number}
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <span className="text-[11px] font-heading font-semibold uppercase tracking-wider text-blue-400">
                        {step.badge}
                      </span>
                      {isActive && (
                        <span className="flex items-center gap-1 text-[11px] font-medium text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                          <Check className="w-3 h-3" /> Active Step
                        </span>
                      )}
                    </div>
                    <h3 className="text-lg sm:text-xl font-heading font-bold text-white mb-1">
                      {step.title}
                    </h3>
                    <p className="text-xs text-blue-300/80 font-heading mb-2">
                      {step.urduSubtitle}
                    </p>
                    <p className="text-sm text-slate-300 font-body leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Right Column: Dynamic Phone Screen changing with Step */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-[280px] sm:w-[310px] aspect-[9/18.5] rounded-[48px] bg-slate-950 p-3 shadow-2xl shadow-blue-500/20 border-4 border-slate-700/80">
              {/* Dynamic Island / Notch */}
              <div className="absolute top-4 left-1/2 -translate-x-1/2 w-28 h-5 bg-black rounded-full z-30" />

              {/* Inner Phone Screen */}
              <div className="w-full h-full rounded-[38px] bg-gradient-to-b from-[#0a1124] to-[#050811] overflow-hidden p-4 pt-9 border border-white/10 flex flex-col justify-between relative">
                {/* Step indicator pill */}
                <div className="flex items-center justify-between pb-3 border-b border-white/10">
                  <span className="text-xs font-heading font-bold text-white">
                    Step {currentStep.number} of 03
                  </span>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/30">
                    {currentStep.badge}
                  </span>
                </div>

                {/* Animated Screen Content */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeStep}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.3 }}
                    className="flex-1 flex flex-col justify-center py-4"
                  >
                    {activeStep === 0 && (
                      <div className="space-y-3">
                        <div className="p-3 rounded-2xl bg-white/5 border border-white/10">
                          <p className="text-[10px] uppercase font-semibold text-slate-400">
                            Available Shops
                          </p>
                          <p className="text-sm font-heading font-bold text-white mt-1">
                            Alipur Chattha Main Bazar
                          </p>
                          <div className="mt-2.5 flex items-center justify-between text-xs text-blue-300">
                            <span>50+ Local Merchants</span>
                            <span className="text-emerald-400 font-semibold">Open Now</span>
                          </div>
                        </div>

                        <div className="space-y-1.5">
                          {['Usman Medicos (Pharmacy)', 'Chaudhry Fresh Meat', 'Al-Madina Bakery'].map(
                            (shop, i) => (
                              <div
                                key={i}
                                className="flex items-center justify-between p-2 rounded-xl bg-white/5 text-xs text-slate-200"
                              >
                                <span className="font-medium truncate">{shop}</span>
                                <span className="text-[10px] text-blue-400">View Menu</span>
                              </div>
                            )
                          )}
                        </div>
                      </div>
                    )}

                    {activeStep === 1 && (
                      <div className="space-y-2.5">
                        <div className="p-2.5 rounded-xl bg-blue-600/20 border border-blue-500/30 text-xs">
                          <p className="font-heading font-bold text-blue-300">
                            Custom Order Chat
                          </p>
                          <p className="text-[10px] text-slate-300 mt-0.5">
                            Customer &harr; Ali Medical Store
                          </p>
                        </div>
                        <div className="bg-white/5 p-2 rounded-xl text-[11px] text-slate-300">
                          &ldquo;Bhai Panadol aur Vitamin C drops mil jayein gay?&rdquo;
                        </div>
                        <div className="bg-blue-600/40 p-2 rounded-xl text-[11px] text-white text-right ml-4">
                          &ldquo;Ji bhai available hain, Rs. 240 banenge. Order bana doon?&rdquo;
                        </div>
                        <div className="flex items-center gap-1.5 p-2 rounded-xl bg-emerald-500/20 border border-emerald-500/30 text-[10px] text-emerald-300">
                          <Check className="w-3.5 h-3.5" />
                          <span>Order confirmed &amp; packed!</span>
                        </div>
                      </div>
                    )}

                    {activeStep === 2 && (
                      <div className="space-y-3">
                        <div className="relative h-28 rounded-2xl bg-slate-900 border border-white/10 overflow-hidden flex items-center justify-center">
                          <div className="absolute inset-0 bg-blue-500/10" />
                          <div className="flex flex-col items-center">
                            <div className="w-8 h-8 rounded-full bg-emerald-500 text-white flex items-center justify-center shadow-lg animate-bounce">
                              <MapPin className="w-4 h-4" />
                            </div>
                            <span className="text-[10px] font-bold text-white mt-1">
                              Rider Arrived at Your Gate
                            </span>
                          </div>
                        </div>
                        <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between text-xs">
                          <div>
                            <p className="text-slate-400 text-[10px]">Payment Method</p>
                            <p className="font-heading font-bold text-white">Cash on Delivery</p>
                          </div>
                          <span className="px-2 py-1 rounded-lg bg-emerald-500/20 text-emerald-400 font-bold text-xs">
                            Rs. 380
                          </span>
                        </div>
                      </div>
                    )}
                  </motion.div>
                </AnimatePresence>

                {/* Bottom Step Status */}
                <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
                  <span>{currentStep.phoneDetails.status}</span>
                  <span className="text-white font-semibold flex items-center gap-1">
                    Next <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
