import React from 'react';
import { Button } from './Button';
import './HeroSection.css';
import video from '../assets/paisaje.mp4';

function HeroSection() {
  return (
    <section className='hero-container'>
      <video src={video} autoPlay loop muted />
      <h1>Explora y captura la belleza de la naturaleza</h1>
      <h2>Con la cámara avanzada del iPhone 14</h2>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          Ver más
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
        >
          Comprar
        </Button>
      </div>
    </section>
  );
}

export default HeroSection;
