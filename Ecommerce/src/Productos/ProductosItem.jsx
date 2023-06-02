import React from "react";

const ProductosItem = ({
    // eslint-disable-next-line react/prop-types
    id,
    title,
    price,
    desc,
    img,
}) => {
    return (
        <div className="productoo">
            <a href="#">
                <div className="productoo_iimgg">
                    <img className="immg" src={img} />
                </div>
            </a>
            <div className="productoo_footerr">
                <h1>{title}</h1>
                <p>categoria</p>
                <p className="pricee">${price}</p>
            </div>
            <div className="botonn">
                <button className="bbttnn"> Añadir al carrito</button>
                <div className="divv">
                    <a href="#" className="bbttnn">
                        Vista
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ProductosItem;
