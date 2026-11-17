import { useCallback, useEffect, useRef, useState } from "react";
import Page from "../../components/Site/Page";
import PageHero from "../../components/Site/PageHero";
import { banners } from "../../components/Site/homeContent";
import manifest from "../../assets/optimized/gallery/manifest.json";
import "./Projects.css";

// Web-sized copies of every photo in assets/Projects (see optimized/gallery).
const thumbs = import.meta.glob("../../assets/optimized/gallery/*-thumb.webp", {
	eager: true,
	query: "?url",
	import: "default",
});
const fulls = import.meta.glob("../../assets/optimized/gallery/*-full.webp", {
	eager: true,
	query: "?url",
	import: "default",
});
const url = (files, id, kind) => files[`../../assets/optimized/gallery/${id}-${kind}.webp`];

// Same rhythm as the original gallery: one landscape photo, then two portraits.
const ordered = (() => {
	const h = manifest.filter((m) => m.orient === "horizontal");
	const v = manifest.filter((m) => m.orient === "vertical");
	const out = [];
	while (h.length || v.length) {
		if (h.length) out.push(h.shift());
		if (v.length) out.push(v.shift());
		if (v.length) out.push(v.shift());
	}
	return out.map((m, i) => ({
		...m,
		thumb: url(thumbs, m.id, "thumb"),
		full: url(fulls, m.id, "full"),
		alt: `Studio Nivvani interior project, photo ${i + 1}`,
	}));
})();

const Lightbox = ({ index, onClose, onStep }) => {
	const item = ordered[index];
	const closeRef = useRef(null);
	const touchX = useRef(null);

	useEffect(() => {
		closeRef.current?.focus();
		const onKey = (e) => {
			if (e.key === "Escape") onClose();
			if (e.key === "ArrowRight") onStep(1);
			if (e.key === "ArrowLeft") onStep(-1);
		};
		window.addEventListener("keydown", onKey);
		document.body.style.overflow = "hidden";
		return () => {
			window.removeEventListener("keydown", onKey);
			document.body.style.overflow = "";
		};
	}, [onClose, onStep]);

	// preload neighbours so arrowing through feels instant
	useEffect(() => {
		[1, -1].forEach((d) => {
			const n = ordered[(index + d + ordered.length) % ordered.length];
			const img = new Image();
			img.src = n.full;
		});
	}, [index]);

	return (
		<div
			className="gl-box"
			role="dialog"
			aria-modal="true"
			aria-label={`Photo ${index + 1} of ${ordered.length}`}
			onClick={(e) => e.target === e.currentTarget && onClose()}
			onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
			onTouchEnd={(e) => {
				if (touchX.current === null) return;
				const dx = e.changedTouches[0].clientX - touchX.current;
				if (Math.abs(dx) > 50) onStep(dx < 0 ? 1 : -1);
				touchX.current = null;
			}}
		>
			<img key={item.id} className="gl-box__img" src={item.full} alt={item.alt} />

			<button ref={closeRef} className="gl-box__close" onClick={onClose} aria-label="Close">
				<svg viewBox="0 0 24 24" aria-hidden="true">
					<path d="m5 5 14 14M19 5 5 19" fill="none" stroke="currentColor" strokeWidth="1.5" />
				</svg>
			</button>
			<button className="gl-box__nav gl-box__nav--prev" onClick={() => onStep(-1)} aria-label="Previous photo">
				<svg viewBox="0 0 24 24" aria-hidden="true">
					<path d="M20 12H5m6-6-6 6 6 6" fill="none" stroke="currentColor" strokeWidth="1.5" />
				</svg>
			</button>
			<button className="gl-box__nav gl-box__nav--next" onClick={() => onStep(1)} aria-label="Next photo">
				<svg viewBox="0 0 24 24" aria-hidden="true">
					<path d="M4 12h15m-6-6 6 6-6 6" fill="none" stroke="currentColor" strokeWidth="1.5" />
				</svg>
			</button>
			<p className="gl-box__count">
				{String(index + 1).padStart(2, "0")} / {ordered.length}
			</p>
		</div>
	);
};

const Projects = () => {
	const [open, setOpen] = useState(null);
	const close = useCallback(() => setOpen(null), []);
	const step = useCallback((d) => setOpen((i) => (i + d + ordered.length) % ordered.length), []);

	return (
		<Page>
			<PageHero
				image={banners.gallery}
				eyebrow="Gallery"
				title={
					<>
						Crafted by <em>Studio Nivvani</em>
					</>
				}
			>
				Homes, workplaces, clinics and display homes — a selection of spaces we have designed, styled and
				brought to life.
			</PageHero>

			<section className="hn-section gl">
				<div className="hn-container">
					<p className="gl-hint">{ordered.length} photographs · select any image to view it full screen</p>
					<ul className="gl-grid">
						{ordered.map((item, i) => (
							<li key={item.id} className="gl-item">
								<button className="gl-item__btn" onClick={() => setOpen(i)} aria-label={`Open photo ${i + 1}`}>
									<img
										src={item.thumb}
										alt={item.alt}
										width={item.w}
										height={item.h}
										loading={i < 6 ? "eager" : "lazy"}
										decoding="async"
									/>
								</button>
							</li>
						))}
					</ul>
				</div>
			</section>

			{open !== null && <Lightbox index={open} onClose={close} onStep={step} />}
		</Page>
	);
};

export default Projects;
