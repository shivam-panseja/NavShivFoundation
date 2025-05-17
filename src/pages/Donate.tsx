import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../components/common/SectionTitle';
import DonateForm from '../components/donate/DonateForm';
import ImpactCards from '../components/donate/ImpactCards';
import { fadeIn } from '../utils/animations';

const Donate: React.FC = () => {
  return (
    <div className="pt-20">
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeIn}
          >
            <SectionTitle 
              title="Make a Donation" 
              subtitle="Support Our Cause"
              centered
            />
            
            <div className="max-w-3xl mx-auto text-center mb-12">
              <p className="text-lg text-gray-700">
                Your donation helps us provide nutritious meals to patients and their families at PGI Chandigarh Hospital.
                Every contribution makes a difference, no matter how small.
              </p>
            </div>
          </motion.div>
          
          <div className="mb-16">
            <ImpactCards />
          </div>
          
          <div className="max-w-2xl mx-auto">
            <DonateForm />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Donate;