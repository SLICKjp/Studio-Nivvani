import ImageGrid from "../../components/Imagegrid/ImageGrid";
import Connect from "../../components/Connect/Connect";
import Services from "../../components/HeroService/Services";
import Testimonial from "../../components/Testimonials/Testimonial";
import Footer from "../../components/Footer/Footer";
import HeroSection from "../../components/HeroSection/HeroSection";
import Navbar from "../../components/Navbar/Navbar";
import AboutUs from "../../components/AboutUs/AboutUs";

const HomePage = () => {
	return (
		<div>
			<Navbar />
			<HeroSection />
			<AboutUs />
			<ImageGrid />
			<Services />
			<Testimonial />
			<Connect />
			<Footer />
		</div>
	);
};

export default HomePage;
