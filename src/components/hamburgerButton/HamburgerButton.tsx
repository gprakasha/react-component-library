import styled from "styled-components";

const HamburgerIconContainer = styled.div<{size: string}>`
	  height: ${({size}) => size};
	  width: ${({ size }) => size};
	  display: flex;
	  flex-direction: column;
	  justify-content: center;
	  align-items: center;
	  gap: 6px;
	  
	  .line-1, .line-2, .line-3 {
	  	width: 85%; 
		height: 2px;
		background-color: black;
		transition: transform .5s ease, opacity .5s ease;
	  }

	  &.cross {
	 	.line-1 {
			transform: translateY(10px) rotate(45deg);
		}
		.line-2 {
			opacity: 0;
		}
		.line-3 {
			transform: translateY(-6px) rotate(135deg);
		}
	  }
`;

export const HamburgerIcon = ({isOpen, toggleSidebar}: {isOpen?: boolean, toggleSidebar?: () => void}) => {
	const DEFAULT_SIZE: string = "30px";
	return (
		<HamburgerIconContainer size={DEFAULT_SIZE} className={isOpen ? 'cross' : 'fixed'} onClick={toggleSidebar}>
			<div className="line-1"></div>
			<div className="line-2"></div>
			<div className="line-3"></div>
		</HamburgerIconContainer>
	);
};
