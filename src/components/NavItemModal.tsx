import React from "react";

interface PropTypes {
	title: string;
}
const NavItemModal = ({ title }: PropTypes) => {
	return (
		<div className="border border-c1d rounded-lg w-28 bg-c1h font-poppins shadow-lg shadow-stone-400">
			<p
				className="hover:bg-c1d w-full text-center px-2 py-1 border-b border-c1c rounded-t-lg"
				// onClick={() => setSelectedCategory("Bakery")}
			>
				{title}-1
			</p>
			<p
				className="hover:bg-c1d w-full text-center  px-2 py-1 border-b border-c1c"
				// onClick={() => setSelectedCategory("Fruits")}
			>
				{title}-2
			</p>
			<p
				className="hover:bg-c1d w-full text-center  px-2 py-1 border-b border-c1c"
				// onClick={() => setSelectedCategory("Vegetables")}
			>
				{title}-3
			</p>

			<p
				className="hover:bg-c1d w-full text-center  px-2 py-1"
				// onClick={() => setSelectedCategory("Kitchen")}
			>
				{title}-4
			</p>
		</div>
	);
};

export default NavItemModal;
