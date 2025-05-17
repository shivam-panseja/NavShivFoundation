import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import SectionTitle from '../common/SectionTitle';
import { TestimonialType } from '../../types';
import { fadeIn, scaleUp } from '../../utils/animations';

const testimonials: TestimonialType[] = [
  {
    id: '1',
    name: 'Amit Kumar',
    role: 'Patient\'s Relative',
    content: 'During my mother\'s treatment at PGI, the regular meals from NavShiv Foundation were a blessing. Their volunteers not only provided food but also emotional support during a difficult time.',
    image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=300'
  },
  {
    id: '2',
    name: 'Dr. Neha Sharma',
    role: 'PGI Staff Doctor',
    content: 'The dedication of NavShiv volunteers is remarkable. They ensure that patients and attendants receive nutritious meals regularly, which significantly helps in the recovery process.',
    image: 'https://images.pexels.com/photos/5214959/pexels-photo-5214959.jpeg?auto=compress&cs=tinysrgb&w=300'
  },
  {
    id: '3',
    name: 'Ranjit Singh',
    role: 'Regular Volunteer',
    content: 'Being part of NavShiv Foundation has been a life-changing experience. The joy on people\'s faces when we serve them food is something I look forward to every weekend.',
    image: 'https://images.pexels.com/photos/3777943/pexels-photo-3777943.jpeg?auto=compress&cs=tinysrgb&w=300'
  }
];

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <SectionTitle 
          title="Testimonials" 
          subtitle="What People Say"
          centered
        />
        
        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="relative bg-gray-50 p-8 md:p-12 rounded-xl shadow-soft"
            key={currentTestimonial.id}
            variants={scaleUp}
            initial="hidden"
            animate="visible"
          >
            <Quote className="absolute text-primary-200 w-20 h-20 -top-6 -left-6 opacity-50" />
            
            <div className="relative">
              <motion.p 
                className="text-lg md:text-xl text-gray-700 italic mb-8 relative z-10"
                variants={fadeIn}
                initial="hidden"
                animate="visible"
              >
                "{currentTestimonial.content}"
              </motion.p>
              
              <motion.div 
                className="flex items-center"
                variants={fadeIn}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.2 }}
              >
                <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
                  <img 
                    src={currentTestimonial.image} 
                    alt={currentTestimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">{currentTestimonial.name}</h4>
                  <p className="text-gray-600">{currentTestimonial.role}</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
          
          <div className="flex justify-center mt-8 space-x-4">
            <button 
              onClick={prevTestimonial}
              className="p-2 rounded-full bg-gray-200 hover:bg-primary-200 transition-colors duration-300"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6 text-gray-700" />
            </button>
            <button 
              onClick={nextTestimonial}
              className="p-2 rounded-full bg-gray-200 hover:bg-primary-200 transition-colors duration-300"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6 text-gray-700" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;