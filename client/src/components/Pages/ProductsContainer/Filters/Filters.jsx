import './Filters.css';
function Filter(props) {
  const {
    categories,
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
              id="all"
              name="category"
              value="all"
              checked={category == ''}
              onChange={(e) => setCategory('')}
            />
            <label htmlFor="all">All</label>
          </li>
          {categories &&
            categories.map((item) => (
              <li>
                <input
                  type="radio"
                  id={item.id}
                  name="category"
                  value={item.name}
                  checked={category == item.name}
                  onChange={(e) => setCategory(e.target.value)}
                />
                <label htmlFor={item.id}>{item.name}</label>
              </li>
            ))}
        </ul>
      </fieldset>
    </div>
  );
}
export default Filter;
