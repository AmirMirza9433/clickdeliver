'use client';

import { motion } from 'framer-motion';
import { BENTO_FEATURES } from '@/data/features';
import { BentoCard } from '@/components/ui/BentoCard';
import { TextReveal } from '@/components/animations/TextReveal';
import { Reveal } from '@/components/animations/Reveal';
import { Sparkles } from 'lucide-react';

export function FeaturesSection() {
  return (
    <section id="features" className="relative py-20 lg:py-28 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Reveal direction="left" delay={0.05}>
            <div className="section-tag mx-auto">
              <Sparkles className="w-3.5 h-3.5" />
              <span>HAR DIN, HAR ZAROORAT</span>
            </div>
          </Reveal>

          <TextReveal
            text="Har Cheez Ek App Mein."
            highlightWords={['Ek', 'App', 'Mein.']}
            as="h2"
            className="section-heading"
            delay={0.15}
            direction="left"
          />

          <Reveal direction="left" delay={0.25}>
            <p className="section-subheading">
              Grocery ho, dawaai ho ya bike ride — apne shehar ki services ab ek hi app mein.
            </p>
          </Reveal>
        </div>

        {/* Bento Grid with alternating sliding cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {BENTO_FEATURES.map((feature, idx) => (
            <BentoCard key={feature.id} feature={feature} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
