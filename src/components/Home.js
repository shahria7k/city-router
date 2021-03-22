import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
const Home = () => {
	return (
		<div className="d-flex w-100">
			<Card style={{ width: "18rem" }}>
				<Card.Img
					variant="top"
					src="https://upload.wikimedia.org/wikipedia/commons/0/00/Motorcycle_icon.svg"
					style={{ height: "12rem" }}
				/>
				<Card.Body>
					<Card.Title>Card Title</Card.Title>
					<Card.Text>
						Some quick example text to build on the card title and make up the
						bulk of the card's content.
					</Card.Text>
					<Button variant="primary">
						<Link to="/navigate">
							<p className="text-white m-0 p-0">Go Somewhere</p>
						</Link>
					</Button>
				</Card.Body>
			</Card>
			<Card style={{ width: "18rem" }}>
				<Card.Img
					variant="top"
					src="https://cdns.iconmonstr.com/wp-content/assets/preview/2016/240/iconmonstr-car-3.png"
					style={{ height: "12rem" }}
				/>
				<Card.Body>
					<Card.Title>Card Title</Card.Title>
					<Card.Text>
						Some quick example text to build on the card title and make up the
						bulk of the card's content.
					</Card.Text>
					<Button variant="primary">
						<Link to="/navigate">
							<p className="text-white m-0 p-0">Go Somewhere</p>
						</Link>
					</Button>
				</Card.Body>
			</Card>
			<Card style={{ width: "18rem" }}>
				<Card.Img
					variant="top"
					src="https://upload.wikimedia.org/wikipedia/commons/e/e6/Bus-logo.svg"
					style={{ height: "12rem" }}
				/>
				<Card.Body>
					<Card.Title>Card Title</Card.Title>
					<Card.Text>
						Some quick example text to build on the card title and make up the
						bulk of the card's content.
					</Card.Text>
					<Button variant="primary">
						<Link to="/navigate">
							<p className="text-white m-0 p-0">Go Somewhere</p>
						</Link>
					</Button>
				</Card.Body>
			</Card>
			<Card style={{ width: "18rem" }}>
				<Card.Img
					variant="top"
					src="https://iconape.com/wp-content/png_logo_vector/walking.png"
					style={{ height: "12rem" }}
				/>
				<Card.Body>
					<Card.Title>Card Title</Card.Title>
					<Card.Text>
						Some quick example text to build on the card title and make up the
						bulk of the card's content.
					</Card.Text>
					<Button variant="primary">
						<Link to="/navigate">
							<p className="text-white m-0 p-0">Go Somewhere</p>
						</Link>
					</Button>
				</Card.Body>
			</Card>
		</div>
	);
};

export default Home;
