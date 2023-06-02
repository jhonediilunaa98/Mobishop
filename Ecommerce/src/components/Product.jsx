// eslint-disable-next-line no-unused-vars
import React from "react";

import "./product.module.css";
import { DataContext } from "./context/DataProvider";
import { useContext } from "react";
import ProductosItem from "../Productos/ProductosItem";

const Product = () => {
  const value = useContext(DataContext);
  const [productos] = value.productos;


  return (
    <>
      <h1 className="titlee">Productos </h1>
      <div className="productoss">
        {productos.map((producto) => (
          <ProductosItem
            key={producto.id}
            id={producto.id}
            title={producto.title}
            price={producto.price}
            desc={producto.desc}
            img={producto.img}
            cantidad={producto.cantidad}
          />
        ))}
      </div>
    </>
  );
};

export default Product;
