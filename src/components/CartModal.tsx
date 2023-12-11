import React, { Dispatch, SetStateAction } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { ReduxStateType } from "../types";

import closeIcon from "../assets/icons/remove-icon.svg";
import Button from "./Button";
import { CartSingleItem } from "./CartSingleItem";

interface CartPropType {
	showCartState: Dispatch<SetStateAction<boolean>>;
}

const CartModal = ({ showCartState }: CartPropType) => {
	const navigate = useNavigate();
	const cartTotalPrice = useSelector(
		(state: ReduxStateType) => state.cart.cartTotalPrice
	);
	const cartProductsArray = useSelector(
		(state: ReduxStateType) => state.cart.cartItems
	);

	return (
		<div className="border border-c1d rounded-xl w-320 sm:w-96 bg-c1h shadow-lg shadow-c2c cursor-auto">
			{/* PRODUCTS CART */}
			<div className="py-4">
				<div className="flex justify-between items-center mb-6 px-3 sm:px-4">
					<p className="font-poppins font-semibold  text-lg sm:text-26">
						Shopping cart
					</p>
					<div
						className="flex gap-2 cursor-pointer"
						onClick={() => showCartState(false)}
					>
						<p className="text-c1c text-xs">Close</p>
						<img src={closeIcon} alt="close-icon" />
					</div>
				</div>

				<div className="flex flex-col gap-6 sm:gap-8 max-h-96 overflow-auto border-y-2 border-c2c p-2">
					{cartProductsArray.length === 0 && (
						<p className="mx-auto text-c2a font-semibold my-6">
							Cart is empty.
						</p>
					)}
					{cartProductsArray &&
						cartProductsArray.map((product) => {
							return (
								<CartSingleItem
									product={product}
									key={product._id}
								/>
							);
						})}
				</div>
			</div>

			{/* BUTTONS */}
			<div className="mt-2 ">
				<div className=" border-b border-c1c pb-2 sm:pb-6 px-4">
					<p className="font-poppins font-semibold text-xs b-2">
						Subtotal
					</p>
					<p className="font-poppins font-semibold text-xl sm:text-26">
						{cartTotalPrice.toFixed(2)} USD
					</p>
				</div>
				<div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6 p-2 bg-c1d rounded-b-lg">
					<Button label="Continue shopping" variant="link" />
					<div onClick={() => navigate("checkout")}>
						<Button label="Go to Checkout" variant="secondary" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default CartModal;
