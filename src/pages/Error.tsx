import React, { useEffect } from "react";
import { Link } from "react-router-dom";

function Error() {
	useEffect(() => {
		document.title = "Error Page";
	});

	return (
		<div className="flex flex-col items-center justify-center my-32">
			<p className="font-bold font-poppins text-c2a text-22">
				Error 404 - Page not found
			</p>
			<p className="font-bold font-poppins mt-10 mb-6">
				Go back to{" "}
				<Link
					to="/"
					className="text-c2a font-bold underline mx-4 shadow-sm shadow-c2a rounded-md py-2 px-3"
				>
					Home
				</Link>
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
}

export default Error;
