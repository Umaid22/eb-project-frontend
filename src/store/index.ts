import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/userSlice";
import cartSlice from "./slices/cartSlice";
import productsSlice from "./slices/productsSlice";
import { blogsSlice } from "./slices/blogSlice";

const store = configureStore({
	reducer: {
		user: userSlice.reducer,
		cart: cartSlice.reducer,
		products: productsSlice.reducer,
		blogs: blogsSlice.reducer,
	},
});

export default store;
