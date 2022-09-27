/* eslint-disable jsx-a11y/label-has-associated-control */
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
          <li>clothes</li>
          <li>electronic</li>
          <li>games</li>
          <li>clothes</li>
          <li>electronic</li>
          <li>games</li>
        </ul>
      </fieldset>
    </div>
  );
}
export default Filter;
