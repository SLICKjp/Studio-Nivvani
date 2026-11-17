import HnButton from "./HnButton";
import "./connect.css";

const HnConnect = () => {
  return (
    <section className="hn-connect">
      <div className="hn-container hn-connect__inner">
        <p className="hn-eyebrow hn-connect__eyebrow hn-reveal">Let’s work together</p>
        <h2 className="hn-connect__heading hn-reveal" style={{ "--delay": "0.1s" }}>
          Where vision meets <em>design excellence</em>
        </h2>
        <blockquote className="hn-connect__quote hn-reveal" style={{ "--delay": "0.2s" }}>
          “Let’s create a space that’s uniquely yours — where elegance, functionality and individuality come
          together effortlessly.”
        </blockquote>
        <div className="hn-reveal" style={{ "--delay": "0.3s" }}>
          <HnButton to="/contact" variant="light">
            Get in touch
          </HnButton>
        </div>
      </div>
    </section>
  );
};

export default HnConnect;
