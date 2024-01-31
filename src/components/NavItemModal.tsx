import React, { Dispatch, SetStateAction } from "react";
import { Link } from "react-router-dom";

interface PropTypes {
	title: string;
	setShowModal: Dispatch<SetStateAction<boolean>>;
}
const NavItemModal = ({ title, setShowModal }: PropTypes) => {
	return (
		<div className="border border-c1d rounded-lg w-28 bg-c1h font-poppins shadow-lg shadow-stone-400">
			<Link
				to={`/page/${title}-1 items`}
				onClick={() => setShowModal(false)}
			>
				<p
					className="hover:bg-c1d w-full text-center px-2 py-1 border-b border-c1c rounded-t-lg"
					// onClick={() => setSelectedCategory("Bakery")}
				>
					{title}-1
				</p>
			</Link>

			<Link
				to={`/page/${title}-2 items`}
				onClick={() => setShowModal(false)}
			>
				<p
					className="hover:bg-c1d w-full text-center  px-2 py-1 border-b border-c1c"
					// onClick={() => setSelectedCategory("Fruits")}
				>
					{title}-2
				</p>
			</Link>

			<Link
				to={`/page/${title}-3 items`}
				onClick={() => setShowModal(false)}
			>
				<p
					className="hover:bg-c1d w-full text-center  px-2 py-1 border-b border-c1c"
					// onClick={() => setSelectedCategory("Vegetables")}
				>
					{title}-3
				</p>
			</Link>

			<Link
				to={`/page/${title}-4 items`}
				onClick={() => setShowModal(false)}
			>
				<p
					className="hover:bg-c1d w-full text-center  px-2 py-1"
					// onClick={() => setSelectedCategory("Kitchen")}
				>
					{title}-4
				</p>
			</Link>
		</div>
	);
};

export default NavItemModal;
