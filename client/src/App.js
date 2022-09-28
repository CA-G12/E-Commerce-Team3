import { RouterProvider } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
// import Footer from './components/Footer/Footer';
// import Header from './components/Header/Header';
// import Footer from './components/Footer/Footer';
// import PageTitle from './components/PageTitle/PageTitle';
// import SecondHeader from './components/SecondHeader/SecondHeader';
// import ProductsContainer from './components/Pages/ProductsContainer/ProductsContainer';
import router from './routes/router';

function App() {
  return (
    <>
      <RouterProvider router={router} />;
    </>
  );
}

export default App;
