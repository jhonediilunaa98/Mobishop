import React from 'react';
import './Beneficios.module.css';
import tienda from '../assets/tienda.svg';
import interes from '../assets/interes.svg';
import addi from '../assets/addi.svg';
import garantia from '../assets/garantia.svg';
import tecnico from '../assets/tecnico.svg';
import horas from '../assets/horas.svg';

function Beneficios() {
  return (
    <div className="beneficio-container">
      <div className="ben-item">
        <img src={tienda} className="iconos-beneficios" alt="Compra Online Recoge en Tienda" />
        <div>
          <h3 className="h15">Compra en línea y recoge en tienda en 1 hora</h3>
        </div>
      </div>
      <div className="ben-item">
        <img src={horas} className="iconos-beneficios" alt="Aplica para Bogotá" />
        <div>
          <h3>Aplica para Bogotá*</h3>
        </div>
      </div>
      <div className="ben-item">
        <img src={interes} className="iconos-beneficios" alt="0% de interés con Davivienda" />
        <div>
          <h3 className="h15">0% de interés con Davivienda</h3>
        </div>
      </div>
      <div className="ben-item">
        <img src={addi} className="iconos-beneficios" alt="3 cuotas sin interés" />
        <div>
          <h3 className="h15">3 cuotas sin interés</h3>
        </div>
      </div>
      <div className="ben-item">
        <img src={garantia} className="iconos-beneficios" alt="1 año de garantía" />
        <div>
          <h3 className="h15">1 año de garantía</h3>
        </div>
      </div>
      <div className="ben-item">
        <img src={tecnico} className="iconos-beneficios" alt="Servicio Técnico Certificado" />
        <div>
          <h3 className="h15">Servicio Técnico Certificado</h3>
        </div>
      </div>
    </div>
  );
}

export default Beneficios;
