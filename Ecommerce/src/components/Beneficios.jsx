import React from 'react';
import './Beneficios.module.css';

function Beneficios() {
  return (
    <div className="button-container">
      <div className="button-item">
        <a href="#">
          <img src="https://tiendasishop.com/media/wysiwyg/iconos/icono_Bopis1.png" alt="Compra Online Recoge en Tienda" />
          <div>
            <h3 className="h15">Compra Online Recoge en Tienda en 1 hora</h3>
          </div>
        </a>
      </div>

      <div className="button-item">
        <a href="#">
          <img src="https://tiendasishop.com/media/wysiwyg/iconos/iconos-colombia/800x800-24-horas-imagen.png" alt="Aplica para Bogotá" />
          <div>
            <h3>Aplica para Bogotá*</h3>
          </div>
        </a>
      </div>

      <div className="button-item">
        <a href="#">
          <img src="https://tiendasishop.com/media/wysiwyg/plan0es3.png" alt="0% de interés con Davivienda" />
          <div>
            <h3 className="h15">0% de interés con Davivienda</h3>
          </div>
        </a>
      </div>

      <div className="button-item">
        <a href="#">
          <img src="https://tiendasishop.com/media/wysiwyg/icono_Addi.png" alt="3 cuotas sin interés" />
          <div>
            <h3 className="h15">3 cuotas sin interés</h3>
          </div>
        </a>
      </div>

      <div className="button-item">
        <a href="#">
          <img src="https://tiendasishop.com/media/wysiwyg/iconos/homegarantia3.png" alt="1 año de garantía" />
          <div>
            <h3 className="h15">1 año de garantía</h3>
          </div>
        </a>
      </div>

      <div className="button-item">
        <a href="#">
          <img src="https://tiendasishop.com/media/wysiwyg/iconos/homeserviciotecnico5.png" alt="Servicio Técnico Certificado" />
          <div>
            <h3 className="h15">Servicio Técnico Certificado</h3>
          </div>
        </a>
      </div>
    </div>
  );
}

export default Beneficios;
