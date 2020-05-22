import React from "react";
import "../../styles/home.scss";

export const Timeline = () => (
	<div className="my-5  text-center">
		<div
			className=" my-3 mx-auto"
			style={{
				width: "90%"
			}}>
			<h4
				style={{
					fontSize: "58px",
					lineHeight: "62px",
					color: "#002240",
					lineHeight: "85%"
				}}>
				<b>Our Progress</b>
			</h4>
		</div>
		<div
			className="mx-auto mt-5 py-5 row  midLine"
			style={{
				width: "90%",
				backgroundColor: "#EFF8FF",
				textAlign: "left",
				fontSize: "26px"
			}}>
			<div className="col-1" />
			<div
				className="col-1 my-2 "
				style={{
					color: "#0688FA"
				}}>
				<b>
					<p>2015</p>
					<p>2016</p>
					<p>2017</p>
					<p>2019</p>
					<p>2020</p>
				</b>
			</div>

			<div
				className="col-1 "
				style={{
					zIndex: "1"
				}}>
				<p>
					<i className="far fa-envelope bg-white rounded-circle ml-1 p-2" />
				</p>

				<p>
					<i className="far fa-envelope bg-white rounded-circle ml-1 p-2" />
				</p>
				<p>
					<i className="far fa-envelope bg-white rounded-circle ml-1 p-2" />
				</p>
				<p>
					<i className="far fa-envelope bg-white rounded-circle ml-1 p-2" />
				</p>
				<p>
					<i className="far fa-envelope bg-white rounded-circle ml-1 p-2" />
				</p>
			</div>
			<div
				className="col-9 my-2 "
				style={{
					color: "#002240"
				}}>
				<p>Founded in Singapore by Gabriel Lim, Ethan Le, and Venus Wong</p>
				<p>Accepted into Y Combinator (S16) and moved to San Francisco</p>
				<p>Raised US$1.2M in seed funding and hired core engineers</p>
				<p>Raised US$5.3M in Series A and expanded team size</p>
				<p>Opened US office in Washington, DC and hired US sales team</p>
			</div>
		</div>
	</div>
);
