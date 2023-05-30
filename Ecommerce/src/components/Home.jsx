// eslint-disable-next-line no-unused-vars
import React from 'react'
import './Home.module.css'
import airpod from '../assets/AirPod 2nd Gen.jpg'
import ipad from '../assets/ipad-pro.jpg'
import iphone14 from '../assets/iphone_14.webp'
import smart from '../assets/smart_1.png'
const Home = () => {
  return (
    <>
    <main>
      <section className='section'>
        <article className='slider'>
          <aside className='slide'>
            <input type='radio' name='radio-btn' id='radio1'/>
            <input type='radio' name='radio-btn' id='radio2'/>
            <input type='radio' name='radio-btn' id='radio3'/>
            <input type='radio' name='radio-btn' id='radio4'/>

            <picture className='st '>
              <img  src={airpod} />
            </picture>

            <picture className='st '>
              <img  src={iphone14} />
            </picture>

            <picture className='st '>
              <img  src={ipad} />
            </picture>

            <picture className='st '>
              <img  src={smart} />
            </picture>

            <article>
              <div className='a-b1'></div>
              <div className='a-b2'></div>
              <div className='a-b3'></div>
              <div className='a-b4'></div>
            </article>
          </aside>

          <article className='nav m'>
            <label form='radio' className='m-btn' ></label>
            <label form='radio' className='m-btn' ></label>
            <label form='radio' className='m-btn' ></label>
            <label form='radio' className='m-btn' ></label>
          </article>
        </article>
      </section>
    </main>
    </>
  )
}

export default Home