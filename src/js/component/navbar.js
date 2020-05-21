import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light  navbar-expand-lg bg-white mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">
					<i className="fas fa-fish" /> saleswhale
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
				<Link to="/demo">
					<button className="btn btn-white border border-primary mr-1 rounded-lg">Log In</button>
				</Link>
				<Link to="/demo">
					<button className="btn btn-primary rounded-lg">Get a Demo</button>
				</Link>
			</div>
		</nav>
	);
};
