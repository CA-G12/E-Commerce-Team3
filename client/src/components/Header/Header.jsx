import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import fetchUrl from '../../utils/fetch';

function Header({ isLogged, setIsLogged, user }) {
  function handleChange() {
    fetchUrl('GET', '/users/logout').then((result) => {
      console.log(result);
      if (result.status == 200) {
        setIsLogged(false);
        localStorage.setItem('logged', 'false');
      }
    });
  }

  const status = () => {
    console.log('isLogged', isLogged);
    return isLogged.toString() === 'true' ? (
      <>
        <Link to="/">
          <span className="username">welcome {user && user.username}</span>
        </Link>
        <span> | </span>
        <span>
          <Link onClick={handleChange}>logOut</Link>
        </span>
      </>
    ) : (
      <>
        <span>
          <Link to="/users/signin">Sign In</Link>
        </span>
        <span>
          <Link to="/users/signup">Sign Up</Link>
        </span>
      </>
    );
  };

  return (
    <header>
      <div className="container">
        <div className="logo">
          <Link to="/">OREBI</Link>
        </div>
        <nav className="navbar">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/products">Shop</Link>
            </li>
            <li>
              <Link to="/">About</Link>
            </li>
            <li>
              <Link to="/">Contact</Link>
            </li>
          </ul>
        </nav>
        <div className="languages">{status()}</div>
      </div>
    </header>
  );
}

export default Header;
