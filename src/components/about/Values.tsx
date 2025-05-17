import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Users, Shield, Award, ArrowRight } from 'lucide-react';
import SectionTitle from '../common/SectionTitle';
import { fadeIn, staggerChildren } from '../../utils/animations';

const values = [
  {
    id: 1,
    icon: <Heart className="w-8 h-8 text-white" />,
    title: 'Compassion',
    description: 'We serve with kindness and empathy, recognizing the dignity in every person.',
  },
  {
    id: 2,
    icon: <Users className="w-8 h-8 text-white" />,
    title: 'Community',
    description: 'We believe in the power of people coming together to support those in need.',
  },
  {
    id: 3,
    icon: <Shield className="w-8 h-8 text-white" />,
    title: 'Integrity',
    description: 'We operate with transparency and accountability in all our actions.',
  },
  {
    id: 4,
    icon: <Award className="w-8 h-8 text-white" />,
    title: 'Excellence',
    description: 'We strive for the highest quality in our service and food preparation.',
  },
];

const Values: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-secondary-600 to-primary-600 text-white">
      <div className="container-custom">
        <SectionTitle 
          title="Our Core Values" 
          subtitle="What We Believe In"
          centered
          light
        />
        
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={staggerChildren}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {values.map((value) => (
            <motion.div 
              key={value.id} 
              className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6 border border-white border-opacity-20"
              variants={fadeIn}
              whileHover={{ y: -5, transition: { duration: 0.3 } }}
            >
              <div className="bg-primary-500 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                {value.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
              <p className="text-primary-50 mb-4">{value.description}</p>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="mt-16 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeIn}
        >
          <p className="text-lg max-w-3xl mx-auto mb-8">
            These values guide every aspect of our work, from how we prepare and serve meals to 
            how we engage with our community of volunteers, donors, and the people we serve.
          </p>
          
          <motion.a 
            href="/contact"
            className="inline-flex items-center font-medium text-white hover:text-primary-200 transition-colors"
            whileHover={{ x: 5 }}
            transition={{ duration: 0.2 }}
          >
            Join us in our mission <ArrowRight className="ml-2 w-5 h-5" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Values;