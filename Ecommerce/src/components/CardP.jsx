import { useState, useEffect } from 'react'
import './CardP.module.css'
const CardP = () => {
  let [data, set] = useState([]);
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
  return (
    <ul className='todos'>
      {data.map((item) => (
        // eslint-disable-next-line react/jsx-key
        <li key = {item.id}>
        <div className='product'>
        <img src={item.img} />
        <div className="product-info">
        <h2 className='h22'>{item.title}</h2>
        <p className="p">${item.price}</p>
        <a className="product-btn" href="#">Buy Now</a>
        </div>
        </div>
       
        </li>
      ))}
    </ul>
  );
}
//<li>{props.el.title}</li>
export default CardP
//<li>key = {item.id}<h2>{item.title}</h2><p>{item.price}</p><picture>{item.img}</picture></li>