import React, { Dispatch, SetStateAction } from "react";

interface ShowCategoriesPropsTypes {
	setSelectedCategory: Dispatch<SetStateAction<string>>;
}

const ShowCategories = ({ setSelectedCategory }: ShowCategoriesPropsTypes) => {
	return (
		<div className="border border-c1d rounded-lg w-44 bg-c1h font-poppins shadow-lg shadow-stone-400">
			<p
				className="hover:bg-c1d w-full text-center px-2 py-1 border-b border-c1c rounded-t-lg"
				onClick={() => setSelectedCategory("Bakery")}
			>
				Bakery
			</p>
			<p
				className="hover:bg-c1d w-full text-center  px-2 py-1 border-b border-c1c"
				onClick={() => setSelectedCategory("Fruits")}
			>
				Fruits
			</p>
			<p
				className="hover:bg-c1d w-full text-center  px-2 py-1 border-b border-c1c"
				onClick={() => setSelectedCategory("Vegetables")}
			>
				Vegetables
			</p>
			<p
				className="hover:bg-c1d w-full text-center  px-2 py-1 border-b border-c1c"
				onClick={() => setSelectedCategory("Meat and fish")}
			>
				Meat and fish
			</p>
			<p
				className="hover:bg-c1d w-full text-center  px-2 py-1 border-b border-c1c"
				onClick={() => setSelectedCategory("Drinks")}
			>
				Drinks
			</p>
			<p
				className="hover:bg-c1d w-full text-center  px-2 py-1"
				onClick={() => setSelectedCategory("Kitchen")}
			>
				Kitchen
			</p>
		</div>
	);
};

export default ShowCategories;
