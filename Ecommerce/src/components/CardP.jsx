import { useState, useEffect } from 'react'





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
    <ul>
      {data.map((item) => (
        // eslint-disable-next-line react/jsx-key
        <li>key = {item.id}<h2>{item.title}</h2><p>{item.price}</p><picture>{item.img}</picture></li>
      ))}
    </ul>
  );
}
//<li>{props.el.title}</li>
export default CardP