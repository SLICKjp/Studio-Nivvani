import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import "./Services.css";
import img1 from "../../assets/Service-page/img-1.jpg";
import img2 from "../../assets/Service-page/img-2.jpg";
import img3 from "../../assets/Service-page/img-3.jpg";
import img4 from "../../assets/Service-page/img-4.jpg";
import corporate from "../../assets/Service-page/corporateSpace.png";
import healthcare from "../../assets/Service-page/healthcare.png";
import retail from "../../assets/Service-page/retial.png";
import industrial from "../../assets/Service-page/industial.png";
import greenTick from "../../assets/Service-page/greenTick.png";
import img5 from "../../assets/Service-page/img-5.jpg";
import img6 from "../../assets/Service-page/img-6.jpg";
import img7 from "../../assets/Service-page/img-7.jpg";
import process1 from "../../assets/Service-page/process1.png";
import process2 from "../../assets/Service-page/process2.png";
import process3 from "../../assets/Service-page/process3.png";
import process4 from "../../assets/Service-page/process4.png";
import process5 from "../../assets/Service-page/process5.png";
import Service from "../../components/HeroService/Service";

import Footer from "../../components/Footer/Footer";
import Connect from "../../components/Connect/Connect";

const Services = () => {
	const subtypeArray = [
		{
			img: corporate,
			caption: "Corporate Spaces",
		},
		{
			img: healthcare,
			caption: "Hospitality & Retail",
		},
		{
			img: retail,
			caption: "Healthcare and Education",
		},
		{
			img: industrial,
			caption: "Public and Industrial Spaces",
		},
	];
	const interiorArray = [
		{
			serviceNumber: 1,
			serviceHeader: "Start to-finish transformation for your entire space",
			serviceData:
				"This all-inclusive service is perfect for clients looking for a complete interior makeover- from the very first idea to the final walkthrough.We manage every detail to ensire a seamless, stress- free experience",
			servicePoints: [
				"In-depth Design Consultation",
				"Mood Boards & concept development",
				"Space Planning & Furniture Layout",
				"Sourcing & Procurement",
				"Coordination with Contractore & Vendors",
				"On-site Installation & Styling",
			],
			serviceImg: img1,
			serviceFooter:
				"Ideal for full-home projects, new builds, luxury aprtments, or vacation properties.",
			designSubtype: false,
			subtype: [corporate, healthcare, retail, industrial],
		},
		{
			serviceNumber: 2,
			serviceHeader: "Personalized design, one room at a time.",
			serviceData:
				"Whether it's your living room, bedroom, or home office, this flexible service is designed for clients seeking expert guidance on specific rooms. Start small and expand as your vison grows.",
			servicePoints: [
				"Personalized Design Consultation",
				"Room Layout & Space Planning",
				"Paint & Lightning Recommendations",
				"Curated Shopping List",
				"Styling Guidelines for Finishing Touches",
			],
			serviceFooter:
				"Add more rooms at your own pace- build your dream space step by step",
			serviceImg: img2,
			designSubtype: false,
			subtype: [corporate, healthcare, retail, industrial],
		},
		{
			serviceNumber: 3,
			serviceHeader: "Functional design that elevates your brand.",
			serviceData:
				"We create inspiring, high performance commercial spaces that reflect your brand identity while enhancing productivity and client experience.",
			servicePoints: [
				"Brand-Aligned Concept Development",
				"Strategic Space Planning",
				"Furniture & Finish Selection",
				"Lighting Design & Ambience Planning",
				"Accessibilty & Safety Compliance",
			],
			serviceFooter:
				"Perfect for business seeking a professional, impactful environment",
			serviceImg: img3,
			designSubtype: true,
			subtype: [corporate, healthcare, retail, industrial],
		},
		{
			serviceNumber: 4,
			serviceHeader: "Expert interior design - wherever you are.",
			serviceData:
				"Our virtual service is a convienient, budget-friendly way to bring professional design into your space, no matter your location. Everything is delivered online, giving you the tools to implement your design confidently",
			servicePoints: [
				"Customized Design Plan",
				"Floor Plans & Furniture Layouts",
				"Mood Board & color palette",
				"Product Sourcing with Shoppable Links",
				"Styling Guide for Implementation",
			],
			serviceFooter:
				"Ideal for DIY enthusiasts, remote clients, or quick updates on a budget.",
			designSubtype: false,
			serviceImg: img4,
			subtype: [corporate, healthcare, retail, industrial],
		},
		{
			serviceNumber: 5,
			serviceHeader: "Styling that speaks your style",
			serviceData:
				"The smallest details often make the biggest impact. Whether you're settling into a new home or just feel like your space needs a refresh, our styling service brings in those finishing touches that make your space deel intentionally yours. We layer in color, texture, decor, and personality-making your home feels cohesive, elevated and welcoming.",
			servicePoints: [
				"Handpicked Accessories & Decorative Elements",
				"Artwork & Wall Styling",
				"Color & Fabric Coordination",
				"Lighting Design & Ambience Planning",
				"Final Room Arrangement & Styling Support",
			],
			serviceFooter:
				"Great for everyday living, special events, or just because your space deserves more",
			designSubtype: false,
			serviceImg: img5,
			subtype: [corporate, healthcare, retail, industrial],
		},
		{
			serviceNumber: 6,
			serviceHeader: "Style that helps your space sell",
			serviceData:
				"Getting your property ready to list? We highlight your home's best features using light styling, layout optimization, and neutral visual appeal- so buyers can instantly see it's potential.",
			servicePoints: [
				"Furniture Layout for Flow & Function",
				"Light Decor & Accent Styling",
				"Art & Accessory Placement",
				"Color Neutralization & Mood Setting",
				"On-Site Styling for Showings & Photos",
				"Short-Term Decor Sourcing (as needed)",
			],
			serviceFooter:
				"Perfect for real estate listings, open houses, show flats, and Airbnb prep.",
			designSubtype: false,
			serviceImg: img6,
			subtype: [corporate, healthcare, retail, industrial],
		},
		{
			serviceNumber: 7,
			serviceHeader: "A fresh take on the spaces you live in.",
			serviceData:
				"Our interior renovation service focuses on updating and elevating the look, feel, and function of your home. Whether it's reworking layouts, upgrading materials, or refining finishes, we guide the entire process-bringing new energy into familiar spaces.",
			servicePoints: [
				"Design Consultation & Site Assesment",
				"Space Planning & Layout Optimization",
				"Material & Finish Selection",
				"Contractor & Vendor Coordination",
				"Project Oversight",
				"Final Styling & Turnkey Handover",
			],
			serviceFooter:
				"Perfect for kitchen makeovers, bathroom upgrades, or a full interior refresh",
			designSubtype: false,
			serviceImg: img7,
			subtype: [corporate, healthcare, retail, industrial],
		},
	];

	const servicesProcessArray = [
		{
			title: "Discovery & Consultation",
			description:
				"We understand clinet's requirements, intentions, style and ensure safety, budget and timeline",
			image: process1,
		},
		{
			title: "Concept Design",
			description:
				"We craft mood boards, produce reference images, layouts and style directions to align with your vision and budget",
			image: process2,
		},
		{
			title: "Design and Detail",
			description:
				"We finalize designs, materials and specifications-balancing creativity with cost effectiveness",
			image: process3,
		},
		{
			title: "Execution and installation",
			description:
				"We manage execution with trusted teams, maintaining quality, timelines and budget control",
			image: process4,
		},
		{
			title: "Style and Deliver",
			description:
				"We style the space with curate peices and hand over a fully finished, beautiful environment",
			image: process5,
		},
	];
	return (
		<>
			<Navbar />
			<div className="services-container">
				<div className="service-section-header">Interior Design Services</div>
				<div className="services-quote-section">
					<p className="quote">
						"Every space has a story. We help you tell it beautifully."
					</p>
					<p className="quote-writeup">
						From cozy homes to high-end commercial spaces, we offer
						comprehensive interior design services tailored to reflect <br />{" "}
						your lifestyle, brand and vision.
					</p>
				</div>

				<div className="services-sections">
					{interiorArray.map((service, index) => {
						if (service.serviceNumber % 2 === 0) {
							return (
								<>
									<div className="service service-even">
										<div
											className={`${
												service.designSubtype && "subtype-container"
											} service-container-1`}
										>
											{/* {service.serviceData} */}
											<div
												className="header-container"
												style={{
													display: "flex",
													flexDirection: "column",
													justifyContent: "space-evenly",
												}}
											>
												<div className="service-header">
													{service.serviceHeader}
												</div>
												<div className="service-data">
													{service.serviceData}
												</div>
											</div>

											{service.designSubtype && (
												<div className="design-subtype">
													{subtypeArray.map((subtypeArray) => {
														return (
															<div className="subtype">
																<div>
																	<img
																		className="subtype-img"
																		src={subtypeArray.img}
																	/>
																	<p>{subtypeArray.caption}</p>
																</div>
															</div>
														);
													})}
												</div>
											)}

											<div className="service-list">
												{service.servicePoints.map((servicePoint) => {
													return (
														<>
															<span className="service-list-item">
																<img className="greentick" src={greenTick} />{" "}
																{servicePoint}
															</span>{" "}
														</>
													);
												})}
											</div>
											<div className="service-footer">
												{service.serviceFooter}
											</div>
										</div>
										<div className="service-img-container">
											<img className="service-img" src={service.serviceImg} />
										</div>
									</div>

									{service.serviceNumber === 4 && (
										<>
											<div className="service-section-header">
												Styling & Staging Services
											</div>
											<div className="services-quote-section">
												<p className="quote">
													"Every space has a story. We help you tell it
													beautifully."
												</p>
												<p className="quote-writeup">
													From cozy homes to high-end commercial spaces, we
													offer comprehensive interior design services tailored
													to reflect <br /> your lifestyle, brand and vision.
												</p>
											</div>
										</>
									)}

									{service.serviceNumber === 6 && (
										<>
											<div className="service-section-header">Renovations</div>
											<div className="services-quote-section">
												<p className="quote">
													"Reviving Spaces, Redefining Living"
												</p>
												<p className="quote-writeup">
													We help you fall in love with your space all over
													again
												</p>
											</div>
										</>
									)}
								</>
							);
						} else {
							return (
								<>
									<div className="service service-odd">
										<div className="service-img-container">
											<img className="service-img" src={service.serviceImg} />
										</div>
										<div
											className={`${
												service.designSubtype && "subtype-container"
											} service-container-1`}
										>
											{/* {service.serviceData} */}
											<div
												className="header-container"
												style={{
													display: "flex",
													flexDirection: "column",
													justifyContent: "space-evenly",
												}}
											>
												<div className="service-header">
													{service.serviceHeader}
												</div>
												<div className="service-data">
													{service.serviceData}
												</div>
											</div>

											{service.designSubtype && (
												<div className="design-subtype">
													{subtypeArray.map((subtypeArray) => {
														return (
															<div className="subtype">
																<div>
																	<img
																		className="subtype-img"
																		src={subtypeArray.img}
																	/>
																	<p>{subtypeArray.caption}</p>
																</div>
															</div>
														);
													})}
												</div>
											)}

											<div className="service-list">
												{service.servicePoints.map((servicePoint) => {
													return (
														<>
															<span className="service-list-item">
																<img className="greentick" src={greenTick} />{" "}
																{servicePoint}
															</span>{" "}
														</>
													);
												})}
											</div>
											<div className="service-footer">
												{service.serviceFooter}
											</div>
										</div>
									</div>
								</>
							);
						}
					})}

					<div className="design-process-section">
						<div className="design-process-header">
							Our Five Step Design Process
						</div>
						<div className="process-container">
							{servicesProcessArray.map((process, index) => {
								return (
									<>
										<Service {...process} />
										{(index === 0 || index === 1 || index === 3) && (
											<div className="divider-container">
												<div className="divider"></div>
											</div>
										)}
									</>
								);
							})}
						</div>
					</div>
				</div>
			</div>
			<Connect />
			<Footer />
		</>
	);
};

export default Services;
