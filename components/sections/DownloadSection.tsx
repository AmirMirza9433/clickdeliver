"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { APP_INFO } from "@/lib/constants";
import {
  staggerContainer,
  staggerItem,
  slideLeft,
  slideRight,
} from "@/lib/animations";

export function DownloadSection() {
  return (
    <SectionWrapper id="download" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-brand-primary/5 to-blue-600/5 rounded-2xl" />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="relative z-10"
      >
        <motion.div variants={staggerItem} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">
            Download Now — FREE hai
          </h2>
          <p className="text-lg text-gray-400">
            Available on Android. iOS coming soon!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left: Store Buttons */}
          <motion.div variants={slideLeft} className="space-y-6">
            <h3 className="text-2xl font-heading font-semibold text-white mb-8">
              Download ClickDeliver
            </h3>

            {/* Play Store Button */}
            <a
              href={APP_INFO.playStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-brand-surface border border-brand-border rounded-xl p-4 hover:border-brand-primary transition-all cursor-pointer group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-black rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="white"
                      strokeWidth="2"
                      className="w-8 h-8"
                    >
                      <path d="M17 8l4-4m0 0l-4-4m4 4v12m0 4H5a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2v14a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400">Get it on</p>
                    <p className="text-lg font-heading font-semibold text-white group-hover:text-brand-primary transition-colors">
                      Google Play
                    </p>
                  </div>
                </div>
              </motion.div>
            </a>

            {/* App Store Button */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-brand-surface border border-brand-border rounded-xl p-4 cursor-not-allowed opacity-60"
            >
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-black rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg viewBox="0 0 24 24" fill="white" className="w-8 h-8">
                    <path d="M18 2h-3V1h-2v1h-4V1H7v1H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 16H4V7h14v11z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-gray-400">Coming Soon on</p>
                  <p className="text-lg font-heading font-semibold text-gray-400">
                    Apple App Store
                  </p>
                </div>
              </div>
            </motion.div>

            <p className="text-sm text-gray-500 pt-4 border-t border-brand-border">
              Requirements: Android 8.0 or later
            </p>
          </motion.div>

          {/* Right: QR Code */}
          <motion.div
            variants={slideRight}
            className="flex flex-col items-center"
          >
            <div className="bg-white p-4 rounded-2xl mb-6 border-4 border-brand-primary shadow-2xl shadow-brand-primary/50">
              <div className="w-48 h-48 bg-brand-surface rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <p className="text-2xl mb-2">📱</p>
                  <p className="text-xs text-gray-400">QR Code</p>
                </div>
              </div>
            </div>
            <p className="text-gray-400 font-body text-center max-w-xs">
              Scan this QR code with your phone camera and download instantly
            </p>
          </motion.div>
        </div>
      </motion.div>
    </SectionWrapper>
  );
}
