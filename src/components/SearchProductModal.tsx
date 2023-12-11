import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { searchProductAPI } from "../api/internal";
import { AxiosError, AxiosResponse } from "axios";

const SearchProductModal = ({
	value,
	setShowSearchProductModal,
}: {
	value: string;
	setShowSearchProductModal: Dispatch<SetStateAction<boolean>>;
}) => {
	const [searchedProducts, setSearchedProducts] = useState<
		{ title: string }[]
	>([]);

	useEffect(() => {
		(async function () {
			if (value.length === 0) {
				return;
			}
			const response = await searchProductAPI(value);
			if (response.status === 200) {
				const res = response as AxiosResponse;
				setSearchedProducts(res.data.title);
			} else {
				const err = response as AxiosError;
				console.log("error message ::", err.message);
			}
		})();
	}, [value]);
	return (
		<div className="border border-c1d rounded-lg w-269 h-280 bg-c1h font-poppins shadow-lg shadow-stone-400 overflow-auto">
			<div
				className="text-center pr-4 pt-4 pb-3 border-b-2 border-c2a hover:text-c2a cursor-pointer font-semibold"
				onClick={() => setShowSearchProductModal(false)}
			>
				Close X
			</div>
			{searchedProducts.length === 0 && (
				<p className="flex h-full justify-center items-center bg-c2d">
					{value.length === 0
						? "Please enter value"
						: "No product find"}
				</p>
			)}
			{searchedProducts.map((product, i) => {
				return (
					<p
						className="hover:bg-c1d w-full text-center px-2 py-1 border-b border-c1c rounded-t-lg"
						key={i}
					>
						{product.title}
					</p>
				);
			})}
		</div>
	);
};

export default SearchProductModal;
