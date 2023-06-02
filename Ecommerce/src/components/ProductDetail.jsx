import React, { useEffect, useState } from 'react'
import { DataContext } from './context/DataProvider'
import { useParams } from 'react-router-dom'
import { useContext } from "react";

const ProductDetail = () => {
	const value  = useContext(DataContext)
	const [productos] = value.productos;
	const [detalle, setDetalle] = useState([]);
	const params = useParams();



	useEffect(()=>{
		productos.forEach(producto => {
			if(producto.id === parseInt(params.id)){
				setDetalle(producto)
			}
		});
	},[params.id, productos])



  return (
	<>
		
			{
				<div className='detalles'>
			
			<img src={detalle.img}/>
			<h2>{detalle.title}</h2>
			<p className='pricee'>${detalle.price}</p>
			<div className='grid'>
				<p className='nuevo'>Color </p>
				<div className='size'>
					<select placeholder='tamaño'>
					<option value="1"></option>
					<option value="2"></option>
					<option value="3"></option>
					<option value="4"></option>
					<option value="5"></option>
					<option value="6"></option>
					<option value="7"></option>
					<option value="8"></option>
					<option value="9"></option>
					</select>
					<p>Tamaño</p>
				</div>
				<button>Añadir al carrito</button>
				<img>{}</img>
				<input type='range' min="1" max="36"/>
				<div className='description:'>
					<p><b>Description:</b>Lorem ipsum dolor, sit amet consectetur adipisicing
							elit. Laboriosam iure provident atque voluptatibus
							reiciendis quae rerum, maxime placeat enim cupiditate
							voluptatum, temporibus quis iusto. Enim eum qui delectus
							deleniti similique? Lorem, ipsum dolor sit amet
							consectetur adipisicing elit. Sint autem magni earum est
							dolorem saepe perferendis repellat ipsam laudantium cum
							assumenda quidem quam, vero similique? Iusto officiis
							quod blanditiis iste?</p>
				</div>
			</div>
			</div>
			}
		
	</>
  )
}

export default ProductDetail