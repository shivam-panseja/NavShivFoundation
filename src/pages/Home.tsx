import React from 'react';
import Hero from '../components/home/Hero';
import Mission from '../components/home/Mission';
import Impact from '../components/home/Impact';
import Testimonials from '../components/home/Testimonials';
import Contributors from '../components/common/Contributors';

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <Mission />
      <Impact />
      <Testimonials />
      <Contributors />
    </>
  );
};

export default Home;