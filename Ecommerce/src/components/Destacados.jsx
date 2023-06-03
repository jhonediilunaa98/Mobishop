import React from 'react';
import './Destacados.css';
import camara from '../assets/camara.svg';
import dynamic from '../assets/dynamic.svg';
import chip from '../assets/chip.svg';
import sos from '../assets/sos.svg';

function Destacados() {
  return (
    <main>
      <div className="card">
        <div className='p'>
          <span className='span'><img src={chip} alt="chip"/></span>
        </div>
        <div className='p'>
          <span className='span'><img src={sos} alt="sos" /></span>
        </div>
				<div className='p'>
          <span className='span'><img src={camara} alt="camara pro" /></span>
        </div>
        <div className='p'>
          <span className='span'><img src={dynamic} alt="dynamic island" /></span>
        </div>
      </div>

<section className="containerr-relatedd-productss">
			<h2 id='h22'>Nuevos productos</h2>
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
    </main>

  );
}

export default Destacados;