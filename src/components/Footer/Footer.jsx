import "./footer.css";
import footer_logo from "../../assets/Footer/footer_logo.png";
import mail from "../../assets/Footer/mail.png";
import fb from "../../assets/Footer/fb.png";
import insta from "../../assets/Footer/insta.png";
import linkedin from "../../assets/Footer/linkedin.png";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-logo">
        <img src={footer_logo} alt="" />
        <p className="footer-text">
          At Studio Nivvani, we bring your vision to life- from homes to
          commercial spaces,styling to staging-with creative,practical and
          cost-conscious design.
        </p>
      </div>
      <div className="footer-links">
        <p>About</p>
        <p>Projects</p>
        <p>Services</p>
        <p>Contact</p>
      </div>
      <div className="footer-contact">
        <p>Contact Us</p>
        <div className="footer-mail">
          <img src={mail} alt="" />
          <p className="footer-mail-text">studionivvani@gmail.com</p>
        </div>
        <div className="footer-socials">
          <img src={fb} alt="" />
          <img src={insta} alt="" srcset="" />
          <img src={linkedin} alt="" srcset="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
