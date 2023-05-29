// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Link } from 'react-router-dom'
//import mobiLogo from '../public/MOBI.png'
import './Header.module.css'

const Header = () => {
  return (
    <header className='hero'>
        {/* <img  src={mobiLogo} alt=""className='logo' /> */}
        <h1 className='title-header'>MOBISHOP</h1>
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