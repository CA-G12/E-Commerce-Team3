import Filters from './Filters/Filters';
import ProductList from './Products/ProductList';
import Pagination from './Products/Pagination';

function ProductsContainer() {
  return (
    <div className="products-container">
      <Filters />
      <ProductList />
      <Pagination />
    </div>
  );
}

export default ProductsContainer;
