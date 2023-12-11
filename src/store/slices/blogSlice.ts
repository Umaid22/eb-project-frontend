import { createSlice } from "@reduxjs/toolkit";
import { BlogsType } from "../../types";

interface initialStateType {
	allBlogs: BlogsType[];
	topBlogs: BlogsType[];
}
const initialState: initialStateType = {
	allBlogs: [],
	topBlogs: [],
};

export const blogsSlice = createSlice({
	name: "blogs",
	initialState,
	reducers: {
		getAllBlogs: (state, action: { payload: BlogsType[] }) => {
			state.allBlogs = action.payload;
		},
		getTopBlogs: (state, action: { payload: BlogsType[] }) => {
			state.topBlogs = action.payload;
		},
	},
});

export const { getAllBlogs, getTopBlogs } = blogsSlice.actions;
