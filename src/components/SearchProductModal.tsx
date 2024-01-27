import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { searchProductAPI } from "../api/internal";
import { AxiosResponse } from "axios";
import { useNavigate } from "react-router-dom";

const SearchProductModal = ({
	value,
	setShowSearchProductModal,
}: {
	value: string;
	setShowSearchProductModal: Dispatch<SetStateAction<boolean>>;
}) => {
	const [searchedProducts, setSearchedProducts] = useState<
		{ title: string; id: string }[]
	>([]);

	const [showSearchError, setShowSearchError] = useState(false);
	const navigate = useNavigate();

	useEffect(() => {
		(async function () {
			if (value.length === 0) {
				return;
			}
			setShowSearchError(false);
			const response = await searchProductAPI(value);
			if (response.status === 200) {
				const res = response as AxiosResponse;
				setSearchedProducts(res.data.title);
			} else {
				// const err = response as AxiosError;
				// console.log("error message ::", err.message);
				setShowSearchError(true);
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

			{searchedProducts.length === 0 && !showSearchError && (
				<p className="flex h-full justify-center items-center bg-c2d">
					{value.length === 0
						? "Please enter value"
						: "No product find"}
				</p>
			)}

			{showSearchError && (
				<div className="bg-red-300 h-full flex justify-center items-center">
					<p className="font-bold text-center">
						Connection refused from backend.
					</p>
				</div>
			)}

			{searchedProducts.map((product, i) => {
				return (
					<p
						className="hover:bg-c1d w-full text-center px-2 py-1 border-b border-c1c rounded-t-lg cursor-pointer"
						key={i}
						onClick={() => {
							navigate(`/product/description/${product.id}`);
							setShowSearchProductModal(false);
						}}
					>
						{product.title}
					</p>
				);
			})}
		</div>
	);
};

export default SearchProductModal;
