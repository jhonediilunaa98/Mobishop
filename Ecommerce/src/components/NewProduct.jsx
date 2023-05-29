import React from 'react'

const NewProduct = () => {

    const cardItem = (item) =>{
        
    }

    return (
        <>
            <div className="product">
                <img src={airpod} />
                <div className="product-info">
                    <h4 className="product-title">AirPod 2nd Gen
                    </h4>
                    <p className="product-price">$129</p>
                    <a className="product-btn" href="#">Buy Now</a>
                </div>
            </div>


            return(
                <div>
                    {DATA.map(cardItem)}
                </div>
            )
        </>
    )
}

export default NewProduct