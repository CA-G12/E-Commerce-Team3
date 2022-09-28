import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './ProductDetails.css';

function ProductDetails() {
  const { id } = useParams();
  const [productDetails, setProductDetails] = useState([]);
  useEffect(() => {
    fetch(`/product/${id}`, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((data) => data.json())
      .then((data) => setProductDetails(data[0]));
  }, []);
  console.log(productDetails);
  const { title, image, price, description, category_name } = productDetails;
  return (
    <div className="product-details">
      <div className="container">
        <div className="product-image">
          <img src="../green-t-shirt.jpg" alt="product" />
        </div>
        <div className="product-info">
          <h2 className="title">Product</h2>
          <p className="price">$44.00</p>
          <div className="quantity">
            <span className="label">Quantity:</span>
            <div className="quantity-control">
              <button className="decrease">-</button>
              <span className="quantity-number">1</span>
              <button className="increase">+</button>
            </div>
          </div>
          <div className="add-to-cart">
            <button className="buy-btn">Add to Cart</button>
          </div>
          <div className="description">
            <h3>Description</h3>
            <p>{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
