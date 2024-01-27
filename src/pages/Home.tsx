import React, { useEffect, lazy, Suspense } from "react";
// import BlogSection from "../components/BlogSection";
import ProductsWithCategory from "../components/ProductsWithCategory";
// import ProductsWithTitle from "../components/ProductsWithTitle";
import Testimonials from "../components/Testimonials";

const LazyBlogSection = lazy(() => import("../components/BlogSection"));
const LazyProductsWithTitle = lazy(
	() => import("../components/ProductsWithTitle")
);

function Home() {
	useEffect(() => {
		document.title = "Freshnesecom - Home";
		// 	(async function getNewsCall() {
		// 		const response = await GetDataAPI();
		// 		setArticlesData(response);
		// 	})();
		// 	// cleanup function
		// 	setArticlesData([]);
	}, []);

	return (
		<div>
			<ProductsWithCategory />
			<Testimonials />

			{/* <ProductsWithTitle /> */}
			<Suspense fallback={<div>Loading...</div>}>
				<LazyProductsWithTitle />
			</Suspense>

			{/* <BlogSection /> */}
			<Suspense fallback={<div>Loading...</div>}>
				<LazyBlogSection />
			</Suspense>
		</div>
	);
}

export default Home;
