import { createBrowserRouter } from 'react-router-dom';
// import ProductsContainer from '../components/Pages/ProductsContainer/ProductsContainer';
import Root from '../root';
// import Footer from './components/Footer/Footer';
// import PageTitle from './components/PageTitle/PageTitle';
// import SecondHeader from './components/SecondHeader/SecondHeader';
import ProductsContainer from '../components/Pages/ProductsContainer/ProductsContainer';
import SignIn from '../components/Pages/users/SignIn.component';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      { index: '/', element: <ProductsContainer /> },
      { path: '/users/signin', element: <SignIn /> },
    ],
  },
]);
export default router;
