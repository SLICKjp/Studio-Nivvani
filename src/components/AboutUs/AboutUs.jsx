import React from "react";
import "./AboutUs.css";
import aboutUsimg from "../../assets/About/about.png";
const AboutUs = () => {
	return (
		<div className="aboutUs-container">
			<div className="about-text">
				<div className="text-heading">
					<span className="text-br">OUR PHILOSOPHY OF DESIGN</span> <br />{" "}
					<span className="text-gr">SPACES THAT SPEAK,INSPIRE & ENDURE </span>
				</div>
				<div className="text-body">
					<div className="text-div">
						Every project we undertake is a thoughtful expression of the
						client’s personality and vision, meticulously crafted to complement
						their lifestyle, aspirations and practical needs.
					</div>{" "}
					<br />
					<div className="text-div">
						We believe every space should be unique, comfortable, functional,
						visually captivating-and achievable within a realistic budget By
						seamlessly blending creativity with practicality, we ensure that
						that beauty and function work hand-in-hand without compromising
						financial considerations.
					</div>
					<br />
					<div className="text-div">
						Our approach is rooted in thoughtful planning, smart resource
						management and a deep understanding of materials and craftsmanship,
						ensuring that each project delivers exceptional value and lasting
						quality.
					</div>
					<br />
					<div className="text-div">
						Guided by sensitivity to people,materials,place and time we design
						environments that transcend mere structures,become more
						meaningful,timeless extension of the people who experience them.{" "}
					</div>
					<br />
					<div className="aboutUs-btn">
						<button className="aboutUsBtn">LEARN MORE</button>
					</div>
				</div>
			</div>

			<img className="about-img" src={aboutUsimg} />
		</div>
	);
};

export default AboutUs;
