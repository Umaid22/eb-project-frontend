import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ReduxStateType } from "../types";

import gridIcon from "../assets/icons/grid-view-icon.svg";
import listIcon from "../assets/icons/list-view.svg";
import arrowDownBlack from "../assets/icons/arrow-down-black.svg";
import starYellow from "../assets/icons/star-filled-yellow.svg";
import starEmpty from "../assets/icons/star-empty.svg";
import Button from "../components/Button";

import SingleGridProduct from "../components/SingleGridProduct";
import DummyProduct from "../components/DummyProduct";
import { getAllProductsAPI } from "../api/internal";
import { AxiosError, AxiosResponse } from "axios";
import { getProducts } from "../store/slices/productsSlice";

const ProductsGrid = () => {
	const dispatch = useDispatch();
	const productsAll = useSelector(
		(state: ReduxStateType) => state.products.productsAll
	);

	useEffect(() => {
		document.title = "Products Grid";

		if (productsAll.length === 0) {
			getData();
		}
		async function getData() {
			const response = await getAllProductsAPI();
			if (response.status === 200) {
				const res = response as AxiosResponse;
				dispatch(getProducts(res.data.products));
			} else {
				const err = response as AxiosError;
				console.log("error message ::", err.message);
			}
		}
	});

	return (
		<div className="px-4 xl:mx-auto xl:container">
			{/* BREADCRUMBS */}
			<div className="flex gap-2 text-xs text-c1c py-4">
				<p>Homepage</p>
				<p>/</p>
				<p className="text-c1a">Fruit and vegetables</p>
			</div>

			{/* HEADING */}
			<div className="flex flex-col sm:flex-row gap-3 items-center justify-between">
				<h2 className="font-poppins font-semibold text-22 sm:text-26 md:text-32">
					Fruit and vegetables
				</h2>

				<div className="flex gap-6">
					<Link to="/products/grid" className="flex gap-1">
						<img src={gridIcon} alt="grid-Icon" />
						<p className="text-xs">Grid view</p>
					</Link>
					<Link to="/products/list" className="flex gap-1">
						<img src={listIcon} alt="list-Icon" />
						<p className="text-xs text-c1c">List view</p>
					</Link>
					<div className="flex gap-1">
						<p className="bg-c2e rounded-xl px-2 font-poppins font-semibold text-xs text-c2a">
							117
						</p>
						<p className="text-xs text-c1c">Products</p>
					</div>
				</div>
			</div>

			{/* Filter option */}
			<div className="py-4">
				<div className="flex flex-wrap flex-col sm:flex-row gap-4 mb-4">
					<div className="bg-c1h border border-c1d rounded-xl px-4 py-2 w-fit flex gap-4">
						<div className="flex gap-2 ">
							<input type="radio" />
							<p className="text-sm">Filter A</p>
						</div>
						<div className="flex gap-2 ">
							<input type="radio" defaultChecked />
							<p className="text-sm">Filter B</p>
						</div>
					</div>

					<div className="bg-c1h border border-c1d rounded-xl px-4 py-2 w-fit flex  items-center gap-4">
						<div className="flex gap-2 ">
							<input type="checkbox" />
							<p className="text-sm">Filter</p>
						</div>
						<p className="border border-c1c px-1 rounded-xl text-xs font-poppins font-semibold">
							Nbm
						</p>
					</div>

					<div className="bg-c1h border border-c1d rounded-xl px-4 py-2 w-fit flex items-center gap-4">
						<div className="flex gap-2 ">
							<input type="checkbox" />
							<p className="text-sm">Filter</p>
						</div>
						<p className="border border-c1c px-1 rounded-xl text-xs font-poppins font-semibold">
							Nbm
						</p>
					</div>

					<div className="bg-c1h border border-c1d rounded-xl px-4 py-2 w-fit flex gap-4">
						<div className="flex gap-2 ">
							<input
								type="checkbox"
								checked
								onChange={() => console.log("filter changed")}
							/>
							<p className="text-sm">
								Filter{" "}
								<span className="border border-c1c px-2 rounded-xl text-sm font-poppins font-semibold">
									12
								</span>
							</p>
						</div>

						<div className="border-l border-c1d ml-2 pl-6 flex items-center gap-1">
							<p className="text-sm font-poppins font-semibold ">
								Select
							</p>
							<img src={arrowDownBlack} alt="arrow" />
						</div>
					</div>
				</div>

				<div className="flex flex-wrap gap-3">
					<p className="font-poppins font-semibold text-xs text-c1c">
						Applied filters:
					</p>

					<div className="bg-c2e px-2 flex gap-2 rounded-xl items-center">
						<p className="font-poppins font-semibold text-xs text-c2a">
							Selected Filter
						</p>
						<p className="text-c2c font-poppins text-xs">x</p>
					</div>

					<div className="bg-c2e px-2 flex gap-2 rounded-xl items-center">
						<p className="font-poppins font-semibold text-xs text-c2a">
							Selected Filter
						</p>
						<p className="text-c2c font-poppins text-xs">x</p>
					</div>
				</div>
			</div>

			{/* GRID VIEW */}
			<div className="flex flex-col sm:flex-row gap-8 xl:gap-16 py-8 xl:py-16">
				{/* LEFT FILTER DETAILS */}
				<div className="flex flex-col gap-8 md:gap-12 md:w-48 lg:w-237">
					{/* categories */}
					<div>
						<p className="font-poppins font-semibold text-lg mb-4">
							Categories
						</p>
						<div className="flex flex-col gap-3">
							<div className="flex justify-between max-w-260">
								<p className="text-sm">Category name</p>
								<p className="bg-c2e px-2 rounded-xl text-c2a text-xs font-poppins font-semibold">
									320
								</p>
							</div>

							<div className="flex justify-between max-w-260">
								<p className="text-sm">Category name</p>
								<p className="bg-c2e px-2 rounded-xl text-c2a text-xs font-poppins font-semibold">
									120
								</p>
							</div>

							<div className="flex justify-between max-w-260">
								<p className="text-sm">Category name</p>
								<p className="bg-c2e px-2 rounded-xl text-c2a text-xs font-poppins font-semibold">
									32
								</p>
							</div>

							<div className="flex justify-between max-w-260">
								<p className="text-sm">Category name</p>
								<p className="bg-c2e px-2 rounded-xl text-c2a text-xs font-poppins font-semibold">
									48
								</p>
							</div>
						</div>
					</div>

					{/* brands */}
					<div>
						<p className="font-poppins font-semibold text-lg mb-4">
							Brands
						</p>
						<div className="flex flex-col gap-3">
							<div className="flex gap-2">
								<input type="checkbox" />
								<p className="text-sm">Filter by brand item</p>
							</div>
							<div className="flex gap-2">
								<input type="checkbox" />
								<p className="text-sm">Filter by brand item</p>
							</div>
							<div className="flex gap-2">
								<input type="checkbox" />
								<p className="text-sm">Filter by brand item</p>
							</div>
							<div className="flex gap-2">
								<input type="checkbox" />
								<p className="text-sm">Filter by brand item</p>
							</div>
							<div className="flex gap-2">
								<input type="checkbox" />
								<p className="text-sm">Filter by brand item</p>
							</div>
						</div>
					</div>

					{/* RATING */}
					<div>
						<p className="font-poppins font-semibold text-lg mb-4">
							Rating
						</p>

						<div className="flex flex-col gap-3">
							<div className="flex gap-2">
								<input type="checkbox" />
								<div className="flex gap-1">
									<img src={starYellow} alt="rating" />
									<img src={starYellow} alt="rating" />
									<img src={starYellow} alt="rating" />
									<img src={starYellow} alt="rating" />
									<img src={starYellow} alt="rating" />
								</div>
							</div>
							<div className="flex gap-2">
								<input type="checkbox" />
								<div className="flex gap-1">
									<img src={starYellow} alt="rating" />
									<img src={starYellow} alt="rating" />
									<img src={starYellow} alt="rating" />
									<img src={starYellow} alt="rating" />
									<img src={starEmpty} alt="rating" />
								</div>
							</div>
							<div className="flex gap-2">
								<input type="checkbox" />
								<div className="flex gap-1">
									<img src={starYellow} alt="rating" />
									<img src={starYellow} alt="rating" />
									<img src={starYellow} alt="rating" />
									<img src={starEmpty} alt="rating" />
									<img src={starEmpty} alt="rating" />
								</div>
							</div>
							<div className="flex gap-2">
								<input type="checkbox" />
								<div className="flex gap-1">
									<img src={starYellow} alt="rating" />
									<img src={starYellow} alt="rating" />
									<img src={starEmpty} alt="rating" />
									<img src={starEmpty} alt="rating" />
									<img src={starEmpty} alt="rating" />
								</div>
							</div>
							<div className="flex gap-2">
								<input type="checkbox" />
								<div className="flex gap-1">
									<img src={starYellow} alt="rating" />
									<img src={starEmpty} alt="rating" />
									<img src={starEmpty} alt="rating" />
									<img src={starEmpty} alt="rating" />
									<img src={starEmpty} alt="rating" />
								</div>
							</div>
						</div>
					</div>

					{/* price */}
					<div>
						<p className="font-poppins font-semibold text-lg mb-4">
							Price
						</p>
						<div className="flex flex-col gap-4 mb-8">
							<div>
								<input type="range" min={10} max={100} />
							</div>

							<div className="flex items-center gap-2">
								<div className="flex flex-col">
									<label className="font-poppins font-semibold text-xs">
										Min
									</label>
									<div className="bg-c1h border border-c1d rounded-xl px-3 py-1 ">
										<input
											type="number"
											min={0}
											// value={value}
											// name={name}
											// onBlur={onBlur}
											// onChange={onChange}
											placeholder="0"
											className="outline-none bg-c1h text-sm text-c1c rounded-xl py-2 px-1 w-12"
										/>
									</div>
									{/* {error && <p className="text-xs text-red-600">{errorMessage}</p>} */}
								</div>

								<p> - </p>

								<div className="flex flex-col">
									<label className="font-poppins font-semibold text-xs">
										Max
									</label>
									<div className="bg-c1h border border-c1d rounded-xl px-3 py-1 ">
										<input
											type="number"
											max={999}
											// value={value}
											// name={name}
											// onBlur={onBlur}
											// onChange={onChange}
											placeholder="000"
											className="outline-none bg-c1h text-sm text-c1c rounded-xl py-2 px-1 w-12"
										/>
									</div>
									{/* {error && <p className="text-xs text-red-600">{errorMessage}</p>} */}
								</div>
							</div>
						</div>

						<div className="flex gap-8">
							<Button label="Apply" variant="secondary" />
							<button className="text-c1c text-15 px-2 py-1">
								Reset
							</button>
						</div>
					</div>
				</div>

				{/* RIGHT LIST */}
				<div className="flex flex-wrap justify-center gap-8 h-fit">
					{/* Single */}
					{productsAll.length === 0 && <DummyProduct />}
					{productsAll.map((product) => {
						return (
							<SingleGridProduct
								product={product}
								key={product._id}
							/>
						);
					})}
				</div>
			</div>

			{/* PAGINATION */}
			<div className="py-4 flex flex-wrap justify-between items-center">
				<div className="flex gap-2 text-xs">
					<p className="text-c1c">Page:</p>
					<p className="text-c2a">1</p>
					<p>2</p>
					<p>3</p>
					<p>4</p>
				</div>

				<div>
					<Button
						label="Show more"
						variant="secondary"
						iconName="rightArrowIconWhite1"
						alignment="right"
					/>
				</div>

				<div className="flex gap-1 items-center">
					<p className="text-c2a text-xs font-poppins font-semibold bg-c2e px-2 h-fit rounded-xl">
						336
					</p>
					<p className="text-xs text-c1c">Products</p>
				</div>
			</div>
		</div>
	);
};

export default ProductsGrid;
