import React, {useContext} from "react";
import {Link} from "react-router-dom"
import { DataContext } from "../components/context/DataProvider";
const ProductosItem = ({
    // eslint-disable-next-line react/prop-types
    id,
    title,
    price,
    desc,
    img,
    cantidad,
}) => {

const value = useContext(DataContext);
const addCarrito = value.addCarrito





    return (
        <div className="productoo">
            <Link to={`/product/${id}`}>
                <div className="productoo_iimgg">
                    <img className="immg" src={img} />
                </div>
            </Link>
            <div className="productoo_footerr">
                <h1>{title}</h1>
                <p>categoria</p>
                <p className="pricee">${price}</p>
            </div>
            <div className="botonn">
                <button className="bbttnn" onClick={()=>addCarrito(id)}> Añadir al carrito</button>
                <div className="divv">
                    <Link to={`/product/${id}`} className="bbttnn A">
                        Vista
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ProductosItem;
