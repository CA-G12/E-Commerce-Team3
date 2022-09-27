// import { RouterProvider } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import PageTitle from './components/PageTitle/PageTitle';
import SecondHeader from './components/SecondHeader/SecondHeader';
// import ProductsContainer from './components/Pages/ProductsContainer/ProductsContainer';
// import router from './routes/router';

function Root() {
  return (
    <>
      <Header />
      <SecondHeader />
      <PageTitle />
      <Outlet />
      <Footer />
    </>
  );
}

export default Root;
