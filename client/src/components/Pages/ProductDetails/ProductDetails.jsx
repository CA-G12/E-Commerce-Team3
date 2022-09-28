import './ProductDetails.css';

function ProductDetails(props) {
  const { title, image, price, description, category_name } = props;
  return (
    <div class="product-details">
      <div class="container">
        <div class="product-image">
          <img src="../green-t-shirt.jpg" alt="product" />
        </div>
        <div class="product-info">
          <h2 class="title">Product</h2>
          <p class="price">$44.00</p>
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
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
              corporis iusto ipsa mollitia, et quia error architecto quisquam.
              Praesentium, qui hic. Possimus architecto quia nobis voluptas
              praesentium rerum tempora blanditiis.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
