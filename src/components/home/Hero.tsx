import React from 'react';
import { motion } from 'framer-motion';
import { slideInLeft, slideInRight } from '../../utils/animations';
import DonateButton from '../common/DonateButton';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-24 pb-20 md:pt-32 md:pb-32 overflow-hidden bg-gradient-to-r from-primary-50 to-secondary-50">
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={slideInLeft}
          >
            <span className="inline-block text-primary-600 font-medium mb-4">
              Serving Food & Compassion
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Nourishing Lives at 
              <span className="text-primary-500"> PGI Chandigarh</span>
            </h1>
            <p className="text-lg text-gray-700 mb-8 max-w-lg">
              NavShiv Foundation is dedicated to providing nutritious meals to patients and their families
              at PGI Chandigarh hospital every weekend, spreading hope and comfort.
            </p>
            <div className="flex flex-wrap gap-4">
              <DonateButton large />
              <motion.a 
                href="#our-mission" 
                className="btn-outline"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                Learn More
              </motion.a>
            </div>
          </motion.div>
          
          <motion.div
            initial="hidden"
            animate="visible"
            variants={slideInRight}
            className="relative"
          >
            <div className="relative rounded-xl overflow-hidden shadow-xl">
              <img 
                src="https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750" 
                alt="Volunteers serving food" 
                className="w-full h-auto rounded-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>
            
            {/* Floating stats card */}
            <motion.div 
              className="absolute -bottom-10 -left-10 bg-white p-5 rounded-lg shadow-lg"
              animate={{ y: [0, -10, 0] }}
              transition={{ 
                repeat: Infinity, 
                repeatType: "reverse", 
                duration: 5 
              }}
            >
              <p className="text-4xl font-bold text-primary-500">3,000+</p>
              <p className="text-gray-700">Meals served weekly</p>
            </motion.div>
            
            {/* Decorative elements */}
            <div className="absolute -z-10 top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2">
              <div className="w-64 h-64 rounded-full bg-primary-200/50 blur-3xl"></div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute -z-10 top-0 right-0 w-1/3 h-1/3">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full opacity-20">
          <path fill="#FF7E36" d="M41.7,-65.4C54.9,-56.9,67.1,-47.2,74.9,-33.7C82.7,-20.3,86.2,-3,82,12.1C77.8,27.1,65.8,39.9,52.5,47.8C39.1,55.7,24.4,58.7,9.7,62.2C-5.1,65.8,-19.9,69.9,-31.9,65.5C-43.9,61.1,-53.2,48.2,-61.8,34.4C-70.4,20.5,-78.4,5.6,-77.7,-9.1C-77,-23.8,-67.5,-38.3,-55.4,-47.6C-43.2,-56.8,-28.3,-60.8,-14.4,-64.4C-0.5,-68,13.5,-71.2,26.2,-70.4C38.9,-69.5,50.2,-64.7,61.5,-56.3C72.7,-47.9,83.8,-35.8,84.5,-23.6C85.2,-11.4,75.4,0.9,65.7,9.6C56,18.3,46.4,23.6,37.7,24.8C29,26,21.3,23.1,16.3,23.1C11.3,23.1,9,25.9,4.7,31.6C0.4,37.2,-6,45.5,-11.2,45.8C-16.5,46.1,-20.6,38.3,-26,33.1C-31.4,27.9,-39,25.2,-40.1,19.6C-41.2,14,-35.8,5.5,-31.9,-1.1C-27.9,-7.7,-25.6,-12.3,-23,-22.5C-20.5,-32.7,-17.7,-48.4,-10.1,-61.1C-2.6,-73.7,9.7,-83.3,21.6,-82.7C33.5,-82.1,45,-74.3,51.2,-64.1C57.4,-53.9,58.3,-41.3,58.7,-29.8C59.1,-18.3,59,-7.9,57,1.2C55,10.3,51.1,18.3,47.3,30.2C43.5,42.1,39.9,57.9,30.8,66.4C21.7,74.9,7.1,76.2,-3.9,71.8C-14.9,67.5,-22.3,57.5,-32.3,50.8C-42.3,44.1,-54.9,40.8,-63.6,32.3C-72.4,23.8,-77.3,10.1,-76.2,-3.1C-75,-16.2,-67.8,-28.8,-60,-40.8C-52.2,-52.8,-43.9,-64.3,-32.7,-72.9C-21.6,-81.5,-7.7,-87.2,4.6,-84.7C16.9,-82.3,28.5,-73.8,41.7,-65.4Z" transform="translate(100 100)" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;