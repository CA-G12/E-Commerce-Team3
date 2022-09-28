import { Link } from 'react-router-dom';

import './Header.css';

function Header() {
  return (
    <header>
      <div className="container">
        <div className="logo">
          <Link to="/">OREBI</Link>
        </div>
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
          <span>
            <a href="/">EN</a>
          </span>
          <span>
            <a href="/">AR</a>
          </span>
        </div>
      </div>
    </header>
  );
}

export default Header;
