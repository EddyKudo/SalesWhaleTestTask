import React from "react";
import "../../styles/home.scss";
import { Link } from "react-router-dom";

export const Culture = () => (
	<div className="mt-5 mx-auto ">
		<div className="text-center mt-5 ">
			<h4
				style={{
					fontSize: "58px",
					lineHeight: "62px",
					color: "#002240",
					lineHeight: "85%"
				}}>
				<b>Our Culture</b>
			</h4>
			<p
				style={{
					fontSize: "21px",
					lineHeight: "38px",
					color: "#537089",
					lineHeight: "144%",
					margin: "2% 0% 6% 0%"
				}}>
				At Saleswhale, we encourage everyone to grow and innovate, while having fun in the process.{" "}
			</p>
		</div>

		<div
			className="row mx-auto"
			style={{
				width: "90%",
				marginTop: "3%"
			}}>
			<div className="col-xl-4 col-md-4 col-xs-12">
				<img
					src="https://i.pinimg.com/236x/34/72/01/3472011113c26a9122364a27ef3d25b4.jpg"
					className="card-img-top ml-3 rounded-circle"
					alt="..."
					style={{
						width: "20%"
					}}
				/>
				<div className="card-body">
					<h5
						className="card-title"
						style={{
							fontSize: "21px",
							lineHeight: "129%",
							color: "#002240"
						}}>
						<b>Building for the future</b>
					</h5>
					<p
						className="card-text"
						style={{
							fontSize: "18px",
							lineHeight: "141%",
							color: "#537089"
						}}>
						We always challenge the status quo and work hard innovating on a product that not only works,
						but changes the game for our users.
					</p>
				</div>
			</div>
			<div className="col-xl-4 col-md-4 col-xs-12">
				<img
					src="https://i.pinimg.com/236x/34/72/01/3472011113c26a9122364a27ef3d25b4.jpg"
					className="card-img-top ml-3 rounded-circle"
					alt="..."
					style={{
						width: "20%"
					}}
				/>
				<div className="card-body">
					<h5
						className="card-title"
						style={{
							fontSize: "21px",
							lineHeight: "129%",
							color: "#002240"
						}}>
						<b>Promoting trust and transparency</b>
					</h5>
					<p
						className="card-text"
						style={{
							fontSize: "18px",
							lineHeight: "141%",
							color: "#537089"
						}}>
						We remain completely open, honest and transparent with everyone. This has allowed us to build
						strong relationships with each other.
					</p>
				</div>
			</div>
			<div className="col-xl-4 col-md-4 col-xs-12">
				<img
					src="https://i.pinimg.com/236x/34/72/01/3472011113c26a9122364a27ef3d25b4.jpg"
					className="card-img-top ml-3 rounded-circle"
					alt="..."
					style={{
						width: "20%"
					}}
				/>
				<div className="card-body">
					<h5
						className="card-title"
						style={{
							fontSize: "21px",
							lineHeight: "129%",
							color: "#002240"
						}}>
						<b>Achieving our very best</b>
					</h5>
					<p
						className="card-text"
						style={{
							fontSize: "18px",
							lineHeight: "141%",
							color: "#537089"
						}}>
						We believe the success of the company lies within our employees and we constantly challenge each
						other to learn and level up.
					</p>
				</div>
			</div>
		</div>

		<div className="my-5 text-center ">
			<p
				style={{
					fontSize: "21px",
					lineHeight: "144%",
					color: "#002240"
				}}>
				If you are excited by our vision of the future, and want to solve meaningful problems, talk to us!
			</p>
			<Link to="/signup">
				<button
					className="btn btn-primary mt-4"
					style={{
						fontSize: "18px",
						padding: ".5% 3% .5% 3%"
					}}>
					<b>Join the team</b>
				</button>
			</Link>
		</div>
	</div>
);
