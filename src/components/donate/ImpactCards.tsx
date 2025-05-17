import React from 'react';
import { motion } from 'framer-motion';
import { Utensils, Users, Calendar } from 'lucide-react';
import { fadeIn, staggerChildren } from '../../utils/animations';

const impactCards = [
  {
    id: 1,
    title: '₹100',
    description: 'Provides meals for 2 people',
    icon: <Utensils className="w-8 h-8 text-primary-500" />
  },
  {
    id: 2,
    title: '₹500',
    description: 'Feeds 10 hospital attendants',
    icon: <Users className="w-8 h-8 text-primary-500" />
  },
  {
    id: 3,
    title: '₹5,000',
    description: 'Sponsors a full day of meals',
    icon: <Calendar className="w-8 h-8 text-primary-500" />
  }
];

const ImpactCards: React.FC = () => {
  return (
    <motion.div 
      className="grid grid-cols-1 sm:grid-cols-3 gap-6"
      variants={staggerChildren}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      {impactCards.map((card, index) => (
        <motion.div 
          key={card.id} 
          className="card text-center"
          variants={fadeIn}
          transition={{ delay: index * 0.1 }}
        >
          <div className="flex justify-center mb-4">
            {card.icon}
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">{card.title}</h3>
          <p className="text-gray-600">{card.description}</p>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default ImpactCards;