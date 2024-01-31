import React, { SetStateAction } from "react";
import { Link } from "react-router-dom";

const NavHambergerItem = ({
	title,
	setShowItemModal,
	setMenueModal,
}: {
	title: string;
	setShowItemModal: React.Dispatch<SetStateAction<boolean>>;
	setMenueModal: React.Dispatch<SetStateAction<boolean>>;
}) => {
	return (
		<div className="bg-c2e">
			<Link
				to={`/page/${title}-1 items`}
				onClick={() => {
					setShowItemModal(false);
					setMenueModal(false);
				}}
			>
				<p className="text-center border-b border-c2a py-1">
					{title}-1
				</p>
			</Link>

			<Link
				to={`/page/${title}-2 items`}
				onClick={() => {
					setShowItemModal(false);
					setMenueModal(false);
				}}
			>
				<p className="text-center border-b border-c2a py-1">
					{title}-2
				</p>
			</Link>

			<Link
				to={`/page/${title}-3 items`}
				onClick={() => {
					setShowItemModal(false);
					setMenueModal(false);
				}}
			>
				<p className="text-center border-b border-c2a py-1">
					{title}-3
				</p>
			</Link>

			<Link
				to={`/page/${title}-4 items`}
				onClick={() => {
					setShowItemModal(false);
					setMenueModal(false);
				}}
			>
				<p className="text-center border-b border-c2a py-1">
					{title}-4
				</p>
			</Link>
		</div>
	);
};

export default NavHambergerItem;
