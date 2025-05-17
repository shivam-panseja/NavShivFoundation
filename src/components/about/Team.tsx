import React from 'react';
import { motion } from 'framer-motion';
import { Facebook, Instagram, Linkedin } from 'lucide-react';
import SectionTitle from '../common/SectionTitle';
import { TeamMember } from '../../types';
import { fadeIn, staggerChildren } from '../../utils/animations';

const teamMembers: TeamMember[] = [
  {
    id: '1',
    name: 'Naveen Shivam',
    role: 'Founder & President',
    image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=300'
  },
  {
    id: '2',
    name: 'Anjali Gupta',
    role: 'Operations Director',
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300'
  },
  {
    id: '3',
    name: 'Rajiv Sharma',
    role: 'Volunteer Coordinator',
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300'
  },
  {
    id: '4',
    name: 'Priya Malhotra',
    role: 'Fundraising Manager',
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=300'
  }
];

const Team: React.FC = () => {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <SectionTitle 
          title="Meet Our Team" 
          subtitle="The People Behind Our Mission"
          centered
        />
        
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={staggerChildren}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {teamMembers.map((member) => (
            <motion.div 
              key={member.id} 
              className="card overflow-hidden group"
              variants={fadeIn}
            >
              <div className="relative overflow-hidden mb-4">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-64 object-cover object-center transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-primary-500 bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
                
                {/* Social media links */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex space-x-3">
                    <a 
                      href="#" 
                      className="bg-white p-2 rounded-full hover:bg-primary-500 hover:text-white transition-colors duration-300"
                      aria-label={`${member.name}'s Facebook`}
                    >
                      <Facebook size={18} />
                    </a>
                    <a 
                      href="#" 
                      className="bg-white p-2 rounded-full hover:bg-primary-500 hover:text-white transition-colors duration-300"
                      aria-label={`${member.name}'s Instagram`}
                    >
                      <Instagram size={18} />
                    </a>
                    <a 
                      href="#" 
                      className="bg-white p-2 rounded-full hover:bg-primary-500 hover:text-white transition-colors duration-300"
                      aria-label={`${member.name}'s LinkedIn`}
                    >
                      <Linkedin size={18} />
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Team;