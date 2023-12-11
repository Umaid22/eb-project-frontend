import { createSlice } from "@reduxjs/toolkit";
import { ProductType } from "../../types";

interface initialStateType {
	productsAll: ProductType[];
	bestSellingProducts: ProductType[];
	bestFarmerProducts: ProductType[];
	featuredProducts: ProductType[];
	singleProduct: ProductType[];
}
const initialState: initialStateType = {
	productsAll: [],
	bestSellingProducts: [],
	bestFarmerProducts: [],
	featuredProducts: [],
	singleProduct: [
		// {
		// 	_id: "",
		// 	title: "",
		// 	description: "",
		// 	price: 0,
		// 	rating: 5,
		// 	detail: "",
		// 	sku: "",
		// 	category: "",
		// 	stock: 0,
		// 	farm: "",
		// 	freshness: 1,
		// 	buyby: "",
		// 	deliverytime: 1,
		// 	deliveryarea: "",
		// 	descriptiondetail: "",
		// 	imgprimary: "",
		// 	imgsecondary: "",
		// 	discount: 0,
		// 	freeshipping: true,
		// 	featured: "",
		// 	createdAt: "",
		// 	updatedAt: "",
		// },
	],
};

const productsSlice = createSlice({
	name: "productsSlice",
	initialState,
	reducers: {
		getBestSellingProducts: (state, action: { payload: ProductType[] }) => {
			state.bestSellingProducts = action.payload;
		},
		getBestFarmerProducts: (state, action: { payload: ProductType[] }) => {
			state.bestFarmerProducts = action.payload;
		},
		getFeaturedProducts: (state, action: { payload: ProductType[] }) => {
			state.featuredProducts = action.payload;
		},
		getProducts: (state, action: { payload: ProductType[] }) => {
			state.productsAll = action.payload;
		},
		setSingleProduct: (state, action: { payload: ProductType[] }) => {
			state.singleProduct = action.payload;
		},
		resetSingleProduct: (state) => {
			// state.singleProduct[0]._id = "";
			// state.singleProduct[0].title = "";
			// state.singleProduct[0].description = "";
			// state.singleProduct[0].price = 0;
			// state.singleProduct[0].rating = 5;
			// state.singleProduct[0].detail = "";
			// state.singleProduct[0].sku = "";
			// state.singleProduct[0].category = "";
			// state.singleProduct[0].stock = 0;
			// state.singleProduct[0].farm = "";
			// state.singleProduct[0].freshness = 1;
			// state.singleProduct[0].buyby = "";
			// state.singleProduct[0].deliverytime = 1;
			// state.singleProduct[0].deliveryarea = "";
			// state.singleProduct[0].descriptiondetail = "";
			// state.singleProduct[0].imgprimary = "";
			// state.singleProduct[0].imgsecondary = "";
			// state.singleProduct[0].discount = 0;
			// state.singleProduct[0].freeshipping = true;
			// state.singleProduct[0].featured = "";
			// state.singleProduct[0].createdAt = "";
			// state.singleProduct[0].updatedAt = "";
		},
	},
});

export const {
	getBestSellingProducts,
	getBestFarmerProducts,
	getFeaturedProducts,
	getProducts,
	setSingleProduct,
	resetSingleProduct,
} = productsSlice.actions;

export default productsSlice;
