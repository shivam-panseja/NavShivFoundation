import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { GalleryImage } from '../../types';
import SectionTitle from '../common/SectionTitle';
import { fadeIn, staggerChildren } from '../../utils/animations';

const galleryImages: GalleryImage[] = [
  {
    id: '1',
    src: 'https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=600',
    alt: 'Volunteers serving food',
    category: 'volunteers'
  },
  {
    id: '2',
    src: 'https://images.pexels.com/photos/6647035/pexels-photo-6647035.jpeg?auto=compress&cs=tinysrgb&w=600',
    alt: 'Food preparation',
    category: 'food'
  },
  {
    id: '3',
    src: 'https://images.pexels.com/photos/6647037/pexels-photo-6647037.jpeg?auto=compress&cs=tinysrgb&w=600',
    alt: 'Community meal',
    category: 'events'
  },
  {
    id: '4',
    src: 'https://images.pexels.com/photos/6590920/pexels-photo-6590920.jpeg?auto=compress&cs=tinysrgb&w=600',
    alt: 'Meal packaging',
    category: 'food'
  },
  {
    id: '5',
    src: 'https://images.pexels.com/photos/6590775/pexels-photo-6590775.jpeg?auto=compress&cs=tinysrgb&w=600',
    alt: 'Team meeting',
    category: 'volunteers'
  },
  {
    id: '6',
    src: 'https://images.pexels.com/photos/6647229/pexels-photo-6647229.jpeg?auto=compress&cs=tinysrgb&w=600',
    alt: 'Food distribution',
    category: 'events'
  },
  {
    id: '7',
    src: 'https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=600',
    alt: 'Volunteer group photo',
    category: 'volunteers'
  },
  {
    id: '8',
    src: 'https://images.pexels.com/photos/6592363/pexels-photo-6592363.jpeg?auto=compress&cs=tinysrgb&w=600',
    alt: 'Cooking preparation',
    category: 'food'
  }
];

const categories = ['all', 'volunteers', 'food', 'events'];

const GalleryGrid: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  const filteredImages = selectedCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <SectionTitle 
          title="Our Gallery" 
          subtitle="Moments of Service"
          centered
        />
        
        {/* Category filters */}
        <div className="flex justify-center mb-10">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedCategory === category
                    ? 'bg-primary-500 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </div>
        
        {/* Gallery grid */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={staggerChildren}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {filteredImages.map((image) => (
            <motion.div 
              key={image.id}
              className="overflow-hidden rounded-lg shadow-md cursor-pointer group"
              variants={fadeIn}
              onClick={() => setSelectedImage(image)}
              whileHover={{ y: -5, transition: { duration: 0.3 } }}
            >
              <div className="aspect-w-4 aspect-h-3 relative overflow-hidden">
                <img 
                  src={image.src} 
                  alt={image.alt}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-primary-500 bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                  <span className="text-white font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    View Image
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Image modal */}
        {selectedImage && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-4xl w-full"
              onClick={e => e.stopPropagation()}
            >
              <button 
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 text-white hover:text-primary-300 font-bold text-xl focus:outline-none"
              >
                ✕
              </button>
              <img 
                src={selectedImage.src} 
                alt={selectedImage.alt}
                className="w-full h-auto max-h-[80vh] object-contain"
              />
              <p className="text-white text-center mt-4">{selectedImage.alt}</p>
            </motion.div>
          </div>
        )}
      </div>
    </section>
  );
};

export default GalleryGrid;