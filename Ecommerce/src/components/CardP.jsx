
import React, { useState, useEffect } from 'react';
import './CardP.module.css';
import ProductDetails from './ProductDetail';

const CardP = () => {
  const [data, set] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    const obtener = () => {
      return fetch(
        'https://6476ec289233e82dd53a86ce.mockapi.io/api/v1/mobishop'
      )
        .then((res) => res.json())
        .then((data) => set(data))
        .catch((err) => console.error(err));
    };

    obtener();
    return () => set([]);
  }, []);

  const showProductDetails = (item) => {
    setSelectedItem(item);
  };

  const hideProductDetails = () => {
    setSelectedItem(null);
  };

  return (
    <section>
      <ul className='todos'>
        {data.map((item) => (
          <li key={item.id}>
            <article className='product' onClick={() => showProductDetails(item)}>
              <img src={item.img} alt={item.title} />
              <article className="product-info">
                <h2 className='h22'>{item.title}</h2>
                <p className="p">${item.price}</p>
                <a className="product-btn" href="#">Buy Now</a>
              </article>
            </article>
          </li>
        ))}
      </ul>

      {selectedItem && (
        <article className="overlay" onClick={hideProductDetails}>
          <ProductDetails item={selectedItem} />
        </article>
      )}
    </section>
  );
};

export default CardP;
