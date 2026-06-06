'use client';

import { motion } from 'framer-motion';
import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { AnimatedCounter } from '@/components/ui/AnimatedCounter';
import { STATS } from '@/lib/constants';
import { staggerContainer, staggerItem } from '@/lib/animations';

export function StatsSection() {
  return (
    <SectionWrapper className="bg-brand-surface rounded-2xl border border-brand-border relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-brand-primary/5 to-blue-600/5" />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-8"
      >
        {STATS.map((stat) => (
          <motion.div
            key={stat.label}
            variants={staggerItem}
            className="text-center"
          >
            <div className="text-3xl sm:text-4xl font-heading font-bold text-transparent bg-gradient-to-r from-brand-primary to-blue-500 bg-clip-text mb-2">
              <AnimatedCounter target={stat.value} suffix={stat.suffix} />
            </div>
            <p className="text-sm text-gray-400 font-body">{stat.label}</p>
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  );
}
