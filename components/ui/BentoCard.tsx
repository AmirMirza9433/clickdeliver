'use client';

import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
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

const iconMap: Record<string, any> = {
  ShoppingBag,
  Bike,
  Sparkles,
  Compass,
  MessagesSquare,
  Wallet,
};

export function BentoCard({ feature }: { feature: BentoFeature }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const Icon = iconMap[feature.iconName] || Sparkles;

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className={`relative rounded-3xl p-6 sm:p-8 bg-slate-900/60 border border-white/10 backdrop-blur-xl overflow-hidden group transition-all duration-300 ${feature.colSpanDesktop}`}
    >
      {/* Dynamic Cursor Glow Border following pointer */}
      <div
        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: isHovered
            ? `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, rgba(56, 123, 240, 0.25), transparent 70%)`
            : undefined,
        }}
      />

      {/* Ambient Corner Mesh */}
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
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-600/30 to-blue-500/10 border border-blue-500/30 text-blue-400 flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:text-white group-hover:border-blue-400 shadow-md">
              <Icon className="w-6 h-6 transition-transform duration-300 group-hover:rotate-6" />
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
