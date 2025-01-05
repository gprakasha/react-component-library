import styled from "styled-components";

export type HamburgerButtonProps = {
	isOpen?: boolean;
	customStyle?: React.CSSProperties;
	toggleSidebar?: () => void;
};

const HamburgerIconContainer = styled.div`
	height: 50%;
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;

	.line-1,
	.line-2,
	.line-3 {
		width: 85%;
		height: 2px;
		background-color: var(--bs-primary);
		transition: transform 0.5s ease, opacity 0.5s ease;
	}

	&.cross {
		.line-1 {
			transform: translateY(1.4rem) rotate(45deg);
		}
		.line-2 {
			opacity: 0;
		}
		.line-3 {
			transform: translateY(-1.4rem) rotate(-45deg);
		}
	}
`;

const HamburgerButton = ({
	isOpen,
	customStyle,
	toggleSidebar,
}: HamburgerButtonProps) => {
	return (
		<HamburgerIconContainer
			style={customStyle}
			className={isOpen ? "cross" : ""}
			onClick={toggleSidebar}
		>
			<div className="line-1"></div>
			<div className="line-2"></div>
			<div className="line-3"></div>
		</HamburgerIconContainer>
	);
};

const HamburgerButtonStoryContainer = (props: HamburgerButtonProps) => {
	return (
		<div style={{
			height: '100px',
			width: '100px',
		}}>
			<HamburgerButton {...props} />
		</div>
	);
};

export { HamburgerButton, HamburgerButtonStoryContainer };
