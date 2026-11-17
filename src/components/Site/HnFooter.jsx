import { Link } from "react-router-dom";
import { contact, navLinks } from "./homeContent";
import logoLight from "../../assets/Footer/footer_logo_one.png";
import "./footer.css";

const HnFooter = () => {
  return (
    <footer className="hn-footer">
      <div className="hn-container">
        <div className="hn-footer__top">
          <div className="hn-footer__brand">
            <Link to="/" className="hn-footer__logo" aria-label="Studio Nivvani — home">
              <img src={logoLight} alt="" width="519" height="122" loading="lazy" />
            </Link>
            <p>
              At Studio Nivvani, we bring your vision to life — from homes to commercial spaces, styling to staging —
              with creative, practical and cost-conscious design.
            </p>
          </div>

          <nav className="hn-footer__col" aria-label="Footer">
            <h3>Explore</h3>
            <ul>
              {navLinks.slice(1).map((l) => (
                <li key={l.to}>
                  <Link to={l.to}>{l.label}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="hn-footer__col">
            <h3>Contact</h3>
            <ul>
              <li>
                <span className="hn-footer__label">Email</span>
                <a href={`mailto:${contact.email}`}>{contact.email}</a>
              </li>
              <li>
                <span className="hn-footer__label">Follow</span>
                <span className="hn-footer__social">
                  <a href={contact.instagram} target="_blank" rel="noopener noreferrer">
                    Instagram
                  </a>
                  <a href={contact.linkedin} target="_blank" rel="noopener noreferrer">
                    LinkedIn
                  </a>
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="hn-footer__bottom">
          <span>© {new Date().getFullYear()} Studio Nivvani. All rights reserved.</span>
          <a href="https://portfolio-website-five-sable-75.vercel.app/" target="_blank" rel="noopener noreferrer">
            Developed by Jathin Prakash
          </a>
        </div>
      </div>
    </footer>
  );
};

export default HnFooter;
