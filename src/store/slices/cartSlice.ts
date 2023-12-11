import { createSlice } from "@reduxjs/toolkit";
import { CartProductType, ProductType } from "../../types";

type InitialStateType = {
	cartTotalNumber: number;
	cartItems: CartProductType[];
	cartTotalPrice: number;
};

const initialState: InitialStateType = {
	cartTotalNumber: 0,
	cartItems: [],
	cartTotalPrice: 0,
};

const cartSlice = createSlice({
	name: "cartSlice",
	initialState,
	reducers: {
		addItemToCart: (state, action: { payload: ProductType }) => {
			const newItem = {
				title: action.payload.title,
				_id: action.payload._id,
				price: action.payload.price,
				description: action.payload.description,
				imgprimary: action.payload.imgprimary,
				discount: action.payload.discount,
				rating: action.payload.rating,
				farm: action.payload.farm,
				freshness: action.payload.freshness,
				detail: action.payload.detail,
				sku: action.payload.sku,
				category: action.payload.category,
				stock: action.payload.stock,
				buyby: action.payload.buyby,
				deliverytime: action.payload.deliverytime,
				deliveryarea: action.payload.deliveryarea,
				descriptiondetail: action.payload.description,
				imgsecondary: action.payload.imgsecondary,
				freeshipping: action.payload.freeshipping,
				featured: action.payload.featured,
				createdAt: action.payload.createdAt,
				updatedAt: action.payload.updatedAt,
				productQuantity: 1,
			};
			const discountedPrice = (
				newItem.price -
				(newItem.price / 100) * Number(newItem.discount)
			).toFixed(2);

			const productExisting = state.cartItems.find((product) => {
				return product._id === action.payload._id;
			});

			if (!productExisting) {
				state.cartItems.push(newItem);
			}
			if (productExisting) {
				productExisting.productQuantity++;
			}

			state.cartTotalNumber++;
			if (newItem.discount) {
				state.cartTotalPrice =
					state.cartTotalPrice + Number(discountedPrice);
			} else {
				state.cartTotalPrice = state.cartTotalPrice + newItem.price;
			}
		},

		removeItemFromCart(state, action: { payload: CartProductType }) {
			const removeItem = state.cartItems.find(
				(item) => item._id === action.payload._id
			)!;
			if (removeItem.productQuantity > 1) {
				removeItem.productQuantity--;
			} else {
				state.cartItems = state.cartItems.filter((product) => {
					return product._id !== action.payload._id;
				});
			}

			state.cartTotalNumber = state.cartTotalNumber - 1;
			if (removeItem.discount) {
				const discountedPrice = (
					removeItem.price -
					(removeItem.price / 100) * Number(removeItem.discount)
				).toFixed(2);
				state.cartTotalPrice =
					state.cartTotalPrice - Number(discountedPrice);
			} else {
				state.cartTotalPrice =
					state.cartTotalPrice - action.payload.price;
			}
		},
	},
});

export const { addItemToCart, removeItemFromCart } = cartSlice.actions;
export default cartSlice;
