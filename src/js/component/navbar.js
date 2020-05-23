import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
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
					data-toggle="modal"
					data-target="#staticBackdrop"
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
		</nav>
	);
};
