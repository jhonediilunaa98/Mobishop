import React from 'react'
import './ProductDetail'
import iphone from '../assets/iphone_14.webp'
import {FontAwesomeIcon} from '@Fortawesome/react-fontawesome';

const ProductDetail = (props) => {
  return (
    <div>
		<main>
			<div className="container-img">
				<img
					src={iphone}
					alt="imagen-producto"
				/>
			</div>
			<div className="container-info-product">
				<div className="container-price">
					<span>{}</span>
					<i className="fa-solid fa-angle-right"></i>
				</div>

				<div className="container-details-product">
					<div className="form-group">
						<h3>Iphone 14</h3>
					</div>
					<div className="form-group">
					</div>
					<button className="btn-clean">Limpiar</button>
				</div>
				<div className="container-add-cart">
					<div className="container-quantity">
						<input
							type="number"
							placeholder="1"
							value="1"
							min="1"
							className="input-quantity"
						/>
						<div className="btn-increment-decrement">
							<i className="fa-solid fa-chevron-up" id="increment"></i>
							<i className="fa-solid fa-chevron-down" id="decrement"></i>
						</div>
					</div>
					<button className="btn-add-to-cart">
						<i className="fa-solid fa-plus"></i>
						Añadir al carrito
					</button>
				</div>

				<div className="container-description">
					<div className="title-description">
						<h4>Descripción</h4>
						<i className="fa-solid fa-chevron-down"></i>
					</div>
					<div className="text-description">
						<p>
							Lorem ipsum dolor, sit amet consectetur adipisicing
							elit. Laboriosam iure provident atque voluptatibus
							reiciendis quae rerum, maxime placeat enim cupiditate
							voluptatum, temporibus quis iusto. Enim eum qui delectus
							deleniti similique? Lorem, ipsum dolor sit amet
							consectetur adipisicing elit. Sint autem magni earum est
							dolorem saepe perferendis repellat ipsam laudantium cum
							assumenda quidem quam, vero similique? Iusto officiis
							quod blanditiis iste?
						</p>
					</div>
				</div>

				<div className="container-additional-information">
					<div className="title-additional-information">
						<h4>Información adicional</h4>
						<i className="fa-solid fa-chevron-down"></i>
					</div>
					<div className="text-additional-information hidden">
						<p>-----------</p>
					</div>
				</div>

				<div className="container-reviews">
					<div className="title-reviews">
						<h4>Reseñas</h4>
						<i className="fa-solid fa-chevron-down"></i>
					</div>
					<div className="text-reviews hidden">
						<p>-----------</p>
					</div>
				</div>

				<div className="container-social">
					<span>Compartir</span>
					<div className="container-buttons-social">
						<a href="#"><i className="fa-solid fa-envelope"></i></a>
						<a href="#"><i className="fa-brands fa-facebook"></i></a>
						<a href="#"><i className="fa-brands fa-twitter"></i></a>
						<a href="#"><i className="fa-brands fa-instagram"></i></a>
						<a href="#"><i className="fa-brands fa-pinterest"></i></a>
					</div>
				</div>
			</div>
		</main>

		<section className="container-related-products">
			<h2 id='h22'>Productos Relacionados</h2>
			<div className="card-list-products">
				<div className="card">
					<div className="card-img">
						<img
							src="https://tiendasishop.com/media/catalog/product/i/p/iphone_14_plus_yellow_pdp_image_position-1a_coes_1.jpg?optimize=high&bg-color=255,255,255&fit=bounds&height=700&width=700&canvas=700:700"
							alt="producto-1"
						/>
					</div>
					<div className="info-card">
						<div className="text-product">
							<h3>Iphone</h3>
							
						</div>
						<div className="price">$85.00</div>
					</div>
				</div>
				<div className="card">
					<div className="card-img">
						<img
							src="https://tiendasishop.com/media/catalog/product/i/p/iphone_14_pro_gold_pdp_image_position-1a_mxla_6.jpg?optimize=high&bg-color=255,255,255&fit=bounds&height=700&width=700&canvas=700:700"
							alt="producto-2"
						/>
					</div>
					<div className="info-card">
						<div className="text-product">
							<h3>Iphone</h3>
							
						</div>
						<div className="price">$255.00</div>
					</div>
				</div>
				<div className="card">
					<div className="card-img">
						<img
							src="https://tiendasishop.com/media/catalog/product/p/g/pgpgi14p7.jpg?optimize=high&bg-color=255,255,255&fit=bounds&height=700&width=700&canvas=700:700"
							alt="producto-3"
						/>
					</div>
					<div className="info-card">
						<div className="text-product">
							<h3>Iphone</h3>
							
						</div>
						<div className="price">$105.00</div>
					</div>
				</div>
				<div className="card">
					<div className="card-img">
						<img
							src="https://tiendasishop.com/media/catalog/product/i/p/iphone_14_pro_silver_pdp_image_position-1a_mxla_6.jpg?optimize=high&bg-color=255,255,255&fit=bounds&height=700&width=700&canvas=700:700"
							alt="producto-4"
						/>
					</div>
					<div className="info-card">
						<div className="text-product">
							<h3>Iphone</h3>
							
						</div>
						<div className="price">$250.00</div>
					</div>
				</div>
			</div>
		</section>

		<footer>
			<p>Footer</p>
		</footer>

		{/* <script
			src="https://kit.fontawesome.com/81581fb069.js"
			crossorigin="anonymous"
		></script>
		<script src="index.js"></script> */}
	
    </div>
  )
}

export default ProductDetail