import { Link } from 'react-router-dom';

function ProductCard(props) {
  const { title, image, price } = props.productCard;
  console.log('product card', title, image, price);
  return (
    <div className="product-card">
      <div className="product-image">
        <img src={image} alt={title} />
      </div>
      <div className="product-details">
        <p className="product-title">{title}</p>
        <p className="product-price">${price}</p>
      </div>
      <button type="submit">
        <Link to="/">
          <i className="fa-solid fa-cart-shopping" />
          Add To Cart
        </Link>
      </button>
    </div>
  );
}

export default ProductCard;
