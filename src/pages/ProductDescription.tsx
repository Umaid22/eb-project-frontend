import React, { useEffect, useState } from "react";
import starFillYellow from "../assets/icons/star-filled-yellow.svg";
import starEmpty from "../assets/icons/star-empty.svg";
import arrowDownBlack from "../assets/icons/arrow-down-black.svg";
// import RelatedProducts from "../components/RelatedProducts";
import ProductsWithTitle from "../components/ProductsWithTitle";
import { singleProductAPI } from "../api/internal";
import { useParams } from "react-router-dom";
import { AxiosError, AxiosResponse } from "axios";
import { useDispatch } from "react-redux";
// import {
// 	setSingleProduct,
// 	resetSingleProduct,
// } from "../store/slices/productsSlice";
import { ProductType } from "../types";
import { addItemToCart } from "../store/slices/cartSlice";
import DummyProduct from "../components/DummyProduct";
import ErrorMessage from "../components/ErrorMessage";

const ProductDescription = () => {
	const [showProductError, setShowProductError] = useState(false);
	const { productid } = useParams();
	const dispatch = useDispatch();

	const [productDetail, setProductDetail] = useState<ProductType>({
		_id: "",
		title: "",
		description: "",
		price: 0,
		rating: 5,
		detail: "",
		sku: "",
		category: "",
		stock: 0,
		farm: "",
		freshness: 1,
		buyby: "",
		deliverytime: 1,
		deliveryarea: "",
		descriptiondetail: "",
		imgprimary: "",
		imgsecondary: "",
		discount: 0,
		freeshipping: true,
		featured: "",
		createdAt: "",
		updatedAt: "",
	});

	// const [starFilled, setStarFilled] = useState("")
	// const productDetail = useSelector(
	// 	(state: ReduxStateType) => state.products.singleProduct
	// );

	const {
		buyby,
		category,
		deliveryarea,
		deliverytime,
		descriptiondetail,
		detail,
		discount,
		farm,
		freshness,
		imgprimary,
		imgsecondary,
		price,
		rating,
		sku,
		stock,
		title,
		freeshipping,
	} = productDetail;

	const discountedPrice = price - (price / 100) * discount;
	const arr = descriptiondetail.split("/");
	const [origins, howToCook] = arr;

	useEffect(() => {
		getProductData();

		async function getProductData() {
			const response = await singleProductAPI(productid);
			if (response.status === 200) {
				const res = response as AxiosResponse;
				// dispatch(setSingleProduct(res.data.product));
				setProductDetail(res.data.product);
			} else {
				// const err = response as AxiosError;
				// console.log("errMessage ::", err.message);
				setShowProductError(true);
			}
		}

		document.title = title;
	}, [productid, title]);

	// const starFilled = [...Array(rating)];
	// console.log("starFilled ::", starFilled);

	// const check =
	// 	[...Array(rating)].length !== 0 &&
	// 	[...Array(rating)]?.map((e) => {
	// 		// console.log(e);
	// 		return e;
	// 	});

	return (
		<div className="px-4 xl:container xl:mx-auto">
			{/* BREADCRUMBS */}
			<div className="text-xs flex gap-2 text-c1c py-4">
				<p className="">Homepage</p>
				<p>/</p>
				<p>Fruit and vegetables</p>
				<p>/</p>
				<p className="text-c1a">{title}</p>
			</div>

			{productDetail._id.length === 0 && !showProductError && (
				<div className="mx-auto w-fit">
					<DummyProduct />
				</div>
			)}

			{showProductError && (
				<div className="border border-gray-500 rounded-xl w-full py-36 px-3 bg-gray-200">
					<div className="mx-auto my-auto w-fit text-center">
						<ErrorMessage message="Product details fetching failed. Connection refused from Backend." />
					</div>
				</div>
			)}

			{/* PRODUCT DETAILS */}
			{productDetail._id.length !== 0 && (
				<div className="py-4 flex flex-col sm:flex-row gap-4 lg:gap-8">
					{/* LEFT SIDE */}
					<div className="flex flex-col gap-9">
						<div className="bg-c1h w-260 md:w-369 lg:w-469 xl:w-569 h-48 md:h-280 lg:h-370 xl:h-436 rounded-xl relative">
							<img
								src={imgprimary}
								alt="product"
								className="w-full h-full object-cover object-left-bottom rounded-xl"
							/>
							<div className="flex gap-3 absolute top-4 left-4">
								{discount !== 0 && (
									<div className="bg-c2e rounded-xl px-3 py-1 font-poppins font-semibold text-xs text-c2a w-fit h-fit">
										- {discount} %
									</div>
								)}
								{freeshipping && (
									<div className="bg-c2e rounded-xl px-3 py-1 font-poppins font-semibold text-xs text-c2a w-fit h-fit">
										Free shipping
									</div>
								)}
							</div>
						</div>

						<div className="bg-c1h w-260 md:w-369 lg:w-469 xl:w-569 h-48 md:h-280 lg:h-370 xl:h-436 rounded-xl hidden sm:block">
							<img
								src={imgsecondary}
								alt="product"
								className="w-full h-full object-cover rounded-xl"
							/>
						</div>
						<div className="bg-c1h w-260 md:w-369 lg:w-469 xl:w-569 h-48 md:h-280 lg:h-370 xl:h-436 rounded-xl hidden sm:block">
							<img
								src={imgprimary}
								alt="product"
								className="w-full h-full object-cover rounded-xl"
							/>
						</div>
					</div>

					{/* RIGHT SIDE */}
					<div>
						{/* TOP */}
						<div className="flex flex-col gap-10 pb-28">
							<div>
								<h2 className="font-poppins font-semibold text-xl md:text-26 lg:text-32 pb-2">
									{title}
								</h2>
								<div className="flex gap-2">
									<div className="flex gap-1">
										{[...Array(rating)].length !== 0 &&
											[...Array(rating)]?.map((e, i) => (
												<img
													src={starFillYellow}
													alt="rating"
													key={i}
												/>
											))}

										{[...Array(5 - rating)].length !== 0 &&
											[...Array(5 - rating)]?.map(
												(e, i) => (
													<img
														src={starEmpty}
														alt="rating"
														key={i}
													/>
												)
											)}
									</div>
									<div className="text-xs text-c1c underline">
										(1 customer review)
									</div>
								</div>
							</div>

							<div className="text-17 w-72 md:w-350 lg:w-469 xl:w-569">
								{detail}
							</div>

							<div className="flex flex-col lg:flex-row gap-5 xl:gap-10">
								<div className="flex gap-6 xl:gap-12">
									<div className="text-sm text-c1c flex flex-col gap-3">
										<p>SKU:</p>
										<p>Category:</p>
										<p>Stock:</p>
										<p>Farm</p>
									</div>
									<div className="text-sm flex flex-col gap-3">
										<p>{sku}</p>
										<p className="underline">{category}</p>
										{stock !== 0 ? (
											<p className="text-sm text-c2a underline">
												In Stock
											</p>
										) : (
											<p className="text-sm ">
												Out of Stock
											</p>
										)}
										<p>{farm}</p>
									</div>
								</div>

								<div className="flex gap-6 xl:gap-12">
									<div className="text-sm text-c1c flex flex-col gap-3">
										<p>Freshness:</p>
										<p>Buy by:</p>
										<p>Delivery:</p>
										<p>Delivery area</p>
									</div>
									<div className="text-sm flex flex-col gap-3">
										<p>{freshness} days old</p>
										<p>{buyby}</p>
										<p>In {deliverytime} days</p>
										<p>{deliveryarea}</p>
									</div>
								</div>
							</div>

							<div className="border-2 border-c1f rounded-xl flex gap-10 xl:gap-24 px-5 py-4 w-fit">
								<div>
									{discount !== 0 ? (
										<>
											<p className="font-poppins font-semibold text-26 text-c2a">
												{discountedPrice.toFixed(2)} USD
											</p>
											<p className="font-poppins font-semibold text-xs text-c1c line-through">
												{price} USD
											</p>
										</>
									) : (
										<p className="font-poppins font-semibold text-26 text-c2a">
											{price} USD
										</p>
									)}
								</div>

								<div className="flex flex-col lg:flex-row gap-6">
									<div className="flex items-center border rounded-xl border-c1d px-4 py-3 h-fit bg-c1h">
										<div className="border-r border-c1d pr-4">
											<p className="text-sm text-c1d">
												1
											</p>
										</div>
										<p className="font-poppins font-semibold pr-1 pl-4">
											Pcs
										</p>
										<img src={arrowDownBlack} alt="arrow" />
									</div>

									<button
										className="bg-c2a border-2 border-c2b rounded-xl px-4 py-3  h-fit font-poppins text-15 text-white font-bold"
										onClick={() =>
											dispatch(
												addItemToCart(productDetail)
											)
										}
									>
										+ Add to cart
									</button>
								</div>
							</div>
						</div>

						{/* BOTTOM */}
						<div>
							<div className="border-b-2 border-c1f mb-12">
								<div className="font-poppins font-semibold text-lg pb-4 border-b-2 border-c2a w-40">
									Description
								</div>
							</div>

							<div>
								<div className="pb-8">
									<h2 className="font-poppins font-semibold text-15 pb-2">
										Origins
									</h2>
									<p className="text-sm w-72 md:w-350 lg:w-469 xl:w-520">
										{origins}
									</p>
								</div>

								<div>
									<h2 className="font-poppins font-semibold text-15 pb-2">
										How to cook
									</h2>
									<p className="text-sm w-72 md:w-350 lg:w-469 xl:w-520">
										{howToCook}
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			)}

			{/* RELATED PRODUCTS */}
			{/* <RelatedProducts /> */}
			<ProductsWithTitle />
		</div>
	);
};

export default ProductDescription;
