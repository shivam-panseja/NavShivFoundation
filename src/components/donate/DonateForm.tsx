import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, ChevronDown, ChevronUp, Check } from 'lucide-react';
import { fadeIn } from '../../utils/animations';
import { DonationDetails, initializeRazorpay } from '../../utils/razorpay';

const presetAmounts = [100, 500, 1000, 5000];

const DonateForm: React.FC = () => {
  const [amount, setAmount] = useState<number | string>('');
  const [customAmount, setCustomAmount] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    anonymous: false,
  });
  const [showSuccess, setShowSuccess] = useState(false);

  const handleAmountSelect = (value: number) => {
    setAmount(value);
    setCustomAmount(false);
  };

  const handleCustomAmount = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (/^\d*$/.test(value)) {
      setAmount(value === '' ? '' : parseInt(value));
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (typeof amount !== 'number' || amount < 1) {
      alert('Please enter a valid donation amount');
      return;
    }

    const donationDetails: DonationDetails = {
      amount: Number(amount),
      name: formData.name,
      email: formData.email,
      phone: formData.phone
    };

    try {
      await initializeRazorpay(
        donationDetails,
        (payment_id) => {
          console.log('Payment successful:', payment_id);
          setShowSuccess(true);
          
          // Reset form
          setAmount('');
          setFormData({
            name: '',
            email: '',
            phone: '',
            anonymous: false,
          });
          
          // Hide success message after 5 seconds
          setTimeout(() => {
            setShowSuccess(false);
          }, 5000);
        },
        (error) => {
          console.error('Payment failed:', error);
          alert('Payment failed. Please try again.');
        }
      );
    } catch (error) {
      console.error('Error initializing Razorpay:', error);
      alert('Could not initialize payment. Please try again later.');
    }
  };

  return (
    <motion.div 
      className="bg-white rounded-xl shadow-soft"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={fadeIn}
    >
      {showSuccess ? (
        <div className="p-8 text-center">
          <div className="w-20 h-20 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Check className="text-accent-600" size={40} />
          </div>
          <h3 className="text-2xl font-semibold mb-2">Thank You for Your Donation!</h3>
          <p className="text-gray-600 mb-6">
            Your generosity helps us continue our mission of serving meals to those in need at PGI Chandigarh Hospital.
          </p>
          <button
            onClick={() => setShowSuccess(false)}
            className="btn-primary"
          >
            Make Another Donation
          </button>
        </div>
      ) : (
        <div className="p-8">
          <h3 className="text-2xl font-semibold mb-6">Make a Donation</h3>
          
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <label className="block text-gray-700 mb-2">
                Select Amount (₹)
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4">
                {presetAmounts.map((value) => (
                  <button
                    key={value}
                    type="button"
                    onClick={() => handleAmountSelect(value)}
                    className={`py-3 rounded-lg border font-medium transition-all ${
                      amount === value
                        ? 'bg-primary-500 text-white border-primary-500'
                        : 'bg-gray-50 text-gray-700 border-gray-200 hover:bg-gray-100'
                    }`}
                  >
                    ₹{value}
                  </button>
                ))}
              </div>
              
              <div className="flex items-center mb-4">
                <button
                  type="button"
                  onClick={() => setCustomAmount(!customAmount)}
                  className="flex items-center text-primary-500 font-medium"
                >
                  {customAmount ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                  <span className="ml-1">Custom Amount</span>
                </button>
              </div>
              
              {customAmount && (
                <div className="mb-4">
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500">₹</span>
                    <input
                      type="text"
                      value={amount}
                      onChange={handleCustomAmount}
                      className="w-full pl-8 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="Enter amount"
                    />
                  </div>
                </div>
              )}
            </div>
            
            <div className="mb-5">
              <label htmlFor="name" className="block text-gray-700 mb-2">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                placeholder="John Doe"
              />
            </div>
            
            <div className="mb-5">
              <label htmlFor="email" className="block text-gray-700 mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                placeholder="john@example.com"
              />
            </div>
            
            <div className="mb-5">
              <label htmlFor="phone" className="block text-gray-700 mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                placeholder="+91 98765 43210"
              />
            </div>
            
            <div className="mb-6 flex items-center">
              <input
                type="checkbox"
                id="anonymous"
                name="anonymous"
                checked={formData.anonymous}
                onChange={handleChange}
                className="w-4 h-4 text-primary-500 rounded focus:ring-primary-500"
              />
              <label htmlFor="anonymous" className="ml-2 text-gray-700">
                Make my donation anonymous
              </label>
            </div>
            
            <button
              type="submit"
              className="btn-primary w-full flex items-center justify-center"
              disabled={!amount}
            >
              <Heart size={18} className="mr-2" />
              Donate Now
            </button>
          </form>
        </div>
      )}
    </motion.div>
  );
};

export default DonateForm;