const Card = () => {
  return (
    <section>
      <div className="article-img-wrapper">
        <img src="./illustration-article.svg" alt="HTML & CSS foundations" />
      </div>
      <div className="article-info-wrapper">
        <span className="tag">Learning</span>
        <small className="date">Published 21 Dec 2023</small>
        <h1 className="title">HTML & CSS foundations</h1>
        <p className="brief">
          These languages are the backbone of every website, defining structure,
          content, and presentation.
        </p>
      </div>
      <div className="author-info-wrapper">
        <div className="img-container">
          <img src="./image-avatar.webp" alt="Author avatar" />
        </div>
        <p className="author-name">Greg Hooper</p>
      </div>
    </section>
  );
};

export default Card;
