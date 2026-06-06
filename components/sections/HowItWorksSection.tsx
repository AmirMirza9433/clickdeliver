'use client';

import { motion } from 'framer-motion';
import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { StepCard } from '@/components/ui/StepCard';
import { HOW_IT_WORKS_STEPS } from '@/lib/constants';
import { staggerContainer, staggerItem } from '@/lib/animations';

export function HowItWorksSection() {
  return (
    <SectionWrapper id="how-it-works">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div variants={staggerItem} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">
            3 Simple Steps
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Get started with ClickDeliver in minutes
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-12 relative"
        >
          {/* Connecting Lines */}
          <svg
            className="hidden md:block absolute top-24 left-0 right-0 w-full h-2 pointer-events-none"
            preserveAspectRatio="none"
          >
            <line
              x1="0"
              y1="0"
              x2="100%"
              y2="0"
              stroke="url(#lineGradient)"
              strokeWidth="2"
              strokeDasharray="10,5"
            />
            <defs>
              <linearGradient
                id="lineGradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%"
              >
                <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>

          {HOW_IT_WORKS_STEPS.map((step, index) => (
            <motion.div
              key={index}
              variants={staggerItem}
              className="relative z-10"
            >
              <StepCard {...step} />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </SectionWrapper>
  );
}
