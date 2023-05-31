import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../public/Logo.svg';
import './Header.module.css';

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
            <Link to="/product">Productos</Link>
            <Link to="/about">Nosotros</Link>
            <Link to="/contact">Contacto</Link>
         </ul>
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