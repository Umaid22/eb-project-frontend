import React from "react";

const NavHambergerItem = ({ title }: { title: string }) => {
	return (
		<div className="bg-c2e">
			<p className="text-center border-b border-c2a py-1">{title}-1</p>
			<p className="text-center border-b border-c2a py-1">{title}-2</p>
			<p className="text-center border-b border-c2a py-1">{title}-3</p>
			<p className="text-center border-b border-c2a py-1">{title}-4</p>
		</div>
	);
};

export default NavHambergerItem;
