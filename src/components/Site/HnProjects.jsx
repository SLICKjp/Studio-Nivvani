import { projects } from "./homeContent";
import HnButton from "./HnButton";
import "./projects.css";

const HnProjects = () => {
  return (
    <section className="hn-section hn-projects">
      <div className="hn-container">
        <div className="hn-projects__head">
          <p className="hn-eyebrow hn-reveal">Selected work</p>
          <h2 className="hn-heading hn-reveal" style={{ "--delay": "0.1s" }}>
            Crafted by <em>Studio Nivvani</em>
          </h2>
        </div>

        <ul className="hn-projects__grid">
          {projects.map((p, i) => (
            <li key={p.src} className="hn-project hn-reveal" style={{ "--delay": `${(i % 3) * 0.12}s` }}>
              <figure>
                <div className="hn-project__frame">
                  <img src={p.src} alt={p.alt} loading="lazy" width="443" height="545" />
                </div>
                <figcaption className="hn-project__caption">
                  <span className="hn-project__num">{String(i + 1).padStart(2, "0")}</span>
                  <span className="hn-project__label">{p.label}</span>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>

        <div className="hn-projects__cta hn-reveal">
          <HnButton to="/projects" variant="solid">
            View full gallery
          </HnButton>
        </div>
      </div>
    </section>
  );
};

export default HnProjects;
