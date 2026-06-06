'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import * as Icons from 'lucide-react';
import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { USER_TYPES } from '@/lib/constants';
import { staggerContainer, staggerItem, fadeIn } from '@/lib/animations';

export function UserTypesSection() {
  const [activeTab, setActiveTab] = useState(0);

  const IconComponent = (name: string) => {
    return (Icons as any)[name];
  };

  return (
    <SectionWrapper>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div variants={staggerItem} className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">
            Koi bhi join kar sakta hai
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            ClickDeliver mein saab ke liye role hai
          </p>
        </motion.div>

        {/* Tabs */}
        <motion.div
          variants={staggerItem}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
        >
          {USER_TYPES.map((type, index) => {
            const Icon = IconComponent(type.icon);
            return (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`flex items-center gap-3 px-6 py-3 rounded-lg font-heading font-semibold transition-all duration-300 ${
                  activeTab === index
                    ? 'bg-brand-primary text-white shadow-lg shadow-brand-primary/50'
                    : 'bg-brand-surface text-gray-300 hover:bg-brand-border hover:text-white'
                }`}
              >
                {Icon && <Icon className="w-5 h-5" />}
                <span>{type.title}</span>
              </button>
            );
          })}
        </motion.div>

        {/* Content */}
        <AnimatePresence mode="wait">
          {USER_TYPES.map((type, index) => {
            if (activeTab !== index) return null;

            return (
              <motion.div
                key={index}
                variants={fadeIn}
                initial="hidden"
                animate="visible"
                exit="hidden"
                className="bg-brand-surface border border-brand-border rounded-2xl p-8 md:p-12"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  {/* Features List */}
                  <div>
                    <h3 className="text-3xl font-heading font-bold text-white mb-8">
                      {type.title} Benefits
                    </h3>
                    <div className="space-y-4">
                      {type.features.map((feature, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.1 }}
                          className="flex items-center gap-3"
                        >
                          <div className="w-6 h-6 rounded-full bg-brand-success flex items-center justify-center flex-shrink-0">
                            <span className="text-white text-sm font-bold">✓</span>
                          </div>
                          <span className="text-gray-300 font-body">
                            {feature}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Icon */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex items-center justify-center"
                  >
                    <div className="w-64 h-64 rounded-2xl bg-gradient-to-br from-brand-primary/20 to-blue-600/20 border border-brand-primary/30 flex items-center justify-center">
                      {IconComponent(type.icon) &&
                        (() => {
                          const Icon = IconComponent(type.icon);
                          return (
                            <Icon className="w-32 h-32 text-brand-primary opacity-50" />
                          );
                        })()}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>
    </SectionWrapper>
  );
}
