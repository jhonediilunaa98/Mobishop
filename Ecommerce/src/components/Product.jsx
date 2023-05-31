// eslint-disable-next-line no-unused-vars
import React from 'react'
import CardP from './CardP'
import './product.module.css'








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
        </div>
      </section>
      <CardP />
    </>
  )
}

export default Product