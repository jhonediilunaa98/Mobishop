import React from 'react';
import './Destacados.css';
import black_2 from '../assets/black_2.jpeg';
import oferta_1 from '../assets/oferta_1.jpeg';
import vide from '../assets/iPhone 15 Pro Max Trailer Official Design.mp4';

function Destacados() {
  return (
    <main>
      <div className="card">
        <div className='p'>
          <span className='span'><img src={black_2} alt="Black 2" /></span>
        </div>
        <div className='p'>
          <span className='span'>
            <iframe className='video-container' title="iPhone 15 Pro Max" src={vide} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </span>
        </div>
        <div className='p'>
          <span className='span'><img src={oferta_1} alt="Oferta 1" /></span>
        </div>
      </div>

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

{/* /************************************]*/}
      <div className='button-container'>
        <div className='button-item'>
          <a href="#">
            <img src="https://tiendasishop.com/media/wysiwyg/iconos/icono_Bopis1.png" alt="Compra Online Recoge en Tienda" />
            <br />
            <span>
              Compra Online <br /> Recoge en Tienda en 1 hora
            </span>
          </a>
        </div>

        <div className='button-item'>
          <a href="#">
            <img src="https://tiendasishop.com/media/wysiwyg/iconos/iconos-colombia/800x800-24-horas-imagen.png" alt="Aplica para Bogotá" />
            <br />
            <span>
              Aplica para Bogotá*
            </span>
          </a>
        </div>

        <div className='button-item'>
          <a href="#">
            <img src="https://tiendasishop.com/media/wysiwyg/plan0es3.png" alt="0% de interés con Davivienda" />
            <br />
            <span>
              0% de interés<br />con Davivienda
            </span>
          </a>
        </div>

        <div className='button-item'>
          <a href="#">
            <img src="https://tiendasishop.com/media/wysiwyg/icono_Addi.png" alt="3 cuotas sin interés" />
            <br />
            <span>
              3 cuotas<br />sin interés
            </span>
          </a>
        </div>

        <div className='button-item'>
          <a href="#">
            <img src="https://tiendasishop.com/media/wysiwyg/iconos/homegarantia3.png" alt="1 año de garantía" />
            <br />
            <span>
              1 año<br />de garantía
            </span>
          </a>
        </div>

        <div className='button-item'>
          <a href="#">
            <img src="https://tiendasishop.com/media/wysiwyg/iconos/homeserviciotecnico5.png" alt="Servicio Técnico Certificado" />
            <br />
            <span>
              Servicio Técnico<br />Certificado
            </span>
          </a>
        </div>

        
      </div>
    </main>

  );
}

export default Destacados;