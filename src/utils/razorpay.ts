// This is a simplified Razorpay implementation for demo purposes
// In a production environment, you would need a backend to handle payment verification

export interface DonationDetails {
  amount: number;
  name: string;
  email: string;
  phone: string;
}

declare global {
  interface Window {
    Razorpay: any;
  }
}

export const loadRazorpayScript = (): Promise<boolean> => {
  return new Promise((resolve) => {
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });
};

export const initializeRazorpay = async (
  donationDetails: DonationDetails,
  onSuccess: (payment_id: string) => void,
  onError: (error: any) => void
) => {
  const scriptLoaded = await loadRazorpayScript();
  
  if (!scriptLoaded) {
    alert('Razorpay SDK failed to load. Check your internet connection.');
    return;
  }
  
  // In a real implementation, this would come from your backend
  const options = {
    key: 'rzp_test_YourTestKeyHere', // Replace with actual test key in production
    amount: donationDetails.amount * 100, // amount in paisa
    currency: 'INR',
    name: 'NavShiv Foundation',
    description: 'Donation for food service at PGI Chandigarh',
    image: '/logo.png', // Add your logo URL
    handler: function (response: any) {
      onSuccess(response.razorpay_payment_id);
    },
    prefill: {
      name: donationDetails.name,
      email: donationDetails.email,
      contact: donationDetails.phone,
    },
    notes: {
      address: 'NavShiv Foundation Office'
    },
    theme: {
      color: '#FF7E36'
    }
  };
  
  try {
    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  } catch (error) {
    onError(error);
  }
};