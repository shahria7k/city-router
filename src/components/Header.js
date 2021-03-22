import React from "react";
import {
	Button,
	Form,
	FormControl,
	Nav,
	Navbar,
	NavDropdown,
} from "react-bootstrap";
const Header = () => {
	return (
		<>
			<Navbar bg="light" expand="lg">
				<Navbar.Brand href="#home">City Router</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="mr-auto">
						<Nav.Link href="/">Home</Nav.Link>
						<Nav.Link href="/dashboard">Dashboard</Nav.Link>
						<Nav.Link href="/login">Login</Nav.Link>
						<Nav.Link href="/signup">Sign Up</Nav.Link>
						<Nav.Link href="/navigate">Navigate</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		</>
	);
};

export default Header;
