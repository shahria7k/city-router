import React, { useRef, useState } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { useAuth } from "./contexts/AuthContext";
import { Link } from "react-router-dom";
const Signup = () => {
	const emailRef = useRef();
	const passwordRef = useRef();
	const passwordConfirmationRef = useRef();
	const { signup } = useAuth();
	const [error, setError] = useState("");
	const [loading, setLoading] = useState(false);
	async function handleSubmit(e) {
		e.preventDefault();
		if (passwordRef.current.value !== passwordConfirmationRef.current.value) {
			return setError("Password Do not match");
		}
		try {
			setError("");
			setLoading(true);
			await signup(emailRef.current.value, passwordRef.current.value);
		} catch {
			setError("Failed to create and account");
		}
		setLoading(false);
	}
	return (
		<>
			<Card>
				<Card.Body>
					<h2 className="text-center mb-4">Sign Up</h2>
					{error && <Alert variant="danger">{error}</Alert>}
					<Form onSubmit={handleSubmit}>
						<Form.Group id="email">
							<Form.Label>Email</Form.Label>
							<Form.Control type="email" ref={emailRef} required />
						</Form.Group>
						<Form.Group id="password">
							<Form.Label>Password</Form.Label>
							<Form.Control type="password" ref={passwordRef} required />
						</Form.Group>
						<Form.Group id="password-confirm">
							<Form.Label>Password Confirmation</Form.Label>
							<Form.Control
								type="password"
								ref={passwordConfirmationRef}
								required
							/>
						</Form.Group>
						<Button disabled={loading} type="submit" className="w-100">
							Sign Up
						</Button>
					</Form>
					<div className="w-100 text-center mt-3">Or Sign Up With</div>
					<div className="d-flex">
						<Button className="w-100 m-3">Google</Button>
						<Button className="w-100 m-3">Facebook</Button>
					</div>
					<div className="w-100 text-center mt-2">
						Already have an account? <Link to="/login">Login</Link>
					</div>
				</Card.Body>
			</Card>
		</>
	);
};
export default Signup;
