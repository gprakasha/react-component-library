import React from "react";
import { motion } from "motion/react";
import { styled } from "storybook/internal/theming";
import { useInView } from "react-intersection-observer";

export interface CardProps {
	title: string;
	price: number;
	image: string;
	isSavedForLater?: boolean;
	discount?: number;
	isLoading?: boolean;
	styleClass?: string;
	rootMargin?: string;
	threshold?: number;
}

const CardContainer = styled(motion.div)`
	display: flex;
	flex-direction: column;
	justify-content: start;
	align-items: start;
	box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
	border-radius: 15px;
	cursor: pointer;
	width: 240px;
	height: 260px;

	&.neumorphic-shadow {
		box-shadow: 5px 5px 10px #d9d9d9, -5px -5px 10px #ffffff;
	}

	@media (max-width: 768px) {
		width: 165px;
		height: 220px;
	}
`;

const Image = styled.img`
	width: 100%;
	min-height: 78%;
	border-radius: 5px;
	object-fit: cover;
	object-position: center;
	border-radius: inherit;
`;

const Title = styled.h3`
	font-size: 0.75rem;
	margin-bottom: 0;
`;

const Details = styled.div`
	padding: 5px 8px;
`;

const Price = ({ price, discount }: { price: number; discount?: number }) => {
	return (
		<div className="flex">
			<span>₹{price}</span>
			{discount && <span>{discount}% Off</span>}
		</div>
	);
};

const DiscuntTag = styled(motion.span)`
	position: absolute;
	top: 0;
	right: 0;
	background: #6fcf97;
	color: black;
	border-bottom-left-radius: 15px;
	border: 4px solid white;
	font-size: 12px;
	border-top-right-radius: inherit;

	&::before {
		content: "";
		position: absolute;
		top: 0;
		left: 0;
		border-top: 20px solid #6fcf97;
		border-left: 20px solid transparent;
	}
`;

const ProductCard: React.FC<CardProps> = ({
	title,
	price,
	image,
	isSavedForLater,
	discount,
	isLoading,
	styleClass,
	threshold = 0.1,
	rootMargin = "400px 0px 400px 0px",
}) => {
	const { ref, inView } = useInView({
		threshold,
		rootMargin,
	});
	if (isLoading) return <div>Loading...</div>;

	return (
		<CardContainer
			ref={ref}
			whileHover={{ scale: 1.025 }}
			className={`position-relative ${styleClass ?? ''}`}
		>
			{inView && (
				<>
					<Image src={image} alt={title} />
					<Details className="d-flex flex-column justify-content-center align-items-start w-100 h-100">
						<Title className="mb-1">{title}</Title>
						<Price price={price} discount={discount} />
					</Details>
          {

          }
					<DiscuntTag
						className="text-center d-flex justify-content-center align-items-center"
						initial={{
							opacity: 0,
							height: 0,
							width: 0,
						}}
						animate={{
							opacity: 1,
							height: "50px",
							width: "50px",
						}}
						transition={{
							duration: 0.5,
							smooth: { stiffness: 300, damping: 30 },
						}}
					>
						{discount}% Off
					</DiscuntTag>
					{isSavedForLater && <span>Saved for Later</span>}
				</>
			)}
		</CardContainer>
	);
};

export { ProductCard };