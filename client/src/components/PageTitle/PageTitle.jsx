import './PageTitle.css';
function PageTitle({ pageName }) {
  return (
    <section className="name-page">
      <h1>{pageName}</h1>
    </section>
  );
}

export default PageTitle;
