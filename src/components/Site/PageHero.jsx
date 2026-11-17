import "./pagehero.css";

// Photo banner at the top of each inner page.
const PageHero = ({ image, eyebrow, title, children }) => {
  return (
    <section className="hn-pagehero">
      <img
        className="hn-pagehero__img"
        src={image.large}
        srcSet={`${image.small} 1200w, ${image.large} 2400w`}
        sizes="100vw"
        alt=""
        fetchPriority="high"
      />
      <div className="hn-pagehero__shade" />
      <div className="hn-pagehero__content">
        <p className="hn-eyebrow hn-pagehero__eyebrow">{eyebrow}</p>
        <h1 className="hn-pagehero__title">{title}</h1>
        {children && <p className="hn-pagehero__text">{children}</p>}
      </div>
    </section>
  );
};

export default PageHero;
