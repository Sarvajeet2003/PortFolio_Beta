import React from 'react';
import { motion } from 'framer-motion';

interface SectionContainerProps {
  id: string;
  children: React.ReactNode;
  className?: string;
  hasBg?: boolean;
}

export const SectionContainer = ({ 
  id, 
  children, 
  className = "", 
  hasBg = false 
}: SectionContainerProps) => {
  return (
    <section 
      id={id} 
      className={`py-20 px-4 ${hasBg ? 'bg-default-50' : ''} ${className}`}
    >
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="container mx-auto max-w-4xl"
      >
        {children}
      </motion.div>
    </section>
  );
};