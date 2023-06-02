import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Footer/Footer.module.css';
import Logo from '../public/MobiShopBlanco.svg';
import { Button } from './Button';
import {FontAwesomeIcon} from '@Fortawesome/react-fontawesome';
import {faSquareInstagram,
    faFacebook,
    faTwitter,
    faYoutube,
}from '@Fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <section className={styles['footer-content']}>
      <picture>
          <img src={Logo} alt="Logo" className={styles.logo} />
        </picture>
        <section className={styles['footer-subscription']}>
        <p className={styles['footer-subscription-heading']}>
          Suscribete y recibe el 10% OFF
        </p>
        <h6 className={styles['footer-subscription-text']}>
          Puedes anular la suscripción en cualquier momento
        </h6>
        <article className={styles['input-areas']}>
          <form>
            <article className={styles['input-row']}>
                <input
                  className={styles['footer-input']}
                  name="email"
                  type="email"
                  placeholder="Escribe tu Email"
                />
                <Button buttonStyle="btn--outline">Subscrirse</Button>
              </article>
          </form>
        </article>
      </section>
        <ul className="RedesSociales">
      <FontAwesomeIcon icon={faSquareInstagram}/>
      <FontAwesomeIcon icon={faFacebook}/>
      <FontAwesomeIcon icon={faTwitter}/>
      <FontAwesomeIcon icon={faYoutube}/>
      </ul>
      </section>
        <nav className={styles['footer-nav']}>
              <Link to="/" className={styles.link}>Home</Link>
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