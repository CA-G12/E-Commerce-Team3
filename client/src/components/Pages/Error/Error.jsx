import './Error.css';

function Error() {
  return (
    <div className="error-container">
      <div className="container">
        <h1 className="title">404</h1>
        <p className="description">
          The page you were looking for couldn't be found. The page could be
          removed or you missbled the word while searching for it. Maybe try a
          search?
        </p>
      </div>
    </div>
  );
}

export default Error;
