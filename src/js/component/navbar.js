import React, { useState } from "react";
import { Link } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import FormControl from "react-bootstrap/FormControl";

export const Navbar = () => {
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	return (
		<nav className="navbar navbar-light w-100 navbar-expand-lg bg-white mb-4 px-5 fixed-top">
			<Link to="/">
				<span className="navbar-brand mb-0 h1 ml-4">
					<i className="fas fa-fish" style={{ color: "#1C96F8" }} /> <b>saleswhale</b>
				</span>
			</Link>
			<div className="collapse navbar-collapse" id="navbarNavAltMarkup">
				<div className="navbar-nav mx-auto">
					<a className="nav-item nav-link mx-2" href="#">
						<b>Why SalesWhale?</b>
					</a>
					<a className="nav-item nav-link mx-2" href="#">
						<b>Product</b>
					</a>
					<a className="nav-item nav-link mx-2" href="#">
						<b>Company</b>
					</a>
				</div>
			</div>
			<div className="ml-auto">
				<button
					className="btn btn-white border border-primary mr-1 rounded-lg"
					onClick={handleShow}
					style={{
						fontSize: "18px",
						color: "#0688FA",
						lineHeight: "23px"
					}}>
					<b>Log In</b>
				</button>

				<button className="btn btn-primary rounded-lg mr-4 ">
					<b>Get a Demo</b>
				</button>
			</div>

			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title className="mx-auto">
						Login to Account <i className="fas fa-fingerprint" />
					</Modal.Title>
				</Modal.Header>
				<Modal.Body className="pb-0">
					<Form>
						<Form.Group as={Row} className="my-3 px-3">
							<Form.Label column sm="2">
								Username
							</Form.Label>
							<Col sm="10">
								<FormControl placeholder="Username" type="username" aria-label="username" />
							</Col>
						</Form.Group>
						<Form.Group as={Row} controlId="formPlaintextPassword" className="my-3 px-3">
							<Form.Label column sm="2">
								Password
							</Form.Label>
							<Col sm="10">
								<Form.Control type="password" placeholder="Password" />
							</Col>
						</Form.Group>
						<Button variant="primary" className="px-5 mr-4 float-right" onClick={handleClose}>
							<b>Login</b>
						</Button>
						<Form.Group id="formGridCheckbox" className="mt-5 mb-3 px-3">
							<Form.Check type="checkbox" label="Remember Me" />
						</Form.Group>
					</Form>
					<Link to="/" onClick={handleClose}>
						<div className="text-left mt-5 px-3">Forgot Password?</div>
					</Link>
				</Modal.Body>
				<Modal.Footer>
					<Link to="/signup" onClick={handleClose}>
						Don
						{"'"}t have an account? Sign Up now!
					</Link>
				</Modal.Footer>
			</Modal>
		</nav>
	);
};
