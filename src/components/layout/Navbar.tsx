import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Heart, Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        <Link 
          to="/" 
          className="flex items-center"
          onClick={closeMenu}
        >
          <Heart 
            className="text-primary-500 mr-2" 
            size={32} 
            strokeWidth={2.5} 
          />
          <span className="font-heading font-bold text-xl sm:text-2xl text-gray-900">
            NavShiv <span className="text-primary-500">Foundation</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          <NavLink 
            to="/" 
            className={({ isActive }) => 
              `font-medium text-base transition-colors duration-200 ${
                isActive ? 'text-primary-500' : 'text-gray-700 hover:text-primary-500'
              }`
            }
          >
            Home
          </NavLink>
          <NavLink 
            to="/about" 
            className={({ isActive }) => 
              `font-medium text-base transition-colors duration-200 ${
                isActive ? 'text-primary-500' : 'text-gray-700 hover:text-primary-500'
              }`
            }
          >
            About
          </NavLink>
          <NavLink 
            to="/gallery" 
            className={({ isActive }) => 
              `font-medium text-base transition-colors duration-200 ${
                isActive ? 'text-primary-500' : 'text-gray-700 hover:text-primary-500'
              }`
            }
          >
            Gallery
          </NavLink>
          <NavLink 
            to="/contact" 
            className={({ isActive }) => 
              `font-medium text-base transition-colors duration-200 ${
                isActive ? 'text-primary-500' : 'text-gray-700 hover:text-primary-500'
              }`
            }
          >
            Contact
          </NavLink>
          <Link 
            to="/donate" 
            className="btn-primary"
          >
            Donate Now
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <motion.div 
        className={`md:hidden absolute top-full left-0 w-full bg-white shadow-lg py-5 ${isOpen ? 'block' : 'hidden'}`}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : -10 }}
        transition={{ duration: 0.3 }}
      >
        <div className="container-custom flex flex-col space-y-4">
          <NavLink 
            to="/" 
            className={({ isActive }) => 
              `font-medium text-lg py-2 ${
                isActive ? 'text-primary-500' : 'text-gray-700'
              }`
            }
            onClick={closeMenu}
          >
            Home
          </NavLink>
          <NavLink 
            to="/about" 
            className={({ isActive }) => 
              `font-medium text-lg py-2 ${
                isActive ? 'text-primary-500' : 'text-gray-700'
              }`
            }
            onClick={closeMenu}
          >
            About
          </NavLink>
          <NavLink 
            to="/gallery" 
            className={({ isActive }) => 
              `font-medium text-lg py-2 ${
                isActive ? 'text-primary-500' : 'text-gray-700'
              }`
            }
            onClick={closeMenu}
          >
            Gallery
          </NavLink>
          <NavLink 
            to="/contact" 
            className={({ isActive }) => 
              `font-medium text-lg py-2 ${
                isActive ? 'text-primary-500' : 'text-gray-700'
              }`
            }
            onClick={closeMenu}
          >
            Contact
          </NavLink>
          <Link 
            to="/donate" 
            className="btn-primary self-start"
            onClick={closeMenu}
          >
            Donate Now
          </Link>
        </div>
      </motion.div>
    </header>
  );
};

export default Navbar;