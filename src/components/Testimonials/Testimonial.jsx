import { useState } from "react";
import "./testimonial.css";
import img from "../../assets/Hero/neptune.jpg";

const cards = [
	{
		title: "Rishin Patel",
		content:
			"Working with Jaini Joshi was a great experience from the start to finish. From the initial consultation to the final touches, she demonstrated professionalism, creativity, and attention to detail. What I like about Jaini is that she listened to our needs and provided thoughtful recommendations that balanced both aesthetics and functionality. She is not rigid with her design and is very flexible to our recommendations. Our new office is now more welcoming which is reflected from our Clients’ countless compliments. I highly recommend Jaini for anyone looking to elevate their office design into something beyond their imagination.",
	},
	{
		title: "Name 2",
		content:
			"Jaini has been our architect and interior designer for over a decade now, transforming both my clinic and residence with her impeccable sense of style. I truly appreciate her approachability and ability to understand my needs, ensuring that every design feels personal and perfect. She works within your budget while delivering exceptional results, creating spaces you'll absolutely love to live in and offices you will thrive in.",
	},
	{
		title: "Name 3",
		content:
			"Jaini’s work is simply outstanding! Her designs bring a perfect balance of style and tranquility, turning any space into a serene and elegant retreat. With her keen eye for detail, she creates interiors that feel both luxurious and comforting. We highly recommend her for anyone looking to elevate their space with elegance and warmth!",
	},
	{
		title: "Amish Patel (Director, Neptune Realty)",
		content:
			"Jaini designed the display home at 'Aaranya Greenwoods'. Every smallest aspect was thoughtfully created and she has a keen eye to ensure every detail was converted from vision to reality. Majority of our clients were very appreciative and loved the whole theme which was 'In Sync with Nature'. I would anyday recommend Jaini to anyone who is looking to create the perfect Abode for the entire family.",
	},
];

const Testimonial = () => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const handlePrev = () => {
		setCurrentIndex((prev) => (prev === 0 ? cards.length - 1 : prev - 1));
	};

	const handleNext = () => {
		setCurrentIndex((prev) => (prev === cards.length - 1 ? 0 : prev + 1));
	};

	return (
		<>
			<div className="testimonial-header">CLIENT APPRECIATION</div>
			<div className="testimonial-container">
				<button className="testimonial-btn" onClick={handlePrev}>
					&#10094;
				</button>

				<div className={`testimonial testimonial-${currentIndex}`}>
					<p className="testimonial-text">{cards[currentIndex].content}</p>
					<div className="logo-img">
						<img className="profile-photo" src={img} />
						<h2 className="name">{cards[currentIndex].title}</h2>
					</div>
				</div>

				<button className="testimonial-btn" onClick={handleNext}>
					&#10095;
				</button>
			</div>
		</>
	);
};

export default Testimonial;
