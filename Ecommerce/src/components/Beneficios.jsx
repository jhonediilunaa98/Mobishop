import React from 'react';
import tienda from '../assets/tienda.svg';
import interes from '../assets/interes.svg';
import addi from '../assets/addi.svg';
import garantia from '../assets/garantia.svg';
import tecnico from '../assets/tecnico.svg';
import horas from '../assets/horas.svg';
import './BeneficiosMobi.module.css';

function Beneficios() {
  return (
    <section className="beneficio-container">
      <figure className="ben-item">
        <img src={tienda} className="iconos-beneficios" alt="Compra Online Recoge en Tienda" />
        <figure>
          <h4 id='h155'>Compra en línea y recoge en tienda en 1 hora</h4>
        </figure>
      </figure>
      <figure className="ben-item">
        <img src={horas} className="iconos-beneficios" alt="Aplica para Bogotá" />
        <figure>
        <h4 id='h155'>Aplica para Bogotá*</h4>
        </figure>
      </figure>
      <figure className="ben-item">
        <img src={interes} className="iconos-beneficios" alt="0% de interés con Davivienda" />
        <figure>
        <h4 id='h155'>0% de interés con Davivienda</h4>
        </figure>
      </figure>
      <figure className="ben-item">
        <img src={addi} className="iconos-beneficios" alt="3 cuotas sin interés" />
        <figure>
        <h4 id='h155'>3 cuotas sin interés</h4>
        </figure>
      </figure>
      <figure className="ben-item">
        <img src={garantia} className="iconos-beneficios" alt="1 año de garantía" />
        <figure>
        <h4 id='h155'>1 año de garantía</h4>
        </figure>
      </figure>
      <figure className="ben-item">
        <img src={tecnico} className="iconos-beneficios" alt="Servicio Técnico Certificado" />
        <figure>
        <h4 id='h155'>Servicio Técnico Certificado</h4>
        </figure>
      </figure>
    </section>
  );
}

export default Beneficios;
