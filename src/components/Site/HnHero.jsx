import { useCallback, useEffect, useState } from "react";
import { heroSlides } from "./homeContent";
import HnButton from "./HnButton";
import "./hero.css";

const INTERVAL = 6500;

const HnHero = () => {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const count = heroSlides.length;

  const go = useCallback((i) => setActive((i + count) % count), [count]);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || paused) return;
    const id = setTimeout(() => go(active + 1), INTERVAL);
    return () => clearTimeout(id);
  }, [active, paused, go]);

  useEffect(() => {
    const onVis = () => setPaused(document.hidden);
    document.addEventListener("visibilitychange", onVis);
    return () => document.removeEventListener("visibilitychange", onVis);
  }, []);

  const scrollDown = (e) => {
    e.preventDefault();
    document.getElementById("hn-about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="hn-hero" aria-roledescription="carousel" aria-label="Featured interiors">
      <div className="hn-hero__slides">
        {heroSlides.map((s, i) => (
          <img
            key={s.large}
            className={`hn-hero__slide ${i === active ? "hn-is-active" : ""}`}
            src={s.large}
            srcSet={`${s.small} 1200w, ${s.large} 2400w`}
            sizes="100vw"
            alt={i === active ? s.alt : ""}
            aria-hidden={i !== active}
            fetchPriority={i === 0 ? "high" : "low"}
            decoding="async"
          />
        ))}
      </div>
      <div className="hn-hero__shade" />

      <div className="hn-hero__content">
        <p className="hn-eyebrow hn-hero__eyebrow">Architecture · Interior Design · Styling &amp; Staging</p>
        <h1 className="hn-hero__title">
          Where vision meets <em>design excellence</em>
        </h1>
        <p className="hn-hero__text">
          Spaces that speak, inspire and endure — uniquely yours, where elegance, functionality and individuality
          come together effortlessly.
        </p>
        <div className="hn-hero__actions">
          <HnButton to="/projects" variant="light">
            View gallery
          </HnButton>
        </div>
      </div>

      <div className="hn-hero__controls">
        <span className="hn-hero__count">
          {String(active + 1).padStart(2, "0")} <span>/ {String(count).padStart(2, "0")}</span>
        </span>
        <div className="hn-hero__dots">
          {heroSlides.map((s, i) => (
            <button
              key={s.large}
              className={`hn-hero__dot ${i === active ? "hn-is-active" : ""} ${paused ? "hn-is-paused" : ""}`}
              style={{ "--duration": `${INTERVAL}ms` }}
              onClick={() => go(i)}
              aria-label={`Show slide ${i + 1}`}
              aria-current={i === active}
            >
              <span />
            </button>
          ))}
        </div>
      </div>

      <a href="#hn-about" className="hn-hero__scroll" aria-label="Scroll to content" onClick={scrollDown}>
        <span />
      </a>
    </section>
  );
};

export default HnHero;
