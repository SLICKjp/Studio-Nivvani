import "./footer.css";
import footer_logo from "../../assets/Footer/footer_logo.png";
import mail from "../../assets/Footer/mail.png";
import insta from "../../assets/Footer/insta.png";
import linkedin from "../../assets/Footer/linkedin.png";
import { Link } from "react-router-dom";
import footer_logo_one from "../../assets/Footer/footer_logo_one.png";

const Footer = () => {
	return (
		<div className="footer-container">
			<div className="footer-subcontainer">
				<div className="footer-subsection img-para">
					<img className="footer-logo" src={footer_logo_one} />
					<p className="footer-text">
						At Studio Nivvani, we bring your vision <br />
						to life- from homes to commercial <br /> spaces,styling to
						staging-with <br /> creative,practical and cost-conscious
						<br /> design.
					</p>
				</div>
				<div className="footer-subsection site-links">
					<Link to="/about">
						<li className="footer-link-about">About</li>
					</Link>
					<Link to="/projects">
						<li className="footer-link">Gallery</li>
					</Link>
					<Link to="/services">
						<li className="footer-link">Services</li>
					</Link>
					<Link to="/contact">
						<li className="footer-link">Contact</li>
					</Link>
				</div>
				<div className="footer-subsection site-contact">
					<li className="contact-section-link">Contact Information</li>
					<li className="contact-section-link">
						<a href="mailto:studionivvani@gmail.com" className="">
							<img className="contact-icon" src={mail} />
						</a>
						<p> studionivvani@gmail.com </p>
					</li>
					<li className="contact-section-link">
						<a
							className="service-logo"
							target="_blank"
							rel="noopener noreferrer"
							href="https://www.instagram.com/studionivvani?igsh=MWl3cDhteDFhM25raQ=="
						>
							<img className="contact-icon service-logo" src={insta} />
						</a>
						<a
							className="service-logo"
							target="_blank"
							rel="noopener noreferrer"
							href="https://www.linkedin.com/in/jaini-joshi-ab038b184?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
						>
							<img className="contact-icon service-logo" src={linkedin} />
						</a>
					</li>
				</div>
			</div>
			<div className="copyright-text">
				<p>© Studio Nivvani. All rights reserved</p>
				<p>
					<a
						className="dev-info"
						href="https://portfolio-website-five-sable-75.vercel.app/"
						target="_blank"
						rel="noopener noreferrer"
					>
						Developed by Jathin Prakash
					</a>
				</p>
			</div>
		</div>
	);
};

export default Footer;
