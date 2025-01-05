import React, { useEffect } from "react";
import styled from "styled-components";
import UserProfile from "../userProfile/UserProfile";
import { SideBarContainerProps, SidebarProps } from "./sidebar.types";
import { HamburgerButton } from "../hamburger-button/HamburgerButton";

const SideBarContainer = styled.div<SideBarContainerProps>`
	display: flex;
	flex-direction: column;
	height: 100vh;
	overflow-y: auto; // Use 'auto' for better UX
	position: fixed;
	top: 0;
	left: ${({ sidebarPosition }) =>
		sidebarPosition === "left" ? "0" : "auto"};
	right: ${({ sidebarPosition }) =>
		sidebarPosition === "right" ? "0" : "auto"};
	opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
	transform: translateX(${({ isOpen }) => (isOpen ? "0" : "-100%")});
	transition: opacity 0.5s ease, transform 0.5s ease; // Transition for opacity and transform
	background-color: #f3f3f3;
	box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
	z-index: 1;
	padding: 10px;
	pointer-events: auto;

	@media (max-width: 425px) {
		width: 100%;
	}
	@media (min-width: 426px) and (max-width: 768px) {
		width: 300px;
	}
	@media (min-width: 769px) {
		width: 25vw;
		min-width: 300px;
	}
`;

const NavItems = styled.div`
	display: flex;
	flex-direction: column;
	margin-top: 20px;
`;

const NavItem = styled.div`
	display: flex;
	align-items: start;
	padding: 10px;
	cursor: pointer;
	&:hover {
		background-color: #ccc;
	}
`;

const Footer = styled.div`
	display: flex;
	flex-direction: column;
	margin-top: auto;
`;

const BackDrop = styled.div`
	position: fixed;
	width: 100vw;
	top: 0;
	height: 100vh;
	background-color: rgba(0, 0, 0, 0.5);
	opacity: 1;
`;

export default function Sidebar({
	sideBarContainerStyle,
	navItems,
	logoutButton,
	settingButton,
	sidebarPosition,
	userProfileProps,
	isOpen,
	close,
}: Readonly<SidebarProps>) {
	const DEFAULT_CONATINER_STYLE: React.CSSProperties = {
		backgroundColor: "#f3f3f3",
		boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
		zIndex: 1,
		padding: "10px",
	}
	const sideBarContainerStyleTemp = {DEFAULT_CONATINER_STYLE, ...sideBarContainerStyle}
	useEffect(() => {
		if (isOpen) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "auto";
		}
	}, [isOpen]);

	return (
		<>
			{isOpen && <BackDrop onClick={close}></BackDrop>}
			<SideBarContainer isOpen={isOpen} sidebarPosition={sidebarPosition} style={sideBarContainerStyleTemp}>
				<div className="ms-auto">
					<HamburgerButton isOpen={isOpen} toggleSidebar={close} />
				</div>
				<UserProfile {...userProfileProps}></UserProfile>
				{navItems && navItems.length > 0 && (
					<NavItems>
						{navItems.map((navItem, index) => {
							return (
								<NavItem key={index}>
									{navItem.icon}
									<span>{navItem.label}</span>
								</NavItem>
							);
						})}
					</NavItems>
				)}
				<Footer>
					{logoutButton && (
						<NavItem onClick={logoutButton.onClick}>
							{logoutButton.icon}
							<span>{logoutButton.label}</span>
						</NavItem>
					)}
					{settingButton && (
						<NavItem onClick={settingButton.onClick}>
							{settingButton.icon}
							<span>{settingButton.label}</span>
						</NavItem>
					)}
				</Footer>
			</SideBarContainer>
		</>
	);
}
