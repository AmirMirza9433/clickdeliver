'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Facebook, Instagram, Youtube, Music2 } from 'lucide-react';
import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { APP_INFO, SOCIAL_LINKS } from '@/lib/constants';
import { staggerContainer, staggerItem } from '@/lib/animations';

export function ContactSection() {
  const contacts = [
    {
      icon: Mail,
      title: 'Email',
      value: APP_INFO.email,
      href: `mailto:${APP_INFO.email}`,
    },
    {
      icon: Phone,
      title: 'Phone',
      value: APP_INFO.phone,
      href: `tel:${APP_INFO.phone}`,
    },
    {
      icon: MapPin,
      title: 'Location',
      value: APP_INFO.location,
      href: '#',
    },
  ];

  const socialLinks = [
    { icon: Facebook, href: SOCIAL_LINKS.facebook, label: 'Facebook' },
    { icon: Instagram, href: SOCIAL_LINKS.instagram, label: 'Instagram' },
    { icon: Youtube, href: SOCIAL_LINKS.youtube, label: 'YouTube' },
    { icon: Music2, href: SOCIAL_LINKS.tiktok, label: 'TikTok' },
  ];

  return (
    <SectionWrapper id="contact">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div variants={staggerItem} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">
            Hamse miliye
          </h2>
          <p className="text-lg text-gray-400">
            Kisi sawal ya suggestion ke liye contact karo
          </p>
        </motion.div>

        {/* Contact Cards */}
        <motion.div
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
        >
          {contacts.map((contact, index) => {
            const Icon = contact.icon;
            return (
              <motion.a
                key={index}
                variants={staggerItem}
                href={contact.href}
                whileHover={{ y: -8 }}
                className="bg-brand-surface border border-brand-border rounded-xl p-6 hover:border-brand-primary transition-all duration-300 group cursor-pointer text-center"
              >
                <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-brand-primary to-blue-600 flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg group-hover:shadow-brand-primary/50 transition-all">
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-heading font-semibold text-white mb-2">
                  {contact.title}
                </h3>
                <p className="text-sm text-gray-400 break-all group-hover:text-gray-300 transition-colors">
                  {contact.value}
                </p>
              </motion.a>
            );
          })}
        </motion.div>

        {/* Social Links */}
        <motion.div variants={staggerItem} className="text-center">
          <h3 className="text-xl font-heading font-semibold text-white mb-6">
            Follow us on social media
          </h3>
          <div className="flex justify-center gap-4 flex-wrap">
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="w-12 h-12 rounded-lg bg-brand-surface border border-brand-border hover:bg-brand-primary hover:border-brand-primary flex items-center justify-center transition-all duration-300 group"
                >
                  <Icon className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors" />
                </motion.a>
              );
            })}
          </div>
        </motion.div>
      </motion.div>
    </SectionWrapper>
  );
}
