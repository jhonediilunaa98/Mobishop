// eslint-disable-next-line no-unused-vars
import React from 'react'
import CardP from './CardP'
import './product.module.css'








const Product = () => {

  return (
    <>
      <section className="prod">
        <h2 className="h2">Productos </h2>
        <article className='buttonn'>
        <button className='btn2'>Iphone 14</button>
        <button className='btn2'>Iphone 14 Pro</button>
        <button className='btn2'>Iphone 14 Pro Max</button>
        <button className='btn2'>Iphone 15</button>
        </article>
        <div className="all-products">
        </div>
      </section>
      <CardP className="todos" />
    </>
  )
}

export default Product