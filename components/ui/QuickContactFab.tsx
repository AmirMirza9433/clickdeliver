'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, Phone, Mail, X, Plus } from 'lucide-react';
import { APP_CONFIG } from '@/data/siteConfig';

export function QuickContactFab() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  // WhatsApp link logic (removes + and spaces for the link)
  const whatsappNumber = APP_CONFIG.phone.replace(/[^0-9]/g, '');
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=Hi%20ClickDeliver%21%20I%20have%20a%20question.`;

  const contactOptions = [
    {
      label: 'WhatsApp chat',
      value: '',
      icon: MessageCircle,
      href: whatsappLink,
      color: 'text-emerald-500',
    },
    {
      label: `Call now (${APP_CONFIG.phoneDisplay})`,
      value: '',
      icon: Phone,
      href: `tel:${APP_CONFIG.phone}`,
      color: 'text-blue-500',
    },
    {
      label: `Email us (${APP_CONFIG.email})`,
      value: '',
      icon: Mail,
      href: `mailto:${APP_CONFIG.email}`,
      color: 'text-rose-500',
    },
  ];

  return (
    <div className="fixed bottom-6 right-6 z-[60] flex flex-col items-end">
      {/* Popover Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 15, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 15, scale: 0.95 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="mb-4 bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-white/10 p-2 min-w-[260px] overflow-hidden"
          >
            <div className="px-3 py-2 border-b border-slate-100 dark:border-white/5 mb-1">
              <h4 className="text-sm font-heading font-bold text-slate-800 dark:text-slate-200">
                Contact us quickly
              </h4>
            </div>
            
            <div className="flex flex-col gap-1">
              {contactOptions.map((option, idx) => (
                <a
                  key={idx}
                  href={option.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-slate-50 dark:hover:bg-white/5 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  <option.icon className={`w-4 h-4 ${option.color}`} />
                  <span className="text-xs font-medium text-slate-700 dark:text-slate-300">
                    {option.label}
                  </span>
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* FAB Button */}
      <button
        onClick={toggleOpen}
        className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-blue-600 shadow-xl shadow-blue-500/30 text-white transition-all duration-300 hover:scale-105 active:scale-95 focus:outline-none overflow-hidden p-[3px]"
        aria-label="Quick Contact"
      >
        {/* Animated gradient border on hover */}
        <span className="absolute inset-[-1000%] animate-[spin_20s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#e11d48,#a855f7,#3b82f6,#10b981,#e11d48)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
        
        <div className="relative w-full h-full bg-blue-600 rounded-full flex items-center justify-center transition-colors group-hover:bg-blue-700">
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X className="w-6 h-6" />
              </motion.div>
            ) : (
              <motion.div
                key="open"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Plus className="w-6 h-6" />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </button>
    </div>
  );
}
