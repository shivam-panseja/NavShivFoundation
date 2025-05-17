import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../common/SectionTitle';
import { fadeIn } from '../../utils/animations';

const impactStats = [
  { value: '50,000+', label: 'Meals Served' },
  { value: '5,000+', label: 'Families Supported' },
  { value: '200+', label: 'Regular Volunteers' },
  { value: '3', label: 'Years of Service' },
];

const Impact: React.FC = () => {
  return (
    <section className="py-20 bg-primary-500 text-white">
      <div className="container-custom">
        <SectionTitle 
          title="Our Impact" 
          subtitle="Making a Difference"
          centered
          light
        />
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {impactStats.map((stat, index) => (
            <motion.div 
              key={index} 
              className="p-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={fadeIn}
              transition={{ delay: index * 0.1 }}
            >
              <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ 
                  duration: 0.5,
                  delay: index * 0.1 + 0.2,
                }}
                className="mb-4"
              >
                <span className="text-4xl md:text-5xl lg:text-6xl font-bold">{stat.value}</span>
              </motion.div>
              <p className="text-lg text-primary-100">{stat.label}</p>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="mt-16 max-w-3xl mx-auto text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeIn}
        >
          <p className="text-xl text-primary-50 italic">
            "Our goal is not just to feed people, but to nourish their spirits. Each meal is served with 
            dignity and compassion, knowing that small acts of kindness can make a big difference in 
            someone's healing journey."
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Impact;