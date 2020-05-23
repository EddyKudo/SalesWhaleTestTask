import React from "react";
import "../../styles/home.scss";

export const Future = () => (
	<div className="my-5">
		<div
			className="jumbotron jumbotron-fluid mx-auto rounded"
			style={{
				backgroundColor: "#329DFA",
				width: "80%"
			}}>
			<div className="container text-center my-4">
				<h3
					className="display-4"
					style={{
						fontSize: "48px",
						color: "#FFFFFF",
						lineHeight: "120%"
					}}>
					<b>See the future</b>
				</h3>
			</div>
			<div className="container  text-center my-4">
				<button type="button" className="btn btn-light mr-3 px-5 py-1">
					Get a Demo
				</button>
				<button type="button" className="btn btn-primary ml-3 px-5 py-1 border border-white">
					Read use cases
				</button>
			</div>
		</div>
	</div>
);
