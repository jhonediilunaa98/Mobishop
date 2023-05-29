// eslint-disable-next-line no-unused-vars
import React from 'react'
import './Home.module.css'
//import airpod_home1 from '../assets/airpod_home1.jpeg'
//import appleW_home_1 from '../assets/appleW_home_1.jpeg'
 import iphone_home1 from '../assets/iphone_home1.jpeg'
 import iphone_14 from '../assets/iphone_14.webp'
 import smart_1 from '../assets/smart_1.png'


const Home = () => {
  return (
    <>
      <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={iphone_14} className="d-block w-100" alt="Iphone" height="500px" width="500px" />
          </div>
          <div className="carousel-item">
            <img src={smart_1} className="d-block w-100" alt="Iphone" height="500px" width="400px"/>
          </div>
          <div className="carousel-item">
            <img src={iphone_home1} className="d-block w-100" alt="Iphone" height="500px"  />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  )
}

export default Home