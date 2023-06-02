import React from 'react'
import ReactDOM from 'react-dom/client'
import Routes from './Routes.jsx'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import UserProvider from './providers/UserProvider.jsx'
//import Router from './components/Router.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserProvider>
    <RouterProvider router={Routes}></RouterProvider>
    </UserProvider> 
  </React.StrictMode>,
)
