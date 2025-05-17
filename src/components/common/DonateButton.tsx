import React from 'react';
import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';
import { motion } from 'framer-motion';
import { buttonHover } from '../../utils/animations';

interface DonateButtonProps {
  className?: string;
  large?: boolean;
}

const DonateButton: React.FC<DonateButtonProps> = ({ className = '', large = false }) => {
  return (
    <motion.div
      whileHover={buttonHover}
      className={className}
    >
      <Link 
        to="/donate" 
        className={`btn-primary flex items-center ${large ? 'px-8 py-4 text-base' : ''}`}
      >
        <Heart className="mr-2" size={large ? 20 : 16} />
        Donate Now
      </Link>
    </motion.div>
  );
};

export default DonateButton;