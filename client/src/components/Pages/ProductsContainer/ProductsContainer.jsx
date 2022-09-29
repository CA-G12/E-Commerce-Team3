import Filters from './Filters/Filters';
import ProductList from './Products/ProductList';
import Pagination from './Products/Pagination';
import { useState } from 'react';
import { useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import fetchUrl from '../../../utils/fetch';
import './ProductContainer.css';


function ProductsContainer() {
  const [title, cartNumber] = useOutletContext();
  const [category, setCategory] = useState('');
  const [priceMin, setPriceMin] = useState(0);
  const [priceMax, setPriceMax] = useState(100);
  const [productList, setProductList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(3);
  const [categories, setCategories] = useState([]);
  const [postsPerPage] = useState(10);


  // // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = productList.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  useEffect(() => {
    fetchUrl('GET', `/categories/`)
      .then((data) => {
        setCategories(data);
      })
      .then(() =>
        fetchUrl(
          'GET',
          `/product/search/?title=${title}&category=${category}&maxPrice=${priceMax}&minPrice=${priceMin}`
        )
      )
      .then((data) => {
        setProductList(data);
      });
  }, [title, category, priceMax, priceMin]);

  return (
    <div className="products-container">
<div className="filter-product">
      <Filters
        categories={categories}
        category={category}
        setCategory={setCategory}
        priceMin={priceMin}
        setPriceMin={setPriceMin}
        priceMax={priceMax}
        setPriceMax={setPriceMax}
      />
      <ProductList productList={currentPosts} />
         </div>
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={productList.length}
        paginate={paginate}
      />
    </div>
  );
}

export default ProductsContainer;
