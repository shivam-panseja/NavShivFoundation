import React, { ReactNode } from 'react';
import { motion, Variants } from 'framer-motion';
import { fadeIn } from '../../utils/animations';

interface AnimatedElementProps {
  children: ReactNode;
  variants?: Variants;
  delay?: number;
  className?: string;
}

const AnimatedElement: React.FC<AnimatedElementProps> = ({ 
  children, 
  variants = fadeIn, 
  delay = 0,
  className = ''
}) => {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={variants}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedElement;