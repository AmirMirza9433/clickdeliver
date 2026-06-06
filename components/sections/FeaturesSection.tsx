'use client';

import { motion } from 'framer-motion';
import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { FeatureCard } from '@/components/ui/FeatureCard';
import { FEATURES } from '@/lib/constants';
import { staggerContainer, staggerItem } from '@/lib/animations';

export function FeaturesSection() {
  return (
    <SectionWrapper id="features">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div variants={staggerItem} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">
            Har cheez ek app mein
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Everything you need for delivery and rides in one powerful platform
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {FEATURES.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </motion.div>
      </motion.div>
    </SectionWrapper>
  );
}
