import React, { useState, useContext } from "react";
// login system
import { useNavigate } from "react-router-dom";
import { Context } from "../context";
// API
import API from "../API";
// Components
import LoadMoreButton from "../components/LoadMoreButton/LoadMoreButton";
// Styles
import { Wrapper } from "./Login.Styles";

export default function Login() {
	// const [username, setUsername] = useState("");
	// const [password, setPassword] = useState("");
	const [error, setError] = useState(false);

	const [user, setUser] = useContext(Context);
	const navigate = useNavigate();

	const handleSubmit = async () => {
		setError(false);
		try {
			const requestToken = await API.getRequestToken();
			const sessionId = await API.authenticate(
				requestToken,
				username,
				password
			);
			console.log(sessionId);
			setUser({ sessionId: sessionId.session_id, username });
			navigate("/");
		} catch (error) {
			setError(true);
		}
	};

	const handleInput = (e: any) => {
		const name = e.currentTarget.name;
		const value = e.currentTarget.value;

		if (name === "username") setUsername(value);
		if (name === "password") setPassword(value);
	};

	return (
		<Wrapper>
			{error && <div className="error">There was an error!</div>}
			<label>Username:</label>
			<input
				type="text"
				value={username}
				name={user}
				onChange={handleInput}
			/>
			<input
				type="password"
				value={password}
				name="password"
				onChange={handleInput}
			/>
			<LoadMoreButton text="Login" callback={handleSubmit} />
		</Wrapper>
	);
}
