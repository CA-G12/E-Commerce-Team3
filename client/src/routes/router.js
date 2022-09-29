import { createBrowserRouter } from 'react-router-dom';
// import ProductsContainer from '../components/Pages/ProductsContainer/ProductsContainer';
import Root from '../root';
// import Footer from './components/Footer/Footer';
// import PageTitle from './components/PageTitle/PageTitle';
// import SecondHeader from './components/SecondHeader/SecondHeader';
import ProductsContainer from '../components/Pages/ProductsContainer/ProductsContainer';
import Signup from '../components/Pages/signup/signup';
import ProductDetails from '../components/Pages/ProductDetails/ProductDetails.jsx';
import Cart from '../components/Pages/Cart/Cart.jsx';
import Error from '../components/Pages/Error/Error';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <Error />,
    children: [
      { path: '*', element: <Error /> },
      { index: '/', element: <ProductsContainer /> },
      { path: '/products', element: <ProductsContainer /> },
<<<<<<< HEAD
      {
        path: '/signup',
        element: <Signup />,
      },
=======
      { path: '/products/:id', element: <ProductDetails /> },
      { path: '/cart', element: <Cart /> },
>>>>>>> main
    ],
  },
]);
export default router;
