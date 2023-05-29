// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Header.module.css'
import Logo from '../public/Logo.svg'; 

import styles from './Header.module.css';

const Header = () => {
  return (
    <header className='hero'>
       <img src={Logo} alt="Logo" className={styles.logo} />
      <nav>
          <Link to="/home">Home</Link>
          <Link to="/product">Product</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/login">Login</Link>
    </nav>
    </header>
  )
}

export default Header