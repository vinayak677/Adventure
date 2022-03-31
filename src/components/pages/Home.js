import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import HeroSection from '../HeroSection';
import Footer from '../Footer';
import Shop from './Shop';

function Home() {
  return (
    <>
      <HeroSection />
       <Cards /> 
      <Footer />
      <Shop />

    </>
  );
}

export default Home;
