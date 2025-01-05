import React from "react";
import { UserProfileProps } from "./userProfile.types";
import styled from "styled-components";
import { Avatar } from "../avatar/Avatar";

const UserDetails = styled.div`
	display: flex;
	flex-direction: column;
	width: 80%;
	justify-content: center;
`;

const UserContainer = styled.div`
	display: flex;
	gap: 10px;
`;

const UserName = styled.span`
	font-size: 0.75rem;
	text-transform: uppercase;
`;

const Bio = styled.span`
	font-size: 0.75rem;
`;

export default function UserProfile({
	name,
	logo,
	bio,
	styleConfig,
}: Readonly<UserProfileProps>) {
	return (
		<UserContainer>
			<Avatar logo={logo} name={name}></Avatar>
			<UserDetails style={styleConfig?.logo}>
				<UserName style={styleConfig?.name}>{name}</UserName>
				{bio && <Bio style={styleConfig?.bio}>{bio}</Bio>}
			</UserDetails>
			<div className="d-flex flex-column justify-content-center"></div>
		</UserContainer>
	);
}
