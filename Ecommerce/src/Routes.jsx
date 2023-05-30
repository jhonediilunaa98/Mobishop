import { createBrowserRouter } from 'react-router-dom';
import Home from './components/Home';
 //import Header from './components/Header';
//import Footer from './components/Footer';
import About from './components/About';
import Product from './components/Product';
import Contact from './components/Contact';
//import Header from './components/Header';
import Layout from './components/Layout';
import Login from './components/buttons/Login';
import Nuevacuenta from './components/buttons/Nuevacuenta'


const App = createBrowserRouter(
[
    
    {
      path: "/",
      element: <Layout />,
      children: [
        {
        path: "/",
        element: <Home />,
    },
    {
        path: "/product",
        element: <Product />
    },
    {
        path: "/about",
        element: <About />
    },
    {
      path: "/contact",
      element: <Contact />
    },
    {
      path: "/login",
      element: <Login />
    },
    {
      path: "/nuevacuenta",
      element: <Nuevacuenta />
    },
      ]
    }
    
]);

export default App;

