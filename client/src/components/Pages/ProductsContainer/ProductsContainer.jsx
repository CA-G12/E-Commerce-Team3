import Filters from './Filters/Filters';
import ProductList from './Products/ProductList';
import Pagination from './Products/Pagination';
import { useState } from 'react';
import { useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import './ProductContainer.css';
import fetchUrl from '../../../utils/fetch';

function ProductsContainer() {
  const { title, setPageName, user, setUser } = useOutletContext();
  const [category, setCategory] = useState('');
  const [priceMin, setPriceMin] = useState(0);
  const [priceMax, setPriceMax] = useState(100);
  const [productList, setProductList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(9);
  const [categories, setCategories] = useState([]);
  const { loading, setLoading } = useOutletContext();

  // // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = productList.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  useEffect(() => {
    setLoading(true);
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
        setLoading(false);
        console.log('Said Is Heere', data);
        setProductList(data);
      })
      .catch((err) => {
        setLoading(false);
        console.log('sdjsdhsjd', err);
      });
  }, [title, category, priceMax, priceMin]);
  setPageName('Products');
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
        <ProductList productList={currentPosts} user={user} />
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
