import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Users, Calendar, Star } from 'lucide-react';
import SectionTitle from '../common/SectionTitle';
import { fadeIn, staggerChildren } from '../../utils/animations';

const features = [
  {
    id: 1,
    icon: <Heart className="w-8 h-8 text-primary-500" />,
    title: 'Compassionate Care',
    description: 'We provide nutritious meals made with love and care to patients and their families.',
  },
  {
    id: 2,
    icon: <Calendar className="w-8 h-8 text-primary-500" />,
    title: 'Weekly Service',
    description: 'Our dedicated team serves meals every Saturday and Sunday at PGI Chandigarh.',
  },
  {
    id: 3,
    icon: <Users className="w-8 h-8 text-primary-500" />,
    title: 'Volunteer Community',
    description: 'Join our growing community of volunteers who dedicate their time to serving others.',
  },
  {
    id: 4,
    icon: <Star className="w-8 h-8 text-primary-500" />,
    title: 'Quality Assurance',
    description: 'We maintain high standards of hygiene and nutrition in every meal we serve.',
  },
];

const Mission: React.FC = () => {
  return (
    <section id="our-mission" className="section-padding bg-white">
      <div className="container-custom">
        <SectionTitle 
          title="Our Mission" 
          subtitle="Why We Serve"
          centered
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <motion.div 
              className="relative rounded-xl overflow-hidden shadow-lg"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeIn}
            >
              <img 
                src="https://images.pexels.com/photos/6647037/pexels-photo-6647037.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750" 
                alt="Food serving at hospital" 
                className="w-full h-auto"
              />
              
              {/* Decorative patterns */}
              <div className="absolute -z-10 -bottom-10 -left-10">
                <div className="w-40 h-40 border-8 border-primary-200 rounded-xl"></div>
              </div>
            </motion.div>
          </div>
          
          <div>
            <motion.p 
              className="text-lg text-gray-700 mb-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeIn}
            >
              NavShiv Foundation was established with a simple yet powerful mission: to provide comfort
              through nourishment to those in need. We believe that a warm meal can bring hope during
              difficult times, especially for patients and families at PGI Chandigarh who are focused
              on healing.
            </motion.p>
            
            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-2 gap-6"
              variants={staggerChildren}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
            >
              {features.map((feature) => (
                <motion.div 
                  key={feature.id}
                  className="p-5 bg-gray-50 rounded-lg"
                  variants={fadeIn}
                >
                  <div className="mb-3">{feature.icon}</div>
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;