import { Link } from 'react-router-dom';
import './SecondHeader.css';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function SecondHeader({ title, setTitle, isLogged, setIsLogged, user }) {
  const [inputSearch, setInput] = useState('');
  console.log('avatar', user);

  const status = () => {
    console.log('isLogged', isLogged);
    console.log('user-avatar', user);
    return isLogged.toString() !== 'true' ? (
      <Link to="/" className="user-info">
        <i className="fa-solid fa-user" />
        <i className="fa-solid fa-sort-down" />
        <ul>
          <li>
            <Link to="/users/signin" className="login">
              Login
            </Link>
          </li>
          <li>
            <Link to="/users/signup" className="signup">
              Signup
            </Link>
          </li>
        </ul>
      </Link>
    ) : (
      <Link to="/" className="user-info">
        <img src={user && user.avatar} alt="product" />
        <span className="username">{user && user.username}</span>
      </Link>
    );
  };

  return (
    <div className="search-user">
      <div className="container">
        <div className="category-sort">
          <i className="fa-solid fa-arrow-up-wide-short"></i>
          <span>Shop by Category</span>
        </div>
        <div className="search-bar">
          <input
            type="text"
            id="search"
            name="search"
            placeholder="Search Products"
            // value={inputSearch}
            onKeyPress={(e) => {
              setInput(e.target.value);
              if (e.key == 'Enter') setTitle(e.target.value);
            }}
          />
          <button
            onClick={(e) => {
              setTitle(inputSearch);
              e.target.parentElement.parentElement.firstChild.value = '';
            }}
          >
            <i className="fa-solid fa-magnifying-glass" />
          </button>
        </div>
        <div className="right">
          {/* {status()} */}
          <Link to="/cart" className="cart-link">
            <i className="fa-solid fa-cart-shopping" />
            <span>1</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
export default SecondHeader;
