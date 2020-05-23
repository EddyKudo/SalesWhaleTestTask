import React from "react";
import "../../styles/home.scss";

export const Investors = () => (
	<div className="my-5 invest mx-auto">
		<div className="text-center">
			<h4
				style={{
					fontSize: "58px",
					color: "#002240",
					lineHeight: "85%",
					marginBottom: "5%"
				}}>
				<b>Our Investors</b>
			</h4>
		</div>
		<div className="mx-auto mt-5">
			<div className="row text-center">
				<div className="col-1" />
				<div className="col-5 border border-info rounded mr-3">
					<img
						src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSWrWcQbU0HVY6kzxBi4xdIySdZCHxyHFiqAhB6lAEIrJ7ovBq5&usqp=CAU"
						className="pt-5"
					/>
				</div>

				<div className="col-5 border border-info rounded ml-3">
					<img src="https://res-1.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco/v1400115185/mwqiyygarlrnu4zr3nyy.png" />
				</div>
				<div className="col-1" />
			</div>

			<div className="row text-center my-4">
				<div className="col-1" />
				<div className="col-5 border border-info rounded py-5 mr-3">
					<img
						src=" https://res.cloudinary.com/div5hqtbd/image/upload/v1590167466/67d1e93aab04a2bf78d6cc4e65479629_eez4fg.png"
						className="pt-5"
						style={{
							width: "45%"
						}}
					/>
				</div>
				<div className="col-5 border border-info rounded py-5 ml-3">
					<img src="https://wavemaker.vc/sea/wp-content/themes/wavemakers/images/wavemaker_logo.png" />
				</div>
				<div className="col-1" />
			</div>
		</div>
	</div>
);
