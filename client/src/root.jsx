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
  }, [isLogged]);

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
      <Header isLogged={isLogged} setIsLogged={setIsLogged} user={user} />
      <SecondHeader
        title={title}
        setTitle={setTitle}
        isLogged={isLogged}
        setIsLogged={setIsLogged}
        user={user}
        setUser={setUser}
      />
      <PageTitle pageName={pageName} />
      <Outlet
        context={{
          title,
          setPageName,
          isLogged,
          setIsLogged,
          loading,
          setLoading,
          user,
          setUser,
        }}
      />
      <Footer />
    </>
  );
}

export default Root;
