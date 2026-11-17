import Page from "../../components/Site/Page";
import PageHero from "../../components/Site/PageHero";
import { banners } from "../../components/Site/homeContent";
import "./aboutus.css";
import about_first from "../../assets/AboutUs/about_first.png";
import fa from "../../assets/AboutUs/fa.png";
import pd from "../../assets/AboutUs/pa.png";
import cb from "../../assets/AboutUs/cb.png";
import aes from "../../assets/AboutUs/aes.png";
import sens from "../../assets/AboutUs/sens.png";
import Jaini from "../../assets/AboutUs/Jaini.png";

const values = [
	{
		image: fa,
		title: "Functional Aesthetics",
		text: "We create spaces that blend beauty and function — crafted for comfort, efficiency and harmony.",
	},
	{
		image: pd,
		title: "Personalized Design",
		text: "Every space reflects you — thoughtfully tailored to express your personality, values and lifestyle.",
	},
	{
		image: cb,
		title: "Conscious Budgeting",
		text: "Great design fits your budget — smart, creative solutions without ever compromising on quality or goals.",
	},
	{
		image: aes,
		title: "Timeless & Sustainable Choices",
		text: "We design for longevity — using high-quality, eco-conscious materials that ensure lasting style and function.",
	},
	{
		image: sens,
		title: "Sensitivity",
		text: "Each project is crafted with empathy — respecting people, culture and environment to create meaningful spaces.",
	},
];

const About = () => {
	return (
		<Page>
			<PageHero
				image={banners.about}
				eyebrow="About the studio"
				title={
					<>
						Designs that speak, <em>spaces that feel</em>
					</>
				}
			/>

			<section className="hn-section ab-statement">
				<div className="hn-container">
					<blockquote className="ab-statement__quote hn-reveal">
						“Every space — personal or professional — should tell the story of who we are and reflect
						what we love.”
					</blockquote>
				</div>
			</section>

			<section className="hn-section ab-studio">
				<div className="hn-container ab-split">
					<figure className="ab-split__media hn-reveal">
						<img src={about_first} alt="Living room with a timber-clad wall, a lotus painting and a low sectional sofa" loading="lazy" />
					</figure>
					<div className="ab-split__body">
						<p className="hn-eyebrow hn-reveal">Studio Nivvani</p>
						<h2 className="hn-heading hn-reveal" style={{ "--delay": "0.1s" }}>
							Where creativity <em>meets purpose</em>
						</h2>
						<div className="ab-copy hn-reveal" style={{ "--delay": "0.2s" }}>
							<p>
								Founded by Ar. Jaini Joshi (B.Arch, 2004, Institute of Environmental Design, Gujarat),
								Studio Nivvani is where creativity meets purpose. With experience across India and New
								York, Jaini brings a global perspective, blending timeless aesthetics with everyday
								practicality.
							</p>
							<p>
								From bungalows and apartments to offices, restaurants and clinics, our portfolio reflects
								a commitment to crafting spaces that are as functional as they are beautiful — always
								tailored to real needs and real budgets.
							</p>
							<p>
								At Studio Nivvani, we believe great design doesn’t just fill a space: it transforms it.
								Every project is a unique story, shaped with sensitivity to materials, people and place —
								crafting environments that feel lived, loved and lasting.
							</p>
						</div>
						<p className="ab-signature hn-reveal">Timeless. Thoughtful. Tailored to you.</p>
					</div>
				</div>
			</section>

			<section className="hn-section ab-values">
				<div className="hn-container">
					<div className="ab-values__head">
						<p className="hn-eyebrow hn-reveal">Our central idea</p>
						<h2 className="hn-heading hn-reveal" style={{ "--delay": "0.1s" }}>
							Behind <em>every design</em>
						</h2>
					</div>
					<ul className="ab-values__grid">
						{values.map((v, i) => (
							<li key={v.title} className="ab-value hn-reveal" style={{ "--delay": `${i * 0.08}s` }}>
								<img className="ab-value__icon" src={v.image} alt="" loading="lazy" />
								<h3 className="ab-value__title">{v.title}</h3>
								<p className="ab-value__text">{v.text}</p>
							</li>
						))}
					</ul>
				</div>
			</section>

			<section className="hn-section ab-designer">
				<div className="hn-container ab-split ab-split--reverse">
					<figure className="ab-split__media hn-reveal">
						<img src={Jaini} alt="Portrait of Jaini Joshi, founder of Studio Nivvani" loading="lazy" />
					</figure>
					<div className="ab-split__body">
						<p className="hn-eyebrow hn-reveal">Meet our designer</p>
						<h2 className="hn-heading hn-reveal" style={{ "--delay": "0.1s" }}>
							Jaini <em>Joshi</em>
						</h2>
						<p className="ab-role hn-reveal" style={{ "--delay": "0.15s" }}>
							Founder &amp; Principal Designer, Studio Nivvani
						</p>
						<div className="ab-copy hn-reveal" style={{ "--delay": "0.2s" }}>
							<p>
								An architect by education and an interior designer by passion, Jaini Joshi brings a wealth
								of global experience in shaping transformative spaces. Having worked across the US and
								India, she blends diverse cultural influences to deliver designs that are innovative,
								practical and timeless.
							</p>
							<p>
								Her design journey began in New York, where she contributed to a wide range of
								architectural and interior projects, gaining invaluable international perspective. In
								2014, she founded Studio Nivvani in India with a vision to create spaces that seamlessly
								integrate aesthetics with functionality.
							</p>
							<p>
								Her portfolio spans corporate, residential and hospitality projects, each reflecting her
								signature approach: thoughtful layouts, refined detailing and a commitment to
								sustainability. With a versatile eye for design and a deep understanding of spatial flow,
								Jaini transforms concepts into spaces that are not only visually striking but also enhance
								the way people live and work.
							</p>
						</div>
					</div>
				</div>
			</section>
		</Page>
	);
};

export default About;
