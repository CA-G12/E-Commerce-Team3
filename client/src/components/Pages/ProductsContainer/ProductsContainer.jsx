import Filters from './Filters/Filters';
import ProductList from './Products/ProductList';
import Pagination from './Products/Pagination';
import { useState } from 'react';
import { useEffect } from 'react';
// import axios from 'axios';

function ProductsContainer() {
  const [title, setTitle] = useState('');
  const [category, setcategory] = useState('');
  const [priceMin, setpriceMin] = useState(0);
  const [priceMax, setppriceMax] = useState(1000);
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    fetch('/product/search/', {
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((data) => data.json())
      .then((data) => {
        console.log(data);
        setProductList(data);
      });
  }, []);

  return (
    <div className="products-container">
      <Filters />
      <ProductList productList={productList} />
      <Pagination />
    </div>
  );
}

export default ProductsContainer;
