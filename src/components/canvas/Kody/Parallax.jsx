import { gsap } from "gsap";
import { useEffect, useRef } from "react";

const Parallax = ({ config = { rotate: 0, rotateX: 0, rotateY: 0, coefficientX: 0.5, coefficientY: 0.5 }, children }) => {
	const useParallax = (callback, elementRef, proximityArg = 100) => {
		useEffect(() => {
			if (!elementRef.current || !callback) {
				return;
			}

			const UPDATE = ({ x, y }) => {
				const bounds = 100;
				const proximity = typeof proximityArg === "function" ? proximityArg() : proximityArg;
				const elementBounds = elementRef.current.getBoundingClientRect();
				const centerX = elementBounds.left + elementBounds.width / 2;
				const centerY = elementBounds.top + elementBounds.height / 2;
				const boundX = gsap.utils.mapRange(centerX - proximity, centerX + proximity, -bounds, bounds, x);
				const boundY = gsap.utils.mapRange(centerY - proximity, centerY + proximity, -bounds, bounds, y);
				callback(boundX / 100, boundY / 100);
			};

			elementRef.current.addEventListener("pointermove", UPDATE);
			return () => {
				elementRef.current.removeEventListener("pointermove", UPDATE);
			};
		}, [elementRef, callback]);
	};

	const containerRef = useRef(null);
	useParallax(
		(x, y) => {
			containerRef.current.style.setProperty("--range-x", Math.floor(gsap.utils.clamp(-60, 60, x * 100)));
			containerRef.current.style.setProperty("--range-y", Math.floor(gsap.utils.clamp(-60, 60, y * 100)));
		},
		containerRef,
		() => window.innerWidth * 0.5
	);

	return (
		<div
			ref={containerRef}
			className="parallax relative w-full h-full"
			style={{ "--r": config.rotate, "--rx": config.rotateX, "--ry": config.rotateY }}>
			{children}
		</div>
	);
};

export default Parallax;
