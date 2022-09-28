import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import fetchUrl from '../../../../utils/fetch';

function ProductCard(props) {
  const { id, title, image, price } = props.productCard;
  const navigate = useNavigate();

  const addToCart = (e) => {
    const id = e.target.parentElement.parentElement.parentElement.id;
    console.log(e.target.parentElement.parentElement);
    fetchUrl('POST', '/cart', {
      productId: id,
      userId: 1,
      count: 1,
    })
      .then((data) => {
        if (data) {
          navigate(`/cart`);
        }
      })
      .catch(console.log);
  };

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
        <button type="submit" onClick={addToCart}>
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
