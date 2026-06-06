"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { NAV_LINKS, APP_INFO } from "@/lib/constants";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/85 backdrop-blur-md border-b border-brand-border shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center gap-2 group">
            <Image
              src="/logo.png"
              alt="ClickDeliver"
              width={50}
              height={40}
              className="w-12 h-10 rounded-lg group-hover:shadow-lg group-hover:shadow-brand-primary/50 transition-all duration-300"
              priority
            />
            <span className="font-heading font-bold text-white hidden sm:block group-hover:text-brand-primary transition-colors">
              ClickDeliver
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="font-body text-sm text-gray-300 hover:text-brand-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-4">
            {/* Desktop CTA */}
            <a
              href={APP_INFO.playStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex px-6 py-2 rounded-lg bg-brand-primary hover:bg-blue-600 text-white font-heading font-semibold text-sm transition-all duration-300 hover:shadow-lg hover:shadow-brand-primary/50"
            >
              Download App
            </a>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 text-white hover:bg-brand-surface rounded-lg transition-colors"
            >
              {mobileOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-t border-brand-border bg-black/95"
            >
              <div className="flex flex-col gap-4 p-4">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="font-body text-sm text-gray-300 hover:text-brand-primary transition-colors py-2"
                  >
                    {link.label}
                  </Link>
                ))}
                <a
                  href={APP_INFO.playStoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full px-4 py-2 rounded-lg bg-brand-primary hover:bg-blue-600 text-white font-heading font-semibold text-sm transition-all text-center"
                >
                  Download App
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
