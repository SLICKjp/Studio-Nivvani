import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import contact from "../../assets/ContactUs/contact.png";
import Connect from "../../components/Connect/Connect";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import "./contact.css";

const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    const countryCode = form.current.country_code.value;
    const phone = form.current.user_phone.value;
    const fullPhone = `${countryCode} ${phone}`;

    const templateParams = {
      fullName: form.current.fullName.value,
      email: form.current.email.value,
      user_phone: fullPhone,
      message: form.current.message.value,
    };

    emailjs
      .send(
        "service_zadgwgg",
        "template_59q0l8r",
        templateParams,
        "OFxdw-JvxtEEswmXh"
      )
      .then(
        (result) => {
          alert("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          alert("Message failed to send. Try again.");
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <Navbar />
      <div className="contact-text-container">
        <p className="contact-heading-one">
          Thank you for considering Studio Nivvani for your upcoming project! We’re
        </p>
        <p className="contact-heading-two">
          excited to learn more about your project and vision.
        </p>
        <p className="contact-heading-three">
          Please fill out the form below to give us an overview of your project.
        </p>
      </div>

      <div className="contact-container">
        <div className="form-container">
          <form ref={form} onSubmit={sendEmail} className="contact-form">
            <h3 className="form-heading-text">We would love to hear from you</h3>

            <label>
              Full Name <span className="contact-asterik">*</span>
            </label>
            <p>
              <input className="contact-box" type="text" name="fullName" required />
            </p>

            <label>
              Email <span className="contact-asterik">*</span>
            </label>
            <p>
              <input className="contact-box" type="email" name="email" required />
            </p>

            <label>
              Contact Number <span className="contact-asterik">*</span>
            </label>
            <p>
              <select name="country_code" className="input-country" required>
                <option value="+1">🇺🇸 +1 (USA)</option>
                <option value="+91">🇮🇳 +91 (India)</option>
                <option value="+61">🇦🇺 +61 (Australia)</option>
              </select>
              <input
                className="user_phone"
                type="tel"
                name="user_phone"
                pattern="[0-9]{6,15}"
                maxLength="15"
                required
              />
            </p>

            <label>
              Leave your enquiry below <span className="contact-asterik">*</span>
            </label>
            <p>
              <textarea
                className="contact-textarea"
                name="message"
                rows="4"
                cols="50"
                required
              ></textarea>
            </p>

            <div className="contact-btn-container">
              <button className="contact-btn" type="submit">SUBMIT</button>
            </div>
          </form>
        </div>

        <div>
          <img className="contact-img" src={contact} alt="contact" />
        </div>
      </div>

      <Connect />
      <Footer />
    </>
  );
};

export default ContactUs;
