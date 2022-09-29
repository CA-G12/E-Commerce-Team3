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
  // const [cartNumber, setCartNumber] = useState(0);

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
      <PageTitle />
      <Outlet context={[title]} />
      <Footer />
    </>
  );
}

export default Root;
