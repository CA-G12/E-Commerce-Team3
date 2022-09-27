import './Footer.css';
// import { a } from 'react-router-dom';
// import { Link } from 'react-router-dom';

const Footer = () => {
  <footer className="footer">
    <div className="content">
      <div className="menu">
        <h4>MENU</h4>
        <a href="/">Home</a>
        <a href="/">Shop</a>
        <a href="/">About</a>
        <a href="/">Contact</a>
      </div>
      <div className="shop">
        <h4>SHOP</h4>
        <a href="/">Category 1</a>
        <a href="/">Category 2</a>
        <a href="/">Category 3</a>
        <a href="/">Category 4</a>
      </div>
      <div className="help">
        <h4>HELP</h4>
        <a href="/">Privacy Policy</a>
        <a href="/">Terms</a>
        <a href="/">Shipping</a>
        <a href="/">Secure</a>
      </div>
      <div>
        <span>(052) 611-5711</span>
        <span>company@domain.com</span>
      </div>
      <div>
        <h2>Company</h2>
      </div>
    </div>
    <div className="icon">
      <i className="fa-brands fa-facebook-f" />
      <i className="fa-brands fa-aedin-in" />
      <i className="fa-brands fa-instagram" />
    </div>
  </footer>;
};

export default Footer;
