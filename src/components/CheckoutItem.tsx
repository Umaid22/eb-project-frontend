import React from "react";
import { CartProductType } from "../types";
import heartIcon from "../assets/icons/heart-red.svg";
import compareIcon from "../assets/icons/compare.svg";
import removeIcon from "../assets/icons/remove-icon-small.svg";
import starFilledYelow from "../assets/icons/star-filled-yellow.svg";
import starEmpty from "../assets/icons/star-empty.svg";
import { useDispatch } from "react-redux";
import { removeItemFromCart } from "../store/slices/cartSlice";

const CheckoutItem = ({ product }: { product: CartProductType }) => {
	const dispatch = useDispatch();
	const {
		title,
		imgprimary,
		price,
		productQuantity,
		discount,
		rating,
		farm,
		freshness,
	} = product;
	const discountedPrice = (price - (price / 100) * Number(discount)).toFixed(
		2
	);

	const removeItemHandler = () => {
		dispatch(removeItemFromCart(product));
	};

	return (
		<div className="flex gap-4 pb-4 border-b-2 border-c1h">
			{/* PRODUCT LEFT */}
			<div>
				<div className="bg-c1h w-100 h-16 rounded-xl mb-3">
					{imgprimary && (
						<img
							src={imgprimary}
							alt="product"
							className="w-100 h-16 rounded-xl"
						/>
					)}
				</div>

				<div className="flex flex-col gap-2">
					<div className="flex items-center gap-2 cursor-pointer">
						<img src={heartIcon} alt="whishlist" />
						<p className="text-xs text-c1c">Wishlist</p>
					</div>

					<div className="flex items-center gap-2 cursor-pointer">
						<img src={compareIcon} alt="compare-icon" />
						<p className="text-xs text-c1c">Compare</p>
					</div>

					<div
						className="flex items-center gap-2 cursor-pointer"
						onClick={removeItemHandler}
					>
						<img src={removeIcon} alt="remove-icon" />
						<p className="text-xs text-c1c">Remove</p>
					</div>
				</div>
			</div>

			{/* PRODUCT RIGHT */}
			<div className="w-52 xl:w-80">
				<div className="mb-4">
					<h2 className="font-poppins font-semibold text-15 mb-2">
						{title}
					</h2>

					<div className="flex gap-3 mb-2">
						<div>
							<p className="text-xs text-c1c mb-1">Farm:</p>
							<p className="text-xs text-c1c">Freshness:</p>
						</div>
						<div>
							<p className="text-xs mb-1">{farm}</p>
							<p className="text-xs">{freshness} day old</p>
						</div>
					</div>

					<div className="flex gap-1 py-2">
						{[...Array(rating)].map((e, i) => {
							return (
								<img
									src={starFilledYelow}
									alt="rating"
									key={i}
								/>
							);
						})}
						{[...Array(5 - rating)].map((e, i) => {
							return <img src={starEmpty} alt="rating" key={i} />;
						})}
					</div>
				</div>

				<div className="flex justify-between">
					<div>
						{discount !== 0 && (
							<>
								<p className="font-poppins font-semibold text-lg text-c2a">
									{discountedPrice} USD
								</p>
								<p className="text-c1c text-xs font-poppins font-semibold line-through">
									{price} USD
								</p>
							</>
						)}
						{discount === 0 && (
							<p className="font-poppins font-semibold text-lg text-c2a">
								{price} USD
							</p>
						)}
					</div>

					<div className="border border-c1d rounded-xl bg-c1h flex items-center p-1 h-fit">
						<p className="text-c1d text-sm border-r border-c1d pe-2 me-2">
							{productQuantity} pcs
						</p>
						<select
							name=""
							className="font-poppins font-semibold text-xs bg-c1h outline-none"
						>
							<option value="1">Pcs</option>
							<option value="1">1</option>
							<option value="2">2</option>
							<option value="3">3</option>
						</select>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CheckoutItem;
