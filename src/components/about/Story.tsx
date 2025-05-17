import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../common/SectionTitle';
import { fadeIn, slideInLeft, slideInRight } from '../../utils/animations';

const Story: React.FC = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <SectionTitle 
          title="Our Story" 
          subtitle="The Beginning"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={slideInLeft}
          >
            <p className="text-lg text-gray-700 mb-6">
              NavShiv Foundation began three years ago when our founder, Naveen Shivam, witnessed 
              the struggles of patient families at PGI Chandigarh. Many traveled from distant villages 
              and couldn't afford regular meals while staying with their loved ones at the hospital.
            </p>
            
            <p className="text-lg text-gray-700 mb-6">
              What started as a simple act of bringing homemade food for a few families quickly grew 
              into an organized weekend service. Word spread, volunteers joined, and local businesses 
              began contributing.
            </p>
            
            <p className="text-lg text-gray-700">
              Today, NavShiv Foundation serves over 1,500 meals every weekend, bringing not just 
              nourishment but also hope and comfort to those facing difficult times. Our simple 
              mission remains unchanged: no one at PGI should go hungry while caring for their loved ones.
            </p>
          </motion.div>
          
          <motion.div 
            className="relative"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={slideInRight}
          >
            <div className="rounded-xl overflow-hidden shadow-xl">
              <img 
                src="https://images.pexels.com/photos/6647035/pexels-photo-6647035.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750" 
                alt="NavShiv Foundation volunteers" 
                className="w-full h-auto"
              />
            </div>
            
            {/* Decorative element */}
            <div className="absolute -z-10 -bottom-6 -right-6 w-full h-full border-4 border-primary-300 rounded-xl"></div>
          </motion.div>
        </div>
        
        {/* Timeline */}
        <motion.div 
          className="mt-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeIn}
        >
          <h3 className="text-2xl font-semibold text-center mb-12">Our Journey</h3>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary-200"></div>
            
            {/* Timeline items */}
            <div className="space-y-16">
              {/* Item 1 */}
              <div className="relative">
                <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-primary-500 rounded-full"></div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="md:text-right md:pr-10">
                    <h4 className="text-xl font-semibold text-primary-500">2022</h4>
                    <h5 className="text-lg font-medium mb-2">Foundation Established</h5>
                    <p className="text-gray-700">NavShiv Foundation is officially registered as a non-profit organization with an initial team of 5 volunteers.</p>
                  </div>
                  <div className="md:pl-10"></div>
                </div>
              </div>
              
              {/* Item 2 */}
              <div className="relative">
                <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-primary-500 rounded-full"></div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="md:pr-10"></div>
                  <div className="md:pl-10">
                    <h4 className="text-xl font-semibold text-primary-500">2023</h4>
                    <h5 className="text-lg font-medium mb-2">Expanded Services</h5>
                    <p className="text-gray-700">Expanded from serving 100 meals to 500 meals per weekend and established relationships with local restaurants and food suppliers.</p>
                  </div>
                </div>
              </div>
              
              {/* Item 3 */}
              <div className="relative">
                <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-primary-500 rounded-full"></div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="md:text-right md:pr-10">
                    <h4 className="text-xl font-semibold text-primary-500">2024</h4>
                    <h5 className="text-lg font-medium mb-2">Community Recognition</h5>
                    <p className="text-gray-700">Received community service award from Chandigarh Municipal Corporation and grew to a team of 200+ volunteers serving 1,500+ meals weekly.</p>
                  </div>
                  <div className="md:pl-10"></div>
                </div>
              </div>
              
              {/* Item 4 */}
              <div className="relative">
                <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-primary-500 rounded-full"></div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="md:pr-10"></div>
                  <div className="md:pl-10">
                    <h4 className="text-xl font-semibold text-primary-500">2025</h4>
                    <h5 className="text-lg font-medium mb-2">Future Vision</h5>
                    <p className="text-gray-700">Planning to expand services to additional hospitals in Chandigarh and launch a nutrition education program for underprivileged communities.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Story;