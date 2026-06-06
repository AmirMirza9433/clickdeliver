'use client';

import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';
import { staggerItem } from '@/lib/animations';

interface Props {
  number: string;
  title: string;
  description: string;
  icon: string;
}

export function StepCard({ number, title, description, icon }: Props) {
  const IconComponent = (Icons as any)[icon];

  return (
    <motion.div
      variants={staggerItem}
      className="flex flex-col items-center text-center"
    >
      <div className="relative mb-6">
        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-brand-primary to-blue-600 flex items-center justify-center shadow-lg shadow-brand-primary/50">
          <span className="font-heading font-bold text-2xl text-white">
            {number}
          </span>
        </div>
        <div className="absolute -right-2 -bottom-2 w-6 h-6 rounded-full bg-brand-success flex items-center justify-center">
          {IconComponent && (
            <IconComponent className="w-4 h-4 text-white" />
          )}
        </div>
      </div>
      <h3 className="font-heading text-xl font-semibold text-white mb-2">
        {title}
      </h3>
      <p className="text-sm text-gray-400 max-w-xs leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
}
