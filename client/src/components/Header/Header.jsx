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
          <span>
            <Link to="/">EN</Link>
          </span>
          <span>
            <Link to="/">AR</Link>
          </span>
        </div>
      </div>
    </header>
  );
}

export default Header;
