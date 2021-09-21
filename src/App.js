import { useState } from "react";
import * as Sentry from "@sentry/browser";
import "./App.css";

function App() {
	const [text, setText] = useState("No error yet");

	const handleErrorCaught = () => {
		setText("Error has been caught");
		try {
			throw new Error("Caught");
		} catch (err) {
			Sentry.captureException(err);
		}
	};

	const handleErrorUncaught = () => {
		setText("Uncaught exception");
		throw new Error("Uncaught");
	};

	return (
		<div className="App">
			<header className="App-header">
				<h1>Sentry Demo App</h1>
				<span className="error-text">{text}</span>
				<div>
					<button className={"error-button"} onClick={handleErrorCaught}>
						Catch Error
					</button>
					<button className={"error-button"} onClick={handleErrorUncaught}>
						Catch Error
					</button>
				</div>
			</header>
		</div>
	);
}

export default App;
