// eslint-disable-next-line no-unused-vars
import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'
import Carrito from './Carrito/Carrito'

const Layout = () => {
  return (
    <>
        <Header />
        <Carrito />
        <Outlet />
      <Footer />
    </>
  )
}

export default Layout