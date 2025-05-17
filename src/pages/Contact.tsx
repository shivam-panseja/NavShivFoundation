import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../components/common/SectionTitle';
import ContactForm from '../components/contact/ContactForm';
import LocationMap from '../components/contact/LocationMap';
import { fadeIn } from '../utils/animations';

const Contact: React.FC = () => {
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
              title="Contact Us" 
              subtitle="Get in Touch"
              centered
            />
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <ContactForm />
            <LocationMap />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;