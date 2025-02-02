import { useState } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

const SpinWheelContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3;
    position: relative;
    background-color: #f8f9fa;
    border-radius: 50%;
`;

const Arrow = styled.div`
    position: absolute;
    top: 0;
    left: 50%;
    width: 0;
    height: 0;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 20px solid #FF9800;
    transform: translate(-50%, -30%) rotate(180deg);
`;

const prizes = ["$10", "$20", "Free Coffee", "Bonus XP", "$50", "Try Again", "$5", "Jackpot!"];
const numSegments = prizes.length;
const segmentAngle = 360 / numSegments;

export default function SpinWheel() {
  const [rotation, setRotation] = useState(0);
  const [isSpinning, setIsSpinning] = useState(false);
  const [selectedPrize, setSelectedPrize] = useState<string>();

  const spinWheel = () => {
    if (isSpinning) return;
    setIsSpinning(true);

    const randomSpin = Math.floor(Math.random() * numSegments) * segmentAngle;
    const totalRotation = rotation + (360 * 5) + randomSpin;
    console.log(totalRotation, "totalRotation");
    setRotation(totalRotation);

    setTimeout(() => {
      const winningIndex = (numSegments - Math.floor(randomSpin / segmentAngle)) % numSegments;
      setSelectedPrize(prizes[winningIndex]);
      setIsSpinning(false);
    }, 4000);
  };

  return (
		<div className="d-flex flex-column align-items-center gap-3 mt-5">
			<SpinWheelContainer>
				<motion.div
					className="position-relative rounded-circle border border-dark d-flex align-items-center justify-content-center overflow-hidden"
					animate={{ rotate: rotation }}
					transition={{ duration: 4, ease: "easeOut" }}
					style={{
						height: "300px",
						width: "300px",
					}}
				>
					{prizes.map((prize, index) => (
						<div
							key={index}
							className="position-absolute w-100 h-100 d-flex align-items-center justify-content-center"
							style={{
								transform: `rotate(${
									index * segmentAngle
								}deg) translateY(-50%)`,
								clipPath: "polygon(100% 0%, 50% 100%, 0% 0%)",
								backgroundColor:
									index % 2 === 0 ? "#f8f9fa" : "#e9ecef",
							}}
						>
							<span className="small fw-bold text-white bg-dark p-1 rounded mt-5">
								{prize}
							</span>
						</div>
					))}
				</motion.div>
                <Arrow />
			</SpinWheelContainer>
			<button
				className="btn btn-primary"
				onClick={spinWheel}
				disabled={isSpinning}
			>
				{isSpinning ? "Spinning..." : "Spin the Wheel"}
			</button>
			{selectedPrize && (
				<p className="fs-5 fw-semibold">You won: {selectedPrize}!</p>
			)}
		</div>
  );
}
