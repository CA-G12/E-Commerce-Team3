import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import fetchUrl from '../../../../utils/fetch';
import { ToastContainer, toast } from 'react-toastify';

function ProductCard(props) {
  const { id, title, image, price } = props.productCard;
  const user = props.user;
  const navigate = useNavigate();

  const addToCart = (e) => {
    const id = e.target.id;
    console.log(e.target.id);

    fetchUrl('POST', '/cart', {
      productId: id,
      userId: user.id,
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
      </Link>
      <div className="product-details">
        <Link to={`/products/${id}`}>
          <p className="product-title">{title}</p>
        </Link>
        <p className="product-price">${price}</p>
      </div>
      <button type="submit" onClick={addToCart} id={id}>
        <i className="fa-solid fa-cart-shopping" />
        Add To Cart
      </button>
      <ToastContainer />
    </div>
  );
}

export default ProductCard;
