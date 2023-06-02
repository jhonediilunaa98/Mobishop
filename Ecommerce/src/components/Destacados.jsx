import React from 'react';
import './Destacados.css';
import camara from '../assets/camara.svg';
import dynamic from '../assets/dynamic.svg';
import chip from '../assets/chip.svg';
import sos from '../assets/sos.svg';

function Destacados() {
  return (
    <main>
      <article className="card">
        <article className='p'>
          <span className='span'><img src={chip} alt="chip"/></span>
        </article>
        <article className='p'>
          <span className='span'><img src={sos} alt="sos" /></span>
        </article>
				<article className='p'>
          <span className='span'><img src={camara} alt="camara pro" /></span>
        </article>
        <article className='p'>
          <span className='span'><img src={dynamic} alt="dynamic island" /></span>
        </article>
      </article>

<section className="containerr-relatedd-productss">
			<h2 id='h22'>Nuevos productos</h2>
			<article className="cardd-listt-productss">
				<article className="cardd">
					<article className="cardd-imgg">
						<img className='imen'
							src="https://tiendasishop.com/media/catalog/product/i/p/iphone_14_plus_yellow_pdp_image_position-1a_coes_1.jpg?optimize=high&bg-color=255,255,255&fit=bounds&height=700&width=700&canvas=700:700"
							alt="producto-1"
						/>
					</article>
					<article className="infoo-cardd">
						<article className="textt-productt">
							<h3>Iphone</h3>
							
						</article>
						<article className="pricee">$85.00</article>
					</article>
				</article>
				<article className="cardd">
					<article className="cardd-imgg">
						<img className='imen'
							src="https://tiendasishop.com/media/catalog/product/i/p/iphone_14_pro_gold_pdp_image_position-1a_mxla_6.jpg?optimize=high&bg-color=255,255,255&fit=bounds&height=700&width=700&canvas=700:700"
							alt="producto-2"
						/>
					</article>
					<article className="infoo-cardd">
						<article className="textt-productt">
							<h3>Iphone</h3>
							
						</article>
						<article className="pricee">$255.00</article>
					</article>
				</article>
				<article className="cardd">
					<article className="cardd-imgg">
						<img className='imen'
							src="https://tiendasishop.com/media/catalog/product/p/g/pgpgi14p7.jpg?optimize=high&bg-color=255,255,255&fit=bounds&height=700&width=700&canvas=700:700"
							alt="producto-3"
						/>
					</article>
					<article className="infoo-cardd">
						<article className="textt-productt">
							<h3>Iphone</h3>
							
						</article>
						<article className="pricec">$105.00</article>
					</article>
				</article>
				<article className="cardd">
					<article className="cardd-imgg">
						<img className='imen'
							src="https://tiendasishop.com/media/catalog/product/i/p/iphone_14_pro_silver_pdp_image_position-1a_mxla_6.jpg?optimize=high&bg-color=255,255,255&fit=bounds&height=700&width=700&canvas=700:700"
							alt="producto-4"
						/>
					</article>
					<article className="infoo-cardd">
						<article className="textt-productt">
							<h3>Iphone</h3>
							
						</article>
						<article className="pricee">$250.00</article>
					</article>
				</article>
			</article>
		</section>
    </main>

  );
}

export default Destacados;