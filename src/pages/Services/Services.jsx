import Page from "../../components/Site/Page";
import PageHero from "../../components/Site/PageHero";
import { banners } from "../../components/Site/homeContent";
import "./Services.css";
import img1 from "../../assets/Service-page/img-1.jpg";
import img2 from "../../assets/Service-page/img-2.jpg";
import img3 from "../../assets/Service-page/img-3.jpg";
import img4 from "../../assets/Service-page/img-4.jpg";
import img5 from "../../assets/Service-page/img-5.jpg";
import img6 from "../../assets/Service-page/img-6.jpg";
import img7 from "../../assets/Service-page/img-7.jpg";
import corporate from "../../assets/Service-page/corporateSpace.png";
import healthcare from "../../assets/Service-page/healthcare.png";
import retail from "../../assets/Service-page/retial.png";
import industrial from "../../assets/Service-page/industial.png";
import process1 from "../../assets/Service-page/process1.png";
import process2 from "../../assets/Service-page/process2.png";
import process3 from "../../assets/Service-page/process3.png";
import process4 from "../../assets/Service-page/process4.png";
import process5 from "../../assets/Service-page/process5.png";

const sectors = [
	{ img: corporate, caption: "Corporate Spaces" },
	{ img: healthcare, caption: "Hospitality & Retail" },
	{ img: retail, caption: "Healthcare & Education" },
	{ img: industrial, caption: "Public & Industrial Spaces" },
];

const groups = [
	{
		id: "interior-design",
		title: "Interior Design",
		quote: "Every space has a story. We help you tell it beautifully.",
		intro:
			"From cozy homes to high-end commercial spaces, we offer comprehensive interior design services tailored to reflect your lifestyle, brand and vision.",
		services: [
			{
				title: "Start-to-finish transformation for your entire space",
				text: "This all-inclusive service is perfect for clients looking for a complete interior makeover — from the very first idea to the final walkthrough. We manage every detail to ensure a seamless, stress-free experience.",
				points: [
					"In-depth design consultation",
					"Mood boards & concept development",
					"Space planning & furniture layout",
					"Sourcing & procurement",
					"Coordination with contractors & vendors",
					"On-site installation & styling",
				],
				note: "Ideal for full-home projects, new builds, luxury apartments or vacation properties.",
				img: img1,
			},
			{
				title: "Personalized design, one room at a time",
				text: "Whether it’s your living room, bedroom or home office, this flexible service is designed for clients seeking expert guidance on specific rooms. Start small and expand as your vision grows.",
				points: [
					"Personalized design consultation",
					"Room layout & space planning",
					"Paint & lighting recommendations",
					"Curated shopping list",
					"Styling guidelines for finishing touches",
				],
				note: "Add more rooms at your own pace — build your dream space step by step.",
				img: img2,
			},
			{
				title: "Functional design that elevates your brand",
				text: "We create inspiring, high-performance commercial spaces that reflect your brand identity while enhancing productivity and client experience.",
				points: [
					"Brand-aligned concept development",
					"Strategic space planning",
					"Furniture & finish selection",
					"Lighting design & ambience planning",
					"Accessibility & safety compliance",
				],
				note: "Perfect for businesses seeking a professional, impactful environment.",
				img: img3,
				sectors: true,
			},
			{
				title: "Expert interior design — wherever you are",
				text: "Our virtual design service offers a convenient, budget-friendly way to access professional design from anywhere. Everything is delivered online, empowering you with a personalized plan and tools to confidently transform your space.",
				points: [
					"Customized design plan",
					"Floor plans & furniture layouts",
					"Mood board & colour palette",
					"Product sourcing with shoppable links",
					"Styling guide for implementation",
				],
				note: "Ideal for DIY enthusiasts, remote clients or quick updates on a budget.",
				img: img4,
			},
		],
	},
	{
		id: "styling-staging",
		title: "Styling & Staging",
		quote: "Every detail matters.",
		intro:
			"Our styling and staging services add the finishing touches that elevate your space and bring your vision to life.",
		services: [
			{
				title: "Styling that speaks your style",
				text: "The smallest details often make the biggest impact. Whether you’re settling into a new home or just feel like your space needs a refresh, our styling service brings in those finishing touches that make your space feel intentionally yours. We layer in colour, texture, decor and personality — making your home feel cohesive, elevated and welcoming.",
				points: [
					"Handpicked accessories & decorative elements",
					"Artwork & wall styling",
					"Colour & fabric coordination",
					"Lighting design & ambience planning",
					"Final room arrangement & styling support",
				],
				note: "Great for everyday living, special events, or just because your space deserves more.",
				img: img5,
			},
			{
				title: "Style that helps your space sell",
				text: "Getting your property ready to list? We highlight your home’s best features using light, styling, layout optimization and neutral visual appeal — so buyers can instantly see its potential.",
				points: [
					"Furniture layout for flow & function",
					"Light decor & accent styling",
					"Art & accessory placement",
					"Colour neutralization & mood setting",
					"On-site styling for showings & photos",
					"Decor sourcing (as needed)",
				],
				note: "Perfect for real estate listings, open houses, show flats and Airbnb prep.",
				img: img6,
			},
		],
	},
	{
		id: "renovations",
		title: "Renovations",
		quote: "Reviving spaces, redefining living.",
		intro: "We help you fall in love with your space all over again.",
		services: [
			{
				title: "A fresh take on the spaces you live in",
				text: "Our interior renovation service focuses on updating and elevating the look, feel and function of your home. Whether it’s reworking layouts, upgrading materials or refining finishes, we guide the entire process — bringing new energy into familiar spaces.",
				points: [
					"Design consultation & site assessment",
					"Space planning & layout optimization",
					"Material & finish selection",
					"Contractor & vendor coordination",
					"Project oversight",
					"Final styling & handover",
				],
				note: "Perfect for kitchen makeovers, bathroom upgrades or a full interior refresh.",
				img: img7,
			},
		],
	},
];

