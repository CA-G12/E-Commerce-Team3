// import { RouterProvider } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import PageTitle from './components/PageTitle/PageTitle';
import SecondHeader from './components/SecondHeader/SecondHeader';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import ProductsContainer from './components/Pages/ProductsContainer/ProductsContainer';
// import router from './routes/router';
import { useState } from 'react';

function Root() {
  const [title, setTitle] = useState('');
  const [pageName, setPageName] = useState('');

  return (
    <>
      <ToastContainer
        position="top-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Header />
      <SecondHeader title={title} setTitle={setTitle} />
      <PageTitle pageName={pageName} />
      <Outlet context={[title, setPageName]} />
      <Footer />
    </>
  );
}

export default Root;
