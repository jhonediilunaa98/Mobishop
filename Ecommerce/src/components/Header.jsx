import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../public/Logo.svg';
import './Header.module.css';
import caart from '../assets/caart.svg';
import UserContext from '../context/UserContext';
import { useContext } from 'react';
import { DataContext } from './context/DataProvider';

const Header = () => {
  const [isNavActive, setNavActive] = useState(false);

  const { user } = useContext(UserContext);

  const Logout = () => {
    window.location.reload();
  };

  const toggleNav = () => {
    setNavActive(!isNavActive);
  };

  const value = useContext(DataContext)
  const [menu, setMenu] = value.menu;
  const [carrito] = value.carrito;

  const toogleMenu = () => {
    setMenu(!menu);
  }

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
          <div className="cartt" >
            <Link to="/carrito" className="cart-link" onClick={toogleMenu}>
              <img className="cart-icon" src={caart} alt="Carrito de Compra" />
              <span className="spa itemm__total">{carrito.length}</span>
            </Link>
          </div>
        </nav>
        <div className="login">
        {user ? (
            <button onClick={Logout}>Cerrar Sesión</button>
            ) : (
            <Link to="/login">Iniciar Sesión</Link>
        )}
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
