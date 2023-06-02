import React from 'react'
import ReactDOM from 'react-dom/client'
import Routes from './Routes.jsx'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import UserProvider from './providers/UserProvider.jsx'
import { DataProvider } from './components/context/DataProvider.jsx'
//import Router from './components/Router.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <DataProvider>  
    <UserProvider>
    <RouterProvider router={Routes}></RouterProvider>
    </UserProvider> 
    </DataProvider>
  </React.StrictMode>,
)
