'use client';

import { motion } from 'framer-motion';
import { BENTO_FEATURES } from '@/data/features';
import { BentoCard } from '@/components/ui/BentoCard';
import { Sparkles } from 'lucide-react';

export function FeaturesSection() {
  return (
    <section id="features" className="relative py-20 lg:py-28 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-tag"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Power Packed Platform</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="section-heading"
          >
            Har Cheez Ek App Mein —{' '}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              Smart &amp; Superfast
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="section-subheading"
          >
            ClickDeliver combines express on-demand delivery, custom shopkeeper messaging,
            and budget-friendly bike ride booking into one sleek experience.
          </motion.p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {BENTO_FEATURES.map((feature) => (
            <BentoCard key={feature.id} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
}
