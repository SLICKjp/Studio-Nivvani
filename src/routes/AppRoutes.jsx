import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/Homepage/HomePage";
import ContactUs from "../pages/Contact/ContactUs";
import Services from "../pages/Services/Services";
import AboutUs from "../pages/About/About";

const AppRoutes = () => {
	return (
		<>
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
