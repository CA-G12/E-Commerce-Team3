import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Pagination() {
  return (
    <div className="pagination">
      <FontAwesomeIcon icon="fa-regular fa-arrow-left" />
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
      </ul>
      <FontAwesomeIcon icon="fa-regular fa-arrow-right" />
    </div>
  );
}

export default Pagination;
