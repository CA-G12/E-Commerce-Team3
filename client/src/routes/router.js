import { createBrowserRouter } from 'react-router-dom';
import Root from '../root';
import ProductsContainer from '../components/Pages/ProductsContainer/ProductsContainer';

import SignIn from '../components/Pages/users/SignIn.component';

import Signup from '../components/Pages/signup/signup';
import ProductDetails from '../components/Pages/ProductDetails/ProductDetails.jsx';
import Cart from '../components/Pages/Cart/Cart.jsx';
import Error from '../components/Pages/Error/Error';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    // errorElement: <Error />,
    children: [
      { path: '*', element: <Error /> },
      { index: '/', element: <ProductsContainer /> },
      { path: '/users/signin', element: <SignIn /> },
      { path: '/products', element: <ProductsContainer /> },
      { path: '/users/signup', element: <Signup /> },
      { path: '/products/:id', element: <ProductDetails /> },
      { path: '/cart', element: <Cart /> },
    ],
  },
]);
export default router;
