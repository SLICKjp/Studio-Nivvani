import { services } from "./homeContent";
import HnButton from "./HnButton";
import "./services.css";

const HnServices = () => {
  return (
    <section className="hn-section hn-services">
      <div className="hn-container">
        <div className="hn-services__head">
          <div>
            <p className="hn-eyebrow hn-reveal">Our services</p>
            <h2 className="hn-heading hn-reveal" style={{ "--delay": "0.1s" }}>
              From first sketch <em>to final detail</em>
            </h2>
          </div>
          <p className="hn-lead hn-reveal" style={{ "--delay": "0.2s" }}>
            From homes to commercial spaces, styling to staging — creative, practical and cost-conscious design.
          </p>
        </div>

        <ol className="hn-services__list">
          {services.map((s, i) => (
            <li key={s.title} className="hn-service hn-reveal" style={{ "--delay": `${i * 0.1}s` }}>
              <div className="hn-service__top">
                <span className="hn-service__num">0{i + 1}</span>
                <img className="hn-service__icon" src={s.icon} alt="" loading="lazy" />
              </div>
              <h3 className="hn-service__title">{s.title}</h3>
              <p className="hn-service__text">{s.text}</p>
            </li>
          ))}
        </ol>

        <div className="hn-services__cta hn-reveal">
          <HnButton to="/services" variant="outline">
            Explore services
          </HnButton>
        </div>
      </div>
    </section>
  );
};

export default HnServices;
