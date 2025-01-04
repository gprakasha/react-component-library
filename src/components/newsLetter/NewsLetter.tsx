import React, { useState } from "react";
import { NewsLetterProps } from "./newsLetter.types";
import styled from "styled-components";

const EmailInput = styled.input`
	width: 300px;
	height: 45px;

	@media (max-width: 480px) {
		width: 100%;
	}
`;

const FormWrapper = styled.form`
	width: 50%;

	@media (max-width: 768px) {
		width: 90%;
	}

	@media (max-width: 480px) {
		width: 90%;
	}
`;

const SubscribeButton = styled.button`
	height: 45px;
`;

export default function NewsLetter(props: Readonly<NewsLetterProps>) {
	const [email, setEmail] = useState<string>("");
	const [invalidError, setInvalidError] = useState<string>("");
	const [isConsentChecked, setIsConsentChecked] = useState<boolean>(false);
	const [subscribedMessage, setSubscribedMessage] = useState<string>("");

	const setEmailValidationError = (): void => {
		setInvalidError("Invalid email, please enter a valid email address");
		setSubscribedMessage("");
	};

	const handleFormSubmit = (
		event: React.FormEvent<HTMLFormElement>
	): void => {
		event.preventDefault();
		if (!isConsentChecked) return;
		if (!email) {
			setEmailValidationError();
			return;
		}
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		if (!emailRegex.test(email)) {
			setEmailValidationError();
		} else {
			setInvalidError("");
			setSubscribedMessage("Successfully subscribed");
		}
	};

	const handleEmailInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
		setEmail(e.target.value);
		setInvalidError("");
		setSubscribedMessage("");
	};

	const handleConsentCheck = (e: React.ChangeEvent<HTMLInputElement>): void => {
		setIsConsentChecked(e.target.checked);
	};

	return (
		<FormWrapper
			onSubmit={handleFormSubmit}
			className="d-flex flex-column shadow p-5 align-items-center justify-content-center border-rounded rounded-3"
		>
			<h2>{props.title}</h2>
			<span className="text-center fs-4">{props.description}</span>

			<div className="d-flex flex-md-row flex-wrap justify-content-center mt-3 gap-3">
				<EmailInput
					className="p-2 px-3 border-rounded rounded-3"
					type="email"
					name="email"
					onChange={handleEmailInput}
					placeholder={props.inputBoxPlaceholder}
				/>
				<SubscribeButton
					disabled={!isConsentChecked}
					type="submit"
					className="px-3 border-rounded rounded-3 btn btn-primary"
				>
					Subscribe
				</SubscribeButton>
			</div>

			{(invalidError || subscribedMessage) && (
				<span
					className={`my-1 fs-6 ${
						invalidError ? "text-danger" : "text-success"
					}`}
				>
					{invalidError}
					{subscribedMessage && "Successfully Subscribed"}
				</span>
			)}

			<div className="d-flex align-items-start mt-3">
				<input
					type="checkbox"
					name="consent"
					checked={isConsentChecked}
					onChange={handleConsentCheck}
					className="mt-1 me-1"
				/>
				<span>{props.consentMessage}</span>
			</div>
		</FormWrapper>
	);
}
