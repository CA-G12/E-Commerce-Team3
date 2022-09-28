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
    <div class="product-details">
      <div class="container">
        <div class="product-image">
          <img src={image} alt="product" />
        </div>
        <div class="product-info">
          <h2 class="title">{title}</h2>
          <p class="price">${price}</p>
          <div class="quantity">
            <span class="label">Quantity:</span>
            <div class="quantity-control">
              <button class="decrease">-</button>
              <span class="quantity-number">1</span>
              <button class="increase">+</button>
            </div>
          </div>
          <div class="add-to-cart">
            <button class="buy-btn">Add to Cart</button>
          </div>
          <div class="description">
            <h3>Description</h3>
            <p>{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
