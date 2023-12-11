import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const Upcoming = () => {
	const { pageName } = useParams();

	useEffect(() => {
		document.title = `${pageName} Page`;
	});

	return (
		<div className="flex flex-col items-center justify-center gap-6 pt-32 py-10">
			<p className="font-bold font-poppins">
				This is{" "}
				<span className="text-c2a text-22 underline mx-4 shadow-sm shadow-c2a rounded-md py-2 px-3">
					{pageName}
				</span>{" "}
				page...
			</p>
			<div className="border border-c1c rounded-md px-10 py-2 shadow-md flex flex-col gap-1">
				<p className="font-poppins font-bold text-lg">
					Pages created :
				</p>
				<Link to="/" className="text-c2a underline">
					Home
				</Link>
				<Link to="/products/grid" className="text-c2a underline">
					Products grid view
				</Link>
				<Link to="/products/list" className="text-c2a underline">
					Products list view
				</Link>
				<Link
					to="/product/description/6570a9d65fa627ce6e43a45d"
					className="text-c2a underline"
				>
					Product details page
				</Link>
				<Link to="/blogs" className="text-c2a underline">
					Blogs
				</Link>
				<Link
					to="/blog/details/6574511f7db88615628f3480"
					className="text-c2a underline"
				>
					Blog Details
				</Link>
				<Link to="/checkout" className="text-c2a underline">
					Checkout page
				</Link>
				<Link to="/signup" className="text-c2a underline">
					Signup
				</Link>
				<Link to="/login" className="text-c2a underline">
					Login
				</Link>
			</div>
		</div>
	);
};

export default Upcoming;
