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
            <a className="A" href="#">
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
                <button className="bbttnn" onClick={()=>addCarrito(id)}> Añadir al carrito</button>
                <div className="divv">
                    <a href="#" className="bbttnn A">
                        Vista
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ProductosItem;
