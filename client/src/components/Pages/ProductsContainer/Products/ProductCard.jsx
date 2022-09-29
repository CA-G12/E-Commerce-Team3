import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import fetchUrl from '../../../../utils/fetch';
import { ToastContainer, toast } from 'react-toastify';

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
          toast.success('Product added successfully!', {
            position: 'top-left',
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          // navigate(`/cart`);
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
          <i className="fa-solid fa-cart-shopping" />
          Add To Cart
        </button>
      </Link>
      <ToastContainer />
    </div>
  );
}

export default ProductCard;
