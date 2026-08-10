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
            Available on Android &amp; iOS
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left: Store Badges */}
          <motion.div variants={slideLeft} className="space-y-6">
            <h3 className="text-2xl font-heading font-semibold text-white mb-8">
              Download ClickDeliver
            </h3>

            {/* Google Play Badge */}
            <a
              href={APP_INFO.playStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-fit"
              id="download-google-play"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="transition-all duration-200"
              >
                <Image
                  src="/google-play-badge.svg"
                  alt="Get it on Google Play"
                  width={200}
                  height={60}
                  className="h-[60px] w-auto"
                  unoptimized
                />
              </motion.div>
            </a>

            {/* App Store Badge */}
            <a
              href={APP_INFO.appStoreUrl === "#" ? undefined : APP_INFO.appStoreUrl}
              target={APP_INFO.appStoreUrl === "#" ? undefined : "_blank"}
              rel="noopener noreferrer"
              className={`block w-fit ${APP_INFO.appStoreUrl === "#" ? "opacity-50 cursor-not-allowed pointer-events-none" : ""}`}
              id="download-app-store"
              aria-disabled={APP_INFO.appStoreUrl === "#"}
            >
              <motion.div
                whileHover={APP_INFO.appStoreUrl !== "#" ? { scale: 1.05 } : {}}
                whileTap={APP_INFO.appStoreUrl !== "#" ? { scale: 0.97 } : {}}
                className="relative transition-all duration-200"
              >
                <Image
                  src="/app-store-badge.svg"
                  alt="Download on the App Store"
                  width={200}
                  height={60}
                  className="h-[60px] w-auto"
                  unoptimized
                />
                {APP_INFO.appStoreUrl === "#" && (
                  <span className="absolute -top-2 -right-2 bg-brand-primary text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                    Soon
                  </span>
                )}
              </motion.div>
            </a>

            <p className="text-sm text-gray-500 pt-4 border-t border-brand-border">
              Requirements: Android 8.0 or later · iOS 13 or later
            </p>
          </motion.div>

          {/* Right: Two QR Codes */}
          <motion.div
            variants={slideRight}
            className="flex flex-col items-center gap-6"
          >
            <p className="text-sm font-heading font-semibold text-gray-400 tracking-widest uppercase">
              Scan to Download
            </p>

            <div className="flex gap-6 items-start">
              {/* Android QR */}
              <div className="flex flex-col items-center gap-3">
                <div className="bg-white p-3 rounded-2xl border-4 border-brand-primary shadow-2xl shadow-brand-primary/40">
                  <Image
                    src="/qr-android.png"
                    alt="Android QR Code"
                    width={144}
                    height={144}
                    className="w-36 h-36 rounded-lg"
                    unoptimized
                  />
                </div>
                <div className="flex items-center gap-1.5">
                  <Image
                    src="/google-play-badge.svg"
                    alt="Google Play"
                    width={80}
                    height={24}
                    className="h-5 w-auto opacity-80"
                    unoptimized
                  />
                </div>
              </div>

              {/* Divider */}
              <div className="w-px bg-brand-border self-stretch mt-4" />

              {/* iOS QR */}
              <div className="flex flex-col items-center gap-3">
                <div className="bg-white p-3 rounded-2xl border-4 border-gray-300 shadow-2xl shadow-gray-500/20 relative">
                  <div className="absolute -top-2 -right-2 bg-brand-primary text-white text-[10px] font-bold px-2 py-0.5 rounded-full z-10">
                    Soon
                  </div>
                  {/* TODO: Replace src with actual iOS QR image once provided */}
                  <div className="w-36 h-36 bg-gray-100 rounded-lg flex items-center justify-center opacity-50">
                    <div className="text-center">
                      <p className="text-3xl mb-1">🍎</p>
                      <p className="text-[11px] text-gray-500 font-medium">iOS QR</p>
                    </div>
                  </div>
                  {/* Once user provides QR, replace the div above with:
                  <Image src="/qr-ios.png" alt="iOS QR Code" width={144} height={144} className="w-36 h-36 rounded-lg" /> */}
                </div>
                <div className="flex items-center gap-1.5">
                  <Image
                    src="/app-store-badge.svg"
                    alt="App Store"
                    width={80}
                    height={24}
                    className="h-5 w-auto opacity-50"
                    unoptimized
                  />
                </div>
              </div>
            </div>

            <p className="text-gray-500 font-body text-center text-sm max-w-xs">
              Apne phone ka camera QR pe point karo — seedha download ho ga
            </p>
          </motion.div>
        </div>
      </motion.div>
    </SectionWrapper>
  );
}
