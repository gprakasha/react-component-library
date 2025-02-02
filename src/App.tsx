import React from "react";
import "./App.css";
import NewsLetter from "./components/newsLetter/NewsLetter";
import SpinWheel from "./components/spinWheel/SpinWheel";

function App() {
	return (
		<div>
			{/* <NewsLetter
				title={"Level up your Frontend Skills"}
				description={
					"Sign-up for free newsletter to receive weekly coding challenges that will help you improve your frontend development skills."
				}
				inputBoxPlaceholder={"Enter the email address"}
				consentMessage={
					"By selecting you agree to receive weekly newsletter containing coding challenges, tips, and other related content. You may unsubscribe from the newsletter at any time."
				}
			/> */}
			<SpinWheel />
		</div>
	);
}

export default App;
