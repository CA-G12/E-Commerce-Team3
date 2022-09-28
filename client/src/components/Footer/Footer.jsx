import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="content">
        <div className="menu">
          <h4>MENU</h4>
          <Link to="/">Home</Link>
          <Link to="/products">Shop</Link>
          <Link to="/">Linkbout</Link>
          <Link to="/">ContLinkct</Link>
        </div>
        <div className="shop">
          <h4>SHOP</h4>
          <Link to="/">Category 1</Link>
          <Link to="/">Category 2</Link>
          <Link to="/">Category 3</Link>
          <Link to="/">Category 4</Link>
        </div>
        <div className="help">
          <h4>HELP</h4>
          <Link to="/">Privacy Policy</Link>
          <Link to="/">Terms</Link>
          <Link to="/">Shipping</Link>
          <Link to="/">Secure</Link>
        </div>
        <div>
          <span>(052) 611-5711</span>
          <span>compLinkny@domLinkin.com</span>
        </div>
        <div>
          <h2>Company</h2>
        </div>
      </div>
      <div className="icon">
        <i className="fa-brands fa-facebook-f" />
        <i className="fa-brands fa-linked-in" />
        <i className="fa-brands fa-instagram" />
      </div>
    </footer>
  );
};

export default Footer;
