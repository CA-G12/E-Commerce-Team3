// import { RouterProvider } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import PageTitle from './components/PageTitle/PageTitle';
import SecondHeader from './components/SecondHeader/SecondHeader';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useEffect, useState } from 'react';

function Root() {
  const [title, setTitle] = useState('');
  const [pageName, setPageName] = useState('');
  const [isLogged, setIsLogged] = useState(false);
  const [user, setUser] = useState({ token: false });

  useEffect(() => {
    fetch('/users/checkAuth')
      .then((data) => data.json())
      .then((data) => {
        console.log('check auth data', data);
        if (data.isLogged) {
          setUser({ token: true, ...data });
        } else {
          setUser({ token: false });
        }
      });
  }, []);

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
      <Header />
      <SecondHeader title={title} setTitle={setTitle} />
      <PageTitle pageName={pageName} />
      <Outlet
        context={[title, setPageName, user, setUser, isLogged, setIsLogged]}
      />

      <Footer />
    </>
  );
}

export default Root;
