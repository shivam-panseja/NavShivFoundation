import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { fadeIn } from '../../utils/animations';

const LocationMap: React.FC = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={fadeIn}
    >
      <div className="rounded-xl overflow-hidden shadow-soft mb-8">
        <iframe
          title="NavShiv Foundation Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d109744.05905959044!2d76.68782790845052!3d30.732043642578777!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fed0be66db92f%3A0xa9c22e43f6832c16!2sPGI%20Hospital!5e0!3m2!1sen!2sin!4v1658999999999!5m2!1sen!2sin"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      
      <div className="bg-white rounded-xl shadow-soft p-6">
        <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
        
        <div className="space-y-4">
          <div className="flex items-start">
            <MapPin className="text-primary-500 mr-3 mt-1 flex-shrink-0" size={20} />
            <div>
              <p className="font-medium">Address</p>
              <p className="text-gray-600">123 Sector 16, Chandigarh, 160015, India</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <Phone className="text-primary-500 mr-3 mt-1 flex-shrink-0" size={20} />
            <div>
              <p className="font-medium">Phone</p>
              <a 
                href="tel:+911234567890" 
                className="text-gray-600 hover:text-primary-500 transition-colors"
              >
                +91 123 456 7890
              </a>
            </div>
          </div>
          
          <div className="flex items-start">
            <Mail className="text-primary-500 mr-3 mt-1 flex-shrink-0" size={20} />
            <div>
              <p className="font-medium">Email</p>
              <a 
                href="mailto:info@navshivfoundation.org" 
                className="text-gray-600 hover:text-primary-500 transition-colors"
              >
                info@navshivfoundation.org
              </a>
            </div>
          </div>
          
          <div className="flex items-start">
            <Clock className="text-primary-500 mr-3 mt-1 flex-shrink-0" size={20} />
            <div>
              <p className="font-medium">Food Service Hours</p>
              <p className="text-gray-600">Saturday & Sunday: 11:00 AM - 2:00 PM</p>
              <p className="text-gray-600">Office Hours: Mon-Fri, 10:00 AM - 6:00 PM</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default LocationMap;