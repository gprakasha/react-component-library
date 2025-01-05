import React from "react";
import { AvatarProps } from "./avatar.types";
import styled from "styled-components";

const AvatarContainer = styled.div<{size: string}>`
		display: flex;
		justify-content: center;
		align-items: center;
		border-radius: 50%;
		border: 1px solid #000;
		min-width: ${({ size }) => size};
		width: ${({size}) => size};
		height: ${({size}) => size};
	`;

	const Image = styled.img`
		width: 100%;
		height: 100%;
		border-radius: 50%;
	`;

const Avatar = ({ logo, name, styledConfig, styleClass, size }: Readonly<AvatarProps>) => {
	const widthSize = size === "small" ? "30px" : size === "medium" ? "45px" : "60px";
	return (
		<AvatarContainer style={styledConfig?.avatarContainer} className={styleClass} size={widthSize}>
			{logo ? (
				<Image style={styledConfig?.image} src={logo} alt={name} />
			) : (
				<div>{name[0]}</div>
			)}
		</AvatarContainer>
	);
}

export { Avatar };