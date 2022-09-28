import { Link } from 'react-router-dom';
import './SecondHeader.css';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function SecondHeader(props) {
  const { title, setTitle } = props;
  const [inputSearch, setInput] = useState('');
  return (
    <div className="search-user">
      <div className="container">
        <div className="category-sort">
          <i class="fa-solid fa-arrow-up-wide-short"></i>
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
          <button onClick={() => setTitle(inputSearch)}>
            <i className="fa-solid fa-magnifying-glass" />
          </button>
        </div>
        <div className="right">
          <Link to="/" className="user-info">
            <i class="fa-solid fa-user" />
            <i class="fa-solid fa-sort-down" />
          </Link>
          <Link to="/" className="user-info" /* style={{ display: 'none' }}*/>
            <img src="/green-t-shirt.jpg" alt="product" />
            <span className="username">Username</span>
          </Link>
          <Link to="/" className="cart-link">
            <i class="fa-solid fa-cart-shopping" />
            <span>1</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SecondHeader;
