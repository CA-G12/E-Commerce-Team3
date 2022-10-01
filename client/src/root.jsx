// import { RouterProvider } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import PageTitle from './components/PageTitle/PageTitle';
import SecondHeader from './components/SecondHeader/SecondHeader';
import SpinnerComponent from './components/spinner/Spinner.component';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect, useState } from 'react';

function Root() {
  const [title, setTitle] = useState('');
  const [pageName, setPageName] = useState('');
  const [isLogged, setIsLogged] = useState(false);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    localStorage.getItem('logged');
    setIsLogged(localStorage.getItem('logged'));
  }, []);
  useEffect(() => {
    localStorage.setItem('logged', isLogged);
  }, [isLogged]);
  return (
    <>
      <SpinnerComponent loading={loading} />
      <ToastContainer />
      <Header />
      <SecondHeader title={title} setTitle={setTitle} />
      <PageTitle pageName={pageName} />
      <Outlet
        context={{
          title,
          setPageName,
          isLogged,
          setIsLogged,
          loading,
          setLoading,
        }}
      />
      <Footer />
    </>
  );
}

export default Root;
