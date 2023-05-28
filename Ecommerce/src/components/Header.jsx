// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Link } from 'react-router-dom'
import mobiLogo from '../public/MOBI.png'

const Header = () => {
  return (
    <header>
      <picture>
        <img src={mobiLogo} alt="" />
      </picture>
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