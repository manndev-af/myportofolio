import { DEFAULT_CONFIG } from "./config";

const ParallaxItem = ({ children, config = DEFAULT_CONFIG }) => {
	const params = Object.assign(Object.assign({}, DEFAULT_CONFIG), config);

	return (
		<div
			className="parallax__item absolute"
			style={{
				"--x": params.positionX,
				"--y": params.positionY,
				"--z": params.positionZ,
				"--r": params.rotate,
				"--rx": params.rotateX,
				"--ry": params.rotateY,
				"--mx": params.moveX,
				"--my": params.moveY,
				"--height": params.height,
				"--width": params.width,
			}}>
			{children}
		</div>
	);
};

export default ParallaxItem;
