import React from "react";
import { AvatarProps } from "./avatar.types";
import styled from "styled-components";

const AvatarContainer = styled.div`
		display: flex;
		justify-content: center;
		align-items: center;
		border-radius: 50%;
		border: 1px solid #000;
		width: 45px;
		height: 45px;
	`;

	const Image = styled.img`
		width: 100%;
		height: 100%;
		border-radius: 50%;
	`;

export default function Avatar({ logo, name, styledConfig }: Readonly<AvatarProps>) {

	return (
		<AvatarContainer style={styledConfig?.avatarContainer}>
			{logo ? (
				<Image style={styledConfig?.image} src={logo} alt={name} />
			) : (
				<div>{name[0]}</div>
			)}
		</AvatarContainer>
	);
}
