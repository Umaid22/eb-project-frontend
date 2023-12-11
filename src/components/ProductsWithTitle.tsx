import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ReduxStateType } from "../types";

import arrowRightGreen from "../assets/icons/arrow-right-green.svg";
import SingleProduct from "./SingleProduct";
import DummyProduct from "./DummyProduct";
import { categorizedProductsAPI } from "../api/internal";
import { AxiosError, AxiosResponse } from "axios";
import { getFeaturedProducts } from "../store/slices/productsSlice";
import { useNavigate } from "react-router-dom";

const ProductsWithTitle = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const featuredProducts = useSelector(
		(state: ReduxStateType) => state.products.featuredProducts
	);

	useEffect(() => {
		if (featuredProducts.length === 0) {
			getData("featuredProduct");
		}
		async function getData(category: string) {
			const response = await categorizedProductsAPI(category);

			if (response.status === 200) {
				const res = response as AxiosResponse;
				// console.log("res ::", res);
				dispatch(getFeaturedProducts(res.data.product));
				return;
			} else {
				const err = response as AxiosError;
				// const errResponse = err.response as AxiosResponse;
				console.log("error message::", err.message);
			}
		}
	});

	return (
		<div className="py-10 xl:container  xl:mx-auto">
			<div className="flex justify-between px-4">
				<h2 className="font-poppins font-semibold text-lg">
					Featured Products
				</h2>

				<button
					className="flex items-center gap-2"
					onClick={() => navigate("/products/grid")}
				>
					<p className="font-poppins font-bold">see all</p>

					<img src={arrowRightGreen} alt="icon-arrow" />
				</button>
			</div>

			<div className="px-4 flex flex-wrap justify-center gap-8 my-6">
				{featuredProducts.length === 0 && <DummyProduct />}
				{featuredProducts.map((item) => {
					return <SingleProduct product={item} key={item._id} />;
				})}
			</div>
		</div>
	);
};

export default ProductsWithTitle;
