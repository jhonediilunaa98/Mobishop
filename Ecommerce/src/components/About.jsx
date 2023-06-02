import React from 'react'
import './About.module.css';
import about from '../assets/about.png';

const About = () => {
  return (
    <section className="nosotros-section">
      <article className="us-image-container">
        <img className="us-image" src={about} alt="Nosotros" />
      </article>
      </section>
  )
}

export default About;