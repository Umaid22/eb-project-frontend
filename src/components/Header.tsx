import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

import freshnesecom from "../assets/icons/Freshnesecom.svg";
import userIcon from "../assets/icons/user-icon.svg";
import cartIcon from "../assets/icons/basket.svg";
import arrowDownGreen from "../assets/icons/arrow-down-green.svg";
import searchIcon from "../assets/icons/search-icon.svg";
import CartModal from "./CartModal";
import ShowCategories from "./ShowCategories";
import UserDetailsModal from "./UserDetailsModal";
import { ReduxStateType } from "../types";
// import Loader from "./Loader";
import SearchProductModal from "./SearchProductModal";

function Header() {
	// const searchRef = useRef();
	const [showCart, setShowCart] = useState(false);
	const [showCategories, setShowCategories] = useState(false);
	const [showUserModal, setShowUserModal] = useState(false);
	const [selectedCategory, setSelectedCategory] = useState("All categories");
	const [showSearchProductModal, setShowSearchProductModal] = useState(false);
	const [searchValue, setSearchValue] = useState("");

	const cartTotalNumber = useSelector(
		(state: ReduxStateType) => state.cart.cartTotalNumber
	);

	const showCategoriesHandler = () => {
		setShowCart(false);
		setShowUserModal(false);
		setShowSearchProductModal(false);
		setShowCategories(!showCategories);
	};
	const showCartHandler = () => {
		setShowCategories(false);
		setShowUserModal(false);
		setShowSearchProductModal(false);
		setShowCart(!showCart);
	};
	const showUserModalHandler = () => {
		setShowCart(false);
		setShowCategories(false);
		setShowSearchProductModal(false);
		setShowUserModal(!showUserModal);
	};

	const searchProductHandler = () => {
		setShowCart(false);
		setShowCategories(false);
		setShowUserModal(false);
		setShowSearchProductModal(true);
	};

	return (
		<header className="xl:container xl:mx-auto">
			{/* HEADER TOP */}
			<div className="border-b-2 border-c1a/5 flex justify-between px-4 py-4 ">
				<div className="sm:flex gap-8 hidden">
					<NavLink
						to="page/Contact Us"
						className={({ isActive }: { isActive: boolean }) =>
							isActive
								? "text-c2a text-xs underline font-bold"
								: "text-c2a text-xs hover:underline"
						}
					>
						Chat with us
					</NavLink>
					<Link
						to="tel:+420  666 666 666"
						className="text-c1a text-xs hover:underline"
					>
						+420 666 666 666
					</Link>
					<Link
						to="mailto:info@freshnesecom.com"
						className="text-c1a text-xs hover:underline"
					>
						info@freshnesecom.com
					</Link>
				</div>

				<div className="flex gap-10 justify-around w-full sm:w-fit">
					<NavLink
						to="blogs"
						className={({ isActive }: { isActive: boolean }) =>
							isActive
								? "text-c2a text-xs underline font-bold"
								: "text-c2a text-xs hover:underline"
						}
					>
						Blog
					</NavLink>
					<NavLink
						to="page/About Us"
						className={({ isActive }) =>
							isActive
								? "text-c2a text-xs underline font-bold"
								: "text-c2a text-xs hover:underline"
						}
					>
						About Us
					</NavLink>
					<NavLink
						to="/page/Carrers"
						className={({ isActive }) =>
							isActive
								? "text-c2a text-xs underline font-bold"
								: "text-c2a text-xs hover:underline"
						}
					>
						Careers
					</NavLink>
				</div>
			</div>

			{/* HEADER BOTTOM */}
			<div className="flex justify-between items-center px-4 py-10 flex-col md:flex-row gap-4">
				<Link to="/">
					<img
						src={freshnesecom}
						alt="freshnesecom-icon"
						className="hover:animate-bounce"
					/>
				</Link>

				<div className="flex justify-between items-center  border rounded-xl border-c1d px-2 sm:px-4 py-3 bg-c1h">
					<div
						className="flex items-center border-r border-c1d pr-2 sm:pr-3 lg:pr-6 mr-2 sm:mr-3 lg:mr-6 cursor-pointer relative"
						onClick={showCategoriesHandler}
					>
						<p className="font-poppins font-bold text-c1a pr-2 text-sm  sm:text-base">
							{selectedCategory}
						</p>

						<img src={arrowDownGreen} alt="arrow-icon" />

						{showCategories && (
							<div className="absolute top-11 z-40 animate-fadingIn">
								<ShowCategories
									setSelectedCategory={setSelectedCategory}
								/>
							</div>
						)}
					</div>

					<div className="relative">
						<input
							type="text"
							// ref={searchRef}
							onFocus={() => {
								setShowSearchProductModal(true);
							}}
							onChange={(e) => setSearchValue(e.target.value)}
							placeholder="Search Products, categories ..."
							className="bg-c1h text-sm text-c1c w-32 sm:w-52 lg:w-64 outline-none"
						/>
						{showSearchProductModal && (
							<div className="absolute top-11 -right-6 z-40  animate-fadingIn">
								{/* <Loader /> */}
								<SearchProductModal
									value={searchValue}
									setShowSearchProductModal={
										setShowSearchProductModal
									}
								/>
							</div>
						)}
					</div>

					<img
						src={searchIcon}
						alt="icon-search"
						className="cursor-pointer ps-2"
						onClick={searchProductHandler}
					/>
				</div>

				<div className="flex gap-10">
					<div className="relative">
						<img
							src={userIcon}
							alt="icon-user"
							className="cursor-pointer hover:animate-pulse"
							onClick={showUserModalHandler}
						/>
						{showUserModal && (
							<div className="absolute top-10 md:right-6 animate-fadingIn z-20">
								<UserDetailsModal
									setShowUserModal={setShowUserModal}
								/>
							</div>
						)}
					</div>

					<div className="cursor-pointer relative">
						<img
							src={cartIcon}
							alt="icon-cart"
							className="hover:animate-pulse"
							onClick={showCartHandler}
						/>
						<div className="bg-c4a w-4 h-4 rounded-xl absolute top-4 right-3 hover:animate-bounce">
							<p className="text-c1j text-xs font-poppins font-semibold text-center">
								{cartTotalNumber}
							</p>
						</div>

						{showCart && (
							<div className="absolute top-10 -right-28 md:right-6 z-20 animate-fadingIn">
								<CartModal showCartState={setShowCart} />
							</div>
						)}
					</div>
				</div>
			</div>
		</header>
	);
}

export default Header;
