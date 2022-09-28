import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function ProductCard(props) {
  const { id, title, image, price } = props.productCard;

  return (
    <div id={id} className="product-card">
      <Link to={`/products/${id}`}>
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
      </Link>
    </div>
  );
}

export default ProductCard;
