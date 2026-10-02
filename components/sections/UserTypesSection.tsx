'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ROLES_DATA, RoleData } from '@/data/roles';
import { TextReveal } from '@/components/animations/TextReveal';
import { Reveal } from '@/components/animations/Reveal';
import { Magnetic } from '@/components/animations/Magnetic';
import { MOTION_EASE } from '@/lib/motion';
import {
  UserCheck,
  Bike,
  Store,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Clock,
  Compass,
  TrendingUp,
  BellRing,
  MessagesSquare,
  Layers,
  Award,
  MapPin,
  CreditCard,
  ShoppingBag,
} from 'lucide-react';

const iconMap: Record<string, any> = {
  UserCheck,
  Bike,
  Store,
  Clock,
  Compass,
  TrendingUp,
  BellRing,
  MessagesSquare,
  Layers,
  Award,
  MapPin,
  CreditCard,
  ShoppingBag,
  Sparkles,
};

export function UserTypesSection() {
  const [activeTab, setActiveTab] = useState<'customer' | 'rider' | 'shopkeeper'>('customer');
  const activeRole: RoleData = ROLES_DATA.find((r) => r.id === activeTab) || ROLES_DATA[0];

  return (
    <section id="roles" className="relative py-16 sm:py-20 lg:py-28 pb-28 sm:pb-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <Reveal direction="up" delay={0.05}>
            <div className="section-tag mx-auto">
              <Sparkles className="w-3.5 h-3.5 text-blue-400" />
              <span>Built For Everyone</span>
            </div>
          </Reveal>

          <TextReveal
            text="Har Aik Ke Liye Faida — Customer, Rider Ya Dukandar"
            highlightWords={['Customer,', 'Rider', 'Ya', 'Dukandar']}
            as="h2"
            className="section-heading"
            delay={0.15}
          />

          <Reveal direction="up" delay={0.25}>
            <p className="section-subheading">
              ClickDeliver brings the entire city together: customers get convenience, riders earn
              respectable daily income, and local shops expand their customer base.
            </p>
          </Reveal>
        </div>

        {/* Responsive Tabbed Switcher (Grid layout ensures clean 3 columns on mobile) */}
        <div className="max-w-xl mx-auto mb-8 sm:mb-12">
          <div className="grid grid-cols-3 p-1.5 rounded-2xl bg-slate-100/90 dark:bg-slate-900/80 border border-slate-200 dark:border-white/10 backdrop-blur-xl shadow-xl">
            {ROLES_DATA.map((role) => {
              const TabIcon = iconMap[role.iconName] || UserCheck;
              const isSelected = activeTab === role.id;

              return (
                <button
                  key={role.id}
                  onClick={() => setActiveTab(role.id)}
                  className={`relative flex items-center justify-center gap-1.5 sm:gap-2.5 py-2.5 sm:py-3 px-2 rounded-xl font-heading text-xs sm:text-sm font-bold transition-colors duration-200 z-10 focus:outline-none ${
                    isSelected ? 'text-white' : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  <TabIcon className="w-4 h-4 flex-shrink-0" />
                  <span className="sm:hidden">{role.shortTitle}</span>
                  <span className="hidden sm:inline">{role.title}</span>

                  {isSelected && (
                    <motion.div
                      layoutId="role-tab-indicator"
                      className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 shadow-lg shadow-blue-500/30 -z-10"
                      transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Tab Content with AnimatePresence */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35, ease: MOTION_EASE }}
            className="rounded-3xl p-5 sm:p-8 lg:p-12 bg-white/80 dark:bg-slate-900/70 border border-slate-200 dark:border-white/10 backdrop-blur-2xl shadow-2xl shadow-blue-500/5"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
              {/* Left Column: Benefits & Taglines */}
              <div className="lg:col-span-7">
                {/* Mobile Friendly Role Header & Badges */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="px-3 py-1 rounded-full text-xs font-heading font-semibold bg-blue-500/10 dark:bg-blue-500/20 text-blue-600 dark:text-blue-300 border border-blue-500/30 whitespace-nowrap">
                      {activeRole.title}
                    </span>
                    <span className="text-xs text-slate-600 dark:text-slate-300 font-medium">
                      {activeRole.urduSummary}
                    </span>
                  </div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-xs font-bold text-amber-500 dark:text-amber-400 w-fit">
                    <span>{activeRole.statBadge.value}</span>
                    <span className="text-slate-500 dark:text-slate-400 font-normal">{activeRole.statBadge.label}</span>
                  </div>
                </div>

                <h3 className="text-xl sm:text-2xl lg:text-3xl font-heading font-extrabold text-slate-900 dark:text-white mb-6 leading-tight">
                  {activeRole.tagline}
                </h3>

                {/* 4 Rich Benefits appearing one-by-one with checkmark drawing animation */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8">
                  {activeRole.benefits.map((b, i) => {
                    const BIcon = iconMap[b.icon] || CheckCircle2;
                    return (
                      <motion.div
                        key={b.title}
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                          duration: 0.45,
                          delay: 0.1 + i * 0.08,
                          ease: MOTION_EASE,
                        }}
                        className="p-3.5 sm:p-4 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-200/80 dark:border-white/5 hover:border-slate-300 dark:hover:border-white/10 transition-colors flex flex-col justify-between"
                      >
                        <div className="flex items-center justify-between mb-2">
                          <div className="w-8 h-8 rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center flex-shrink-0">
                            <BIcon className="w-4 h-4" />
                          </div>

                          {/* Checkmark drawing animation */}
                          <svg
                            className="w-4 h-4 text-emerald-400"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <motion.path
                              d="M20 6L9 17l-5-5"
                              initial={{ pathLength: 0 }}
                              animate={{ pathLength: 1 }}
                              transition={{
                                duration: 0.5,
                                delay: 0.2 + i * 0.1,
                                ease: 'easeOut',
                              }}
                            />
                          </svg>
                        </div>

                        <div>
                          <h4 className="text-sm font-heading font-bold text-slate-900 dark:text-white mb-1">
                            {b.title}
                          </h4>
                          <p className="text-xs text-slate-600 dark:text-slate-300 font-body leading-relaxed">
                            {b.description}
                          </p>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>

                <Magnetic strength={0.2}>
                  <a
                    href={activeRole.ctaLink}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-heading font-semibold text-white bg-gradient-to-r from-blue-600 to-blue-500 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300"
                  >
                    <span>{activeRole.ctaText}</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </Magnetic>
              </div>

              {/* Right Column: Portal Showcase Card */}
              <div className="lg:col-span-5">
                <div className="rounded-3xl p-5 sm:p-6 bg-slate-100/90 dark:bg-gradient-to-b dark:from-slate-950 dark:to-slate-900 border border-slate-200 dark:border-white/10 shadow-2xl relative overflow-hidden">
                  <div className="flex flex-wrap sm:flex-nowrap items-center justify-between gap-2.5 pb-4 border-b border-slate-200 dark:border-white/10 mb-5">
                    <div className="flex items-center gap-2.5 min-w-0">
                      <div className="w-9 h-9 rounded-xl bg-blue-600/10 dark:bg-blue-600/30 border border-blue-500/20 dark:border-blue-500/40 flex items-center justify-center text-blue-600 dark:text-blue-400 flex-shrink-0">
                        {(() => {
                          const IconComp = iconMap[activeRole.iconName] || UserCheck;
                          return <IconComp className="w-5 h-5" />;
                        })()}
                      </div>
                      <div className="min-w-0">
                        <h4 className="font-heading font-bold text-slate-900 dark:text-white text-sm">
                          {activeRole.mockupDetails.heading}
                        </h4>
                        <p className="text-[10px] text-blue-600 dark:text-blue-300">ClickDeliver App Feature</p>
                      </div>
                    </div>
                    <span className="px-3 py-1 rounded-full text-[11px] font-heading font-bold bg-blue-500/10 dark:bg-blue-500/20 text-blue-600 dark:text-blue-300 border border-blue-500/30 whitespace-nowrap flex-shrink-0">
                      {activeRole.mockupDetails.badge}
                    </span>
                  </div>

                  {/* Stat Callout */}
                  <div className="p-4 rounded-2xl bg-blue-600/10 border border-blue-500/20 mb-5 text-center">
                    <span className="text-3xl font-heading font-extrabold text-slate-900 dark:text-white">
                      {activeRole.statBadge.value}
                    </span>
                    <p className="text-xs text-blue-600 dark:text-blue-300 font-heading mt-0.5">
                      {activeRole.statBadge.label}
                    </p>
                  </div>

                  {/* Feature Checkpoints */}
                  <div className="space-y-2.5">
                    {activeRole.mockupDetails.bullets.map((bullet, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2.5 p-2.5 rounded-xl bg-white dark:bg-white/5 text-xs text-slate-700 dark:text-slate-200 border border-slate-200/60 dark:border-transparent shadow-sm"
                      >
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 dark:text-emerald-400 flex-shrink-0" />
                        <span>{bullet}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