const process = [
	{
		title: "Discovery & Consultation",
		text: "We understand your requirements, intentions and style, and ensure safety, budget and timeline.",
		image: process1,
	},
	{
		title: "Concept Design",
		text: "We create mood boards, references and style layouts to match your vision and budget.",
		image: process2,
	},
	{
		title: "Design & Detail",
		text: "We finalize designs, materials and specifications — balancing creativity with cost-effectiveness.",
		image: process3,
	},
	{
		title: "Execution & Installation",
		text: "We manage execution with trusted teams, maintaining quality, timelines and budget control.",
		image: process4,
	},
	{
		title: "Style & Deliver",
		text: "We style the space with curated pieces and hand over a fully finished, beautiful environment.",
		image: process5,
	},
];

const Check = () => (
	<svg className="sv-check" viewBox="0 0 20 20" aria-hidden="true">
		<path d="m4.5 10.5 3.5 3.5 7.5-8" fill="none" stroke="currentColor" strokeWidth="1.6" />
	</svg>
);

const Services = () => {
	let counter = 0;

	return (
		<Page>
			<PageHero
				image={banners.services}
				eyebrow="Our services"
				title={
					<>
						Every space <em>has a story</em>
					</>
				}
			>
				From cozy homes to high-end commercial spaces — interior design, styling &amp; staging and renovations
				tailored to your lifestyle, brand and vision.
			</PageHero>

			<nav className="sv-jump" aria-label="Service categories">
				<div className="hn-container sv-jump__inner">
					{groups.map((g, i) => (
						<a key={g.id} href={`#${g.id}`}>
							<span>0{i + 1}</span> {g.title}
						</a>
					))}
				</div>
			</nav>

			{groups.map((g, gi) => (
				<section key={g.id} id={g.id} className={`hn-section sv-group ${gi % 2 ? "sv-group--alt" : ""}`}>
					<div className="hn-container">
						<header className="sv-group__head">
							<p className="hn-eyebrow hn-reveal">0{gi + 1} — Services</p>
							<h2 className="hn-heading hn-reveal" style={{ "--delay": "0.1s" }}>
								{g.title}
							</h2>
							<p className="sv-group__quote hn-reveal" style={{ "--delay": "0.15s" }}>
								“{g.quote}”
							</p>
							<p className="hn-lead hn-reveal" style={{ "--delay": "0.2s" }}>
								{g.intro}
							</p>
						</header>

						{g.services.map((s) => {
							counter += 1;
							const flip = counter % 2 === 0;
							return (
								<article key={s.title} className={`sv-item ${flip ? "sv-item--flip" : ""}`}>
									<figure className="sv-item__media hn-reveal">
										<img src={s.img} alt="" loading="lazy" />
									</figure>
									<div className="sv-item__body">
										<span className="sv-item__num hn-reveal">{String(counter).padStart(2, "0")}</span>
										<h3 className="sv-item__title hn-reveal" style={{ "--delay": "0.05s" }}>
											{s.title}
										</h3>
										<p className="sv-item__text hn-reveal" style={{ "--delay": "0.1s" }}>
											{s.text}
										</p>

										{s.sectors && (
											<ul className="sv-sectors hn-reveal" style={{ "--delay": "0.15s" }}>
												{sectors.map((sec) => (
													<li key={sec.caption}>
														<img src={sec.img} alt="" loading="lazy" />
														<span>{sec.caption}</span>
													</li>
												))}
											</ul>
										)}

										<ul className="sv-points hn-reveal" style={{ "--delay": "0.2s" }}>
											{s.points.map((p) => (
												<li key={p}>
													<Check />
													{p}
												</li>
											))}
										</ul>
										<p className="sv-item__note hn-reveal" style={{ "--delay": "0.25s" }}>
											{s.note}
										</p>
									</div>
								</article>
							);
						})}
					</div>
				</section>
			))}

			<section className="hn-section sv-process">
				<div className="hn-container">
					<div className="sv-process__head">
						<p className="hn-eyebrow hn-reveal">How we work</p>
						<h2 className="hn-heading hn-reveal" style={{ "--delay": "0.1s" }}>
							Our five-step <em>design process</em>
						</h2>
					</div>
					<ol className="sv-steps">
						{process.map((p, i) => (
							<li key={p.title} className="sv-step hn-reveal" style={{ "--delay": `${i * 0.1}s` }}>
								<div className="sv-step__marker">
									<img src={p.image} alt="" loading="lazy" />
								</div>
								<span className="sv-step__num">Step 0{i + 1}</span>
								<h3 className="sv-step__title">{p.title}</h3>
								<p className="sv-step__text">{p.text}</p>
							</li>
						))}
					</ol>
				</div>
			</section>
		</Page>
	);
};

export default Services;
