import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './ProductDetails.css';
import fetchUrl from '../../../utils/fetch';
import { ToastContainer, toast } from 'react-toastify';
import { useOutletContext } from 'react-router-dom';

function ProductDetails() {
  const { id } = useParams();
  const [productDetails, setProductDetails] = useState([]);
  const { loading, setLoading } = useOutletContext();
  const [quantity, setQuantity] = useState(1);
  const { title: titleone, setPageName, user, setUser } = useOutletContext();

  useEffect(() => {
    setLoading(true);
    fetch(`/product/${id}`, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((data) => data.json())
      .then((data) => {
        setProductDetails(data[0]);
        setLoading(false);
      });
  }, []);
  setPageName('Product Details');
  const navigate = useNavigate();

  const addToCart = (e) => {
    if (user.token) {
      setLoading(true);
      fetchUrl('POST', '/cart', {
        productId: id,
        userId: user.id,
        count: quantity,
      })
        .then((data) => {
          setLoading(false);
          if (data) {
            console.log(data);
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
        .catch((err) => setLoading(false));
    } else {
      // navigate('/users/signup');
      setLoading(false);
      toast.error('You Have To Sign Up!', {
        position: 'top-left',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  console.log(quantity);
  const { title, image, price, description, category_name } = productDetails;
  return (
    <div className="product-details">
      <div className="container">
        <div className="product-image">
          <img src={image} alt="product" />
        </div>
        <div className="product-info">
          <h2 className="title">{title}</h2>
          <p className="price">${price}</p>
          <div className="quantity">
            <span className="label">Quantity:</span>
            <div className="quantity-control">
              <button
                className="decrease"
                onClick={(e) => setQuantity(quantity - 1)}
              >
                -
              </button>
              <span className="quantity-number">{quantity}</span>
              <button
                className="increase"
                onClick={(e) => setQuantity(quantity + 1)}
              >
                +
              </button>
            </div>
          </div>
          <div className="add-to-cart">
            <button className="buy-btn" onClick={addToCart}>
              Add to Cart
            </button>
          </div>
          <div className="description">
            <h3>Description</h3>
            <p>{description}</p>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default ProductDetails;
