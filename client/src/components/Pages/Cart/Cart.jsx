import './Cart.css';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
function Cart() {
  const [productCarts, setCart] = useState([]);
  const [count, setCount] = useState(0);

  const increase = (e, quantity) => {
    const id = e.target.id;
    const productQuantity = +quantity + 1;
    setCount(productQuantity);
    // const product = productCarts.filter((item) => item.id === id);
    fetch('/cart', {
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        productId: id,
        userId: 1,
        count: productQuantity,
      }),
      method: 'PUT',
    })
      .then((data) => data.json())
      .then((data) => {
        console.log('product', data);
      });
  };

  const decrease = (e, quantity) => {
    const id = e.target.id;
    const productQuantity = +quantity - 1;
    setCount(productQuantity);
    // const product = productCarts.filter((item) => item.id === id);
    fetch('/cart', {
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        productId: id,
        userId: 1,
        count: productQuantity,
      }),
      method: 'PUT',
    })
      .then((data) => data.json())
      .then((data) => {
        console.log('product', data);
      });
  };

  const deleteProduct = (e) => {
    const id = e.target.id;
    setCount('delete');
    // const product = productCarts.filter((item) => item.id === id);
    fetch('/cart', {
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        productId: id,
        userId: 1,
      }),
      method: 'DELETE',
    })
      .then((data) => data.json())
      .then((data) => {
        console.log('product', data);
      });
  };

  useEffect(() => {
    fetch('/cart/1', {
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((data) => data.json())
      .then((data) => {
        console.log(data);
        setCart(data);
      });
  }, [count]);
  return (
    <>
      <section className="products">
        <div className="header">
          <div>Product</div>
          <div>Price</div>
          <div>Quantity</div>
          <div>Total</div>
        </div>
        {productCarts.map((ele) => (
          <div className="item">
            <div className="product-img">
              <i
                className="fa-solid fa-xmark"
                id={ele.id}
                onClick={deleteProduct}
              ></i>
              <Link to={`/products/${ele.id}`}>
                <img src={ele.image} alt={ele.title} />
              </Link>
              <p>{ele.title}</p>
            </div>
            <div className="price">${ele.price}</div>
            <div className="quantity">
              <i
                className="fa-solid fa-minus"
                id={ele.id}
                onClick={(e) => decrease(e, ele.count)}
              ></i>
              <span>{ele.count}</span>
              <i
                className="fa-solid fa-plus"
                id={ele.id}
                onClick={(e) => increase(e, ele.count)}
              ></i>
            </div>
            <div>${ele.count * ele.price}</div>
          </div>
        ))}
      </section>
      <section className="total">
        <div>
          <p>Total</p>
          <p className="number">
            $
            {productCarts.reduce(
              (acc, cur) => acc + +cur.price * +cur.count,
              0
            )}
          </p>
        </div>
        <button>Proceed to Checkout</button>
      </section>
    </>
  );
}

export default Cart;
