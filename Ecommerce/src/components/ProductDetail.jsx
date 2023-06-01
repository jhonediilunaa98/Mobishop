import React from 'react'
import './ProductDetail'
import iphone from '../assets/iphone_14.webp'
import {FontAwesomeIcon} from '@Fortawesome/react-fontawesome';

const ProductDetail = (props) => {
  return (
    <div>
		<main className='mein'>
			<div className="containerr-imgg">
				<img
					src="https://tiendasishop.com/media/catalog/product/i/p/iphone_14_pro_silver_pdp_image_position-4_mxla_6.jpg?optimize=high&bg-color=255,255,255&fit=bounds&height=&width=&canvas=:"
					alt="imagen-producto"
				/>
			</div>
			<div className="containerr-infoo-productt">
				<div className="containerr-pricee">
					<span>{}</span>
					<i className="fa-solid fa-angle-right"></i>
				</div>

				<div className="containerr-detailss-productt">
					<div className="form-group">
						<h3>Iphone 14</h3>
					</div>
					<div className="formm-groupp">
					</div>
					<button className="btnn-cleann">Limpiar</button>
				</div>
				<div className="containerr-addd-cartt">
					<div className="containerr-quantityy">
						<input
							type="number"
							placeholder="1"
							value="1"
							min="1"
							className="inputt-quantityy"
						/>
						<div className="btnn-incrementt-decrementt">
							<i className="fa-solid fa-chevron-up" id="incrementt"></i>
							<i className="fa-solid fa-chevron-down" id="decrementt"></i>
						</div>
					</div>
					<button className="btnn-addd-too-cartt">
						<i className="fa-solid fa-plus"></i>
						Añadir al carrito
					</button>
				</div>

				<div className="containerr-descriptionn">
					<div className="titlee-descriptionn">
						<h4>Descripción</h4>
						<i className="fa-solid fa-chevron-down"></i>
					</div>
					<div className="textt-descriptionn">
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

				<div className="containerr-additionall-informationn">
					<div className="titlee-additionall-informationn">
						<h4>Información adicional</h4>
						<i className="fa-solid fa-chevron-down"></i>
					</div>
					<div className="textt-additionall-informationn hiddenn">
						<p>-----------</p>
					</div>
				</div>

				<div className="containerr-reviewss">
					<div className="titlee-reviewss">
						<h4>Reseñas</h4>
						<i className="fa-solid fa-chevron-down"></i>
					</div>
					<div className="textt-reviewss hiddenn">
						<p>-----------</p>
					</div>
				</div>

				<div className="containerr-sociall">
					<span>Compartir</span>
					<div className="containerr-buttonss-sociall">
						<a className='ar' href="#"><i className="fa-solid fa-envelope"></i></a>
						<a className='ar' href="#"><i className="fa-brands fa-facebook"></i></a>
						<a className='ar' href="#"><i className="fa-brands fa-twitter"></i></a>
						<a className='ar' href="#"><i className="fa-brands fa-instagram"></i></a>
						<a className='ar' href="#"><i className="fa-brands fa-pinterest"></i></a>
					</div>
				</div>
			</div>
		</main>

		<section className="containerr-relatedd-productss">
			<h2 id='h22'>Productos Relacionados</h2>
			<div className="cardd-listt-productss">
				<div className="cardd">
					<div className="cardd-imgg">
						<img className='imen'
							src="https://tiendasishop.com/media/catalog/product/i/p/iphone_14_plus_yellow_pdp_image_position-1a_coes_1.jpg?optimize=high&bg-color=255,255,255&fit=bounds&height=700&width=700&canvas=700:700"
							alt="producto-1"
						/>
					</div>
					<div className="infoo-cardd">
						<div className="textt-productt">
							<h3>Iphone</h3>
							
						</div>
						<div className="pricee">$85.00</div>
					</div>
				</div>
				<div className="cardd">
					<div className="cardd-imgg">
						<img className='imen'
							src="https://tiendasishop.com/media/catalog/product/i/p/iphone_14_pro_gold_pdp_image_position-1a_mxla_6.jpg?optimize=high&bg-color=255,255,255&fit=bounds&height=700&width=700&canvas=700:700"
							alt="producto-2"
						/>
					</div>
					<div className="infoo-cardd">
						<div className="textt-productt">
							<h3>Iphone</h3>
							
						</div>
						<div className="pricee">$255.00</div>
					</div>
				</div>
				<div className="cardd">
					<div className="cardd-imgg">
						<img className='imen'
							src="https://tiendasishop.com/media/catalog/product/p/g/pgpgi14p7.jpg?optimize=high&bg-color=255,255,255&fit=bounds&height=700&width=700&canvas=700:700"
							alt="producto-3"
						/>
					</div>
					<div className="infoo-cardd">
						<div className="textt-productt">
							<h3>Iphone</h3>
							
						</div>
						<div className="pricec">$105.00</div>
					</div>
				</div>
				<div className="cardd">
					<div className="cardd-imgg">
						<img className='imen'
							src="https://tiendasishop.com/media/catalog/product/i/p/iphone_14_pro_silver_pdp_image_position-1a_mxla_6.jpg?optimize=high&bg-color=255,255,255&fit=bounds&height=700&width=700&canvas=700:700"
							alt="producto-4"
						/>
					</div>
					<div className="infoo-cardd">
						<div className="textt-productt">
							<h3>Iphone</h3>
							
						</div>
						<div className="pricee">$250.00</div>
					</div>
				</div>
			</div>
		</section>
		{/* <script
			src="https://kit.fontawesome.com/81581fb069.js"
			crossorigin="anonymous"
		></script>
		<script src="index.js"></script> */}
	
    </div>
  )
}

export default ProductDetail