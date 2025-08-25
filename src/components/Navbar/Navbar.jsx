import React from "react";
import "./Navbar.css";
import logo from "../../assets/Navbar/logo.png";
import logo_one from "../../assets/Navbar/logo_one.png"
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
	const location = useLocation();
	const currentPath = location.pathname;

	return (
		<div className="navbar">
			<div className="nav-logo">
				<Link to='/'>
					<img className="logo" src={logo_one} alt="Logo" />
				</Link>
			</div>
			<div className="nav-links">
				<Link to="/">
					<div className={`links ${currentPath === "/" ? "active" : ""}`}>HOME</div>
				</Link>
				<Link to="/about">
					<div className={`links ${currentPath === "/about" ? "active" : ""}`}>ABOUT</div>
				</Link>
				<Link to="/projects">
					<div className={`links ${currentPath === "/projects" ? "active" : ""}`}>GALLERY</div>
				</Link>
				<Link to="/services">
					<div className={`links ${currentPath === "/services" ? "active" : ""}`}>SERVICES</div>
				</Link>
				<Link to="/contact">
					<div className={`links ${currentPath === "/contact" ? "active" : ""}`}>CONTACT</div>
				</Link>
			</div>
		</div>
	);
};

export default Navbar;
