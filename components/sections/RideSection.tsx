"use client";

import { motion } from "framer-motion";
import { MapPin, Clock, DollarSign } from "lucide-react";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { staggerContainer, staggerItem } from "@/lib/animations";

export function RideSection() {
  const features = [
    { icon: MapPin, text: "Apni location se pickup" },
    { icon: DollarSign, text: "Affordable rates" },
    { icon: Clock, text: "Real-time GPS tracking" },
  ];

  return (
    <SectionWrapper className="bg-gradient-to-r from-brand-primary/10 to-blue-600/10 rounded-2xl border border-brand-border">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div variants={staggerItem} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">
            Delivery nahi — Ride chahiye?
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            ClickDeliver sirf delivery nahi, ride bhi deta hai
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Features */}
          <motion.div variants={staggerItem} className="space-y-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-4 p-4 rounded-lg bg-brand-surface hover:bg-brand-border transition-colors"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-brand-primary to-blue-600 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-gray-300 font-body">
                    {feature.text}
                  </span>
                </motion.div>
              );
            })}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="space-y-4 mt-8 pt-8 border-t border-brand-border"
            >
              <div className="flex justify-between items-center">
                <span className="text-gray-400 font-body">Average Time:</span>
                <span className="text-brand-primary font-heading font-semibold">
                  8-12 minutes
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-400 font-body">Average Cost:</span>
                <span className="text-brand-primary font-heading font-semibold">
                  Rs. 60-150
                </span>
              </div>
            </motion.div>
          </motion.div>

          {/* Illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="relative"
          >
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-brand-primary/20 to-blue-600/20 border border-brand-primary/30 relative overflow-hidden">
              {/* Map Grid Background */}
              <svg
                className="absolute inset-0 w-full h-full"
                viewBox="0 0 400 400"
              >
                <defs>
                  <pattern
                    id="grid"
                    width="50"
                    height="50"
                    patternUnits="userSpaceOnUse"
                  >
                    <path
                      d="M 50 0 L 0 0 0 50"
                      fill="none"
                      stroke="rgba(59, 130, 246, 0.1)"
                      strokeWidth="1"
                    />
                  </pattern>
                </defs>
                <rect width="400" height="400" fill="url(#grid)" />

                {/* Route Line */}
                <motion.path
                  d="M 80 320 Q 200 160, 320 80"
                  stroke="#3b82f6"
                  strokeWidth="3"
                  fill="none"
                  strokeDasharray="500"
                  initial={{ strokeDashoffset: 500 }}
                  whileInView={{ strokeDashoffset: 0 }}
                  transition={{ duration: 2 }}
                />

                {/* Start Pin */}
                <text
                  x="80"
                  y="320"
                  fontSize="28"
                  textAnchor="middle"
                  dominantBaseline="middle"
                >
                  📍
                </text>

                {/* End Pin */}
                <text
                  x="320"
                  y="80"
                  fontSize="28"
                  textAnchor="middle"
                  dominantBaseline="middle"
                >
                  📍
                </text>

                {/* Rider - animates along the path */}
              </svg>

              {/* Bike overlay for better visibility */}
              <motion.div
                className="absolute text-4xl z-20"
                animate={{
                  left: ["20%", "50%", "78%"],
                  top: ["77%", "40%", "20%"],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                🛵
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </SectionWrapper>
  );
}
