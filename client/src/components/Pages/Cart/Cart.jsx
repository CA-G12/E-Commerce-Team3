import './Cart.css';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import fetchUrl from '../../../utils/fetch';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useOutletContext } from 'react-router-dom';
function Cart() {
  const [productCarts, setCart] = useState([]);
  const [count, setCount] = useState(0);
  const [title, setPageName] = useOutletContext();
  const changeValue = (e, quantity) => {
    const id = e.target.id;
    setCount(quantity);
    fetchUrl('PUT', '/cart', {
      productId: id,
      userId: 1,
      count: quantity,
    }).then((data) => {
      console.log('product', data);
    });
  };
  setPageName('Cart');
  const deleteProduct = (e) => {
    const id = e.target.id;
    setCount(+id + 1);
    fetchUrl('DELETE', '/cart', {
      productId: id,
      userId: 1,
    }).then((data) => {
      console.log('product', data, 444);
      toast.error('Product Deleted!', {
        position: 'top-left',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
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
      <section className="products-sec">
        <div className="header">
          <div>Product</div>
          <div>Price</div>
          <div>Quantity</div>
          <div>Total</div>
        </div>
        {productCarts.map((ele) => (
          <div className="item" key={ele.id}>
            <div className="product-img">
              <i
                className="fa-solid fa-xmark"
                id={ele.id}
                onClick={(e) => {
                  deleteProduct(e);
                }}
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
                onClick={(e) => changeValue(e, +ele.count - 1)}
              ></i>
              <span>{ele.count}</span>
              <i
                className="fa-solid fa-plus"
                id={ele.id}
                onClick={(e) => changeValue(e, +ele.count + 1)}
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

        {/* Same as */}
      </section>
      <ToastContainer />
    </>
  );
}

export default Cart;
