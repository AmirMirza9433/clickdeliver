'use client';

import { useState, useRef } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { HOW_IT_WORKS_STEPS } from '@/data/howItWorks';
import { TextReveal } from '@/components/animations/TextReveal';
import { Reveal } from '@/components/animations/Reveal';
import { MOTION_EASE } from '@/lib/motion';
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
  const stepsContainerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="how-it-works" className="relative py-20 lg:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Reveal direction="right" delay={0.05}>
            <div className="section-tag mx-auto">
              <Sparkles className="w-3.5 h-3.5" />
              <span>3 Simple Steps</span>
            </div>
          </Reveal>

          <TextReveal
            text="Order Karna Bilkul Seedha & Asan"
            highlightWords={['Seedha', '&', 'Asan']}
            as="h2"
            className="section-heading"
            delay={0.15}
            direction="right"
          />

          <Reveal direction="right" delay={0.25}>
            <p className="section-subheading">
              No complex registrations. Within 60 seconds you can place an order or book a captain.
            </p>
          </Reveal>
        </div>

        {/* Steps Grid with Interactive Pinned Phone Storytelling */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Interactive Step Cards with animated connecting line */}
          <div ref={stepsContainerRef} className="lg:col-span-7 space-y-6 relative">
            {/* Background connecting track */}
            <div className="hidden sm:block absolute left-8 top-10 bottom-10 w-0.5 bg-white/10" />

            {/* Connecting line that draws itself as the user scrolls */}
            <motion.div
              initial={false}
              whileInView={{ scaleY: shouldReduceMotion ? 1 : [0, 1] }}
              viewport={{ once: true, amount: .3 }}
              transition={{ duration: shouldReduceMotion ? 0 : .65 }}
              style={{ originY: 0 }}
              className="hidden sm:block absolute left-8 top-10 bottom-10 w-0.5 bg-gradient-to-b from-blue-500 via-cyan-400 to-emerald-400 shadow-[0_0_8px_rgba(59,130,246,0.5)]"
            />

            {HOW_IT_WORKS_STEPS.map((step, idx) => {
              const Icon = iconMap[step.iconName] || Smartphone;
              const isActive = activeStep === idx;
              // Steps enter left/right alternately
              const isEven = idx % 2 === 0;
              const enterX = shouldReduceMotion ? 0 : isEven ? -40 : 40;

              return (
                <motion.div
                  key={step.number}
                  initial={false}
                  whileInView={{ opacity: shouldReduceMotion ? 1 : [.3, 1], y: shouldReduceMotion ? 0 : [16, 0] }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.48,
                    delay: idx * 0.075,
                    ease: MOTION_EASE,
                  }}
                  onClick={() => setActiveStep(idx)}
                  role="button" tabIndex={0} aria-pressed={isActive} aria-label={`Preview step ${step.number}: ${step.title}`}
                  onKeyDown={(event) => { if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); setActiveStep(idx); } }}
                  className={`cursor-pointer rounded-2xl p-6 transition-[background-color,border-color,box-shadow] duration-200 relative flex items-start gap-5 border ${
                    isActive
                      ? 'bg-white dark:bg-slate-900/90 border-blue-500/60 shadow-xl shadow-blue-500/15'
                      : 'bg-white/70 dark:bg-slate-900/30 border-slate-200/80 dark:border-white/5 hover:border-slate-300 dark:hover:border-white/20 hover:bg-white dark:hover:bg-slate-900/50'
                  }`}
                >
                  {/* Step Number Circle with Spring Pop-In */}
                  <motion.div
                    initial={false}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      type: 'spring',
                      stiffness: 420,
                      damping: 28,
                      delay: 0.06 + idx * 0.075,
                    }}
                    className={`w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 font-heading font-extrabold text-lg transition-[background-color,border-color,color,box-shadow] duration-200 z-10 ${
                      isActive
                        ? 'bg-gradient-to-br from-blue-600 to-blue-500 text-white shadow-lg shadow-blue-500/40 ring-4 ring-blue-500/20'
                        : 'bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-500 dark:text-slate-400'
                    }`}
                  >
                    {step.number}
                  </motion.div>

                  <div className="flex-1">
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <span className="text-[11px] font-heading font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                        {step.badge}
                      </span>
                      {isActive && (
                        <span className="flex items-center gap-1 hidden sm:flex text-[11px] font-medium text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                          <Check className="w-3 h-3" /> Active Step
                        </span>
                      )}
                    </div>
                    <h3 className="text-lg sm:text-xl font-heading font-bold text-slate-900 dark:text-white mb-1">
                      {step.title}
                    </h3>
                    <p className="text-xs text-blue-600 dark:text-blue-300/80 font-heading mb-2">
                      {step.urduSubtitle}
                    </p>
                    <p className="text-sm text-slate-600 dark:text-slate-300 font-body leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Right Column: Dynamic Phone Screen changing with Step */}
          <div className="lg:col-span-5 flex justify-center">
            <Reveal direction="up" delay={0.2}>
              <div className="relative w-[280px] sm:w-[310px] aspect-[9/18.5] rounded-[48px] bg-slate-900 p-3 shadow-2xl shadow-blue-500/20 border-4 border-slate-700/80">
                {/* Dynamic Island / Notch */}
                <div className="absolute top-4 left-1/2 -translate-x-1/2 w-28 h-5 bg-black rounded-full z-30" />

                {/* Inner Phone Screen */}
                <div className="w-full h-full rounded-[38px] bg-slate-50 dark:bg-gradient-to-b dark:from-[#0a1124] dark:to-[#050811] overflow-hidden p-4 pt-9 border border-slate-200 dark:border-white/10 flex flex-col justify-between relative shadow-inner">
                  {/* Step indicator pill */}
                  <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-white/10">
                    <span className="text-xs font-heading font-bold text-slate-900 dark:text-white">
                      Step {currentStep.number} of 03
                    </span>
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-blue-500/10 dark:bg-blue-500/20 text-blue-600 dark:text-blue-300 border border-blue-500/20 dark:border-blue-500/30 font-medium">
                      {currentStep.badge}
                    </span>
                  </div>

                  {/* Animated Screen Content */}
                  <AnimatePresence mode="wait" initial={false}>
                    <motion.div
                      key={activeStep}
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -15 }}
                      transition={{ duration: 0.22, ease: MOTION_EASE }}
                      className="flex-1 flex flex-col justify-between py-3"
                    >
                      {activeStep === 0 && (
                        <div className="space-y-2.5">
                          <div className="p-3 rounded-2xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 shadow-sm dark:shadow-none">
                            <p className="text-[10px] uppercase font-semibold text-slate-500 dark:text-slate-400">
                              Available Shops
                            </p>
                            <p className="text-sm font-heading font-bold text-slate-900 dark:text-white mt-1">
                              Alipur Chattha Main Bazar
                            </p>
                            <div className="mt-2.5 flex items-center justify-between text-xs text-blue-600 dark:text-blue-300">
                              <span>50+ Local Merchants</span>
                              <span className="text-emerald-600 dark:text-emerald-400 font-semibold">Open Now</span>
                            </div>
                          </div>

                          {/* Quick Category Chips */}
                          <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-0.5">
                            {['All', 'Pharmacy', 'Grocery', 'Bakery'].map((cat, i) => (
                              <span
                                key={cat}
                                className={`text-[10px] px-2 py-0.5 rounded-full font-medium whitespace-nowrap ${
                                  i === 0
                                    ? 'bg-blue-600 text-white'
                                    : 'bg-white dark:bg-white/5 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-white/5'
                                }`}
                              >
                                {cat}
                              </span>
                            ))}
                          </div>

                          <div className="space-y-1.5">
                            {[
                              'Usman Medicos (Pharmacy)',
                              'Chaudhry Fresh Meat',
                              'Al-Madina Bakery',
                              'Kisan Sabzi & Fruit',
                            ].map((shop, i) => (
                              <div
                                key={i}
                                className="flex items-center justify-between p-2 rounded-xl bg-white dark:bg-white/5 border border-slate-200/80 dark:border-white/5 text-xs text-slate-800 dark:text-slate-200 shadow-xs"
                              >
                                <span className="font-medium truncate">{shop}</span>
                                <span className="text-[10px] font-semibold text-blue-600 dark:text-blue-400">View Menu</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {activeStep === 1 && (
                        <div className="space-y-2.5">
                          <div className="p-2.5 rounded-xl bg-blue-50 dark:bg-blue-600/20 border border-blue-200 dark:border-blue-500/30 text-xs">
                            <p className="font-heading font-bold text-blue-700 dark:text-blue-300">
                              Custom Order Chat
                            </p>
                            <p className="text-[10px] text-slate-600 dark:text-slate-300 mt-0.5">
                              Customer &harr; Ali Medical Store
                            </p>
                          </div>
                          <div className="bg-white dark:bg-white/5 border border-slate-200 dark:border-white/5 p-2 rounded-xl text-[11px] text-slate-800 dark:text-slate-300 shadow-xs">
                            &ldquo;Bhai Panadol aur Vitamin C drops mil jayein gay?&rdquo;
                          </div>
                          <div className="bg-blue-600 p-2 rounded-xl text-[11px] text-white text-right ml-4 shadow-sm">
                            &ldquo;Ji bhai available hain, Rs. 240 banenge. Order bana doon?&rdquo;
                          </div>
                          <div className="flex items-center gap-1.5 p-2 rounded-xl bg-emerald-50 dark:bg-emerald-500/20 border border-emerald-200 dark:border-emerald-500/30 text-[10px] text-emerald-700 dark:text-emerald-300 font-medium">
                            <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                            <span>Order confirmed &amp; packed!</span>
                          </div>
                        </div>
                      )}

                      {activeStep === 2 && (
                        <div className="space-y-2.5">
                          <div className="relative h-28 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 overflow-hidden flex items-center justify-center shadow-xs">
                            <div className="absolute inset-0 bg-blue-500/5 dark:bg-blue-500/10" />
                            <div className="flex flex-col items-center">
                              <div className="w-8 h-8 rounded-full bg-emerald-500 text-white flex items-center justify-center shadow-lg ">
                                <MapPin className="w-4 h-4" />
                              </div>
                              <span className="text-[10px] font-bold text-slate-900 dark:text-white mt-1">
                                Rider Arrived at Your Gate
                              </span>
                            </div>
                          </div>
                          <div className="p-2.5 rounded-xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 flex items-center justify-between text-xs shadow-xs">
                            <div>
                              <p className="text-slate-500 dark:text-slate-400 text-[10px]">Payment Method</p>
                              <p className="font-heading font-bold text-slate-900 dark:text-white">Cash on Delivery</p>
                            </div>
                            <span className="px-2 py-1 rounded-lg bg-emerald-500/10 dark:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 font-bold text-xs">
                              Rs. 380
                            </span>
                          </div>
                        </div>
                      )}
                    </motion.div>
                  </AnimatePresence>

                  {/* Bottom Step Status */}
                  <div className="pt-3 border-t border-slate-200 dark:border-white/10 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                    <span>{currentStep.phoneDetails.status}</span>
                    <span className="text-slate-900 dark:text-white font-semibold flex items-center gap-1">
                      Illustrative preview
                    </span>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
