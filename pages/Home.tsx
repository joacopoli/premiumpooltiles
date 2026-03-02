
import React from 'react';
import Hero from '../components/Hero';
import ProductShowcase from '../components/ProductShowcase';
import Portfolio from '../components/Portfolio';
import Differentiators from '../components/Differentiators';
import ContactForm from '../components/ContactForm';

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <ProductShowcase />
      <Portfolio />
      <Differentiators />
      <ContactForm />
    </>
  );
};

export default Home;
