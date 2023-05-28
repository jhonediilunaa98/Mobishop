import { createBrowserRouter } from 'react-router-dom';
import Home from './components/Home';
 //import Header from './components/Header';
//import Footer from './components/Footer';
import About from './components/About';
import Product from './components/Product';
import Contact from './components/Contact';
import Header from './components/Header';


const App = createBrowserRouter(
[
    
    {
      path: "/",
      element: <Header />,
    },
    {
        path: "/home",
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
]);

export default App;

