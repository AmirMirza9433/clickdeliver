'use client';

import React, { useRef, useState, useEffect } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { BentoFeature } from '@/data/features';
import {
  ShoppingBag,
  Bike,
  Sparkles,
  Compass,
  MessagesSquare,
  Wallet,
  CheckCircle2,
} from 'lucide-react';
import { MOTION_EASE } from '@/lib/motion';

const iconMap: Record<string, any> = {
  ShoppingBag,
  Bike,
  Sparkles,
  Compass,
  MessagesSquare,
  Wallet,
};

interface BentoCardProps {
  feature: BentoFeature;
  index: number;
}

export function BentoCard({ feature, index }: BentoCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current || isMobile) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const Icon = iconMap[feature.iconName] || Sparkles;

  // Alternating entry:
  // Mobile: from bottom (y: 45)
  // Desktop: left column from left (x: -50), right column from right (x: 50)
  const isLeft = index % 2 === 0;
  const initialX = shouldReduceMotion ? 0 : isMobile ? 0 : isLeft ? -50 : 50;
  const initialY = shouldReduceMotion ? 0 : isMobile ? 45 : 0;

  return (
    <motion.div
      ref={cardRef}
      initial={{
        opacity: 0,
        x: initialX,
        y: initialY,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
      }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: shouldReduceMotion ? 0.3 : 0.65,
        delay: shouldReduceMotion ? 0 : (index % 3) * 0.1,
        ease: MOTION_EASE,
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={shouldReduceMotion ? {} : { y: -8 }}
      className={`relative rounded-3xl p-6 sm:p-8 bg-slate-900/60 border border-white/10 backdrop-blur-xl overflow-hidden group transition-all duration-300 hover:border-blue-500/40 hover:shadow-2xl hover:shadow-blue-500/10 ${feature.colSpanDesktop}`}
    >
      {/* Dynamic Cursor Glow Border following pointer */}
      {!isMobile && (
        <div
          className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            background: isHovered
              ? `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, rgba(56, 123, 240, 0.3), transparent 70%)`
              : undefined,
          }}
        />
      )}

      {/* Ambient Corner Mesh Soft Glow */}
      <div
        className={`absolute -top-20 -right-20 w-52 h-52 rounded-full bg-gradient-to-br ${feature.accentColor} blur-2xl pointer-events-none group-hover:scale-125 transition-transform duration-500`}
      />

      <div className="relative z-10 flex flex-col h-full justify-between">
        <div>
          {/* Badge & Icon Row */}
          <div className="flex items-center justify-between gap-4 mb-6">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-[11px] font-heading font-semibold bg-white/5 border border-white/10 text-blue-300 tracking-wide">
              {feature.badge}
            </span>
            {/* Icon rotate and scale on hover */}
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-600/30 to-blue-500/10 border border-blue-500/30 text-blue-400 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 group-hover:text-white group-hover:border-blue-400 group-hover:shadow-lg group-hover:shadow-blue-500/20">
              <Icon className="w-6 h-6 transition-transform duration-300 group-hover:scale-110" />
            </div>
          </div>

          {/* Heading */}
          <h3 className="text-xl sm:text-2xl font-heading font-bold text-white mb-3 tracking-tight group-hover:text-blue-200 transition-colors">
            {feature.title}
          </h3>

          {/* Description */}
          <p className="text-sm sm:text-base text-slate-300 font-body leading-relaxed mb-4">
            {feature.description}
          </p>

          <p className="text-xs text-blue-400/90 font-heading font-medium mb-6">
            {feature.subtext}
          </p>
        </div>

        {/* Highlight Bullets */}
        <div className="pt-4 border-t border-white/10 flex flex-wrap gap-2 sm:gap-3">
          {feature.highlights.map((h, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-1.5 text-xs text-slate-300 bg-white/5 px-2.5 py-1 rounded-lg border border-white/5"
            >
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              <span>{h}</span>
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
