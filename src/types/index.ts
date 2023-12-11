export type ProductType = {
	_id: string;
	title: string;
	description: string;
	price: number;
	rating: number;
	detail: string;
	sku: string;
	category: string;
	stock: number;
	farm: string;
	freshness: number;
	buyby: string;
	deliverytime: number;
	deliveryarea: string;
	descriptiondetail: string;
	imgprimary: string;
	imgsecondary: string;
	discount: number;
	freeshipping: boolean;
	featured: string;
	createdAt: string;
	updatedAt: string;
};

export interface CartProductType extends ProductType {
	productQuantity: number;
}

export interface BlogsType {
	_id: string;
	title: string;
	content: string;
	authorID: string;
	authorEmail: string;
	authorName: string;
	photo: string;
	tags: string;
	createdAt: string;
	category: string;
	featured: string;
}

export interface CommentType {
	id: string;
	content: string;
	blogAuthor: string;
	createdAt: string;
	authorID: string;
	authorName: string;
	authorEmail: string;
}
export interface ReduxStateType {
	user: {
		auth: boolean;
		_id: string;
		name: string;
		email: string;
	};
	cart: {
		cartTotalNumber: number;
		cartItems: CartProductType[];
		cartTotalPrice: number;
	};
	products: {
		productsAll: ProductType[];
		bestSellingProducts: ProductType[];
		bestFarmerProducts: ProductType[];
		featuredProducts: ProductType[];
		singleProduct: ProductType[];
	};
	blogs: {
		allBlogs: BlogsType[];
		topBlogs: BlogsType[];
	};
}
