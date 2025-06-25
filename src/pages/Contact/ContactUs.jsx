import contact from "../../assets/ContactUs/contact.png";
import Connect from "../../components/Connect/Connect";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import "./contact.css";

const ContactUs = () => {
  return (
    <>
    <Navbar/>
    <div className="contact-text-container">
    <p className="contact-heading-one">Thank you for considering Studio Nivvani for your upcoming project! We’re</p>
    <p className="contact-heading-two">excited to learn more about your project and vision.</p>
    <p className="contact-heading-three">Please fill out the form below to give us an overview of your project.</p>
    </div>
    <div className="contact-container">
      <div className="form-container">

        <form className="contact-form" action="">
        <h3 className="form-heading-text">We would love to hear from you</h3>
          <label>
            Full Name <span className="contact-asterik">*</span>
          </label>
          <p>
            <input
              className="contact-box"
              type="text"
              name="fullName"
              required
            />
          </p>
          <label>
            Email <span className="contact-asterik">*</span>
          </label>
          <p>
            <input
              className="contact-box"
              type="email"
              name="fullName"
              required
            />
          </p>
          <label>
            Contact Number <span className="contact-asterik">*</span>
          </label>
          <p>
            <input
              className="contact-box"
              type="number"
              name="fullName"
              required
            />
          </p>
          <label>
            Leave your enquiry below <span className="contact-asterik">*</span>
          </label>
          <p>
            <textarea className="contact-textarea" name="message" id="message" rows="4" cols="50"></textarea>
          </p>
          
          <div className="contact-btn-container">
            <input className="contact-btn" type="button" value="SUBMIT" />
          </div>
        </form>
      </div>

      <div>
        <img className="contact-img" src={contact} alt="" />
      </div>
    </div>
    <Connect/>
    <Footer/>
    </>
  );
};

export default ContactUs;
