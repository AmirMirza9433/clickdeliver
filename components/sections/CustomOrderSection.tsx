'use client';

import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { staggerContainer, staggerItem, slideRight, slideLeft } from '@/lib/animations';

export function CustomOrderSection() {
  const examples = [
    'Rare medicine jo pharmacy list mein nahi',
    'Specific size/color ka kapra',
    'Bulk grocery order',
    'Koi bhi special item',
  ];

  return (
    <SectionWrapper className="relative">
      <div className="absolute inset-0 bg-gradient-to-r from-brand-primary/5 to-transparent rounded-2xl opacity-50" />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="relative z-10"
      >
        <motion.div variants={staggerItem} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">
            Jo app mein nahi — wo bhi mangao
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            ClickDeliver ka unique feature: Custom Orders
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <motion.div variants={slideLeft} className="relative z-10">
            <p className="text-lg text-gray-300 mb-6 leading-relaxed font-body">
              Normal apps sirf listed items deliver karti hain. ClickDeliver mein
              agar koi product listed nahi, to{' '}
              <span className="font-semibold text-brand-primary">
                "Custom Order"
              </span>{' '}
              feature use karo.
            </p>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed font-body">
              Shopkeeper ko directly message karo. Wo aapke liye arrange karega.
            </p>

            <h4 className="font-heading font-semibold text-white mb-4 text-lg">
              Examples:
            </h4>
            <div className="space-y-3">
              {examples.map((example, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle className="w-5 h-5 text-brand-success flex-shrink-0 mt-0.5" />
                  <span className="text-gray-400 font-body">{example}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Chat Mockup */}
          <motion.div variants={slideRight} className="relative">
            <div className="bg-brand-surface border border-brand-border rounded-2xl p-4 shadow-xl">
              {/* Chat Header */}
              <div className="bg-gradient-to-r from-brand-primary to-blue-600 rounded-xl p-4 mb-4 text-white">
                <p className="font-heading font-semibold text-sm">
                  Ali General Store
                </p>
                <p className="text-xs opacity-80">Online</p>
              </div>

              {/* Chat Messages */}
              <div className="space-y-3 max-h-60 overflow-hidden">
                {/* Incoming */}
                <div className="flex justify-start">
                  <div className="max-w-xs bg-brand-border rounded-lg rounded-tl-none p-3">
                    <p className="text-sm text-gray-300 font-body">
                      Kya aapke paas antibiotics wali cream hai?
                    </p>
                  </div>
                </div>

                {/* Outgoing */}
                <div className="flex justify-end">
                  <div className="max-w-xs bg-brand-primary rounded-lg rounded-tr-none p-3">
                    <p className="text-sm text-white font-body">
                      Bilkul, 10 mint mein milega
                    </p>
                  </div>
                </div>

                {/* Incoming */}
                <div className="flex justify-start">
                  <div className="max-w-xs bg-brand-border rounded-lg rounded-tl-none p-3">
                    <p className="text-sm text-gray-300 font-body">
                      Perfect! Order confirm 👍
                    </p>
                  </div>
                </div>

                {/* Rider Update */}
                <motion.div
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="flex justify-center my-4"
                >
                  <div className="bg-brand-success/20 border border-brand-success rounded-lg px-3 py-2">
                    <p className="text-xs text-brand-success font-heading font-semibold">
                      ✓ Rider assigned - ETA 8 mins
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </SectionWrapper>
  );
}
