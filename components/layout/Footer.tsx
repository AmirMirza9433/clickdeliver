'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  Facebook,
  Instagram,
  Mail,
  Phone,
  MapPin,
  Heart,
} from 'lucide-react';
import { TikTokIcon } from '@/components/ui/icons/TikTokIcon';
import { APP_CONFIG, NAV_ITEMS } from '@/data/siteConfig';
import { MOTION_EASE } from '@/lib/motion';

export function Footer() {
  const socialIcons = [
    {
      icon: Facebook,
      href: APP_CONFIG.socials.facebook,
      label: 'Facebook',
      hoverColor: 'hover:text-blue-500 hover:border-blue-500',
    },
    {
      icon: Instagram,
      href: APP_CONFIG.socials.instagram,
      label: 'Instagram',
      hoverColor: 'hover:text-pink-500 hover:border-pink-500',
    },
    {
      icon: TikTokIcon,
      href: APP_CONFIG.socials.tiktok,
      label: 'TikTok',
      hoverColor: 'hover:text-cyan-400 hover:border-cyan-400',
    },
  ];

  return (
    <motion.footer
      initial={false}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.5, ease: MOTION_EASE }}
      className="relative bg-slate-100/90 dark:bg-[#04060b] border-t border-slate-200 dark:border-white/10 pt-16 pb-12 overflow-hidden transition-colors duration-300"
    >
      {/* Ambient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-24 bg-blue-600/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-14">
          {/* Col 1 & 2: Brand & Info */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-4 group">
              <div className="w-10 h-10 rounded-xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 p-1 flex items-center justify-center transition-transform group-hover:scale-105 shadow-sm">
                <Image
                  src="/logo.png"
                  alt="ClickDeliver"
                  width={36}
                  height={36}
                  className="w-auto h-auto max-w-[32px] max-h-[32px] object-contain drop-shadow"
                />
              </div>
              <span className="font-heading font-extrabold text-xl text-slate-900 dark:text-white tracking-tight">
                Click<span className="text-blue-500">Deliver</span>
              </span>
            </Link>

            <p className="text-sm text-slate-600 dark:text-slate-300 font-body leading-relaxed mb-6 max-w-sm">
              Alipur Chattha ka premier on-demand delivery aur bike ride platform. Grocery,
              pharmacy, restaurant food aur custom items &mdash; sab kuch aapke darwaze tak.
            </p>

            {/* Social Icons with Spring Pop on hover */}
            <div className="flex gap-2.5">
              {socialIcons.map(({ icon: Icon, href, label, hoverColor }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  whileHover={{ y: -2 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 15 }}
                  className={`w-10 h-10 rounded-xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-400 flex items-center justify-center transition-colors shadow-sm ${hoverColor}`}
                >
                  <Icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Col 3: Quick Navigation */}
          <div>
            <h4 className="font-heading font-bold text-slate-900 dark:text-white text-sm mb-4">Navigation</h4>
            <ul className="space-y-2.5 text-xs sm:text-sm font-body">
              {NAV_ITEMS.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-slate-600 hover:text-blue-600 dark:text-slate-400 dark:hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Services */}
          <div>
            <h4 className="font-heading font-bold text-slate-900 dark:text-white text-sm mb-4">Services</h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-400 font-body">
              <li>Grocery Doorstep Delivery</li>
              <li>Emergency Medicines</li>
              <li>Custom Shop Orders</li>
              <li>Quick Bike Ride Booking</li>
              <li>Rider / Captain Onboarding</li>
              <li>Merchant Shop Registration</li>
            </ul>
          </div>

          {/* Col 5: Contact & Badges */}
          <div>
            <h4 className="font-heading font-bold text-slate-900 dark:text-white text-sm mb-4">Contact &amp; App</h4>
            <div className="space-y-3 text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-body mb-6">
              <a
                href={`mailto:${APP_CONFIG.email}`}
                className="flex items-center gap-2 text-slate-600 hover:text-blue-600 dark:text-slate-400 dark:hover:text-white transition-colors break-all"
              >
                <Mail className="w-4 h-4 text-blue-500 dark:text-blue-400 flex-shrink-0" />
                <span>{APP_CONFIG.email}</span>
              </a>
              <a
                href={`tel:${APP_CONFIG.phone}`}
                className="flex items-center gap-2 text-slate-600 hover:text-blue-600 dark:text-slate-400 dark:hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4 text-emerald-500 dark:text-emerald-400 flex-shrink-0" />
                <span>{APP_CONFIG.phoneDisplay}</span>
              </a>
              <div className="flex items-start gap-2 text-slate-600 dark:text-slate-400">
                <MapPin className="w-4 h-4 text-rose-500 dark:text-rose-400 flex-shrink-0 mt-0.5" />
                <span>{APP_CONFIG.location}</span>
              </div>
            </div>

            {/* App Badges */}
            <div className="flex flex-col gap-2">
              <a
                href={APP_CONFIG.playStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block hover:opacity-90 transition-opacity"
              >
                <Image
                  src="/google-play-badge.svg"
                  alt="Get ClickDeliver on Google Play"
                  width={140}
                  height={42}
                  className="h-[38px] w-auto"
                  unoptimized
                />
              </a>
              <a
                href={APP_CONFIG.appStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block hover:opacity-90 transition-opacity"
              >
                <Image
                  src="/app-store-badge.svg"
                  alt="Download ClickDeliver on the App Store"
                  width={140}
                  height={42}
                  className="h-[38px] w-auto"
                  unoptimized
                />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom copyright bar */}
        <div className="pt-8 border-t border-slate-200 dark:border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-400 font-body">
          <p>
            &copy; {new Date().getFullYear()} {APP_CONFIG.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-1 text-slate-500 dark:text-slate-400">
            <span>Made with</span>
            <Heart className="w-3.5 h-3.5 fill-rose-500 text-rose-500 inline mx-0.5" />
            <span>for Alipur Chattha, Pakistan</span>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}
