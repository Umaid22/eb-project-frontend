import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";

import Home from "./pages/Home";
// import ProductDescription from "./pages/ProductDescription";
// import CheckOut from "./pages/CheckOut";
import Login from "./pages/LoginPage";
import Error from "./pages/Error";
import Signup from "./pages/Signup";
// import Blogs from "./pages/Blogs";
// import BlogDetails from "./pages/BlogDetails";
// import ProductsList from "./pages/ProductsList";
// import ProductsGrid from "./pages/ProductsGrid";
import Upcoming from "./pages/Upcoming";

import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import UserChecked from "./components/UserChecked";
// import Protected from "./components/Protected";
import ScrollToTop from "./components/ScrollToTop";

import { ReduxStateType } from "./types";
const LazyProductDescription = lazy(() => import("./pages/ProductDescription"));
const LazyCheckOut = lazy(() => import("./pages/CheckOut"));
const LazyBlogs = lazy(() => import("./pages/Blogs"));
const LazyBlogsDetails = lazy(() => import("./pages/BlogDetails"));
const LazyProductsList = lazy(() => import("./pages/ProductsList"));
const LazyProductsGrid = lazy(() => import("./pages/ProductsGrid"));

function App() {
	const isAuth = useSelector<ReduxStateType, boolean>(
		(state) => state.user.auth
	);

	return (
		<div>
			<BrowserRouter>
				<ScrollToTop />
				<div>
					<Header />
					<NavBar />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route
							path="products/list"
							element={
								<Suspense fallback={<div>Loading...</div>}>
									<LazyProductsList />
									{/* <ProductsList /> */}
								</Suspense>
							}
						/>
						<Route
							path="/products/grid"
							element={
								<Suspense fallback={<div>Loading...</div>}>
									<LazyProductsGrid />
									{/* <ProductsGrid /> */}
								</Suspense>
							}
						/>
						<Route
							path="product/description/:productid"
							element={
								<Suspense fallback={<div>Loading...</div>}>
									<LazyProductDescription />
									{/* <ProductDescription /> */}
								</Suspense>
							}
						/>
						<Route
							path="blogs"
							element={
								<Suspense fallback={<div>Loading...</div>}>
									<LazyBlogs />
									{/* <Blogs /> */}
								</Suspense>
							}
						/>
						<Route
							path="blog/details/:blogid"
							element={
								<Suspense fallback={<div>Loading...</div>}>
									<LazyBlogsDetails />
									{/* <BlogDetails /> */}
								</Suspense>
							}
						/>
						<Route
							path="login"
							element={
								<UserChecked isAuth={isAuth}>
									<Login />
								</UserChecked>
							}
						/>
						<Route
							path="signup"
							element={
								<UserChecked isAuth={isAuth}>
									<Signup />
								</UserChecked>
							}
						/>
						<Route
							path="checkout"
							element={
								<Suspense fallback={<div>Loading...</div>}>
									<LazyCheckOut />
									{/* <CheckOut /> */}
								</Suspense>
							}
						/>
						{/*  PROTECTED ROUTE */}
						{/* <Route
							path="any"
							element={
								<Protected isAuth={isAuth}>
									<Login />
								</Protected>
							}
						/> */}
						<Route path="page/:pageName" element={<Upcoming />} />
						<Route path="*" element={<Error />} />
					</Routes>
					<Footer />
				</div>
			</BrowserRouter>
		</div>
	);
}

export default App;
