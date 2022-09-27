function Filter() {
  return (
    <div className="felters">
      <fieldset className="price-felter">
        <legend>Price filter</legend>
        <div className="range-value" id="range">
          <label htmlFor="min">
            Min
            <input
              type="range"
              id="min"
              name="min"
              min="0"
              max="1000"
              onChange={() => {}}
            />
          </label>
        </div>
        <div className="range-value" id="range">
          <label htmlFor="max">Max</label>
          <input
            type="range"
            id="max"
            name="max"
            value="0"
            min="0"
            max="1000"
            onChange={() => {}}
          />
        </div>
      </fieldset>
      <fieldset className="category-filter">
        <legend>Categories</legend>
        <ul>
          <li>
            <input type="radio" id="clothes" name="category" values="clothes" />
            <label htmlFor="clothes">clothes</label>
          </li>
          <li>
            <input
              type="radio"
              id="electronic"
              name="category"
              values="electronic"
            />
            <label htmlFor="electronic">electronic</label>
          </li>
          <li>
            <input type="radio" id="games" name="category" values="games" />
            <label htmlFor="games">games</label>
          </li>
          <li>
            <input type="radio" id="shirts" name="category" values="shirts" />
            <label htmlFor="shirts">shirts</label>
          </li>
        </ul>
      </fieldset>
    </div>
  );
}
export default Filter;
