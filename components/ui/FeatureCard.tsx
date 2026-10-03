'use client';

import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';
import * as Icons from 'lucide-react';
import { staggerItem } from '@/lib/animations';

interface Props {
  icon: string;
  title: string;
  description: string;
}

export function FeatureCard({ icon, title, description }: Props) {
  const IconComponent = (Icons as any)[icon];

  return (
    <motion.div
      variants={staggerItem}
      whileHover={{ y: -6, transition: { duration: 0.2 } }}
      className="group relative p-6 rounded-xl bg-brand-surface border border-brand-border hover:border-brand-primary transition-[border-color,box-shadow] duration-200 cursor-pointer overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/0 to-brand-primary/0 group-hover:from-brand-primary/5 group-hover:to-brand-primary/10 transition-all duration-300" />
      <div className="relative z-10">
        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-brand-primary to-blue-600 flex items-center justify-center mb-4 group-hover:shadow-lg group-hover:shadow-brand-primary/50 transition-all duration-300">
          {IconComponent && <IconComponent className="w-6 h-6 text-white" />}
        </div>
        <h3 className="font-heading text-lg font-semibold text-white mb-2">
          {title}
        </h3>
        <p className="text-sm text-gray-400 leading-relaxed">
          {description}
        </p>
      </div>
    </motion.div>
  );
}
