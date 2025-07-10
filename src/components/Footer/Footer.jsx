import "./footer.css";
import footer_logo from "../../assets/Footer/footer_logo.png";
import mail from "../../assets/Footer/mail.png";
import insta from "../../assets/Footer/insta.png";
import linkedin from "../../assets/Footer/linkedin.png";
import { Link } from "react-router-dom";

const Footer = () => {
	return (
		<div className="footer-container">
			<div className="footer-sub-container-1">
				<div className="footer-logo">
					<img className="studio-logo" src={footer_logo} alt="" />
					<p className="footer-text">
						At Studio Nivvani, we bring your vision <br />
						to life- from homes to commercial <br />
						spaces,styling to staging-with <br />
						creative,practical and cost-conscious
						<br /> design.
					</p>
				</div>
				<div className="footer-links">
					<Link to="/about">
						<li className="footer-link">About</li>
					</Link>
					<Link>
						<li className="footer-link">Projects</li>
					</Link>
					<Link to="/services">
						<li className="footer-link">Services</li>
					</Link>
					<Link to="/contact">
						<li className="footer-link">Contact</li>
					</Link>
				</div>
				<div className="footer-contact">
					<p>Contact Information</p>
					<div className="footer-mail">
						<img className="footer-icon" id="mail" src={mail} alt="" />
						<p className="footer-mail-text">studionivvani@gmail.com</p>
					</div>
					<div className="footer-socials">
						<img className="footer-icon" src={insta} alt="" srcset="" />
						<img className="footer-icon" src={linkedin} alt="" srcset="" />
					</div>
				</div>
			</div>
			<div className="footer-sub-container-2">
				<span>© Studio Nivvani. All rights reserved</span>
			</div>
		</div>
	);
};

export default Footer;
