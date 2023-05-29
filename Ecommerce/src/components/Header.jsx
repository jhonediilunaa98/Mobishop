// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../public/Logo.svg'; 
import './Header.module.css'

const Header = () => {
  return (
    <header className='hero'>
      <picture className='Logo'>
      <img src={Logo} alt="Logo"/>
      </picture>
      <nav>
          <Link to="/home" className='link'>Home</Link>
          <Link to="/product" className='link'>Product</Link>
          <Link to="/about" className='link'>About</Link>
          <Link to="/contact" className='link'>Contact</Link>
          <Link to="/login" className='link'>Login</Link>
    </nav>
    </header>
  )
}

export default Header