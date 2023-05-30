import React from 'react'
import {DATA} from './Data'

const NewProduct = () => {

    const cardItem = (item) => {
        <div className="product">
        <img src={item.img} />
        <div className="product-info">
            <h4 className="product-title">{item.title}</h4>
            <p className="product-price">{item.price}</p>
            <a className="product-btn" href="#">Buy Now</a>
        </div>
    </div>
    }
 
    return (
        <div>
            <div>
                {DATA.map(cardItem)}
            </div>

        </div>
    )
}

export default NewProduct