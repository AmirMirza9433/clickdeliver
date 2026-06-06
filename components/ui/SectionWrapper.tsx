'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { fadeUp } from '@/lib/animations';

interface Props {
  id?: string;
  className?: string;
  children: ReactNode;
  noAnimation?: boolean;
}

export function SectionWrapper({
  id,
  className = '',
  children,
  noAnimation = false,
}: Props) {
  const content = (
    <section
      id={id}
      className={`px-4 sm:px-6 lg:px-8 py-20 lg:py-28 max-w-7xl mx-auto ${className}`}
    >
      {children}
    </section>
  );

  if (noAnimation) return content;

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeUp}
    >
      {content}
    </motion.div>
  );
}
