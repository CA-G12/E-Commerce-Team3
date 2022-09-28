// import { RouterProvider } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import PageTitle from './components/PageTitle/PageTitle';
import SecondHeader from './components/SecondHeader/SecondHeader';
// import ProductsContainer from './components/Pages/ProductsContainer/ProductsContainer';
// import router from './routes/router';
import { useState } from 'react';
import { ToastContainer } from 'react-toastify';

function Root() {
  const [title, setTitle] = useState('');
  return (
    <>
      <Header />
      <SecondHeader title={title} setTitle={setTitle} />
      <PageTitle />
      <Outlet context={[title]} />
      <Footer />
    </>
  );
}

export default Root;
