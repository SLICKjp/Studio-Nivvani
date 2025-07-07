import Connect from "../../components/Connect/Connect";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";

import "./aboutus.css";
import about_first from "../../assets/AboutUs/about_first.png";
import fa from "../../assets/AboutUs/fa.png";
import pd from "../../assets/AboutUs/pa.png";
import cb from "../../assets/AboutUs/cb.png";
import aes from "../../assets/AboutUs/aes.png";
import sens from "../../assets/AboutUs/sens.png";
import Jaini from "../../assets/AboutUs/Jaini.png";

const items = [
  {
    image: fa,
    title: "Functional Aesthetics",
    text: "We create spaces that are both beautiful and practical-blending frorm and function to suit your lifestyle with comfort,efficiency and visual harrmony",
  },
  {
    image: pd,
    title: "Personalized Design",
    text: "Every space is a reflection of you-thoughtfully tailored to express your personality,values and the way you live or work",
  },
  {
    image: cb,
    title: "Conscious Budgeting",
    text: "Great design doesn’t have to exceed your budget.We deliver smart,creative solutions that align with your goals and resources without compromosing on quality.",
  },
  {
    image: aes,
    title: "Aesthetics",
    text: "We design for longevity-using high-quality,eco-conscious materials that ensure lasting style and function.",
  },
  {
    image: sens,
    title: "Sensitivity",
    text: "Each project is crafted with empath-respecting people,culture and environment to create meaningful,responsive spaces",
  },
];

const About = () => {
  return (
    <>
      <Navbar />
      <div className="about-container">
        <div className="about-text-container">
          <p>
            "Every Space - personal or professional - should tell the story of
          </p>
          <p> who we are and reflect what we love!"</p>
        </div>

        <div className="studio-about-container">
          <div className="studio-about-img-container">
            <img src={about_first} alt="" className="studio-image" />
          </div>

          <div className="studio-about-text-container">
            <h2 className="studio-title">STUDIO NIVVANI</h2>
            <p className="studio-subtext">
              Designs That Speak,Spaces That Feel
            </p>

            <div className="studio-subtext-container">
              <p className="studio-subtext-one">
                Founded by Ar. Jaini Joshi (B.Arch, 2004, Institute of
                Environmental Design, Gujarat), Studio Nivvani is where
                creativity meets purpose. With experience across India and New
                York, Jaini brings a global perspective, blending timeless
                aesthetics with everyday practicality.
              </p>
              <p className="studio-subtext-two">
                From bungalows and apartments to offices, restaurants, and
                clinics, our portfolio reflects a commitment to crafting spaces
                that are as functional as they are beautiful-always tailored to
                real needs and real budgets.
              </p>
              <p className="studio-subtext-three">
                At Studio Nivvani, we believe great design doesn’t just fill a
                space: it transforms it. Every project is a unique story, shaped
                with sensitivity to materials, people and place - crafting
                environments that feel lived loved and lasting
              </p>
              <p>Timeless. Thoughtful . Tailored to you.</p>
            </div>
          </div>
        </div>

        <div className="about-services-main-container">
          <div>
            <h2 className="about-services-main-title">
              OUR CENTRAL IDEA BEHIND EVERY DESIGN
            </h2>
          </div>

          <div className="about-services-element-container">
            {items.map((item, index) => (
              <div className="about-item" key={index}>
                <div className="image-container">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="about-image"
                  />
                </div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>

          </div>

          <div className="jaini-about-container">
            <div className="studio-about-img-container">
              <img src={Jaini} alt="" className="studio-image" />
            </div>

            <div className="jaini-about-text-container">
              <h2 className="studio-title">MEET OUR DESIGNER - <span className="jaini-subtext">JAINI JOSHI </span></h2>
              <p className="studio-subtext">
                Studio Nivvani|Founder and Principal Designer
              </p>

              <div className="studio-subtext-container">
                <p className="studio-subtext-one">
                  An architect by education, an interior designer by
                  passion—Jaini Joshi brings over 20 years of expertise in
                  crafting transformative spaces. With global experience across
                  US and India she blends diverse styles to deliver designs that
                  are innovative, practical and timeless.
                </p>
                <p className="studio-subtext-two">
                  Jaini began her career in New York, working on range of
                  architectural projects and gaining invaluable international
                  exposure. In 2010, she established Studio Nivvani in India
                  with a vision to create spaces that seamlessly unite
                  aesthetics and functionality.
                </p>
                <p className="studio-subtext-three">
                  Her portfolio spans corporate, residential and hospitality
                  spaces, each reflecting her signature blend of innovation,
                  practicality and sustainability. With a versatile approach,
                  Jaini Joshi has developed a keen eye for optimizing layouts
                  and creating spaces that ae both beautiful and highly
                  functional.
                </p>
              </div>
            </div>
          </div>
        
      </div>
     <Connect/>
     <Footer/>
    </>
  );
};

export default About;
