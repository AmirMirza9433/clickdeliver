"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Play } from "lucide-react";
import { APP_INFO } from "@/lib/constants";
import { staggerContainer, staggerItem, slideRight } from "@/lib/animations";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Animated Background Orbs */}
      <div className="absolute inset-0">
        <div className="absolute bottom-10 -right-32 w-96 h-96 bg-brand-primary/10 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute top-20 -left-32 w-64 h-64 bg-blue-600/5 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,transparent_1px,rgba(61,130,246,0.03)_1px),linear-gradient(to_bottom,transparent_1px,rgba(61,130,246,0.03)_1px)] bg-[size:40px_40px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="z-10"
        >
          <motion.div
            variants={staggerItem}
            className="inline-block px-4 py-2 rounded-full bg-brand-surface border border-brand-border mb-6"
          >
            <span className="text-xs font-heading font-semibold text-brand-primary">
              🚀 Now Available in Alipur Chattha
            </span>
          </motion.div>

          <motion.h1
            variants={staggerItem}
            className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-white mb-4 leading-tight"
          >
            Delivery or Ride
            <br />
            <span className="bg-gradient-to-r from-brand-primary to-blue-500 bg-clip-text text-transparent">
              dono asan.
            </span>
          </motion.h1>

          <motion.p
            variants={staggerItem}
            className="text-lg text-gray-400 mb-8 max-w-xl leading-relaxed"
          >
            Grocery, medicine, food, custom items — sab kuch aapke darwaze tak.
            Ride booking bhi available! Real-time tracking, in-app chat,
            multiple payment options.
          </motion.p>

          <motion.div
            variants={staggerItem}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href={APP_INFO.playStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-lg bg-gradient-to-r from-brand-primary to-blue-600 text-white font-heading font-semibold hover:shadow-lg hover:shadow-brand-primary/50 transition-all duration-300 hover:scale-105"
            >
              Download App
              <ArrowRight className="w-5 h-5" />
            </a>
            <button className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-lg border border-brand-border text-white font-heading font-semibold hover:bg-brand-surface transition-all duration-300 hover:border-brand-primary group">
              <Play className="w-5 h-5 group-hover:text-brand-primary transition-colors" />
              Watch Demo
            </button>
          </motion.div>
        </motion.div>

        {/* Right - Phone Mockup */}
        <motion.div
          variants={slideRight}
          initial="hidden"
          animate="visible"
          className="relative h-[500px] lg:h-[600px] flex items-center justify-center"
        >
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="relative w-64 h-96 lg:w-80 lg:h-[500px]"
          >
            {/* Phone Frame */}
            <div className="absolute inset-0 bg-gradient-to-br from-brand-surface to-black rounded-3xl border border-brand-border p-3 shadow-2xl shadow-brand-primary/30">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-black rounded-b-2xl z-20" />
              <div className="w-full h-full rounded-2xl bg-gradient-to-br from-brand-primary/20 to-blue-600/20 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-brand-primary via-transparent to-blue-600 opacity-30" />
                <div className="relative z-10 flex flex-col items-center justify-center">
                  <Image
                    src="/logo.gif"
                    alt="ClickDeliver Logo"
                    width={120}
                    height={120}
                    className="w-[120px] h-[120px] object-contain mb-3 rounded-[10px]"
                    unoptimized
                  />
                  <div className="text-lg font-heading font-bold text-brand-primary">
                    ClickDeliver
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <motion.div
              animate={{ x: [0, 10, 0], rotate: [0, 5, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -top-8 -right-8 w-20 h-20 bg-brand-primary/20 rounded-2xl border border-brand-primary/50 flex items-center justify-center"
            >
              <span className="text-2xl">📦</span>
            </motion.div>
            <motion.div
              animate={{ x: [0, -10, 0], rotate: [0, -5, 0] }}
              transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
              className="absolute -bottom-8 -left-8 w-20 h-20 bg-blue-600/20 rounded-2xl border border-blue-600/50 flex items-center justify-center"
            >
              <span className="text-2xl">🛵</span>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
