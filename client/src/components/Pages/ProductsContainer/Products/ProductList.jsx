import ProductCard from './ProductCard';

function ProductList(props) {
  const { productList } = props;
  console.log('props', props);
  console.log('products', props.productList);

  return (
    <div className="products">
      {productList ? (
        productList.map((item) => {
          console.log(item);
          return <ProductCard productCard={item} />;
        })
      ) : (
        <div>Loading....</div>
      )}
    </div>
  );
}

export default ProductList;
