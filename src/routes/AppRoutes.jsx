import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import ContactUs from "../pages/Contact/ContactUs";
import Services from "../pages/Services/Services";
import AboutUs from "../pages/About/About";
import ScrollToTop from "../components/ScrollToTop/ScrollToTop";
import { lazy } from "react";

const ProjectPage = lazy(() => import("../pages/Projects/Projects"));

const AppRoutes = () => {
	return (
		<>
			<ScrollToTop />
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/contact" element={<ContactUs />} />
				<Route path="/services" element={<Services />} />
				<Route path="/about" element={<AboutUs />} />
				<Route path="/projects" element={<ProjectPage />} />
			</Routes>
		</>
	);
};
export default AppRoutes;
