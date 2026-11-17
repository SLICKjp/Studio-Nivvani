import { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { navLinks } from "./homeContent";
import logoDark from "../../assets/Navbar/logo_one.png";
import logoLight from "../../assets/Footer/footer_logo_one.png";
import "./header.css";

const HnHeader = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("hn-menu-open", open);
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.classList.remove("hn-menu-open");
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header className={`hn-header ${scrolled ? "hn-header--solid" : ""} ${open ? "hn-header--open" : ""}`}>
      <div className="hn-header__inner">
        <Link to="/" className="hn-logo" onClick={close} aria-label="Studio Nivvani — home">
          <img className="hn-logo__light" src={logoLight} alt="" width="519" height="122" />
          <img className="hn-logo__dark" src={logoDark} alt="" width="392" height="80" />
        </Link>

        <nav className="hn-nav" aria-label="Main">
          <ul id="hn-site-menu" className="hn-nav__list">
            {navLinks.map((link, i) => (
              <li key={link.to} style={{ "--i": i }}>
                <NavLink to={link.to} end onClick={close}>
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <button
          className="hn-menu-toggle"
          aria-expanded={open}
          aria-controls="hn-site-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((o) => !o)}
        >
          <span />
          <span />
        </button>
      </div>
    </header>
  );
};

export default HnHeader;
