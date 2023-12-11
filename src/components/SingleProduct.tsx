// import React from "react";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../store/slices/cartSlice";

import { ProductType } from "../types";
import { Link } from "react-router-dom";

const SingleProduct = ({ product }: { product: ProductType }) => {
	const dispatch = useDispatch();
	// const navigate = useNavigate();

	const { title, description, price, imgprimary, discount, _id } = product;

	const discountedPrice = (price - (price / 100) * Number(discount)).toFixed(
		2
	);

	const addToCartHandler = () => {
		dispatch(addItemToCart(product));
	};

	// const productDetailHandler = () => {
	// 	navigate(`/product/description/${_id}`);
	// };

	return (
		<div className="border border-c1d rounded-xl p-4 flex flex-col gap-4">
			<Link to={`/product/description/${_id}`}>
				<div className="relative w-237 h-180 rounded-xl bg-c1f cursor-pointer">
					{imgprimary && (
						<img
							src={imgprimary}
							alt="product"
							className="rounded-xl object-cover w-full h-full"
						/>
					)}
					{discount !== 0 && (
						<div className="bg-c2e rounded-xl px-2 absolute top-3 left-3">
							<p className="font-poppins font-semibold text-c2a text-xs ">
								- {discount} %
							</p>
						</div>
					)}
				</div>
			</Link>

			<div>
				<Link
					to={`/product/description/${_id}`}
					className="font-poppins font-semibold cursor-pointer"
				>
					{title}
				</Link>
				<p className="text-xs text-c1b">{description}</p>
			</div>

			<div className="flex justify-between items-center">
				<div>
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
				<button
					className="bg-c2a border-2 border-c2b rounded-xl px-3 py-1 font-poppins text-white font-bold"
					onClick={addToCartHandler}
				>
					Buy now
				</button>
			</div>
		</div>
	);
};

export default SingleProduct;
