import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/Homepage/HomePage";
import ContactUs from "../pages/Contact/ContactUs";
import Services from "../pages/Services/Services";
import AboutUs from "../pages/About/About";
import ScrollToTop from "../components/ScrollToTop/ScrollToTop";

const AppRoutes = () => {
	return (
		<>
		<ScrollToTop/>
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/contact" element={<ContactUs />} />
				<Route path="/services" element={<Services />} />
        <Route path="/about" element={<AboutUs/>} />
			</Routes>
			
		</>
	);
};
export default AppRoutes;
