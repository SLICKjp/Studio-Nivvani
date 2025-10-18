import { useState, useEffect } from "react";
import "./testimonial.css";
import amish_patel from "../../assets/Testimonials/neptune.jpg";
import amish_patel_one from "../../assets/Testimonials/neptune_one.jpg";
import rishin_patel from "../../assets/Testimonials/Rishin.jpeg";
import rawats from "../../assets/Testimonials/rawats.jpeg";
import rawats_one from "../../assets/Testimonials/rawats_one.jpeg";
import vimisha_patel from "../../assets/Testimonials/Vimisha.jpeg";
import quote from "../../assets/Testimonials/Quotes.png";
import rishin_one from "../../assets/Testimonials/Rishin_one.jpeg";
import vimisha_one from "../../assets/Testimonials/Vimisha_one.jpeg";

const cards = [
	{
		title: "Rishin Patel",
		content:
			"Working with Jaini Joshi was a great experience from start to finish. From the initial consultation to the final touches, she demonstrated professionalism, creativity, and attention to detail. What I like about Jaini is that she listened to our needs and provided thoughtful recommendations that balanced both aesthetics and functionality. She is not rigid with her design and is very flexible to our recommendations. Our new office is now more welcoming which is reflected in our Clients’ countless compliments. I highly recommend Jaini for anyone looking to elevate their office design into something beyond their imagination.",
		img: rishin_one,
	},
	{
		title: "Dr Vimisha Patel",
		content:
			"Jaini has been our architect and interior designer for over a decade now, transforming both my clinic and residence with her impeccable sense of style. I truly appreciate her approachability and ability to understand my needs, ensuring that every design feels personal and perfect. She works within your budget while delivering exceptional results, creating spaces you'll absolutely love to live in and offices you will thrive in.",
		img: vimisha_one,
	},
	{
		title: "Sinhal and Kamaljeet Rawat",
		content:
			"Jaini’s work is simply outstanding! Her designs bring a perfect balance of style and tranquility, turning any space into a serene and elegant retreat. With her keen eye for detail, she creates interiors that feel both luxurious and comforting. We highly recommend her for anyone looking to elevate their space with elegance and warmth!",
		img: rawats_one,
	},
	{
		title: "Amish Patel (Director, Neptune Realty)",
		content:
			"Jaini designed the display home at 'Aaranya Greenwoods'. Every small aspect was thoughtfully created and she has a keen eye for ensuring every detail was converted from vision to reality.The Majority of our clients were very appreciative and loved the whole theme which was 'In Sync with Nature'. I would any day recommend Jaini to anyone who is looking to create the perfect Abode for the entire family.",
		img: amish_patel_one,
	},
];

const Testimonial = () => {
	const [currentIndex1, setCurrentIndex1] = useState(0);
	const [currentIndex, setCurrentIndex] = useState(0);
	// const handlePrev = () => {
	// 	setCurrentIndex((prev) => (prev === 0 ? cards.length - 1 : prev - 1));
	// };

	// const handleNext = () => {
	// 	setCurrentIndex((prev) => (prev === cards.length - 1 ? 0 : prev + 1));
	// };

	// const handlePrev = () => {
	// 	setCurrentIndex((prevIndex) =>
	// 		prevIndex === 0 ? cards.length - 1 : prevIndex - 1
	// 	);
	// };

	// const handleNext = () => {
	// 	setCurrentIndex((prevIndex) =>
	// 		prevIndex === cards.length - 1 ? 0 : prevIndex + 1
	// 	);
	// };

	// useEffect(() => {
	// 	const interval = setInterval(() => {
	// 		handleNext();
	// 	}, 5000);
	// 	return () => clearInterval(interval);
	// }, [currentIndex]);

	const handleNext = () => {
		setCurrentIndex((prev) => (prev + 1) % cards.length);
	};

	const handlePrev = () => {
		setCurrentIndex((prev) => (prev - 1 + cards.length) % cards.length);
	};

	const handleNext1 = () => {
		setCurrentIndex1((prev) => (prev + 1) % cards.length);
	};

	const handlePrev1 = () => {
		setCurrentIndex1((prev) => (prev - 1 + cards.length) % cards.length);
	};

	// useEffect(() => {
	// 	const autoSlide = setInterval(handleNext, 5000);
	// 	return () => clearInterval(autoSlide);
	// }, []);

	return (
		<>
			<div className="testimonial-section">
				<div className="testimonial-header">CLIENT APPRECIATION</div>
				<div className="testimonial-container ">
					<button className="testimonial-btn" onClick={handlePrev1}>
						&#10094;
					</button>

					<div className="testimonial-slider-wrapper">
						<div
							className="testimonial-slider"
							style={{
								transform: `translateX(-${
									(100 / cards.length) * currentIndex1
								}%)`,
							}}
						>
							{cards.map((card, index) => (
								<div className="testimonial" key={index}>
									<div>
										<img className="quote-img" src={quote} />
										<p className="testimonial-text">{card.content}</p>
									</div>
									<div className="logo-img">
										<img className="profile-photo" src={card.img} />
										<h2 className="name">{card.title}</h2>
									</div>
								</div>
							))}
						</div>
					</div>

					<button className="testimonial-btn" onClick={handleNext1}>
						&#10095;
					</button>
				</div>
				<div className="mobile-div">
					<div className="mobile-div-btn-container">
						<button className="testimonial-btn" onClick={handlePrev}>
							&#10094;
						</button>
					</div>

					<div className="testimonial-container-2 ">
						<div className="testimonial-slider-wrapper">
							<div
								className="testimonial-slider"
								style={{
									transform: `translateX(-${
										(100 / cards.length) * currentIndex
									}%)`,
								}}
							>
								{cards.map((card, index) => (
									<div className="testimonial" key={index}>
										<div>
											<img className="quote-img" src={quote} />
											<p className="testimonial-text">{card.content}</p>
										</div>
										<div className="logo-img">
											<img className="profile-photo" src={card.img} />
											<h2 className="name">{card.title}</h2>
										</div>
									</div>
								))}
							</div>
						</div>
					</div>
					<div className="mobile-div-btn-container">
						<button className="testimonial-btn" onClick={handleNext}>
							&#10095;
						</button>
					</div>
				</div>
			</div>
		</>
	);
};

export default Testimonial;
