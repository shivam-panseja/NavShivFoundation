import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Mail, MapPin, Phone, Instagram, Facebook, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* About Section */}
          <div>
            <div className="flex items-center mb-5">
              <Heart className="text-primary-500 mr-2" size={28} />
              <span className="font-heading font-bold text-xl">
                NavShiv <span className="text-primary-500">Foundation</span>
              </span>
            </div>
            <p className="text-gray-400 mb-5">
              Dedicated to serving humanity through food service at PGI Chandigarh hospital. 
              Join us in our mission to spread compassion and care.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary-500 transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary-500 transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary-500 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading text-lg font-semibold mb-5 text-white">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link 
                  to="/" 
                  className="text-gray-400 hover:text-primary-500 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  to="/about" 
                  className="text-gray-400 hover:text-primary-500 transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link 
                  to="/gallery" 
                  className="text-gray-400 hover:text-primary-500 transition-colors"
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link 
                  to="/contact" 
                  className="text-gray-400 hover:text-primary-500 transition-colors"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link 
                  to="/donate" 
                  className="text-gray-400 hover:text-primary-500 transition-colors"
                >
                  Donate
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-heading text-lg font-semibold mb-5 text-white">Our Activities</h3>
            <ul className="space-y-3">
              <li className="text-gray-400">Food Distribution</li>
              <li className="text-gray-400">Patient Support</li>
              <li className="text-gray-400">Community Outreach</li>
              <li className="text-gray-400">Volunteer Opportunities</li>
              <li className="text-gray-400">Donation Drives</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-heading text-lg font-semibold mb-5 text-white">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="text-primary-500 mr-3 mt-1 flex-shrink-0" size={18} />
                <span className="text-gray-400">
                  123 Sector 16, Chandigarh, 160015, India
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="text-primary-500 mr-3 flex-shrink-0" size={18} />
                <a 
                  href="tel:+911234567890" 
                  className="text-gray-400 hover:text-primary-500 transition-colors"
                >
                  +91 123 456 7890
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="text-primary-500 mr-3 flex-shrink-0" size={18} />
                <a 
                  href="mailto:info@navshivfoundation.org" 
                  className="text-gray-400 hover:text-primary-500 transition-colors"
                >
                  info@navshivfoundation.org
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} NavShiv Foundation. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;