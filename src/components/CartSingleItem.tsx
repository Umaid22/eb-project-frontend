import React from "react";
import { useDispatch } from "react-redux";
import { removeItemFromCart } from "../store/slices/cartSlice";
import { CartProductType } from "../types";

import heartBlack from "../assets/icons/heart-black.svg";
import compareIcon from "../assets/icons/compare.svg";
import removeIcon from "../assets/icons/remove-icon-small.svg";
import starFilledBlack from "../assets/icons/star-filled-black.svg";
import star from "../assets/icons/star-empty.svg";
import arrowDown from "../assets/icons/arrow-down-black.svg";

export const CartSingleItem = ({ product }: { product: CartProductType }) => {
	const dispatch = useDispatch();
	const { title, imgprimary, discount, price, productQuantity, rating } =
		product;
	const discountedPrice = (price - (price / 100) * Number(discount)).toFixed(
		2
	);

	const removeItemFromCartHandler = () => {
		dispatch(removeItemFromCart(product));
	};

	return (
		<div className="pb-4 flex gap-4 border-b border-c1d">
			<div>
				<div className="bg-c1d w-100 h-16 rounded-xl mb-3">
					{imgprimary && (
						<img
							src={imgprimary}
							alt="product"
							className="object-fill w-100 h-16"
						/>
					)}
				</div>

				<div className="flex flex-col gap-2">
					<div className="flex gap-2 items-center cursor-pointer">
						<img src={heartBlack} alt="wishlist-icon" />

						<p className="text-xs text-c1c">Wishlist</p>
					</div>

					<div className="flex gap-2 items-center cursor-pointer">
						<img src={compareIcon} alt="compare-icon" />
						<p className="text-xs text-c1c">Compare</p>
					</div>

					<div
						className="flex gap-2 items-center cursor-pointer"
						onClick={removeItemFromCartHandler}
					>
						<img src={removeIcon} alt="remove-icon" />
						<p className="text-xs text-c1c">Remove</p>
					</div>
				</div>
			</div>

			<div>
				<div className="mb-4">
					<div className="mb-3">
						<p className="font-poppins font-semibold text-15 mb-2">
							{title}
						</p>
						<div className="flex gap-4">
							<div>
								<p className="text-xs text-c1c mb-1">Farm:</p>
								<p className="text-xs text-c1c">Freshness:</p>
							</div>
							<div>
								<p className="text-xs mb-1">Tharamis Farm</p>
								<p className="text-xs">1 day old</p>
							</div>
						</div>
					</div>
					<div className="flex gap-1">
						{[...Array(rating)].map((e, i) => {
							return (
								<img src={starFilledBlack} alt="star" key={i} />
							);
						})}

						{[...Array(5 - rating)].map((e, i) => {
							return <img src={star} alt="star" key={i} />;
						})}
					</div>
				</div>

				<div className="flex gap-4 sm:gap-9">
					<div>
						{discount !== 0 && (
							<>
								<p className="font-poppins font-semibold text-base sm:text-lg text-c2a">
									{discountedPrice} USD
								</p>
								<p className="font-poppins font-semibold text-xs text-c1c line-through">
									{price} USD
								</p>
							</>
						)}
						{discount === 0 && (
							<p className="font-poppins font-semibold text-base sm:text-lg text-c2a">
								{price} USD
							</p>
						)}
					</div>
					<div className="flex items-center border border-c1d rounded-lg bg-c1h px-2">
						<p className="text-xs sm:text-sm text-c1d pr-2 mr-2 border-r-2 border-c1d">
							{productQuantity} pcs
						</p>
						<div className="flex items-center cursor-pointer">
							<p className="font-poppins font-semibold text-xs mr-1">
								Pcs
							</p>
							<div className="bg-arrowDownBlackIcon w-2 h-2 bg-no-repeat"></div>
							<img src={arrowDown} alt="arrow" />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
