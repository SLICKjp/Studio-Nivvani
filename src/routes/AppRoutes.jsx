import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/Homepage/HomePage";
import ContactUs from "../pages/Contact/ContactUs";
import Services from "../pages/Services/Services";

const AppRoutes = () => {
	return (
		<>
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/contact" element={<ContactUs />} />
				<Route path="/services" element={<Services />} />
			</Routes>
		</>
	);
};
export default AppRoutes;
