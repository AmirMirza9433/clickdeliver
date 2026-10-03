'use client';

import { STATS_DATA } from '@/data/stats';
import { CountUp } from '@/components/animations/CountUp';
import { Reveal } from '@/components/animations/Reveal';
import { TrendingUp, Users, Bike, Store, Award } from 'lucide-react';

const iconMap: Record<string, any> = {
  deliveries: TrendingUp,
  customers: Users,
  riders: Bike,
  shops: Store,
};

export function StatsSection() {
  return (
    <section className="relative py-12 z-20 stats-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal direction="right" delay={0.05} distance={36}>
          <div className="relative rounded-3xl p-6 sm:p-8 lg:p-10 bg-white/80 dark:bg-slate-900/60 border border-slate-200 dark:border-white/10 backdrop-blur-2xl shadow-2xl shadow-blue-500/5 overflow-hidden">
            {/* Subtle Ambient Light Strip */}
            <div className="absolute -top-24 left-1/4 w-96 h-36 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-24 right-1/4 w-96 h-36 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12 ">
              {STATS_DATA.map((stat, idx) => {
                const Icon = iconMap[stat.id] || Award;
                return (
                  <div
                    key={stat.id}
                    className={`flex flex-col items-center text-center ${
                      ''
                    }`}
                  >
                    <div className="w-10 h-10 rounded-2xl bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center mb-3">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-slate-900 dark:text-white tracking-tight flex items-baseline">
                      <CountUp
                        end={stat.value}
                        duration={1.25}
                        suffix={stat.suffix}
                        prefix={stat.prefix}
                      />
                    </div>
                    <p className="text-sm font-heading font-semibold text-slate-700 dark:text-slate-200 mt-2">
                      {stat.label}
                    </p>
                    <p className="text-xs text-slate-500 dark:text-slate-400 font-body mt-0.5">
                      {stat.sublabel}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
