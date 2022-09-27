function Filter() {
  return (
    <div className="felters">
      <div className="price-felter">
        <label>Price filter</label>
        <div className="range-value">
          <label>Min</label>
          <input type="range" name="min" value="0" min="0" max="1000" />
        </div>
        <div className="range-value">
          <label>Max</label>
          <input type="range" name="max" value="0" min="0" max="1000" />
        </div>
      </div>
      <div className="category-filter">
        <label>Categories</label>
        <ul>
          <li>clothes</li>
          <li>electronic</li>
          <li>games</li>
          <li>clothes</li>
          <li>electronic</li>
          <li>games</li>
        </ul>
      </div>
    </div>
  );
}
export default  Filter;
