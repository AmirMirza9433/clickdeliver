"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Facebook,
  Instagram,
  Youtube,
  Music2,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { APP_INFO, SOCIAL_LINKS, NAV_LINKS } from "@/lib/constants";

export function Footer() {
  const socialIcons = [
    {
      icon: Facebook,
      href: SOCIAL_LINKS.facebook,
      label: "Facebook",
    },
    {
      icon: Instagram,
      href: SOCIAL_LINKS.instagram,
      label: "Instagram",
    },
    {
      icon: Youtube,
      href: SOCIAL_LINKS.youtube,
      label: "YouTube",
    },
    {
      icon: Music2,
      href: SOCIAL_LINKS.tiktok,
      label: "TikTok",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <footer className="bg-black border-t border-brand-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12"
        >
          {/* Brand */}
          <motion.div variants={itemVariants} className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Image
                src="/logo.png"
                alt="ClickDeliver"
                width={50}
                height={40}
                className="w-12 h-10 rounded-lg"
              />
              <span className="font-heading font-bold text-white text-lg">
                ClickDeliver
              </span>
            </div>
            <p className="text-sm text-gray-400">{APP_INFO.slogan}</p>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants} className="md:col-span-1">
            <h4 className="font-heading font-semibold text-white mb-4">
              Quick Links
            </h4>
            <div className="flex flex-col gap-2">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-sm text-gray-400 hover:text-brand-primary transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Contact */}
          <motion.div variants={itemVariants} className="md:col-span-1">
            <h4 className="font-heading font-semibold text-white mb-4">
              Contact
            </h4>
            <div className="flex flex-col gap-3">
              <a
                href={`mailto:${APP_INFO.email}`}
                className="flex items-center gap-2 text-sm text-gray-400 hover:text-brand-primary transition-colors"
              >
                <Mail className="w-4 h-4" />
                {APP_INFO.email}
              </a>
              <a
                href={`tel:${APP_INFO.phone}`}
                className="flex items-center gap-2 text-sm text-gray-400 hover:text-brand-primary transition-colors"
              >
                <Phone className="w-4 h-4" />
                {APP_INFO.phone}
              </a>
              <div className="flex items-start gap-2 text-sm text-gray-400">
                <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                {APP_INFO.location}
              </div>
            </div>
          </motion.div>

          {/* Social */}
          <motion.div variants={itemVariants} className="md:col-span-1">
            <h4 className="font-heading font-semibold text-white mb-4">
              Follow Us
            </h4>
            <div className="flex gap-3">
              {socialIcons.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-brand-surface hover:bg-brand-primary text-gray-400 hover:text-white flex items-center justify-center transition-all duration-300 hover:shadow-lg hover:shadow-brand-primary/50"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="border-t border-brand-border pt-8 text-center text-sm text-gray-400"
        >
          <p>
            &copy; 2026 ClickDeliver. All rights reserved. Made with{" "}
            <span className="text-brand-primary">❤️</span> in Pakistan
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
