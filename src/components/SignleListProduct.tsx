// import React from "react";
import { useNavigate } from "react-router-dom";
import { ProductType } from "../types";

import Button from "./Button";
import starBlack from "../assets/icons/star-filled-black.svg";
import starEmpty from "../assets/icons/star-empty.svg";
import heartBlack from "../assets/icons/heart-black.svg";

const SignleListProduct = ({ product }: { product: ProductType }) => {
	const navigate = useNavigate();
	const {
		_id,
		title,
		description,
		price,
		imgprimary,
		discount,
		rating,
		freshness,
		farm,
		deliveryarea,
		stock,
		freeshipping,
		deliverytime,
	} = product;
	const discountedPrice = (price - (price / 100) * Number(discount)).toFixed(
		2
	);

	return (
		<div className="border border-c1d rounded-xl flex flex-col sm:flex-row items-center justify-between gap-3">
			<div
				className="bg-c1h rounded-l-xl h-216 md:h-280 w-full sm:w-44 md:w-269 mr-0 sm:mr-8 cursor-pointer"
				onClick={() => navigate(`/product/description/${_id}`)}
			>
				{imgprimary && (
					<img
						src={imgprimary}
						alt="product"
						className="rounded-t-xl sm:rounded-t-none sm:rounded-tl-xl sm:rounded-bl-xl w-full h-full object-cover"
					/>
				)}
			</div>

			<div className="mr-0 sm:mr-3 md:mr-12 xl:mr-24">
				<div className="mb-5 sm:mb-3 xl:mb-6">
					<div className="mb-2">
						<p className="font-poppins font-semibold text-lg mb-1">
							{title}
						</p>
						<p className="text-xs text-c1b">{description}</p>
					</div>

					<div className="flex gap-1">
						{[...Array(rating)].map((e, i) => (
							<img src={starBlack} alt="rating" key={i} />
						))}
						{[...Array(5 - rating)].map((e, i) => (
							<img src={starEmpty} alt="rating" key={i} />
						))}
					</div>
				</div>

				<div className="flex gap-4 xl:gap-8">
					<div className="text-c1c text-sm flex flex-col gap-1 xl:gap-3">
						<p>Freshness</p>
						<p>Farm</p>
						<p>Delivery</p>
						<p>Stock</p>
					</div>
					<div className="text-c1c text-sm flex flex-col gap-1 xl:gap-3">
						{freshness === 1 && (
							<p>
								<span className="text-c2a">New</span> (Extra
								Fresh)
							</p>
						)}
						{freshness !== 1 && (
							<p>
								<span className="text-c2a">{freshness}</span>{" "}
								days old
							</p>
						)}
						<p>{farm}</p>
						<p>{deliveryarea}</p>
						<p className="text-c2a">{stock} pcs</p>
					</div>
				</div>
			</div>

			<div className="mr-0 sm:mr-2 md:mr-4 xl:mr-8 mb-3 sm:mb-0">
				<div className="mb-2 xl:mb-4">
					{discount !== 0 && (
						<>
							<p className="font-poppins font-semibold text-lg">
								{discountedPrice} USD
							</p>
							<p className="font-poppins font-semibold text-xs text-c1c line-through">
								{price}
							</p>
						</>
					)}
					{discount === 0 && (
						<p className="font-poppins font-semibold text-lg">
							{price} USD
						</p>
					)}
				</div>

				<div className="mb-3 xl:mb-7">
					<p className="font-poppins font-semibold text-xs text-c1c">
						{freeshipping ? "" : "No"}Free Shipping
					</p>
					<p className="text-xs text-c1c">
						Delivery in {deliverytime} day
					</p>
				</div>

				<div className=" flex flex-col gap-3 ml-0 xl:ml-4">
					<div
						onClick={() => navigate(`/product/description/${_id}`)}
					>
						<Button
							label="Product Detail"
							variant="secondary"
							alignment="right"
							iconName="rightArrowIconWhite1"
							size="small"
						/>
					</div>

					<button className="flex items-center gap-2 bg-c1f rounded-xl px-1 xl:px-3  py-2">
						<img src={heartBlack} alt="wishlist" />
						<p className="font-poppins font-bold text-15">
							{" "}
							Add to wishlist
						</p>
					</button>
				</div>
			</div>
		</div>
	);
};

export default SignleListProduct;
