import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../public/Logo.svg';
import './Header.module.css';
import caart from '../assets/caart.svg';

const Header = () => {
  const [isNavActive, setNavActive] = useState(false);

  const toggleNav = () => {
    setNavActive(!isNavActive);
  };

  return (
    <header>
      <Link to="/" className="logo-link">
        <picture>
          <img className="logo-img" src={Logo} alt="" />
        </picture>
      </Link>
      <div className="header-right">
        <nav className={isNavActive ? 'active' : ''}>
          <ul className="header-links">
            <li>
              <Link to="/product">Productos</Link>
            </li>
            <li>
              <Link to="/about">Nosotros</Link>
            </li>
            <li>
              <Link to="/contact">Contacto</Link>
            </li>
          </ul>
          <div className="cartt">
            <Link to="/cart" className="cart-link">
              <img className="cart-icon" src={caart} alt="Carrito de Compra" />
              <span className="spa itemm__total">0</span>
            </Link>
          </div>
        </nav>
        <div className="login">
          <Link to="/login">Sign in</Link>
        </div>
        <div className="hamburger" onClick={toggleNav}>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </header>
  );
};

export default Header;
