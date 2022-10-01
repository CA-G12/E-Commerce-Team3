import ProductCard from './ProductCard';

function ProductList(props) {
  const { productList, user } = props;

  return (
    <div className="products">
      {productList.length > 0 ? (
        productList.map((item) => {
          return <ProductCard productCard={item} user={user} key={item.id} />;
        })
      ) : (
        <div>NO Products</div>
      )}
    </div>
  );
}

export default ProductList;
