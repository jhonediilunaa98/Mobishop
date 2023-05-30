// 
import './Home.module.css';
import black_2 from '../assets/black_2.jpeg';
import oferta_1 from '../assets/oferta_1.jpeg';
import vide from '../assets/iPhone 15 Pro Max Trailer Official Design.mp4'





const Home = () => {
  return (
    <main>
      <h2 id='tit'>Lo que deseas aca lo encuentras </h2>
      <div className="card">
    <p className='p'><span className='span'><img src= {black_2} /></span></p>
    <p className='p'><span className='span'><iframe className='.video-container video' width="560" height="315" src={vide} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></span></p>
    <p className='p'><span className='span'><img src= {oferta_1} /></span></p>
    </div>

    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
      <div style={{ textAlign: 'center', padding: '10px' }}>
        <a href="#">
          <img src="https://tiendasishop.com/media/wysiwyg/iconos/icono_Bopis1.png" style={{ width: '140px', height: '73px' }} alt="Compra Online Recoge en Tienda" />
          <br />
          <span>
            Compra Online <br /> Recoge en Tienda en 1 hora
          </span>
        </a>
      </div>

      <div style={{ textAlign: 'center', padding: '10px' }}>
        <a href="#">
          <img src="https://tiendasishop.com/media/wysiwyg/iconos/iconos-colombia/800x800-24-horas-imagen.png" style={{ width: '140px', height: '73px' }} alt="Aplica para Bogotá" />
          <br />
          <span>
            Aplica para Bogotá*
          </span>
        </a>
      </div>

      <div style={{ textAlign: 'center', padding: '10px' }}>
        <a href="#">
          <img src="https://tiendasishop.com/media/wysiwyg/plan0es3.png" style={{ width: '140px', height: '73px' }} alt="0% de interés con Davivienda" />
          <br />
          <span>
            0% de interés<br />con Davivienda
          </span>
        </a>
      </div>

      <div style={{ textAlign: 'center', padding: '10px' }}>
        <a href="#">
          <img src="https://tiendasishop.com/media/wysiwyg/icono_Addi.png" style={{ width: '140px', height: '73px' }} alt="3 cuotas sin interés" />
          <br />
          <span>
            3 cuotas<br />sin interés
          </span>
        </a>
      </div>

      <div style={{ textAlign: 'center', padding: '10px' }}>
        <a href="#">
          <img src="https://tiendasishop.com/media/wysiwyg/iconos/homegarantia3.png" style={{ width: '140px', height: '73px' }} alt="1 año de garantía" />
          <br />
          <span>
            1 año<br />de garantía
          </span>
        </a>
      </div>

      <div style={{ textAlign: 'center', padding: '10px' }}>
        <a href="#">
          <img src="https://tiendasishop.com/media/wysiwyg/iconos/homeserviciotecnico5.png" style={{ width: '140px', height: '73px' }} alt="Servicio Técnico Certificado" />
          <br />
          <span>
            Servicio Técnico<br />Certificado
          </span>
        </a>
      </div>
    </div>
    
    </main>
  );
};

export default Home;
