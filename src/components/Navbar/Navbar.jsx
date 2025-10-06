import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../assets/Navbar/logo.png";
import logo_one from "../../assets/Navbar/logo_one.png";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa"; // for hamburger icons

const Navbar = () => {
	const location = useLocation();
	const currentPath = location.pathname;

	const [menuOpen, setMenuOpen] = useState(false);

	const toggleMenu = () => {
		setMenuOpen(!menuOpen);
	};

	const closeMenu = () => {
		setMenuOpen(false);
	};

	return (
		<div className="navbar">
			<div className="nav-logo">
				<Link to="/" onClick={closeMenu}>
					<img className="logo" src={logo_one} alt="Logo" />
				</Link>
			</div>

			<div className={`nav-links ${menuOpen ? "open" : ""}`}>
				<Link to="/" onClick={closeMenu}>
					<div className={`links ${currentPath === "/" ? "active" : ""}`}>
						HOME
					</div>
				</Link>
				<Link to="/about" onClick={closeMenu}>
					<div className={`links ${currentPath === "/about" ? "active" : ""}`}>
						ABOUT
					</div>
				</Link>
				<Link to="/projects" onClick={closeMenu}>
					<div
						className={`links ${currentPath === "/projects" ? "active" : ""}`}
					>
						GALLERY
					</div>
				</Link>
				<Link to="/services" onClick={closeMenu}>
					<div
						className={`links ${currentPath === "/services" ? "active" : ""}`}
					>
						SERVICES
					</div>
				</Link>
				<Link to="/contact" onClick={closeMenu}>
					<div
						className={`links ${currentPath === "/contact" ? "active" : ""}`}
					>
						CONTACT
					</div>
				</Link>
			</div>

			<div className="hamburger" onClick={toggleMenu}>
				{menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
			</div>
		</div>
	);
};

export default Navbar;
