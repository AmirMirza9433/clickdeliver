'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { NAV_ITEMS, APP_CONFIG } from '@/data/siteConfig';
import { ThemeToggle } from '@/components/ui/ThemeToggle';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Scroll-spy active state
      const sections = NAV_ITEMS.map((item) => item.href.substring(1)).filter(Boolean);
      const scrollPosition = window.scrollY + 180;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(`#${sections[i]}`);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'py-3 bg-brand-bg/80 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-black/20'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-3 group focus:outline-none">
            <div className="relative w-10 h-10 rounded-xl overflow-hidden bg-white/5 border border-white/10 p-1 flex items-center justify-center transition-transform duration-300 group-hover:scale-105 group-hover:border-blue-500/50 shadow-md">
              <Image
                src="/logo.png"
                alt="ClickDeliver"
                width={36}
                height={36}
                className="w-auto h-auto max-w-[34px] max-h-[34px] object-contain drop-shadow"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-extrabold text-lg text-white tracking-tight flex items-center gap-1">
                Click<span className="text-blue-500">Deliver</span>
              </span>
              <span className="text-[10px] uppercase font-semibold tracking-wider text-slate-400">
                Alipur Chattha
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links with animated underline and scroll-spy */}
          <nav className="hidden lg:flex items-center gap-1 p-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
            {NAV_ITEMS.map((link) => {
              const isActive = activeSection === link.href;
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`relative px-4 py-1.5 rounded-full text-xs font-heading font-medium transition-colors duration-200 ${
                    isActive ? 'text-white font-semibold' : 'text-slate-300 hover:text-white'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.div
                      layoutId="nav-pill"
                      className="absolute inset-0 bg-blue-600/30 rounded-full border border-blue-400/40 -z-10"
                      transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Action CTAs & Theme Toggle */}
          <div className="flex items-center gap-2 sm:gap-3">
            <ThemeToggle />

            {/* Desktop Download CTA */}
            <a
              href="#download"
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-heading font-semibold text-white bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 shadow-md shadow-blue-500/20 hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 hover:-translate-y-0.5"
            >
              <span>Download App</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 rounded-xl bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-colors focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Slide-in Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="lg:hidden border-b border-white/10 bg-[#060911]/95 backdrop-blur-2xl overflow-hidden"
          >
            <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col gap-3">
              {NAV_ITEMS.map((link, idx) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.04 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center justify-between py-2 text-sm font-heading font-medium text-slate-300 hover:text-white border-b border-white/5"
                  >
                    <span>{link.label}</span>
                    <ArrowUpRight className="w-4 h-4 text-slate-500" />
                  </Link>
                </motion.div>
              ))}

              <div className="pt-4 flex flex-col gap-3">
                <a
                  href={APP_CONFIG.playStoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileOpen(false)}
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 text-white text-center font-heading font-semibold text-sm shadow-lg shadow-blue-500/25 flex items-center justify-center gap-2"
                >
                  <span>Install on Android (Google Play)</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
