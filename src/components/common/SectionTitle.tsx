import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../../utils/animations';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ 
  title, 
  subtitle, 
  centered = false,
  light = false
}) => {
  return (
    <motion.div 
      className={`mb-12 ${centered ? 'text-center' : ''}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={fadeIn}
    >
      {subtitle && (
        <span className={`inline-block text-sm font-medium uppercase tracking-wider mb-2 ${
          light ? 'text-primary-400' : 'text-primary-500'
        }`}>
          {subtitle}
        </span>
      )}
      <h2 className={`font-heading font-bold relative pb-4 ${
        light ? 'text-white' : 'text-gray-900'
      }`}>
        {title}
        <span className="absolute bottom-0 left-0 h-1 w-20 bg-primary-500 rounded-full"></span>
      </h2>
    </motion.div>
  );
};

export default SectionTitle;