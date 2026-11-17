import Page from "../../components/Site/Page";
import HnHero from "../../components/Site/HnHero";
import HnAbout from "../../components/Site/HnAbout";
import HnProjects from "../../components/Site/HnProjects";
import HnServices from "../../components/Site/HnServices";
import HnTestimonials from "../../components/Site/HnTestimonials";

const HomePage = () => {
	return (
		<Page>
			<HnHero />
			<HnAbout />
			<HnProjects />
			<HnServices />
			<HnTestimonials />
		</Page>
	);
};

export default HomePage;
