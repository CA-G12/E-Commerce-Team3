import './Filters.css';
function Filter(props) {
  const {
    category,
    setCategory,
    priceMin,
    setPriceMin,
    priceMax,
    setPriceMax,
  } = props;
  console.log('props', category, priceMin, priceMax);
  return (
    <div className="filters">
      <fieldset className="price-filter">
        <legend>Price filter</legend>
        <div className="range-value" id="range">
          <label htmlFor="min">
            Min
            <input
              type="range"
              id="min"
              name="min"
              min="0"
              max="100"
              value={priceMin}
              onChange={(e) => {
                setPriceMin(e.target.value);
              }}
            />
          </label>
        </div>
        <div className="range-value" id="range">
          <label htmlFor="max">Max</label>
          <input
            type="range"
            id="max"
            name="max"
            value={priceMax}
            min="0"
            max="100"
            onChange={(e) => {
              setPriceMax(e.target.value);
            }}
          />
        </div>
      </fieldset>
      <fieldset className="category-filter">
        <legend>Categories</legend>
        <ul>
          <li>
            <input
              type="radio"
              id="clothes"
              name="category"
              value="shoes"
              checked={category == 'shoes'}
              onChange={(e) => setCategory(e.target.value)}
            />
            <label htmlFor="shoes">shoes</label>
          </li>
          <li>
            <input
              type="radio"
              id="jewelry"
              name="category"
              value="jewelry"
              checked={category == 'jewelry'}
              onChange={(e) => setCategory(e.target.value)}
            />
            <label htmlFor="electronic">jewelry</label>
          </li>
          <li>
            <input
              type="radio"
              id="Jeans"
              name="category"
              value="Jeans"
              checked={category == 'Jeans'}
              onChange={(e) => setCategory(e.target.value)}
            />
            <label htmlFor="games">Jeans</label>
          </li>
          <li>
            <input
              type="radio"
              id="shirts"
              name="category"
              value="shirts"
              checked={category == 'shirts'}
              onChange={(e) => setCategory(e.target.value)}
            />
            <label htmlFor="shirts">shirts</label>
          </li>
        </ul>
      </fieldset>
    </div>
  );
}
export default Filter;
