import React from "react";
import "../../styles/home.scss";

export const Home = () => (
	<div className="my-5">
		<div className="mb-5 text-center">
			<div className="col">
				<img
					style={{
						width: "100%"
					}}
					src="https://res.cloudinary.com/div5hqtbd/image/upload/v1590091112/paint_1_aghc0c.png"
				/>
			</div>
		</div>
		<div
			className="row mx-auto"
			style={{
				width: "90%",
				marginTop: "3%"
			}}>
			<div className="col-xl-6 col-md-6 col-xs-12 ">
				<h4
					style={{
						fontSize: "58px",
						alignContent: "left",
						lineHeight: "62px",
						color: "#002240",
						lineHeight: "85%"
					}}>
					<b>A future where AI and humans work hand in hand</b>
				</h4>
			</div>
			<div
				className="col-xl-6 col-md-6 col-xs-12"
				style={{
					fontSize: "18px",
					alignContent: "left",
					lineHeight: "32px",
					lineHeight: "141%"
				}}>
				<p>
					At Saleswhale, we believe that the future of work is Collaborative Intelligence - where machines and
					AI help humans fulfil their highest potential by automating drudgery and producing for more
					effective results.
				</p>
				<p>
					AI assistants help to automate repetitive and mundane tasks so that us humans focus on creative,
					high-impact work that creates value and inspires. The result? Happier and more productive teams
					doing meaningful work.
				</p>
				<p>
					Our mission is to put an AI assistant in every company that could greatly benefit from it, and we
					{'"'}
					re starting off strong addressing this need in marketing and sales teams all across the world.
				</p>
				<p>
					The future is where AI and humans work hand in hand, and we’re here to help businesses benefit from
					that.
				</p>
			</div>
		</div>
	</div>
);
