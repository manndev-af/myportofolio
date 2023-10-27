import { motion } from "framer-motion";
import ParallaxWrapper from "./ParallaxWrapper";
import Parallax from "./Parallax";
import ParallaxItem from "./ParallaxItem";
import { ITEMS } from "./config";

const KodyParallax = ({ team = "white" }) => {
	return (
		<motion.div
			initial={{ scale: 1.3, opacity: 0 }}
			animate={{ scale: 1, opacity: 1 }}
			transition={{ duration: 0.75 }}
			className="kody__parallax">
			<ParallaxWrapper>
				<Parallax config={{ rotate: 0.01, rotateX: 0.1, rotateY: 0.25, coefficientX: 0.75, coefficientY: 0.75 }}>
					{ITEMS.filter((item) => item.identifier === `kody-${team}` || !item.identifier.includes("kody")).map((item) => (
						<ParallaxItem
							key={item.identifier}
							config={item.config}>
							<div
								className="kody-segment"
								style={{ "--pos-x": item.backgroundPositionX, "--pos-y": item.backgroundPositionY, "--size": item.size }}></div>
						</ParallaxItem>
					))}
				</Parallax>
			</ParallaxWrapper>
		</motion.div>
	);
};

export default KodyParallax;
