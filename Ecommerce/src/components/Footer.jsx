// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Footer/Footer.module.css';
import Logo from '../public/Logo.svg';
import {FontAwesomeIcon} from '@Fortawesome/react-fontawesome';
import {faSquareInstagram,
    faFacebook,
    faTwitter,
    faYoutube,
}from '@Fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles['footer-content']}>
      <picture>
          <img src={Logo} alt="Logo" className={styles.logo} />
        </picture>
        <section className="RedesSociales">
      <FontAwesomeIcon icon={faSquareInstagram}/>
      <FontAwesomeIcon icon={faFacebook}/>
      <FontAwesomeIcon icon={faTwitter}/>
      <FontAwesomeIcon icon={faYoutube}/>
      </section>
      </div>
        <nav className={styles['footer-nav']}>
              <Link to="/home" className={styles.link}>Home</Link>
              <Link to="/product" className={styles.link}>Product</Link>
              <Link to="/about" className={styles.link}>About</Link>
              <Link to="/contact" className={styles.link}>Contact</Link>
        </nav>
      
      <p className={styles['rights-text']}>
        Todos los derechos reservados - MOBISHOP &copy;
      </p>
      
    </footer>
  );
}

export default Footer;