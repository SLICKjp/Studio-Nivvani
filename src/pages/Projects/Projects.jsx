import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import "./Projects.css";
// import second from "../../";

import { useEffect, useState } from "react";

const Projects = () => {
	const [verticalImages, setImages] = useState([]);

	const [horizontalImages, setHorizontalImages] = useState([]);

	const [images, setTotalImages] = useState([]);

	useEffect(() => {
		const imageModules = import.meta.glob(
			"../../assets/Projects/Vertical/*.{png,jpg,jpeg,svg,JPG}",
			{ eager: true }
		);

		const horizontalImgModules = import.meta.glob(
			"../../assets/Projects/Horizontal/*.{png,jpg,jpeg,svg,JPG}",
			{ eager: true }
		);

		const loadedImages = Object.entries(imageModules)
			.sort(([a], [b]) => {
				const aNum = parseInt(a.split("/").pop().split(".")[0], 10);
				const bNum = parseInt(b.split("/").pop().split(".")[0], 10);
				return aNum - bNum;
			})
			.map(([path, module]) => ({
				src: module.default,
				name: path.split("/").pop(),
				vertical: true,
			}));

		const loadedHorizontalImages = Object.entries(horizontalImgModules)
			.sort(([a], [b]) => {
				const aNum = parseInt(a.split("/").pop().split(".")[0], 10);
				const bNum = parseInt(b.split("/").pop().split(".")[0], 10);
				return aNum - bNum;
			})
			.map(([path, module]) => ({
				src: module.default,
				name: path.split("/").pop(),
				vertical: false,
			}));

		const mergedImages = [];
		let vIndex = 0;
		let hIndex = 0;

		while (
			vIndex < loadedImages.length ||
			hIndex < loadedHorizontalImages.length
		) {
			// Add up to 2 vertical images if available

			// Add 1 horizontal image if available
			if (hIndex < loadedHorizontalImages.length) {
				mergedImages.push(loadedHorizontalImages[hIndex++]);
			}

			for (let i = 0; i < 2 && vIndex < loadedImages.length; i++) {
				mergedImages.push(loadedImages[vIndex++]);
			}
		}

		// If vertical images exhausted, add remaining horizontal images
		while (hIndex < loadedHorizontalImages.length) {
			mergedImages.push(loadedHorizontalImages[hIndex++]);
		}

		setHorizontalImages(loadedHorizontalImages);
		setImages(loadedImages);
		let renderedImages = [];
		let i = 0;

		while (i < mergedImages.length) {
			// Check if the next 2 images are vertical
			if (mergedImages[i]?.vertical) {
				if (mergedImages[i + 1]?.vertical) {
					// Push two vertical images
					renderedImages.push(
						<div className="verticalImageContainer">
							<img
								key={i}
								className="verticalImage"
								src={mergedImages[i].src}
								alt={mergedImages[i].name}
								loading="lazy"
							/>
							<img
								key={i + 1}
								className="verticalImage"
								src={mergedImages[i + 1].src}
								alt={mergedImages[i + 1].name}
								loading="lazy"
							/>
						</div>
					);
					i += 2;
				} else {
					// Only one vertical image available
					renderedImages.push(
						<div className="verticalImageContainer">
							<img
								key={i}
								className="verticalImage"
								src={mergedImages[i].src}
								alt={mergedImages[i].name}
								loading="lazy"
							/>
						</div>
					);
					i += 1;
				}
			} else {
				// Horizontal or no vertical, just print one
				renderedImages.push(
					<div className="horizontalImageContainer">
						<img
							key={i}
							className="horizontalImage"
							src={mergedImages[i].src}
							alt={mergedImages[i].name}
							loading="lazy"
						/>
					</div>
				);
				i += 1;
			}
		}
		console.log(renderedImages);
		setTotalImages(renderedImages);
	}, []);

	return (
		<>
			<Navbar />
			<div className="project-gallery">
				<div className="imagesContainer">{images}</div>
			</div>
			<Footer />
		</>
	);
};

export default Projects;
