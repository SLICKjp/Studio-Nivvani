import { about } from "./homeContent";
import HnButton from "./HnButton";
import "./about.css";

const HnAbout = () => {
  return (
    <section className="hn-section hn-about" id="hn-about">
      <div className="hn-container hn-about__grid">
        <figure className="hn-about__media hn-reveal">
          <img src={about.image} alt={about.imageAlt} loading="lazy" width="560" height="665" />
        </figure>

        <div className="hn-about__body">
          <p className="hn-eyebrow hn-reveal">Our philosophy of design</p>
          <h2 className="hn-heading hn-reveal" style={{ "--delay": "0.1s" }}>
            Spaces that speak, <em>inspire &amp; endure</em>
          </h2>
          {about.paragraphs.map((p, i) => (
            <p key={i} className="hn-lead hn-reveal" style={{ "--delay": `${0.2 + i * 0.05}s` }}>
              {p}
            </p>
          ))}

          <ul className="hn-pillars">
            {about.pillars.map((p, i) => (
              <li key={p.title} className="hn-pillar hn-reveal" style={{ "--delay": `${0.25 + i * 0.1}s` }}>
                <span className="hn-pillar__num">0{i + 1}</span>
                <div>
                  <h3 className="hn-pillar__title">{p.title}</h3>
                  <p className="hn-pillar__text">{p.text}</p>
                </div>
              </li>
            ))}
          </ul>

          <div className="hn-about__cta hn-reveal">
            <HnButton to="/about" variant="outline">
              More about us
            </HnButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HnAbout;
