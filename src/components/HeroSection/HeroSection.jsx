import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import "./HeroSection.css";
import img4 from "../../assets/Hero/hero-1.jpg";
import img3 from "../../assets/Hero/hero-2.jpg";
import img2 from "../../assets/Hero/hero-3.jpg";
import img1 from "../../assets/Hero/hero-4.jpg";
import Navbar from "../Navbar/Navbar";

const HeroSection = () => {
	const images = [img1, img2, img3, img4];
	const [current, setCurrent] = useState(0);

	useEffect(() => {
		const timer = setTimeout(() => {
			setCurrent((current + 1) % images.length);
		}, 4000);

		return () => clearTimeout(timer);
	}, [current]);

	return (
		<>
			<div className="carousel">
				{images.map((img, index) => (
					<img
						key={index}
						src={img}
						alt={`Slide ${index + 1}`}
						className={`slide ${current === index ? "active" : ""}`}
					/>
				))}

				<button
					className="nav left"
					onClick={() =>
						setCurrent((current - 1 + images.length) % images.length)
					}
				>
					&#10094;
				</button>
				<button
					className="nav right"
					onClick={() => setCurrent((current + 1) % images.length)}
				>
					&#10095;
				</button>

				<div className="dots">
					{images.map((_, index) => (
						<span
							key={index}
							className={`dot ${current === index ? "active" : ""}`}
							onClick={() => setCurrent(index)}
						/>
					))}
				</div>
			</div>
		</>
	);
};

export default HeroSection;
