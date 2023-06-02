import React from 'react';
import './Banner.module.css';
import banner2 from '../assets/banner2.png';


function Banner() {
  return (

    <section className="home-container">
      <picture className="banner">
        <img src={banner2} alt="Banner" className="banner-image" />
        </picture>
      </section>

      )
    }

    export default Banner;