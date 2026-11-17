import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Page from "../../components/Site/Page";
import PageHero from "../../components/Site/PageHero";
import { banners, contact } from "../../components/Site/homeContent";
import "../../components/Site/button.css";
import "./contact.css";

const phoneRegexByCountry = {
	"+91": /^[6-9]\d{9}$/, // India: 10 digits, starts with 6–9
	"+1": /^(?:[2-9]\d{2}[2-9]\d{6})$/, // US: 10 digits, area code and exchange can’t start with 0/1
	"+61": /^[2-478]\d{8}$/, // Australia: 9 digits
};

const ContactUs = () => {
	const form = useRef();
	// status: { type: "idle" | "sending" | "success" | "error", message }
	const [status, setStatus] = useState({ type: "idle", message: "" });

	const sendEmail = (e) => {
		e.preventDefault();

		const countryCode = form.current.country_code.value;
		const phone = form.current.user_phone.value.trim();
		const fullPhone = countryCode && phone ? `${countryCode} ${phone}` : "";

		if (countryCode) {
			if (!phone) {
				setStatus({ type: "error", message: "Please enter a phone number for the selected country." });
				return;
			}
			if (!phoneRegexByCountry[countryCode].test(phone)) {
				setStatus({ type: "error", message: "Please enter a valid phone number for the selected country." });
				return;
			}
		}

		const templateParams = {
			fullName: form.current.fullName.value,
			email: form.current.email.value,
			user_phone: fullPhone,
			message: form.current.message.value,
		};

		setStatus({ type: "sending", message: "" });
		emailjs.send("service_zadgwgg", "template_59q0l8r", templateParams, "OFxdw-JvxtEEswmXh").then(
			() => {
				setStatus({
					type: "success",
					message: "Thank you — your message has been sent. We’ll be in touch soon.",
				});
				form.current.reset();
			},
			(error) => {
				setStatus({
					type: "error",
					message: `Your message couldn’t be sent. Please try again, or email us at ${contact.email}.`,
				});
				console.log(error.text);
			}
		);
	};

	return (
		<Page connect={false}>
			<PageHero
				image={banners.contact}
				eyebrow="Contact"
				title={
					<>
						Let’s talk about <em>your space</em>
					</>
				}
			>
				Thank you for considering Studio Nivvani for your upcoming project. We’re excited to learn more about
				your project and vision.
			</PageHero>

			<section className="hn-section ct">
				<div className="hn-container ct__grid">
					<aside className="ct__info">
						<p className="hn-eyebrow hn-reveal">Get in touch</p>
						<h2 className="hn-heading hn-reveal" style={{ "--delay": "0.1s" }}>
							We would love <em>to hear from you</em>
						</h2>
						<p className="hn-lead hn-reveal" style={{ "--delay": "0.2s" }}>
							Please leave your enquiry using the form, or reach us directly — from a single room to a
							complete home or commercial space.
						</p>

						<ul className="ct__channels hn-reveal" style={{ "--delay": "0.3s" }}>
							<li>
								<span className="ct__label">Email</span>
								<a href={`mailto:${contact.email}`}>{contact.email}</a>
							</li>
							<li>
								<span className="ct__label">Instagram</span>
								<a href={contact.instagram} target="_blank" rel="noopener noreferrer">
									@studionivvani
								</a>
							</li>
							<li>
								<span className="ct__label">LinkedIn</span>
								<a href={contact.linkedin} target="_blank" rel="noopener noreferrer">
									Jaini Joshi
								</a>
							</li>
						</ul>
					</aside>

					<form ref={form} onSubmit={sendEmail} className="ct__form hn-reveal" style={{ "--delay": "0.15s" }}>
						<div className="ct__field">
							<label htmlFor="ct-name">
								Full name <span aria-hidden="true">*</span>
							</label>
							<input
								id="ct-name"
								type="text"
								name="fullName"
								autoComplete="name"
								required
								pattern="[A-Za-z\s'-]{2,}"
								title="Please enter a valid name"
							/>
						</div>

						<div className="ct__field">
							<label htmlFor="ct-email">
								Email <span aria-hidden="true">*</span>
							</label>
							<input
								id="ct-email"
								type="email"
								name="email"
								autoComplete="email"
								required
								pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
								title="Please enter a valid email address"
							/>
						</div>

						<div className="ct__field">
							<label htmlFor="ct-phone">Contact number</label>
							<div className="ct__phone">
								<select name="country_code" aria-label="Country code" defaultValue="">
									<option value="">Country</option>
									<option value="+91">India +91</option>
									<option value="+1">USA +1</option>
									<option value="+61">Australia +61</option>
								</select>
								<input id="ct-phone" type="tel" name="user_phone" autoComplete="tel-national" maxLength="15" />
							</div>
						</div>

						<div className="ct__field">
							<label htmlFor="ct-message">
								Your enquiry <span aria-hidden="true">*</span>
							</label>
							<textarea
								id="ct-message"
								name="message"
								rows="5"
								minLength={10}
								maxLength={1000}
								title="Message should be at least 10 characters long"
								required
							/>
						</div>

						<button className="hn-btn hn-btn--solid ct__submit" type="submit" disabled={status.type === "sending"}>
							<span>{status.type === "sending" ? "Sending…" : "Send enquiry"}</span>
						</button>

						<p className={`ct__status ct__status--${status.type}`} role="status" aria-live="polite">
							{status.message}
						</p>
					</form>
				</div>
			</section>
		</Page>
	);
};

export default ContactUs;
