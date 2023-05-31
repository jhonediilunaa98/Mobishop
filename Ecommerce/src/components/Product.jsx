// eslint-disable-next-line no-unused-vars
import React from 'react'
import './product.module.css'
import Data from './Data.json'
//import CardP from './CardP'
import airpod from '../assets/AirPod 2nd Gen.jpg'
import iphone from '../assets/iPhone-14.jpg'
import apple from '../assets/apple-watch-pcq.jpg'
import ipad from '../assets/ipad-pro.jpg'



// function CardP(props) {
//   return (
//     <>
//       <li>
//         <h2>{props.el.title}</h2>
//         <h2>{props.el.price}</h2>
//       </li>
      
//     </>
//   )
// }


const Product = () => {

  return (
    <>
      <section className="products">
        <h2 className="h2">Productos </h2>
        <article className='button'>
        <button>Iphone 14</button>
        <button>Iphone 14 Pro</button>
        <button>Iphone 14 Pro Max</button>
        <button>Iphone 15</button>
        </article>
        <div className="all-products">
          <div className="product">
            <img src={airpod} />
            <div className="product-info">
              <h4 className="product-title">AirPod 2nd Gen
              </h4>
              <p className="product-price">$129</p>
              <a className="product-btn" href="#">Buy Now</a>

            </div>
          </div>
          <div className="product">
            <img src={iphone} />
            <div className="product-info">
              <h4 className="product-title">Apple Watch
              </h4>
              <p className="product-price">$299</p>
              <a className="product-btn" href="#">Buy Now</a>
            </div>
          </div>

          
          <div className="product">
            <img src={apple} />
            <div className="product-info">
              <h4 className="product-title">iPhone 14
              </h4>
              <p className="product-price">$999</p>
              <a className="product-btn" href="#">Buy Now</a>

            </div>
          </div>
          <div className="product">
            <img src={ipad} />
            <div className="product-info">
              <h4 className="product-title">iPan Pro
              </h4>
              <p className="product-price">$629*</p>
              <a className="product-btn" href="#">Buy Now</a>
            </div>
          </div>
        </div>

      </section>


      {/* <ul>
        {Data.ProductosMobi.map((el, index) => (<CardP key={index} el={el} />))}
      </ul> */}
      
         {/* <div className="product">
            <img src={ipad} />
            <div className="product-info">
              <h4 className="product-title">iPan Pro
              </h4>
              <p className="product-price">$629*</p>
              <a className="product-btn" href="#">Buy Now</a>
            </div>
          </div> */}
    </>
  )
}

export default Product