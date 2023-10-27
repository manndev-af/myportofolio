import { useState } from "react";
import { OPTIONS } from "./Kody/config";
import KodyParallax from "./Kody/KodyParallax";

const Kody = () => {
	const [selected, setSelected] = useState(OPTIONS[Math.floor(Math.random() * OPTIONS.length)]);

	const [motion, setMotion] = useState(1);

	useState(() => {
		document.documentElement.style.setProperty("--allow-motion", motion);
	}, [motion]);

	return <KodyParallax team={selected} />;
};

export default Kody;
