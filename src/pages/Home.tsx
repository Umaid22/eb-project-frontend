import React, { useEffect } from "react";
import BlogSection from "../components/BlogSection";
import ProductsWithCategory from "../components/ProductsWithCategory";
import ProductsWithTitle from "../components/ProductsWithTitle";
import Testimonials from "../components/Testimonials";

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
			<ProductsWithTitle />
			<BlogSection />
		</div>
	);
}

export default Home;
