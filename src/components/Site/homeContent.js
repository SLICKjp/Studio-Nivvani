// Content for the redesigned homepage. Text is taken from the existing site.

import heroLiving2400 from "../../assets/optimized/hero-living-2400.webp";
import heroLiving1200 from "../../assets/optimized/hero-living-1200.webp";
import heroLounge2400 from "../../assets/optimized/hero-lounge-2400.webp";
import heroLounge1200 from "../../assets/optimized/hero-lounge-1200.webp";
import heroBrick2400 from "../../assets/optimized/hero-brick-2400.webp";
import heroBrick1200 from "../../assets/optimized/hero-brick-1200.webp";
import heroKitchen2400 from "../../assets/optimized/hero-kitchen-2400.webp";
import heroKitchen1200 from "../../assets/optimized/hero-kitchen-1200.webp";
import heroOffice2400 from "../../assets/optimized/hero-office-2400.webp";
import heroOffice1200 from "../../assets/optimized/hero-office-1200.webp";
import aboutImage from "../../assets/About/about.png";
import project1 from "../../assets/optimized/project-1.webp";
import project2 from "../../assets/optimized/project-2.webp";
import project3 from "../../assets/optimized/project-3.webp";
import project4 from "../../assets/optimized/project-4.webp";
import project5 from "../../assets/optimized/project-5.webp";
import project6 from "../../assets/optimized/project-6.webp";
import serviceInterior from "../../assets/Services/heroserimg_one.png";
import serviceStyling from "../../assets/Services/heroserimg_two.png";
import serviceRenovation from "../../assets/Services/heroserimg_three.png";
import rishin from "../../assets/Testimonials/Rishin_one.jpeg";
import vimisha from "../../assets/Testimonials/Vimisha_one.jpeg";
import rawats from "../../assets/Testimonials/rawats_one.jpeg";
import neptune from "../../assets/Testimonials/neptune_one.jpg";

export const contact = {
  email: "studionivvani@gmail.com",
  instagram: "https://www.instagram.com/studionivvani?igsh=MWl3cDhteDFhM25raQ==",
  linkedin:
    "https://www.linkedin.com/in/jaini-joshi-ab038b184?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
};

export const navLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Gallery", to: "/projects" },
  { label: "Services", to: "/services" },
  { label: "Contact", to: "/contact" },
];

export const heroSlides = [
  { large: heroLiving2400, small: heroLiving1200, alt: "Living room with a white brick feature wall, framed planters and a soft grey sofa" },
  { large: heroLounge2400, small: heroLounge1200, alt: "Lounge with a sage green console, timber shelving and indoor plants" },
  { large: heroBrick2400, small: heroBrick1200, alt: "Family room with an exposed brick wall and a blue sectional sofa" },
  { large: heroKitchen2400, small: heroKitchen1200, alt: "Bright modular kitchen with sage green lower cabinets and warm cove lighting" },
  { large: heroOffice2400, small: heroOffice1200, alt: "Office cabin with stone-clad walls, timber flooring and a green armchair" },
];

export const about = {
  image: aboutImage,
  imageAlt: "Balcony seating nook with a textured block wall, planters and a timber counter",
  paragraphs: [
    "Every project we undertake is a thoughtful expression of the client’s personality and vision, meticulously crafted to complement their lifestyle, aspirations and practical needs.",
    "We believe every space should be unique, comfortable, functional and visually captivating — while remaining achievable within a realistic budget.",
  ],
  pillars: [
    { title: "Functional Aesthetics", text: "Spaces that blend beauty and function — crafted for comfort, efficiency and harmony." },
    { title: "Personalized Design", text: "Every space reflects you — thoughtfully tailored to your personality, values and lifestyle." },
    { title: "Conscious Budgeting", text: "Great design fits your budget — smart, creative solutions without compromising on quality." },
  ],
};

export const services = [
  {
    title: "Interior Design",
    icon: serviceInterior,
    text: "Transform your space into a harmonious blend of aesthetics and functionality. We craft interiors that reflect your personality while optimizing comfort and usability.",
  },
  {
    title: "Styling & Staging",
    icon: serviceStyling,
    text: "Every detail matters. Our styling and staging services add the finishing touches that elevate your space and bring your vision to life.",
  },
  {
    title: "Renovations",
    icon: serviceRenovation,
    text: "Give your space a fresh perspective. We balance modern upgrades with timeless appeal, ensuring a seamless transformation.",
  },
];

export const projects = [
  { src: project1, label: "Living Room", alt: "Living room with a backlit bamboo feature wall and a grey sofa" },
  { src: project2, label: "Bedroom", alt: "Bedroom with sage green arched wardrobes inlaid with cane" },
  { src: project3, label: "Bathroom", alt: "Bathroom with exposed brick, a concrete basin and warm under-mirror lighting" },
  { src: project4, label: "Living & Dining", alt: "Open living and dining space under a slatted timber ceiling" },
  { src: project5, label: "Office Reception", alt: "Office reception with brick walls, a timber desk and planters" },
  { src: project6, label: "Office Cabin", alt: "Office corner with stacked stone cladding and timber cabinetry" },
];

export const testimonials = [
  {
    name: "Rishin Patel",
    img: rishin,
    text: "Working with Jaini Joshi was a great experience from start to finish. From the initial consultation to the final touches, she demonstrated professionalism, creativity, and attention to detail. What I like about Jaini is that she listened to our needs and provided thoughtful recommendations that balanced both aesthetics and functionality. She is not rigid with her design and is very flexible to our recommendations. Our new office is now more welcoming which is reflected in our clients’ countless compliments. I highly recommend Jaini for anyone looking to elevate their office design into something beyond their imagination.",
  },
  {
    name: "Dr Vimisha Patel",
    img: vimisha,
    text: "Jaini has been our architect and interior designer for over a decade now, transforming both my clinic and residence with her impeccable sense of style. I truly appreciate her approachability and ability to understand my needs, ensuring that every design feels personal and perfect. She works within your budget while delivering exceptional results, creating spaces you’ll absolutely love to live in and offices you will thrive in.",
  },
  {
    name: "Sinhal and Kamaljeet Rawat",
    img: rawats,
    text: "Jaini’s work is simply outstanding! Her designs bring a perfect balance of style and tranquility, turning any space into a serene and elegant retreat. With her keen eye for detail, she creates interiors that feel both luxurious and comforting. We highly recommend her for anyone looking to elevate their space with elegance and warmth!",
  },
  {
    name: "Amish Patel",
    role: "Director, Neptune Realty",
    img: neptune,
    text: "Jaini designed the display home at ‘Aaranya Greenwoods’. Every small aspect was thoughtfully created and she has a keen eye for ensuring every detail was converted from vision to reality. The majority of our clients were very appreciative and loved the whole theme, which was ‘In Sync with Nature’. I would any day recommend Jaini to anyone who is looking to create the perfect abode for the entire family.",
  },
];

// Photo banners for the inner pages
export const banners = {
  about: { large: heroLounge2400, small: heroLounge1200 },
  services: { large: heroKitchen2400, small: heroKitchen1200 },
  gallery: { large: heroBrick2400, small: heroBrick1200 },
  contact: { large: heroOffice2400, small: heroOffice1200 },
};
