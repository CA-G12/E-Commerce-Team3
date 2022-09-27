// import { Link } from 'react-router-dom';

function ProductCard() {
  return (
    <div className="product-card">
      <div className="product-image">
        <img
          src="https://images.unsplash.com/photo-1664058986963-5f531744c710?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=846&q=80"
          alt=""
        />
      </div>
      <div className="product-details">
        <p className="product-title">title</p>
        <p className="product-price">$30.00</p>
      </div>
      <button type="submit">
        {/* <Link to="/">
          <i className="fa-solid fa-cart-shopping" />
          Add To Cart
        </Link> */}
      </button>
    </div>
  );
}

export default ProductCard;
