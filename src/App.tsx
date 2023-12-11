import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";

import Home from "./pages/Home";
import ProductDescription from "./pages/ProductDescription";
import CheckOut from "./pages/CheckOut";
import Login from "./pages/LoginPage";
import Error from "./pages/Error";
import Signup from "./pages/Signup";
import Blogs from "./pages/Blogs";
import BlogDetails from "./pages/BlogDetails";
import ProductsList from "./pages/ProductsList";
import ProductsGrid from "./pages/ProductsGrid";
import Upcoming from "./pages/Upcoming";

import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import UserChecked from "./components/UserChecked";
// import Protected from "./components/Protected";
import { ReduxStateType } from "./types";

function App() {
	const isAuth = useSelector<ReduxStateType, boolean>(
		(state) => state.user.auth
	);

	return (
		<div>
			<BrowserRouter>
				<div>
					<Header />
					<NavBar />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route
							path="products/list"
							element={<ProductsList />}
						/>
						<Route
							path="/products/grid"
							element={<ProductsGrid />}
						/>
						<Route
							path="product/description/:productid"
							element={<ProductDescription />}
						/>
						<Route path="blogs" element={<Blogs />} />
						<Route
							path="blog/details/:blogid"
							element={<BlogDetails />}
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
						<Route path="checkout" element={<CheckOut />} />
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
