// eslint-disable-next-line no-unused-vars
import React from 'react'
import './product.module.css'
import Footer from './Footer'
import airpod from '../assets/AirPod 2nd Gen.jpg'
import iphone from '../assets/iPhone-14.jpg'
import apple from '../assets/apple-watch-pcq.jpg'
import ipad from '../assets/ipad-pro.jpg'


const Product = () => {
  return (
    <>
    <section className="products">
		<h2 className='h2'>Productos</h2>
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
      <Footer />
    </>
  )
}

export default Product