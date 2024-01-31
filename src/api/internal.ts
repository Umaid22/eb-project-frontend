import axios, { AxiosResponse, AxiosError } from "axios";

interface LoginDataType {
	email: string;
	password: string;
}
interface SignupDataType {
	username: string;
	email: string;
	password: string;
}
interface CommentDataType {
	content: string;
	author: string;
	blogreference: string;
}

const api = axios.create({
	baseURL: process.env.REACT_APP_INTERNAL_API_PATH,
	withCredentials: true,
	headers: {
		"Content-Type": "application/json",
		Accept: "application/json",
		Authorization: "",
	},
});

export const loginAPI = async (
	data: LoginDataType
): Promise<AxiosResponse | AxiosError> => {
	let response;
	try {
		response = await api.post("/login", data);
		// console.log("inside login API try ::", response);
	} catch (error) {
		const err = error as AxiosError;
		// console.log("inside login API catch ::", err);
		return err;
	}
	return response;
};

export const signupAPI = async (
	data: SignupDataType
): Promise<AxiosResponse | AxiosError> => {
	let response;
	try {
		response = await api.post("/register", data);
	} catch (error) {
		const err = error as AxiosError;
		// console.log("error from inside catch of api folder :: ", err);
		return err;
	}
	return response;
};

export const logoutAPI = async (): Promise<AxiosResponse | AxiosError> => {
	let response;
	try {
		response = await api.post("/logout");
	} catch (error) {
		const err = error as AxiosError;
		return err;
	}
	return response;
};

// get all-products / products by category / product by id
export const getAllProductsAPI = async (): Promise<
	AxiosResponse | AxiosError
> => {
	let response: AxiosResponse;
	try {
		response = await api.get("/products");
	} catch (error) {
		const err = error as AxiosError;
		return err;
	}

	return response;
};

export const categorizedProductsAPI = async (
	category: string
): Promise<AxiosResponse | AxiosError> => {
	let response;
	try {
		response = await api.get(`product/feature/${category}`);
	} catch (error) {
		const err = error as AxiosError;
		return err;
	}
	return response;
};

export const singleProductAPI = async (
	id: string | undefined
): Promise<AxiosResponse | AxiosError> => {
	let response;
	try {
		response = await api.get(`/product/${id}`);
	} catch (error) {
		const err = error as AxiosError;
		return err;
	}
	return response;
};

// search product
export const searchProductAPI = async (
	value: string
): Promise<AxiosResponse | AxiosError> => {
	let response;
	try {
		response = await api.get(`/search/product/${value}`);
	} catch (error) {
		const err = error as AxiosError;
		return err;
	}
	return response;
};

// * 1- get all-blogs / blogs by feature - not protected
export const allBlogsAPI = async (): Promise<AxiosError | AxiosResponse> => {
	let response;
	try {
		response = await api.get("/blogs");
	} catch (error) {
		const err = error as AxiosError;
		return err;
	}
	return response;
};

export const topBlogsAPI = async (): Promise<AxiosError | AxiosResponse> => {
	let response;
	try {
		response = await api.get("/blog/category/topRanking");
	} catch (error) {
		const err = error as AxiosError;
		return err;
	}
	return response;
};

// * 2- blog details page // component includes blog details and comments
// 1. get blog,
export const singleBlogAPI = async (
	blogid: string
): Promise<AxiosError | AxiosResponse> => {
	let response;
	try {
		response = await api.get(`/blog/${blogid}`);
	} catch (error) {
		const err = error as AxiosError;
		return err;
	}
	return response;
};

// 2. get comments,  --> in api request we will send configuration option 2nd parameter as {validationStatus:false}
export const getCommentsAPI = async (
	blogid: string
): Promise<AxiosError | AxiosResponse> => {
	let response;
	try {
		response = await api.get(`/comment/${blogid}`);
	} catch (error) {
		const err = error as AxiosError;
		return err;
	}
	return response;
};

// 3. post comments,
export const postCommentAPI = async (
	data: CommentDataType
): Promise<AxiosError | AxiosResponse> => {
	let response;
	try {
		response = await api.post("/comment", data);
	} catch (error) {
		const err = error as AxiosError;
		return err;
	}
	return response;
};

// 4. delete blog

// * 3- submit a blog	// component for submit a blog - protected - use formik but not for the photo, also make button disable,
// for  <input type='file' accept='image/jpg, image/jpeg, image/png'/>
// for const photoHandler = (e)=>{
// const file = e.target.files([0]);
// const  reader = new FileReader();
// reader.readAsDataURL(file);
// reader.onloadend = ()=>{setPhoto(reader.result)}
// }

// * 4- update blog, // component , make option using if-statement for photo
