import React from "react";
import "./Navbar.css";
import logo from "../../assets/Navbar/logo.png";
import { Link } from "react-router-dom";
const Navbar = () => {
	return (
		<div className="navbar">
			<div className="nav-logo">
				<img className="logo" src={logo} />
			</div>
			<div className="nav-links">
				<Link to="/">
					<div className="links">HOME</div>
				</Link>
				<Link to="/about">
					<div className="links">ABOUT</div>
				</Link>
				<Link to="/projects">
					<div className="links">PROJECTS</div>
				</Link>
				<Link to="/services">
					<div className="links">SERVICES</div>
				</Link>
				<Link to="/contact">
					<div className="links" href="/contact">
						CONTACT
					</div>
				</Link>
			</div>
		</div>
	);
};

export default Navbar;
