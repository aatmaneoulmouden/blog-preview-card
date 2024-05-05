const Card = () => {
  return (
    <section className="group bg-white p-5 rounded-2xl relative mr-2 max-w-96 cursor-pointer transition delay-100 ease-linear hover:mr-4">
      <div className="article-img-wrapper rounded-xl overflow-hidden">
        <img src="./illustration-article.svg" alt="HTML & CSS foundations" className="w-full h-full"/>
      </div>
      <div className="article-info-wrapper pt-5">
        <small className="tag block py-2 px-4 rounded-md w-fit bg-yellow text-sm font-extrabold">
          Learning
        </small>
        <span className="date block mt-3 text-[15px]">
          Published 21 Dec 2023
        </span>
        <h1 className="title mt-4 font-extrabold text-xl transition delay-100 ease-linear group-hover:text-yellow">
          HTML & CSS foundations
        </h1>
        <p className="brief text-grey mt-4">
          These languages are the backbone of every website, defining structure,
          content, and presentation.
        </p>
      </div>
      <div className="author-info-wrapper flex items-center gap-3 mt-5">
        <img src="./image-avatar.webp" alt="Author avatar" className="w-12" />
        <p className="author-name font-extrabold">Greg Hooper</p>
      </div>
      <div className="black-shadow absolute top-2 left-2 w-full h-full bg-black rounded-2xl -z-10 transition delay-100 ease-linear group-hover:top-4 group-hover:left-4"></div>
    </section>
  );
};

export default Card;
