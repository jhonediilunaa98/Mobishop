// eslint-disable-next-line no-unused-vars
import React from 'react'
import iphone from '../assets/iPhone-14.jpg'
import CardP from './CardP'
import './product.module.css'
const Product = () => {

  return (
    <>
      <h1 className='titlee'>Productos </h1>
      <div className='productoss'>
        <div className='productoo'>
        <a href='#'>
        <div className='productoo_iimgg'>
          <img src={iphone} />
        </div>
        </a>
      
      <div className='productoo_footerr'>
        <h1>titel</h1>
        <p>categoria</p>
        <p className='pricee'>$5.654.89</p>
      </div>
      <div className='botonn'>
        <button className='bbttnn'> Añadir al carrito</button>
        <a href='#' className='bbttnn'>Vista</a>
      </div>
      </div>
      </div>
    </>
  )
}

export default Product