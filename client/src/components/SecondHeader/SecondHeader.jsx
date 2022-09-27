import { Link } from 'react-router-dom';
import './SecondHeader.css';
import { useState } from 'react';

function SecondHeader(props) {
  const { title, setTitle } = props;
  const [inputSearch, setInput] = useState('');
  return (
    <div className="search-user">
      <div className="container">
        <div className="category-sort">
          <i className="fa-solid fa-arrow-up-wide-short" />
          <span>Shop by Category</span>
        </div>
        <div className="search-bar">
          <input
            type="search"
            id="search"
            name="search"
            placeholder="Search Products"
            value={inputSearch}
            onChange={(e) => {
              // if (e.key == 'Enter')
              setInput(e.target.value);
            }}
          />
          <button onClick={() => setTitle(inputSearch)}>search</button>
          <i className="fa-solid fa-magnifying-glass" />
        </div>
        <div className="right">
          <Link to="/" className="user-box">
            <i className="fa-solid fa-user" />
            <i className="fa-solid fa-sort-down" />
          </Link>
          <Link to="/" className="user-box" style={{ display: 'none' }}>
            <img src="/" alt="product" />
            <span className="username">Username</span>
          </Link>
          <Link to="/" className="cart-link">
            <i className="fa-solid fa-cart-shopping" />
            <span>1</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SecondHeader;
