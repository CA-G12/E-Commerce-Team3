// import { RouterProvider } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import PageTitle from './components/PageTitle/PageTitle';
import SecondHeader from './components/SecondHeader/SecondHeader';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect, useState } from 'react';
// import ProductsContainer from './components/Pages/ProductsContainer/ProductsContainer';
// import router from './routes/router';

function Root() {
  const [isLogged, setIsLogged] = useState(false);
  useEffect(() => {
    localStorage.getItem('logged');
    setIsLogged(localStorage.getItem('logged'));
  }, []);
  useEffect(() => {
    localStorage.setItem('logged', isLogged);
  }, [isLogged]);
  return (
    <>
      <ToastContainer />
      <Header isLogged={isLogged} setIsLogged={setIsLogged} />
      <SecondHeader />
      <PageTitle />
      <Outlet context={[isLogged, setIsLogged]} />
      <Footer />
    </>
  );
}

export default Root;
