import React from "react";
import "../../styles/home.scss";

export const Offices = () => (
	<div className="mt-5 pb-5 officeBody">
		<div className="text-center mb-5 ">
			<h4
				style={{
					fontSize: "58px",
					color: "#002240",
					lineHeight: "85%"
				}}>
				<b>Our Offices</b>
			</h4>
		</div>
		<div className="row mt-3 mx-auto text-center ">
			<div className="col-1" />
			<div className="col-xl-5 col-md-5 col-xs-12 mr-2">
				<div className="card" style={{ boxShadow: "0px 10px 30px -5px #3e4244" }}>
					<div className="p-4">
						<img
							src="https://i.pinimg.com/originals/42/c9/74/42c9749cf10d14e7220cbc2009171699.jpg"
							className="card-img-top rounded-circle"
							style={{
								width: "20%"
							}}
						/>
					</div>
					<div>
						<h4 className="mb-3">
							<b>Singapore</b>
						</h4>
						<p>155B Telok Ayer Street </p>
						<p> Singapore, 068611</p>
					</div>
				</div>
			</div>
			<div className="col-xl-5 col-md-5 col-xs-12  ml-2">
				<div className="card" style={{ boxShadow: "0px 10px 30px -5px #3e4244" }}>
					<div className="p-4">
						<img
							src="https://i.pinimg.com/originals/42/c9/74/42c9749cf10d14e7220cbc2009171699.jpg"
							className="card-img-top rounded-circle"
							style={{
								width: "20%"
							}}
						/>
					</div>
					<div>
						<h4 className="mb-3">
							<b>Washington DC</b>
						</h4>
						<p>1701 Rhode Island Ave NW</p>
						<p> Washington, DC 20036</p>
					</div>
				</div>
			</div>
			<div className="col-1" />
		</div>
	</div>
);
