import React from "react";
import "./Navbar.css";
import logo from "../../assets/Navbar/logo.png";
const Navbar = () => {
	return (
		<div className="navbar">
			<div className="nav-logo">
				<img className="logo" src={logo} />
			</div>
			<div className="nav-links">
				<div className="links">HOME</div>
				<div className="links">ABOUT US</div>
				<div className="links">PROJECTS</div>
				<div className="links">SERVICES</div>
				<div className="links">CONTACT US</div>
			</div>
		</div>
	);
};

export default Navbar;
