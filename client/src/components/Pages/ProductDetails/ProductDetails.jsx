import './ProductDetails.css';

function ProductDetails(props) {
  const { title, image, price, description, category_name } = props;
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
