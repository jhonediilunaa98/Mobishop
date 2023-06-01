import React from 'react';
import { Button } from './Button';
import './HeroSection.css';
import video from '../assets/paisaje.mp4';

function HeroSection() {
  return (
    <section className='heroo-containerr'>
      <video src={video} autoPlay loop muted />
      <h1 className='h11'>Explora y captura la belleza de la naturaleza</h1>
      <h2 className='h2h2'>Con la cámara avanzada del iPhone 14</h2>
      <div className='heroo-btnss'>
        <Button
          className='btnss'
          buttonStyle='btnn--outlinee'
          buttonSize='btnn--largee'
        >
          Ver más
        </Button>
        
        <Button
          className='btnss'
          buttonStyle='btnn--primaryy'
          buttonSize='btnn--largee'
        >
          Comprar
        </Button>
      </div>
    </section>
  );
}

export default HeroSection;
