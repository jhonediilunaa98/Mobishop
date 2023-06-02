import React from 'react';
import './Banner.module.css';
import banner2 from '../assets/banner2.png';


function Banner() {
  return (

    <div className="home-container">
      <div className="banner">
        <img src={banner2} alt="Banner" className="banner-image" />
        </div>
      </div>

      )
    }

    export default Banner;