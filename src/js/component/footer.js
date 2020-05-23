import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../styles/footer.scss";

export const Footer = () => (
	<footer className="footer mx-auto py-3 text-center ">
		<div className="row">
			<div className="navbar-brand mb-0 h1 text-right pr-5 mx-3">
				<Link to="/">
					<h4>
						<i className="fas fa-fish" style={{ color: "#1C96F8" }} /> <b>saleswhale</b>
					</h4>
				</Link>
			</div>
			<div className="col-md-4 footer-nav animated fadeInUp">
				<div className="row">
					<div className="col-md-6 text-left">
						<ul className="pages pl-1 ">
							<li>
								<a href="#">
									<b>Why Saleswhale</b>
								</a>
							</li>
							<li>
								<a href="#">Collaborative Intelligence</a>
							</li>
							<li>
								<a href="#">AI Assistant Capabilities</a>
							</li>
							<li>
								<a href="#">Customer Stories</a>
							</li>
							<li>
								<a href="#">Use Case - Technology</a>
							</li>
							<li>
								<a href="#">Use Case - Education</a>
							</li>
							<li>
								<a href="#">Use Case - Events</a>
							</li>
						</ul>
					</div>
					<div className="col-md-6 text-left">
						<ul className="list">
							<li>
								<a href="#">
									<b>Product</b>
								</a>
							</li>
							<li>
								<a href="#">AI Conversations</a>
							</li>
							<li>
								<a href="#">Lead Enrichment</a>
							</li>
							<li>
								<a href="#">Deal Intelligence</a>
							</li>
							<li>
								<a href="#">Workflow Integration</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<div className="col-md-2 text-left">
				<ul>
					<li>
						<a href="#">
							<b>Company</b>
						</a>
					</li>
					<li>
						<a href="#">About us</a>
					</li>
					<li>
						<a href="#">Blog</a>
					</li>
					<li>
						<a href="#">Resources</a>
					</li>
					<li>
						<a href="#">Careers</a>
					</li>
					<li>
						<a href="#">Help Centre</a>
					</li>
				</ul>
			</div>
			<div className="col-md-3 text-left">
				<h5>
					<b>Contact</b>
				</h5>
				<p>hello@saleswhale.com</p>

				<h5>
					<b>US Office</b>
				</h5>
				<p>1701 Rhode Island Ave NW Washington, DC 20036</p>

				<h5>
					<b>Singapore Office</b>
				</h5>
				<p>155B Telok Ayer Street Singapore, 068611</p>
			</div>
		</div>
		<div className="container-fluid py-5 mt-4  footerBg">
			<div
				className="float-right mr-5"
				style={{
					fontSize: "32px",
					lineHeight: "85%"
				}}>
				<p>
					<i
						className="fab fa-facebook mx-3"
						style={{
							color: "#35589D"
						}}
					/>{" "}
					<i
						className="fab fa-twitter-square mx-3"
						style={{
							color: "#5DA8DC"
						}}
					/>{" "}
					<i
						className="fab fa-linkedin mx-3"
						style={{
							color: "#337BB1"
						}}
					/>
				</p>
			</div>
			<div className="text-left mb-4 ml-3">
				<p className="d-inline mx-3">
					<b>Privacy </b>
				</p>
				<p className="d-inline ml-2">
					<b>Terms</b>
				</p>
			</div>
			<div className="text-left mb-5 ml-3">
				<p>© 2020 Saleswhale, Inc. All rights reserved.</p>
			</div>
		</div>
	</footer>
);
