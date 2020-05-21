import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";

export const Home = () => (
	<div className="text-center mt-5">
		<div className="mb-4">
			<img src="https://res.cloudinary.com/div5hqtbd/image/upload/v1590091112/paint_1_aghc0c.png" />
		</div>
		<div className="row">
			<div className="col-6">
				<h3>A future where AI and humans work hand in hand</h3>
			</div>
			<div className="col-6">
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
		<p>
			<img src={rigoImage} />
		</p>
		<a href="#" className="btn btn-success">
			If you see this green button, bootstrap is working
		</a>
	</div>
);
