import React from "react";
import Signup from "./Signup";
import { Container } from "react-bootstrap";
import { AuthProvider } from "../contexts/AuthContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import Login from "./Login";
import PrivateRoute from "./PrivateRoute";
import ForgotPassword from "./ForgotPassword";
import UpdateProfile from "./UpdateProfile";
import Home from "./Home";
import Navigate from "./Navigate";

function App() {
	return (
		<Container fluid="md" style={{ height: "100vh" }}>
			<Router>
				<AuthProvider>
					<Switch>
						<Route exact path="/" component={Home} />

						<PrivateRoute path="/dashboard" component={Dashboard} />
						<PrivateRoute path="/navigate" component={Navigate} />
						<PrivateRoute path="/update-profile" component={UpdateProfile} />
						<Route path="/signup" component={Signup} />
						<Route path="/login" component={Login} />
						<Route path="/forgot-password" component={ForgotPassword} />
					</Switch>
				</AuthProvider>
			</Router>
		</Container>
	);
}

export default App;
