// import { a } from 'react-router-dom';
import { useState } from 'react';
import './Header.css';

function Header(isLogged, setIsLogged) {
  console.log(isLogged.isLogged);
  function handleChange() {
    setIsLogged(false);
  }
  return (
    <header>
      <div className="container">
        <div className="logo">OREBI</div>
        <nav className="navbar">
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">Shop</a>
            </li>
            <li>
              <a href="/">About</a>
            </li>
            <li>
              <a href="/">Contact</a>
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
