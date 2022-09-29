import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header(isLogged, setIsLogged) {
  console.log(isLogged.isLogged);
  function handleChange() {
    setIsLogged(false);
  }
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
        <div className="languages">
          {!isLogged.isLogged ? (
            <span>
              <a href="/" onClick={handleChange}>
                logOut
              </a>
            </span>
          ) : (
            <>
              <span>
                <a href="/users/signin">Sign In</a>
              </span>
              <span>
                <a href="/signup">Sign Up</a>
              </span>
            </>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
