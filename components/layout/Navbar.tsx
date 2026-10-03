"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { NAV_ITEMS } from "@/data/siteConfig";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { Magnetic } from "@/components/animations/Magnetic";
import { MOTION_EASE } from "@/lib/motion";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  
  const toggleRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  // Scroll and Observer logic
  useEffect(() => {
    const scroll = () => {
      setScrolled(window.scrollY > 20);
      if (window.scrollY < 100) setActiveSection("");
    };
    scroll();
    window.addEventListener("scroll", scroll, { passive: true });
    
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(`#${entry.target.id}`);
        }),
      { rootMargin: "-100px 0px -60% 0px" },
    );
    
    NAV_ITEMS.forEach((item) => {
      const section = document.querySelector(item.href);
      if (section) observer.observe(section);
    });
    
    return () => {
      window.removeEventListener("scroll", scroll);
      observer.disconnect();
    };
  }, []);

  // Resize logic
  useEffect(() => {
    const media = matchMedia("(min-width: 1280px)");
    const change = () => {
      if (media.matches) setMobileOpen(false);
    };
    media.addEventListener("change", change);
    return () => media.removeEventListener("change", change);
  }, []);

  // Keyboard navigation logic for mobile menu
  useEffect(() => {
    if (!mobileOpen) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const keydown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMobileOpen(false);
        toggleRef.current?.focus();
      }
      if (e.key === "Tab") {
        const links = menuRef.current?.querySelectorAll<HTMLElement>("a, button");
        if (!links?.length) return;
        if (
          e.shiftKey &&
          (document.activeElement === links[0] ||
            document.activeElement === toggleRef.current)
        ) {
          e.preventDefault();
          links[links.length - 1].focus();
        } else if (
          !e.shiftKey &&
          document.activeElement === links[links.length - 1]
        ) {
          e.preventDefault();
          toggleRef.current?.focus();
        }
      }
    };
    menuRef.current?.querySelector("a")?.focus();
    document.addEventListener("keydown", keydown);
    return () => {
      document.body.style.overflow = previous;
      document.removeEventListener("keydown", keydown);
    };
  }, [mobileOpen]);

  const closeForLink = (href: string) => {
    setMobileOpen(false);
    const destination = document.querySelector<HTMLElement>(href);
    if (destination) {
      destination.tabIndex = -1;
      destination.focus({ preventScroll: true });
    }
  };

  return (
    <motion.header
      animate={{ y: 0 }}
      transition={{ duration: reduced ? 0 : 0.35, ease: MOTION_EASE }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || mobileOpen
          ? 'py-3 bg-white/90 dark:bg-[#060911]/90 backdrop-blur-xl border-b border-slate-200/80 dark:border-white/10 shadow-lg shadow-slate-900/5 dark:shadow-black/25'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-3 group focus:outline-none">
            <div className="relative w-11 h-11 rounded-xl overflow-hidden bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 p-1 flex items-center justify-center transition-transform duration-300 group-hover:scale-105 group-hover:border-blue-500/50 shadow-md">
              <Image
                src="/logo.png"
                alt="ClickDeliver"
                width={40}
                height={40}
                className="w-auto h-auto max-w-[36px] max-h-[36px] object-contain drop-shadow"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-extrabold text-xl text-slate-900 dark:text-white tracking-tight flex items-center gap-1">
                Click<span className="text-blue-500">Deliver</span>
              </span>
              <span className="text-xs uppercase font-semibold tracking-wider text-slate-500 dark:text-slate-400">
                Alipur Chattha
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav
            onMouseLeave={() => setHoveredLink(null)}
            className="hidden lg:flex items-center gap-1.5 p-1.5 rounded-full bg-white/90 dark:bg-[#111827]/90 border border-slate-200 dark:border-white/10 backdrop-blur-md shadow-sm"
          >
            {NAV_ITEMS.map((link) => {
              const isActive = activeSection === link.href;
              const isHovered = hoveredLink === link.href;

              return (
                <Link
                  key={link.label}
                  href={link.href}
                  onMouseEnter={() => setHoveredLink(link.href)}
                  className={`relative px-4 py-2 rounded-full text-[15px] font-heading transition-colors duration-200 ${
                    isActive
                      ? 'text-white font-semibold'
                      : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white font-medium'
                  }`}
                >
                  <span className="relative z-10">{link.label}</span>

                  {isActive && (
                    <motion.div
                      layoutId="nav-pill"
                      className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full shadow-md shadow-blue-500/25 z-0"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}

                  {isHovered && !isActive && (
                    <motion.div
                      layoutId="nav-hover-pill"
                      className="absolute bottom-1 left-3 right-3 h-[2px] bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full z-0"
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
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
            <div className="hidden sm:block">
              <Magnetic strength={0.25}>
                <a
                  href="#download"
                  className="group relative inline-flex overflow-hidden rounded-xl p-[3px] shadow-md shadow-blue-500/20 hover:shadow-lg hover:shadow-cyan-500/35 transition-all duration-300"
                >
                  <span className="absolute inset-[-1000%] animate-[spin_20s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#e11d48,#a855f7,#3b82f6,#10b981,#e11d48)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="relative inline-flex items-center gap-2 px-4 py-2 w-full h-full rounded-[9px] text-sm font-heading font-semibold text-white bg-gradient-to-r from-blue-600 to-cyan-500 transition-all duration-300">
                    <span>Download App</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </span>
                </a>
              </Magnetic>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              ref={toggleRef}
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 rounded-xl bg-slate-100 hover:bg-slate-200/80 dark:bg-white/5 dark:hover:bg-white/10 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-white transition-colors focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Slide-in Drawer */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              ref={menuRef}
              id="mobile-menu"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.32, ease: MOTION_EASE }}
              className="lg:hidden border-b border-slate-200 dark:border-white/10 bg-white/95 dark:bg-[#060911]/95 backdrop-blur-2xl overflow-hidden"
            >
              <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col gap-2">
                {NAV_ITEMS.map((link, idx) => (
                  <motion.div
                    key={link.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 + idx * 0.04, duration: 0.35, ease: MOTION_EASE }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => closeForLink(link.href)}
                      className={`flex items-center justify-between py-2.5 px-3 rounded-xl text-sm font-heading font-medium transition-colors ${
                        activeSection === link.href
                          ? 'bg-blue-600/10 dark:bg-blue-600/20 text-blue-600 dark:text-blue-400 font-semibold border border-blue-500/20 dark:border-blue-500/30'
                          : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/5'
                      }`}
                    >
                      <span>{link.label}</span>
                      <ArrowUpRight className="w-4 h-4 text-slate-400" />
                    </Link>
                  </motion.div>
                ))}

                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 + NAV_ITEMS.length * 0.04, duration: 0.4 }}
                  className="pt-4 flex flex-col gap-3"
                >
                  <a
                    href="#download"
                    onClick={() => closeForLink('#download')}
                    className="group relative flex overflow-hidden w-full rounded-xl p-[3px] shadow-lg shadow-blue-500/25 transition-all duration-300"
                  >
                    <span className="absolute inset-[-1000%] animate-[spin_20s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#e11d48,#a855f7,#3b82f6,#10b981,#e11d48)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <span className="relative flex items-center justify-center gap-2 w-full h-full py-3 rounded-[9px] bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-heading font-semibold text-sm transition-all duration-300">
                      <span>Download Free App</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </span>
                  </a>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
