import Service from "./Service";
import serimg_one from "../../assets/Services/heroserimg_one.png";
import serimg_two from "../../assets/Services/heroserimg_two.png";
import serimg_three from "../../assets/Services/heroserimg_three.png";
import "./service.css";
const heroserviceData = [
	{
		title: "Interior Design",
		description:
			"Transform your space into a harmonious blend of aesthetics and functionality. We craft interiors that reflect your personality while optimizing comfort and usability.",
		image: serimg_one,
	},
	{
		title: "Styling and Staging",
		description:
			"Every detail matters. Our styling and staging services add the finishing touches that elevate your space and bring your vision to life.",
		image: serimg_two,
	},
	{
		title: "Renovations",
		description:
			"Give your space a fresh perspective with our expert renovation services. We balance modern upgrades with timeless appeal, ensuring a seamless transformation.",
		image: serimg_three,
	},
];

let length = heroserviceData.length;

const Services = () => {
	return (
		<div className="hero-services-container">
			{heroserviceData.map((service, index) => (
				<>
					<Service key={index} {...service} />
					{index < heroserviceData.length - 1 && (
						<div className={`divider-container-${index}`}>
							<div className="divider"></div>
						</div>
					)}
				</>
			))}
		</div>
	);
};

export default Services;
