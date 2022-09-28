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
              value="clothes"
              checked={category == 'clothes'}
              onChange={(e) => setCategory(e.target.value)}
            />
            <label htmlFor="clothes">clothes</label>
          </li>
          <li>
            <input
              type="radio"
              id="electronic"
              name="category"
              value="electronic"
              checked={category == 'electronic'}
              onChange={(e) => setCategory(e.target.value)}
            />
            <label htmlFor="electronic">electronic</label>
          </li>
          <li>
            <input
              type="radio"
              id="games"
              name="category"
              value="games"
              checked={category == 'games'}
              onChange={(e) => setCategory(e.target.value)}
            />
            <label htmlFor="games">games</label>
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
