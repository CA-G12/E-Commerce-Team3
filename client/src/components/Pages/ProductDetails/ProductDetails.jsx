import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './ProductDetails.css';
import fetchUrl from '../../../utils/fetch';
import { ToastContainer, toast } from 'react-toastify';

function ProductDetails() {
  const { id } = useParams();
  const [productDetails, setProductDetails] = useState([]);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    fetch(`/product/${id}`, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((data) => data.json())
      .then((data) => setProductDetails(data[0]));
  }, []);

  const navigate = useNavigate();

  const addToCart = (e) => {
    fetchUrl('POST', '/cart', {
      productId: id,
      userId: 1,
      count: quantity,
    })
      .then((data) => {
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
      .catch(console.log);
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
