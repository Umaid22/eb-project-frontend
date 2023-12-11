import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { ReduxStateType } from "../types";

import arrowRightBlack from "../assets/icons/arrow-right-black1.svg";
import SingleProduct from "./SingleProduct";
import DummyProduct from "./DummyProduct";
import { categorizedProductsAPI } from "../api/internal";

import { AxiosError, AxiosResponse } from "axios";
import {
	getBestSellingProducts,
	getBestFarmerProducts,
} from "../store/slices/productsSlice";

const ProductsWithCategory = () => {
	const dispatch = useDispatch();
	const bestSellingProducts = useSelector(
		(state: ReduxStateType) => state.products.bestSellingProducts
	);
	const bestFarmerProducts = useSelector(
		(state: ReduxStateType) => state.products.bestFarmerProducts
	);

	useEffect(() => {
		if (
			bestSellingProducts.length === 0 &&
			bestFarmerProducts.length === 0
		) {
			getProductsHandler("bestSelling");
			getProductsHandler("bestFarmers");
		}

		async function getProductsHandler(category: string) {
			const response = await categorizedProductsAPI(category);
			if (response.status === 200) {
				const res = response as AxiosResponse;
				// console.log(`res-${category} ::`, res);
				switch (category) {
					case "bestSelling":
						dispatch(getBestSellingProducts(res.data.product));
						break;
					case "bestFarmers":
						dispatch(getBestFarmerProducts(res.data.product));
						break;
				}
				// console.log("res ::", res.data.product);
			} else {
				const res = response as AxiosError;
				// const message = res.response as AxiosResponse;
				console.log("error message ::", res.message);
				// return res.message;
			}
		}
		// ES-LINT-IGNORE
	});

	return (
		<div className="xl:container xl:mx-auto">
			<div className="px-4 flex flex-col items-center md:items-start md:flex-row gap-4 lg:gap-6 xl:gap-8 my-14">
				<div className="pe-4 xl:pe-24">
					<h2 className="font-poppins font-semibold text-lg text-c1a pb-3">
						Best selling products
					</h2>

					<div className="flex flex-col gap-4 pb-10">
						<Link
							to="page/Kitchen related items"
							className="text-c2a text-sm underline"
						>
							Kitchen
						</Link>
						<Link
							to="page/Meat and fish related"
							className="text-c2a text-sm underline"
						>
							Meat and fish
						</Link>
						<Link
							to="page/Nutrition related"
							className="text-c2a text-sm underline"
						>
							Special nutrition
						</Link>
						<Link
							to="page/Pharmacy related"
							className="text-c2a text-sm underline"
						>
							Pharmacy
						</Link>
						<Link
							to="page/Baby related"
							className="text-c2a text-sm underline"
						>
							Baby
						</Link>
					</div>

					<button className="bg-c1f rounded-xl px-4 py-2 flex items-center gap-2">
						<p className="font-poppins font-bold">More products</p>
						<img src={arrowRightBlack} alt="icon-arrow" />
					</button>
				</div>

				<div className="flex flex-wrap lg:flex-nowrap justify-center gap-4 xl:gap-8">
					{bestSellingProducts.length === 0 && <DummyProduct />}
					{bestSellingProducts?.map((product) => {
						return (
							<SingleProduct
								product={product}
								key={product._id}
							/>
						);
					})}
				</div>
			</div>

			<div className="px-4 flex flex-col md:flex-row items-center md:items-start gap-4 lg:gap-6 xl:gap-8 my-14">
				<div className="pe-4 xl:pe-28">
					<h2 className="font-poppins font-semibold text-lg text-c1a pb-3">
						Best from Farmers
					</h2>

					<div className="flex flex-col gap-4 pb-10">
						<Link
							to="page/Carrots related"
							className="text-c2a text-sm underline"
						>
							Carrots
						</Link>
						<Link
							to="page/Tomatoes related"
							className="text-c2a text-sm underline"
						>
							Tomatoes
						</Link>
						<Link
							to="page/Potatoes related"
							className="text-c2a text-sm underline"
						>
							Potatoes
						</Link>
						<Link
							to="page/Chicken related"
							className="text-c2a text-sm underline"
						>
							Chicken
						</Link>
						<Link
							to="page/Beaf related"
							className="text-c2a text-sm underline"
						>
							Beaf
						</Link>
					</div>

					<button className="bg-c1f rounded-xl px-4 py-2 flex items-center gap-2">
						<p className="font-poppins font-bold">More products</p>

						<img src={arrowRightBlack} alt="icon-arrow" />
					</button>
				</div>

				<div className="flex flex-wrap lg:flex-nowrap justify-center gap-4 xl:gap-8">
					{bestFarmerProducts.length === 0 && <DummyProduct />}
					{bestFarmerProducts?.map((product) => {
						return (
							<SingleProduct
								product={product}
								key={product._id}
							/>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default ProductsWithCategory;
