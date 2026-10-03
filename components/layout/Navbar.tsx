"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { NAV_ITEMS } from "@/data/siteConfig";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState("");
  const toggleRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  useEffect(() => {
    const scroll = () => {
      setScrolled(window.scrollY > 20);
      if (window.scrollY < 100) setActive("");
    };
    scroll();
    window.addEventListener("scroll", scroll, { passive: true });
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
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
  useEffect(() => {
    const media = matchMedia("(min-width: 1280px)");
    const change = () => {
      if (media.matches) setMobileOpen(false);
    };
    media.addEventListener("change", change);
    return () => media.removeEventListener("change", change);
  }, []);
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
        const links =
          menuRef.current?.querySelectorAll<HTMLElement>("a, button");
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
    <header
      className={`site-header fixed inset-x-0 top-0 z-50 border-b transition-[background-color,box-shadow,border-color] duration-200 ${scrolled || mobileOpen ? "bg-white/95 dark:bg-[#0b1425]/95 backdrop-blur-xl border-slate-200 dark:border-white/10 shadow-lg shadow-black/5" : "bg-transparent border-transparent"}`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 h-[84px] flex items-center justify-between gap-5">
        <Link
          href="/"
          aria-label="ClickDeliver home"
          className="flex items-center gap-2.5 shrink-0"
        >
          <Image
            src="/logo.png"
            alt=""
            width={39}
            height={39}
            priority
            className="rounded-xl"
          />
          <div>
            <span className="font-heading font-semibold text-xl tracking-tight">
              Click
              <span className="text-blue-500 dark:text-blue-400">Deliver</span>
            </span>
            <span className="block text-[8px] tracking-[.17em] text-slate-500 dark:text-slate-400 mt-0.5">
              YOUR CITY. DELIVERED.
            </span>
          </div>
        </Link>
        <nav
          aria-label="Main navigation"
          className="hidden xl:flex items-center gap-5"
        >
          {NAV_ITEMS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              aria-current={active === link.href ? "location" : undefined}
              className={`py-3 text-[11px] font-medium transition-colors duration-200 ${active === link.href ? "text-blue-600 dark:text-blue-300" : "text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-300"}`}
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2 sm:gap-3">
          <ThemeToggle />
          <a
            href="#download"
            className="hidden sm:inline-flex items-center gap-2 px-4 h-11 rounded-xl text-xs font-semibold bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-200"
          >
            Get the app <ArrowUpRight size={15} />
          </a>
          <button
            ref={toggleRef}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            aria-label={
              mobileOpen ? "Close navigation menu" : "Open navigation menu"
            }
            onClick={() => setMobileOpen(!mobileOpen)}
            className="xl:hidden w-11 h-11 rounded-xl border border-slate-200 dark:border-white/10 flex items-center justify-center"
          >
            {mobileOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>
      </div>
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            ref={menuRef}
            id="mobile-menu"
            initial={{ opacity: reduced ? 1 : 0, height: reduced ? "auto" : 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: reduced ? 0 : 0.22 }}
            className="xl:hidden overflow-hidden bg-white dark:bg-[#0b1425]"
          >
            <nav
              aria-label="Mobile navigation"
              className="px-5 sm:px-8 py-4 flex flex-col max-h-[calc(100dvh-84px)] overflow-y-auto"
            >
              {NAV_ITEMS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => closeForLink(link.href)}
                  aria-current={active === link.href ? "location" : undefined}
                  className="flex items-center justify-between px-3 py-3.5 rounded-xl text-sm hover:bg-blue-500/10 focus:bg-blue-500/10"
                >
                  {link.label}
                  <ArrowUpRight size={15} className="text-blue-500" />
                </a>
              ))}
              <a
                href="#download"
                onClick={() => closeForLink("#download")}
                className="bg-blue-600 text-white rounded-xl text-center py-3.5 mt-3 font-semibold text-sm"
              >
                Download ClickDeliver
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
