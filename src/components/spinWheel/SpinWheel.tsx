import { useEffect, useState } from "react";
import { motion } from "motion/react";
import styled from "styled-components";
import {
	BiMoney,
	BiSolidCoffee,
	BiSolidCoinStack,
	BiSolidExit,
} from "react-icons/bi";

type PrizeType =
	| "₹100"
	| "Free Coffee"
	| "Bonus XP"
	| "Try Again"
	| "₹5"
	| "Jackpot!";

interface PrizeIconProps {
	prize: PrizeType;
	className: string;
}

const SpinWheelContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 3;
	position: relative;
	border-radius: 50%;
	box-shadow: 0px 0px 30px #673ab7, 0px 0px 0px #9c27b0;
`;

const RewardSection = styled(motion.div)`
	border: 10px solid #673ab7;
`;

const MiddleDot = styled.div`
	position: absolute;
	top: 50%;
	left: 50%;
	width: 70px;
	height: 70px;
	background: var(--bs-gray-900);
	border-radius: 50%;
	transform: translate(-50%, -50%);
	z-index: 100;
`;

const PrizeSection = styled.div`
	box-shadow: inset 0px 0px 0px #bebebe, inset 0px 10px 10px #ffffff;
`;

const prizes: PrizeType[] = [
	"₹100",
	"Free Coffee",
	"Bonus XP",
	"Try Again",
	"₹5",
	"Jackpot!",
];
const numSegments = prizes.length;
const segmentAngle = 360 / numSegments;

const iconStyles = {
	"Free Coffee": {
		icon: <BiSolidCoffee />,
		style: { fill: "blanchedalmond" },
	},
	"Bonus XP": {
		icon: <BiSolidCoinStack />,
		style: { fill: "goldenrod" },
	},
	"Try Again": {
		icon: <BiSolidExit />,
		style: { stroke: "red", fill: "red" },
	},
	"Jackpot!": {
		icon: <BiMoney />,
		style: { fill: "goldenrod" },
	},
	"₹100": {
		icon: <BiMoney />,
		style: { fill: "goldenrod" },
	},
	"₹5": {
		icon: <BiMoney />,
		style: { fill: "green" },
	},
};

const PrizeIcon = ({ prize, className }: PrizeIconProps) => {
	const { icon, style } = iconStyles[prize] || iconStyles["₹100"]; // Default to ₹100 icon

	return (
		<div className={className} style={style}>
			{icon}
		</div>
	);
};

export default function SpinWheel() {
	const [rotation, setRotation] = useState(0);
	const [isSpinning, setIsSpinning] = useState(false);
	const [selectedPrize, setSelectedPrize] = useState<PrizeType>();
	const [segmentWidth, setSegmentWidth] = useState(0);

	const spinWheel = () => {
		if (isSpinning) return;
		setIsSpinning(true);
		setSelectedPrize(undefined);

		const randomSpin =
			Math.floor(Math.random() * numSegments) * segmentAngle;
		const totalRotation = rotation + 360 * 5 + randomSpin;
		console.log(totalRotation, "totalRotation");
		setRotation(totalRotation);

		setTimeout(() => {
			const winningIndex =
				(numSegments - Math.floor(randomSpin / segmentAngle)) %
				numSegments;
			setSelectedPrize(prizes[winningIndex]);
			setIsSpinning(false);
		}, 4000);
	};

	useEffect(() => {
		// Formula 1: radians = degrees * (π/180);
		// Formula 1: SegmentWidth = 2*radiusOfWheel*sin(segmentAngle)/2);
		const radius = 150;
		const radians = segmentAngle * (Math.PI / 180);
		const segmentWidth = 2 * radius * Math.sin(radians / 2);
		setSegmentWidth(segmentWidth);
	}, []);

	return (
		<div className="d-flex flex-column align-items-center gap-3 mt-5 bg-black">
			<SpinWheelContainer>
				<RewardSection
					className="position-relative rounded-circle d-flex align-items-center justify-content-center overflow-hidden"
					animate={{ rotate: rotation }}
					transition={{ duration: 4, ease: "easeOut" }}
					style={{
						height: "300px",
						width: "300px",
					}}
				>
					{prizes.map((prize, index) => (
						<PrizeSection
							key={index}
							className="position-absolute d-flex align-items-center justify-content-center"
							style={{
								transform: `rotate(${
									index * segmentAngle
								}deg) translateY(50%)`,
								clipPath:
									"polygon(50% 0%, -8% 100%, 100% 100%)",
								height: "50%",
								width: `${segmentWidth}px`,
								zIndex: numSegments - index,
								// dark shiny effect on every alternate segment purple, pink and blue for the prizes
								background:
									selectedPrize === prize
										? "var(--bs-focus-ring-color)"
										: index % 2 === 0
										? "#7e57c2"
										: "#f06292",
							}}
						>
							<span className="small fw-bold text-white bg-dark p-1 rounded mt-5">
								{prize}
							</span>
						</PrizeSection>
					))}
				</RewardSection>
				<MiddleDot className="d-flex align-items-center justify-content-center">
					{
						// don't rotate Icon
						selectedPrize && (
							<PrizeIcon
								key={selectedPrize}
								className="fs-1"
								prize={selectedPrize}
							/>
						)
					}
				</MiddleDot>
				{/* <Arrow /> */}
			</SpinWheelContainer>
			<button
				className="btn btn-light"
				onClick={spinWheel}
				disabled={isSpinning}
			>
				{isSpinning ? "Spinning..." : "Spin the Wheel"}
			</button>
			{selectedPrize && (
				<p className="fs-5 fw-semibold text-light">
					You won: {selectedPrize}!
				</p>
			)}
		</div>
	);
}
