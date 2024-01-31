import React, { useState } from "react";
// import { Link } from "react-router-dom";

import arrowDownGreen from "../assets/icons/arrow-down-green.svg";
import NavItemModal from "./NavItemModal";
import NavHambergerItem from "./NavHambergerItem";

function NavBar() {
	const [showMenuModal, setShowMenuModal] = useState(false);
	const [showBakeryModal, setShowBakeryModal] = useState(false);
	const [showFruitsModal, setShowFruitsModal] = useState(false);
	const [showMeatModal, setShowMeatModal] = useState(false);
	const [showDrinkModal, setShowDrinkModal] = useState(false);
	const [showKitchenModal, setShowKitchenModal] = useState(false);
	const [showNutritionModal, setShowNutritionModal] = useState(false);
	const [showBabyModal, setShowBabyModal] = useState(false);
	const [showPharmacyModal, setShowPharmacyModal] = useState(false);

	const bakeryModalHandler = () => {
		setShowBakeryModal(!showBakeryModal);
		setShowFruitsModal(false);
		setShowMeatModal(false);
		setShowDrinkModal(false);
		setShowKitchenModal(false);
		setShowNutritionModal(false);
		setShowBabyModal(false);
		setShowPharmacyModal(false);
	};
	const fruitsModalHandler = () => {
		setShowBakeryModal(false);
		setShowFruitsModal(!showFruitsModal);
		setShowMeatModal(false);
		setShowDrinkModal(false);
		setShowKitchenModal(false);
		setShowNutritionModal(false);
		setShowBabyModal(false);
		setShowPharmacyModal(false);
	};
	const meatModalHandler = () => {
		setShowBakeryModal(false);
		setShowFruitsModal(false);
		setShowMeatModal(!showMeatModal);
		setShowDrinkModal(false);
		setShowKitchenModal(false);
		setShowNutritionModal(false);
		setShowBabyModal(false);
		setShowPharmacyModal(false);
	};
	const drinkModalHandler = () => {
		setShowBakeryModal(false);
		setShowFruitsModal(false);
		setShowMeatModal(false);
		setShowDrinkModal(!showDrinkModal);
		setShowKitchenModal(false);
		setShowNutritionModal(false);
		setShowBabyModal(false);
		setShowPharmacyModal(false);
	};
	const kitchenModalHandler = () => {
		setShowBakeryModal(false);
		setShowFruitsModal(false);
		setShowMeatModal(false);
		setShowDrinkModal(false);
		setShowKitchenModal(!showKitchenModal);
		setShowNutritionModal(false);
		setShowBabyModal(false);
		setShowPharmacyModal(false);
	};
	const nutritionModalHandler = () => {
		setShowBakeryModal(false);
		setShowFruitsModal(false);
		setShowMeatModal(false);
		setShowDrinkModal(false);
		setShowKitchenModal(false);
		setShowNutritionModal(!showNutritionModal);
		setShowBabyModal(false);
		setShowPharmacyModal(false);
	};
	const babyModalHandler = () => {
		setShowBakeryModal(false);
		setShowFruitsModal(false);
		setShowMeatModal(false);
		setShowDrinkModal(false);
		setShowKitchenModal(false);
		setShowNutritionModal(false);
		setShowBabyModal(!showBabyModal);
		setShowPharmacyModal(false);
	};
	const pharmacyModalHandler = () => {
		setShowBakeryModal(false);
		setShowFruitsModal(false);
		setShowMeatModal(false);
		setShowDrinkModal(false);
		setShowKitchenModal(false);
		setShowNutritionModal(false);
		setShowBabyModal(false);
		setShowPharmacyModal(!showPharmacyModal);
	};

	return (
		<nav className="xl:container xl:mx-auto px-4 bg-c1h py-2 md:py-5">
			{/* NAVBAR FOR SCREENS LARGER THAN 768PX */}
			<div className="hidden md:flex justify-around">
				<div className="flex items-center gap-1 cursor-pointer relative">
					<p
						className="font-poppins font-semibold text-c1a"
						onClick={bakeryModalHandler}
					>
						Bakery
					</p>
					<img src={arrowDownGreen} alt="arrow" />
					{showBakeryModal && (
						<div className="absolute top-8">
							<NavItemModal
								title="Bakery"
								setShowModal={setShowBakeryModal}
							/>
						</div>
					)}
				</div>

				<div className="flex items-center gap-1 cursor-pointer relative">
					<p
						className="font-poppins font-semibold text-c1a"
						onClick={fruitsModalHandler}
					>
						Fruit and vegetables
					</p>

					<img src={arrowDownGreen} alt="arrow" />
					{showFruitsModal && (
						<div className="absolute top-8 z-10">
							<NavItemModal
								title="Fruit"
								setShowModal={setShowFruitsModal}
							/>
						</div>
					)}
				</div>

				<div className="flex items-center gap-1 cursor-pointer relative">
					<p
						className="font-poppins font-semibold text-c1a"
						onClick={meatModalHandler}
					>
						Meat and fish
					</p>
					<img src={arrowDownGreen} alt="arrow" />
					{showMeatModal && (
						<div className="absolute top-8 z-10">
							<NavItemModal
								title="Meat"
								setShowModal={setShowMeatModal}
							/>
						</div>
					)}
				</div>

				<div className="flex items-center gap-1 cursor-pointer relative">
					<p
						className="font-poppins font-semibold text-c1a"
						onClick={drinkModalHandler}
					>
						Drinks
					</p>
					<img src={arrowDownGreen} alt="arrow" />
					{showDrinkModal && (
						<div className="absolute top-8 z-10">
							<NavItemModal
								title="Drink"
								setShowModal={setShowDrinkModal}
							/>
						</div>
					)}
				</div>

				<div className="flex items-center gap-1 cursor-pointer relative">
					<p
						className="font-poppins font-semibold text-c1a"
						onClick={kitchenModalHandler}
					>
						Kitchen
					</p>
					<img src={arrowDownGreen} alt="arrow" />
					{showKitchenModal && (
						<div className="absolute top-8 z-10">
							<NavItemModal
								title="Kitchen"
								setShowModal={setShowKitchenModal}
							/>
						</div>
					)}
				</div>

				<div className="flex items-center gap-1 cursor-pointer relative">
					<p
						className="font-poppins font-semibold text-c1a"
						onClick={nutritionModalHandler}
					>
						Special nutrition
					</p>
					<img src={arrowDownGreen} alt="arrow" />
					{showNutritionModal && (
						<div className="absolute top-8 z-10">
							<NavItemModal
								title="Nutrition"
								setShowModal={setShowNutritionModal}
							/>
						</div>
					)}
				</div>

				<div className="hidden lg:flex items-center gap-1 cursor-pointer relative">
					<p
						className="font-poppins font-semibold text-c1a"
						onClick={babyModalHandler}
					>
						Baby
					</p>
					<img src={arrowDownGreen} alt="arrow" />
					{showBabyModal && (
						<div className="absolute top-8 z-10">
							<NavItemModal
								title="Baby"
								setShowModal={setShowBabyModal}
							/>
						</div>
					)}
				</div>

				<div className="hidden lg:flex items-center gap-1 cursor-pointer relative">
					<p
						className="font-poppins font-semibold text-c1a"
						onClick={pharmacyModalHandler}
					>
						Pharmacy
					</p>
					<img src={arrowDownGreen} alt="arrow" />
					{showPharmacyModal && (
						<div className="absolute top-8 z-10">
							<NavItemModal
								title="Pharmacy"
								setShowModal={setShowPharmacyModal}
							/>
						</div>
					)}
				</div>
			</div>

			{/* Hamberger for small screens */}
			<div className="md:hidden relative">
				<div
					className="flex gap-4 items-center"
					onClick={() => setShowMenuModal(!showMenuModal)}
				>
					{!showMenuModal && (
						<div className="flex flex-col gap-1">
							<span className="w-5  border border-c2a"></span>
							<span className="w-5  border border-c2a"></span>
							<span className="w-5  border border-c2a"></span>
							<span className="w-5  border border-c2a"></span>
						</div>
					)}
					{showMenuModal && (
						<div className="relative mr-5 animate-fadingIn">
							<div className="w-6  border-2 border-c2a rotate-45 absolute"></div>
							<div className="w-6  border-2 border-c2a -rotate-45 absolute"></div>
						</div>
					)}
					<p className="font-poppins font-semibold text-c2a text-xl">
						Menu
					</p>
				</div>

				{showMenuModal && (
					<div className="border border-c1d rounded-lg bg-c1f shadow-lg shadow-c2c absolute top-8 w-52 animate-fadingIn z-30">
						<div>
							<div
								className="flex items-center justify-between cursor-pointer py-1 px-10 border-b border-c1c rounded-t-lg"
								onClick={bakeryModalHandler}
							>
								<p className="font-poppins font-semibold text-c1a">
									Bakery
								</p>
								<img src={arrowDownGreen} alt="arrow" />
							</div>

							{showBakeryModal && (
								<NavHambergerItem
									title="Bakery"
									setShowItemModal={setShowBakeryModal}
									setMenueModal={setShowMenuModal}
								/>
							)}
						</div>

						<div>
							<div
								className="flex items-center justify-between cursor-pointer py-1 px-10 border-b border-c1c rounded-t-lg"
								onClick={fruitsModalHandler}
							>
								<p className="font-poppins font-semibold text-c1a">
									Fruits
								</p>
								<img src={arrowDownGreen} alt="arrow" />
							</div>

							{showFruitsModal && (
								<NavHambergerItem
									title="Fruits"
									setShowItemModal={setShowFruitsModal}
									setMenueModal={setShowMenuModal}
								/>
							)}
						</div>

						<div>
							<div
								className="flex items-center justify-between cursor-pointer py-1 px-10 border-b border-c1c rounded-t-lg"
								onClick={meatModalHandler}
							>
								<p className="font-poppins font-semibold text-c1a">
									Meat
								</p>
								<img src={arrowDownGreen} alt="arrow" />
							</div>

							{showMeatModal && (
								<NavHambergerItem
									title="Meat"
									setShowItemModal={setShowMeatModal}
									setMenueModal={setShowMenuModal}
								/>
							)}
						</div>

						<div>
							<div
								className="flex items-center justify-between cursor-pointer py-1 px-10 border-b border-c1c rounded-t-lg"
								onClick={drinkModalHandler}
							>
								<p className="font-poppins font-semibold text-c1a">
									Drink
								</p>
								<img src={arrowDownGreen} alt="arrow" />
							</div>

							{showDrinkModal && (
								<NavHambergerItem
									title="Drink"
									setShowItemModal={setShowDrinkModal}
									setMenueModal={setShowMenuModal}
								/>
							)}
						</div>

						<div>
							<div
								className="flex items-center justify-between cursor-pointer py-1 px-10 border-b border-c1c rounded-t-lg"
								onClick={kitchenModalHandler}
							>
								<p className="font-poppins font-semibold text-c1a">
									Kitchen
								</p>
								<img src={arrowDownGreen} alt="arrow" />
							</div>

							{showKitchenModal && (
								<NavHambergerItem
									title="Kitchen"
									setShowItemModal={setShowDrinkModal}
									setMenueModal={setShowMenuModal}
								/>
							)}
						</div>

						<div>
							<div
								className="flex items-center justify-between cursor-pointer py-1 px-10 border-b border-c1c rounded-t-lg"
								onClick={nutritionModalHandler}
							>
								<p className="font-poppins font-semibold text-c1a">
									Nutrition
								</p>
								<img src={arrowDownGreen} alt="arrow" />
							</div>

							{showNutritionModal && (
								<NavHambergerItem
									title="Nutrition"
									setShowItemModal={setShowNutritionModal}
									setMenueModal={setShowMenuModal}
								/>
							)}
						</div>

						<div>
							<div
								className="flex items-center justify-between cursor-pointer py-1 px-10 border-b border-c1c rounded-t-lg"
								onClick={babyModalHandler}
							>
								<p className="font-poppins font-semibold text-c1a">
									Baby
								</p>
								<img src={arrowDownGreen} alt="arrow" />
							</div>

							{showBabyModal && (
								<NavHambergerItem
									title="Baby"
									setShowItemModal={setShowBabyModal}
									setMenueModal={setShowMenuModal}
								/>
							)}
						</div>

						<div>
							<div
								className="flex items-center justify-between cursor-pointer py-1 px-10 rounded-b-lg"
								onClick={pharmacyModalHandler}
							>
								<p className="font-poppins font-semibold text-c1a">
									Pharmacy
								</p>
								<img src={arrowDownGreen} alt="arrow" />
							</div>

							{showPharmacyModal && (
								<NavHambergerItem
									title="Pharmacy"
									setShowItemModal={setShowPharmacyModal}
									setMenueModal={setShowMenuModal}
								/>
							)}
						</div>
					</div>
				)}
			</div>
		</nav>
	);
}

export default NavBar;
