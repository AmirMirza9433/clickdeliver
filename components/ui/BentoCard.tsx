"use client";
import { motion, useReducedMotion } from "framer-motion";
import { BentoFeature } from "@/data/features";
import {
  ShoppingBag,
  Bike,
  Sparkles,
  Compass,
  MessagesSquare,
  Wallet,
  Check,
} from "lucide-react";
import { Reveal } from "@/components/animations/Reveal";
const icons = { ShoppingBag, Bike, Sparkles, Compass, MessagesSquare, Wallet };
export function BentoCard({
  feature,
  index,
}: {
  feature: BentoFeature;
  index: number;
}) {
  const Icon = icons[feature.iconName as keyof typeof icons] || Sparkles;
  const reduced = useReducedMotion();
  return (
    <Reveal delay={(index % 3) * 0.08} className={feature.colSpanDesktop}>
      <motion.article
        whileHover={reduced ? undefined : { y: -5 }}
        transition={{ duration: 0.2 }}
        className="feature-card h-full flex flex-col"
      >
        <div className="flex items-center justify-between mb-6">
          <span className="w-11 h-11 rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-300 flex items-center justify-center">
            <Icon size={22} />
          </span>
          <span className="text-[9px] uppercase tracking-[.12em] text-slate-500 dark:text-slate-400">
            {feature.badge}
          </span>
        </div>
        <h3 className="font-heading mb-3">{feature.title}</h3>
        <p className="text-slate-600 dark:text-slate-300 mb-3">
          {feature.description}
        </p>
        <p className="text-blue-700 dark:text-blue-300 mb-6">
          {feature.subtext}
        </p>
        <div className="flex flex-wrap gap-x-4 gap-y-2 border-t border-slate-200 dark:border-white/10 pt-4 mt-auto">
          {feature.highlights.map((item) => (
            <span
              key={item}
              className="flex items-center gap-1.5 text-[10px] text-slate-600 dark:text-slate-300"
            >
              <Check size={12} className="text-blue-600 dark:text-blue-400" />
              {item}
            </span>
          ))}
        </div>
      </motion.article>
    </Reveal>
  );
}
