'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FAQS_DATA } from '@/data/faqs';
import { HelpCircle, ChevronDown } from 'lucide-react';
import { TextReveal } from '@/components/animations/TextReveal';
import { Reveal } from '@/components/animations/Reveal';
import { MOTION_EASE } from '@/lib/motion';

export function FaqSection() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [openId, setOpenId] = useState<string | null>(FAQS_DATA[0].id);

  const categories = [
    { id: 'all', label: 'All Questions' },
    { id: 'general', label: 'General Info' },
    { id: 'delivery', label: 'Deliveries & Orders' },
    { id: 'rider', label: 'Riders & Rides' },
    { id: 'payment', label: 'Payments' },
  ];

  const filteredFaqs =
    activeCategory === 'all'
      ? FAQS_DATA
      : FAQS_DATA.filter((faq) => faq.category === activeCategory);

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="relative py-20 lg:py-28 overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <Reveal direction="up" delay={0.05}>
            <div className="section-tag mx-auto">
              <HelpCircle className="w-3.5 h-3.5 text-blue-400" />
              <span>Got Questions?</span>
            </div>
          </Reveal>

          <TextReveal
            text="Aam Tor Par Poochay Gaye Sawalaat"
            highlightWords={['Poochay', 'Gaye', 'Sawalaat']}
            as="h2"
            className="section-heading"
            delay={0.15}
          />

          <Reveal direction="up" delay={0.25}>
            <p className="section-subheading">
              ClickDeliver ke baray mein kisi bhi sawal ka jawab yahan dekhein.
            </p>
          </Reveal>
        </div>

        {/* Category Filter Pills */}
        <Reveal direction="up" delay={0.2}>
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs font-heading font-semibold transition-all duration-200 focus:outline-none ${
                  activeCategory === cat.id
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20'
                    : 'bg-slate-900/60 text-slate-400 hover:text-white border border-white/5 hover:border-white/15'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </Reveal>

        {/* Smooth Animated Accordion List */}
        <div className="space-y-3.5">
          {filteredFaqs.map((faq, idx) => {
            const isOpen = openId === faq.id;

            return (
              <motion.div
                key={faq.id}
                layout
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05, ease: MOTION_EASE }}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? 'bg-slate-900/90 border-blue-500/40 shadow-lg shadow-blue-500/5'
                    : 'bg-slate-900/40 border-white/5 hover:border-white/10'
                }`}
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between p-5 sm:p-6 text-left focus:outline-none"
                >
                  <span className="text-base sm:text-lg font-heading font-bold text-white pr-4">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${
                      isOpen
                        ? 'bg-blue-600 text-white rotate-180'
                        : 'bg-white/5 text-slate-400'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: MOTION_EASE }}
                    >
                      <div className="px-5 pb-6 sm:px-6 sm:pb-6 pt-0 border-t border-white/5 text-slate-300 text-sm sm:text-base font-body leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
