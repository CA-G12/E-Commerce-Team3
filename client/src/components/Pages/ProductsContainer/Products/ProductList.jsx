import ProductCard from './ProductCard';

function ProductList(props) {
  const { productList, user } = props;
  // console.log('props', props);
  // console.log('products', props.productList);

  return (
    <div className="products">
      {productList ? (
        productList.map((item) => {
          // console.log(item);
          return <ProductCard productCard={item} user={user} key={item.id} />;
        })
      ) : (
        <div>Loading....</div>
      )}
    </div>
  );
}

export default ProductList;
