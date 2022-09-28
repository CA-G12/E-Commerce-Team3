function Pagination(props) {
  const { pageNumber, setPageNumber } = props;

  const handlePageLink = (e) => {
    setPageNumber(e.target.dataset.number);
  };

  return (
    <div className="pagination">
      <i className="fa-regular fa-arrow-left"></i>
      <ul>
        <li>
          <a href="" data-number="1" onClick={handlePageLink}>
            1
          </a>
        </li>
        <li>
          <a href="" data-number="2" onClick={handlePageLink}>
            2
          </a>
        </li>
        <li>
          <a href="" data-number="3" onClick={handlePageLink}>
            3
          </a>
        </li>
        <li>
          <a href="" data-number="4" onClick={handlePageLink}>
            4
          </a>
        </li>
      </ul>
      <i className="fa-regular fa-arrow-right"></i>
    </div>
  );
}

export default Pagination;
