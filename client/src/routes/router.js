import { createBrowserRouter } from 'react-router-dom';
// import ProductsContainer from '../components/Pages/ProductsContainer/ProductsContainer';
import Root from '../root';
// import Footer from './components/Footer/Footer';
// import PageTitle from './components/PageTitle/PageTitle';
// import SecondHeader from './components/SecondHeader/SecondHeader';
import ProductsContainer from '../components/Pages/ProductsContainer/ProductsContainer';
import ProductDetails from '../components/Pages/ProductDetails/ProductDetails.jsx';
import Cart from '../components/Pages/Cart/Cart.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      { index: '/', element: <ProductsContainer /> },
      { path: '/products', element: <ProductsContainer /> },
      { path: '/products/:id', element: <ProductDetails /> },
      { path: '/cart', element: <Cart /> },
    ],
  },
]);
export default router;
