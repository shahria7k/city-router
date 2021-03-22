import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import Signup from "./components/Signup";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import PrivetRoute from "./components/PrivetRoute";
import { AuthProvider } from "./components/contexts/AuthContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
	return (
		<Container
			className="d-flex align-items-center justify-content-center flex-column "
			style={{ minHeight: "100vh" }}
		>
			<div className="w-100" style={{ maxWidth: "400px" }}>
				<Router>
					<AuthProvider>
						<Switch>
							<PrivetRoute exact path="/" component={Dashboard} />
							<Route path="/signup" component={Signup} />
							<Route path="/login" component={Login} />
						</Switch>
					</AuthProvider>
				</Router>
			</div>
		</Container>
	);
}

export default App;
