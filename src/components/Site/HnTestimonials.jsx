import { useState } from "react";
import { testimonials } from "./homeContent";
import "./testimonials.css";

const HnTestimonials = () => {
  const [active, setActive] = useState(0);
  const count = testimonials.length;
  const go = (i) => setActive((i + count) % count);
  const t = testimonials[active];

  return (
    <section className="hn-section hn-testimonials" aria-label="Client appreciation">
      <div className="hn-container hn-testimonials__inner">
        <p className="hn-eyebrow hn-reveal">Client appreciation</p>

        <figure className="hn-quote hn-reveal" style={{ "--delay": "0.1s" }} aria-live="polite">
          <span className="hn-quote__mark" aria-hidden="true">
            “
          </span>
          {/* key forces a fresh fade-in each time the quote changes */}
          <div key={active} className="hn-quote__body">
            <blockquote className="hn-quote__text">{t.text}</blockquote>
            <figcaption className="hn-quote__author">
              <img src={t.img} alt="" width="64" height="64" loading="lazy" />
              <span>
                <strong>{t.name}</strong>
                {t.role && <em>{t.role}</em>}
              </span>
            </figcaption>
          </div>
        </figure>

        <div className="hn-quote__nav hn-reveal" style={{ "--delay": "0.2s" }}>
          <button onClick={() => go(active - 1)} aria-label="Previous testimonial">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M20 12H5m6-6-6 6 6 6" fill="none" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          </button>
          <span className="hn-quote__count">
            {String(active + 1).padStart(2, "0")} / {String(count).padStart(2, "0")}
          </span>
          <button onClick={() => go(active + 1)} aria-label="Next testimonial">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M4 12h15m-6-6 6 6-6 6" fill="none" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default HnTestimonials;
