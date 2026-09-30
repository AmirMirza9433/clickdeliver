'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { APP_CONFIG } from '@/data/siteConfig';
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Send,
  Sparkles,
  MessageSquare,
  CheckCircle2,
  ChevronDown,
  ArrowUpRight,
} from 'lucide-react';
import { TikTokIcon } from '@/components/ui/icons/TikTokIcon';
import { toast } from 'sonner';

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    role: 'customer',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const roleLabels: Record<string, string> = {
    customer: 'Customer Inquiry / Order Help',
    rider: 'Join as Rider / Captain',
    shopkeeper: 'Register Shop / Merchant Partnership',
    feedback: 'Suggestions / Feedback',
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const messageText = `*ClickDeliver Website Inquiry*\n\n👤 *Naam:* ${formData.name}\n📱 *Phone:* ${formData.phone}\n🎯 *Maqsad:* ${roleLabels[formData.role] || formData.role}\n\n💬 *Message:*\n${formData.message}`;
    const cleanPhone = APP_CONFIG.phone.replace(/[^0-9]/g, '');
    const whatsappUrl = `https://wa.me/${cleanPhone}?text=${encodeURIComponent(messageText)}`;

    if (typeof window !== 'undefined') {
      window.open(whatsappUrl, '_blank');
    }

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      toast.success('Message WhatsApp par open ho gaya hai!');
    }, 500);
  };

  const contactCards = [
    {
      icon: Phone,
      title: 'Call & WhatsApp',
      value: APP_CONFIG.phoneDisplay,
      href: `tel:${APP_CONFIG.phone}`,
      actionLabel: 'Call Now',
    },
    {
      icon: Mail,
      title: 'Email Support',
      value: APP_CONFIG.email,
      href: `mailto:${APP_CONFIG.email}`,
      actionLabel: 'Send Email',
    },
    {
      icon: MapPin,
      title: 'Operating Hub',
      value: APP_CONFIG.address,
      href: '#',
      actionLabel: 'Alipur Chattha',
    },
  ];

  return (
    <section id="contact" className="relative py-20 lg:py-28 overflow-hidden">
      {/* Background Accent */}
      <div className="absolute left-1/2 -bottom-20 -translate-x-1/2 w-[700px] h-[350px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-tag"
          >
            <MessageSquare className="w-3.5 h-3.5 text-blue-400" />
            <span>Always Connected</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-heading"
          >
            Hamse Rabta Karein &mdash;{' '}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              24/7 Local Support
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-subheading"
          >
            Kisi bhi mushkil, rider registration ya shopkeeper partnership ke liye hamse direct rabta karein.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Direct Contact Info & Socials */}
          <div className="lg:col-span-5 space-y-6">
            {contactCards.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.a
                  key={item.title}
                  href={item.href}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex items-start gap-4 p-5 rounded-3xl bg-slate-900/60 border border-white/10 backdrop-blur-xl hover:border-blue-500/40 hover:bg-slate-900/90 transition-all duration-300 group shadow-lg"
                >
                  <div className="w-12 h-12 rounded-2xl bg-blue-500/10 text-blue-400 border border-blue-500/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <p className="text-xs font-heading font-semibold text-slate-400">
                        {item.title}
                      </p>
                      <span className="text-[11px] font-heading font-medium text-blue-400 group-hover:underline">
                        {item.actionLabel}
                      </span>
                    </div>
                    <p className="text-base font-heading font-bold text-white mt-1 break-words">
                      {item.value}
                    </p>
                  </div>
                </motion.a>
              );
            })}

            {/* Social Channels */}
            <div className="p-6 rounded-3xl bg-slate-900/60 border border-white/10 backdrop-blur-xl">
              <h4 className="text-sm font-heading font-bold text-white mb-4">
                Follow ClickDeliver on Socials
              </h4>
              <div className="flex gap-3">
                {[
                  {
                    icon: Facebook,
                    href: APP_CONFIG.socials.facebook,
                    name: 'Facebook',
                    color: 'hover:text-blue-500 hover:border-blue-500',
                  },
                  {
                    icon: Instagram,
                    href: APP_CONFIG.socials.instagram,
                    name: 'Instagram',
                    color: 'hover:text-pink-500 hover:border-pink-500',
                  },
                  {
                    icon: TikTokIcon,
                    href: APP_CONFIG.socials.tiktok,
                    name: 'TikTok',
                    color: 'hover:text-cyan-400 hover:border-cyan-400',
                  },
                ].map((s) => {
                  const SIcon = s.icon;
                  return (
                    <a
                      key={s.name}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 transition-all duration-300 hover:scale-110 ${s.color}`}
                      aria-label={s.name}
                    >
                      <SIcon className="w-5 h-5" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Quick Inquiries / Rider Form */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="rounded-3xl p-6 sm:p-10 bg-slate-900/80 border border-white/10 backdrop-blur-2xl shadow-2xl shadow-blue-500/10"
            >
              <h3 className="text-2xl font-heading font-bold text-white mb-2">
                Hamein Direct Message Bhejein
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 font-body mb-6">
                Chaahe rider banna ho, shopkeeper partner banna ho ya koi feedback dena ho.
              </p>

              {isSubmitted ? (
                <div className="p-8 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-emerald-500 text-white flex items-center justify-center mb-3 shadow-lg shadow-emerald-500/30">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-heading font-bold text-white mb-1">
                    Message WhatsApp Par Bhej Diya Gaya!
                  </h4>
                  <p className="text-xs text-emerald-300 max-w-md mx-auto mb-5 leading-relaxed">
                    Aapka message hamare official WhatsApp number <strong className="text-white font-bold">{APP_CONFIG.phoneDisplay}</strong> par forward ho chuka hai. ClickDeliver team jald hi aap se rabta karegi.
                  </p>
                  <div className="flex flex-wrap gap-3 justify-center">
                    <a
                      href={`https://wa.me/${APP_CONFIG.phone.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(
                        `*ClickDeliver Website Inquiry*\n\n👤 *Naam:* ${formData.name}\n📱 *Phone:* ${formData.phone}\n🎯 *Maqsad:* ${roleLabels[formData.role] || formData.role}\n\n💬 *Message:*\n${formData.message}`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-heading font-bold flex items-center gap-2 transition-all shadow-lg shadow-emerald-500/25"
                    >
                      <span>Open in WhatsApp</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                    <button
                      type="button"
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData({ name: '', phone: '', role: 'customer', message: '' });
                      }}
                      className="px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-white text-xs font-heading font-semibold transition-all"
                    >
                      Naya Message Bhejein
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-heading font-semibold text-slate-300 mb-1.5">
                        Aapka Naam
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Muhammad Ali"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-blue-500 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-heading font-semibold text-slate-300 mb-1.5">
                        Mobile Number / WhatsApp
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="0300 1234567"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-blue-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-heading font-semibold text-slate-300 mb-1.5">
                      Aapka Maqsad
                    </label>
                    <div className="relative">
                      <select
                        value={formData.role}
                        onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                        className="w-full px-4 py-3 pr-10 rounded-xl bg-slate-900 border border-white/10 text-white text-sm appearance-none focus:outline-none focus:border-blue-500 transition-colors cursor-pointer"
                      >
                        <option value="customer" className="bg-slate-900 text-white">Customer Inquiry / Order Help</option>
                        <option value="rider" className="bg-slate-900 text-white">Join as Rider / Captain</option>
                        <option value="shopkeeper" className="bg-slate-900 text-white">Register Shop / Merchant Partnership</option>
                        <option value="feedback" className="bg-slate-900 text-white">Suggestions / Feedback</option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3.5 text-blue-400">
                        <ChevronDown className="w-4 h-4" />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-heading font-semibold text-slate-300 mb-1.5">
                      Message ya Detail
                    </label>
                    <textarea
                      rows={3}
                      required
                      placeholder="Apna sawal ya message yahan likhein..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-blue-500 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white font-heading font-bold text-sm shadow-lg shadow-blue-500/25 flex items-center justify-center gap-2 transition-all duration-300 hover:-translate-y-0.5"
                  >
                    <span>{isSubmitting ? 'Bhej rahe hain...' : 'Message Send Karein'}</span>
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
