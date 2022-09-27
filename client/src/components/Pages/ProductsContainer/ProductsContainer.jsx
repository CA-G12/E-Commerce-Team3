import Filters from './Filters/Filters';
import ProductList from './Products/ProductList';
import Pagination from './Products/Pagination';
import { useState } from 'react';
import { useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';

function ProductsContainer() {
  const [title] = useOutletContext();
  const [category, setCategory] = useState('');
  const [priceMin, setPriceMin] = useState(0);
  const [priceMax, setPriceMax] = useState(100);
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    fetch(
      `/product/search/?title=${title}&category=${category}&maxPrice=${priceMax}&minPrice=${priceMin}`,
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    )
      .then((data) => data.json())
      .then((data) => {
        console.log(data);
        setProductList(data);
      });
  }, [title, category, priceMax, priceMin]);

  return (
    <div className="products-container">
      <Filters
        category={category}
        setCategory={setCategory}
        priceMin={priceMin}
        setPriceMin={setPriceMin}
        priceMax={priceMax}
        setPriceMax={setPriceMax}
      />
      <ProductList productList={productList} />
      <Pagination />
    </div>
  );
}

export default ProductsContainer;
