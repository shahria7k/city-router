import React, { useRef, useState } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";
import firebase from "firebase";

export default function Login() {
	const emailRef = useRef();
	const passwordRef = useRef();
	const { login } = useAuth();
	const [error, setError] = useState("");
	const [loading, setLoading] = useState(false);
	const history = useHistory();
	function googlePop() {
		const provider = new firebase.auth.GoogleAuthProvider();
		firebase
			.auth()
			.signInWithPopup(provider)
			.then((result) => {
				/** @type {firebase.auth.OAuthCredential} */
				var credential = result.credential;

				// This gives you a Google Access Token. You can use it to access the Google API.
				var token = credential.accessToken;
				console.log(token);
				// The signed-in user info.
				var user = result.user;
				// ...
				setTimeout(function () {
					history.push("/navigate");
				}, 2000);
			})
			.catch((error) => {
				// Handle Errors here.
				var errorCode = error.code;
				var errorMessage = error.message;
				// The email of the user's account used.
				var email = error.email;
				// The firebase.auth.AuthCredential type that was used.
				var credential = error.credential;
				// ...
			});
	}
	async function gp() {
		try {
			setError("");
			setLoading(true);
			await googlePop();
		} catch {
			setError("Failed to log in");
		}

		setLoading(false);
	}
	async function handleSubmit(e) {
		e.preventDefault();

		try {
			setError("");
			setLoading(true);
			await login(emailRef.current.value, passwordRef.current.value);
			history.push("/navigate");
		} catch {
			setError("Failed to log in");
		}

		setLoading(false);
	}

	return (
		<>
			<Card>
				<Card.Body>
					<h2 className="text-center mb-4">Log In</h2>
					{error && <Alert variant="danger">{error}</Alert>}
					<Form onSubmit={handleSubmit} autoComplete="off">
						<Form.Group id="email">
							<Form.Label>Email</Form.Label>
							<input
								autoComplete="off"
								type="email"
								ref={emailRef}
								required
								className="form-control"
								id="exampleInputEmail1"
								aria-describedby="emailHelp"
							/>
						</Form.Group>
						<Form.Group id="password">
							<Form.Label>Password</Form.Label>
							<Form.Control
								type="password"
								ref={passwordRef}
								required
								autoComplete="none"
							/>
						</Form.Group>
						<Button disabled={loading} className="w-100" type="submit">
							Log In
						</Button>
					</Form>
					<Button
						disabled={loading}
						onClick={gp}
						className="w-100 mt-2"
						type="submit"
					>
						Log In With Google
					</Button>
					<div className="w-100 text-center mt-3">
						<Link to="/forgot-password">Forgot Password?</Link>
					</div>
				</Card.Body>
				<div className="w-100 text-center mt-2">
					Need an account? <Link to="/signup">Sign Up</Link>
				</div>
			</Card>
		</>
	);
}
