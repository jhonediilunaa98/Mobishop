import React from 'react';
import HeroSection from './HeroSection';
import Destacados from './Destacados';
import Banner from './Banner';
import Beneficios from './Beneficios';
import Categoria from './Categoria';


const Home = () => {
  return (
    <>
    <HeroSection />
    <Destacados />
    <Banner />
    <Categoria />
    <Beneficios />
    </>
    
  );
};

export default Home;