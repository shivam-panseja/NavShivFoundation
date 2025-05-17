import React from 'react';
import { motion } from 'framer-motion';
import { Contributor } from '../../types';
import SectionTitle from './SectionTitle';
import { fadeIn, staggerChildren } from '../../utils/animations';

const contributors: Contributor[] = [
  {
    id: '1',
    name: 'Raj Sharma',
    role: 'Major Donor',
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300'
  },
  {
    id: '2',
    name: 'Priya Malhotra',
    role: 'Regular Volunteer',
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300'
  },
  {
    id: '3',
    name: 'Vikram Singh',
    role: 'Corporate Partner',
    image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=300'
  },
  {
    id: '4',
    name: 'Anita Patel',
    role: 'Food Donor',
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=300'
  }
];

const Contributors: React.FC = () => {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <SectionTitle 
          title="Our Contributors" 
          subtitle="People Making a Difference"
          centered
        />
        
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={staggerChildren}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {contributors.map((contributor) => (
            <motion.div 
              key={contributor.id}
              className="card text-center"
              variants={fadeIn}
            >
              <div className="w-24 h-24 mx-auto mb-4 overflow-hidden rounded-full">
                <img 
                  src={contributor.image} 
                  alt={contributor.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-1">{contributor.name}</h3>
              <p className="text-gray-600">{contributor.role}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Contributors;