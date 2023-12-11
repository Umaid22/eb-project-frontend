import React, { useEffect } from "react";
import TextInput from "../components/TextInput";
import Button from "../components/Button";
import { useSelector } from "react-redux";
import { ReduxStateType } from "../types";
import CheckoutItem from "../components/CheckoutItem";
import fedex from "../assets/icons/fedex.png";
import dhl from "../assets/icons/dhl.png";
import visa from "../assets/icons/visa.png";
import masterCard from "../assets/icons/masterCard.png";
import paypal from "../assets/icons/paypal.png";
import bitcoin from "../assets/icons/bitcoin.png";
import securityVerified from "../assets/icons/security-verified.png";

function CheckOut() {
	// const dispatch = useDispatch();
	const cartItems = useSelector(
		(state: ReduxStateType) => state.cart.cartItems
	);
	const totalPrice = useSelector(
		(state: ReduxStateType) => state.cart.cartTotalPrice
	);
	const totalTax = (totalPrice / 100) * 17;

	useEffect(() => {
		document.title = "Checkout Page";
	});

	return (
		<div className="px-4 xl:container xl:mx-auto">
			{/* BREADCRUMBS */}
			<div className="text-xs flex gap-2 text-c1c py-4">
				<p className="">Homepage</p>
				<p>/</p>
				<p className="text-c1a">Checkout page</p>
			</div>

			{/* BILLING INFO */}
			<div className="flex flex-col-reverse md:flex-row py-4 gap-3 xl:gap-8 justify-center">
				{/* LEFT */}
				<div className="flex flex-col gap-16">
					{/* PERSONAL INFO */}
					<div className="flex flex-col gap-8">
						<div>
							<h2 className="font-poppins font-semibold text-22 pb-1">
								Billing info
							</h2>
							<div className="text-xs text-c1c flex justify-between">
								<p>Please enter your billing info</p>
								<p>Step 1 of 5</p>
							</div>
						</div>

						<div className="flex flex-col gap-8">
							<div className="flex flex-col lg:flex-row gap-4 xl:gap-8">
								<TextInput
									variant="simple"
									type="text"
									label="First name"
									placeholder="First name"
									name=""
									value=""
									onBlur={() => console.log("")}
									onChange={() => console.log("")}
								/>
								<TextInput
									variant="simple"
									type="text"
									label="Last name"
									placeholder="Last name"
									name=""
									value=""
									onBlur={() => console.log("")}
									onChange={() => console.log("")}
								/>
							</div>

							<div className="flex flex-col lg:flex-row  gap-4 xl:gap-8">
								<TextInput
									variant="simple"
									type="text"
									label="Email address"
									placeholder="Email address"
									name=""
									value=""
									onBlur={() => console.log("")}
									onChange={() => console.log("")}
								/>
								<TextInput
									variant="simple"
									type="text"
									label="Phone number"
									placeholder="Phone number"
									name=""
									value=""
									onBlur={() => console.log("")}
									onChange={() => console.log("")}
								/>
							</div>

							<div className="flex flex-col lg:flex-row  gap-4 xl:gap-8">
								<TextInput
									variant="simple"
									type="text"
									label="Address"
									placeholder="Address"
									name=""
									value=""
									onBlur={() => console.log("")}
									onChange={() => console.log("")}
								/>
								<TextInput
									variant="simple"
									type="text"
									label="Town / City"
									placeholder="Town or city"
									name=""
									value=""
									onBlur={() => console.log("")}
									onChange={() => console.log("")}
								/>
							</div>

							<div className="flex flex-col lg:flex-row  gap-4 xl:gap-8">
								<TextInput
									variant="icon"
									icon_right="topBottomIcon"
									type="text"
									label="State / Country"
									placeholder="Choose a state or Country"
									name=""
									value=""
									onBlur={() => console.log("")}
									onChange={() => console.log("")}
								/>
								<TextInput
									variant="simple"
									type="text"
									label="ZIP / Postal code"
									placeholder="Postal code or ZIP"
									name=""
									value=""
									onBlur={() => console.log("")}
									onChange={() => console.log("")}
								/>
							</div>
						</div>

						<div className="bg-c1h border border-c1d rounded-xl w-fit px-4 py-2 flex items-center">
							<input
								type="checkbox"
								// value={value}
								// name={name}
								// onBlur={onBlur}
								// onChange={onChange}
								className="mr-2"
							/>
							<p className="text-sm">
								Ship to a different address?
							</p>
						</div>
					</div>

					{/* BILLING METHOD */}
					<div>
						<div className="pb-8">
							<h2 className="font-poppins font-semibold text-22 pb-1">
								Billing method
							</h2>
							<div className="text-xs text-c1c flex justify-between">
								<p>Please enter your payment method</p>
								<p>Step 2 of 5</p>
							</div>
						</div>

						<div className="flex flex-col gap-4">
							<div className="bg-c1h border border-c1d rounded-xl px-4 py-3 flex items-center justify-between">
								<div className="flex">
									<input
										type="radio"
										// value={value}
										// name={name}
										// onBlur={onBlur}
										// onChange={onChange}
										className="mr-4"
									/>
									<p className="font-poppins font-semibold text-xs">
										FedEx
									</p>
								</div>

								<div className="flex gap-3">
									<p className="font-poppins font-semibold text-xs text-c2a">
										+32 USD
									</p>
									<p className="font-poppins font-semibold text-xs">
										Additional price
									</p>
								</div>

								<img src={fedex} alt="fedex" />
							</div>

							<div className="bg-c1h border border-c1d rounded-xl px-4 py-3 flex items-center justify-between">
								<div className="flex">
									<input
										type="radio"
										// value={value}
										// name={name}
										// onBlur={onBlur}
										// onChange={onChange}
										className="mr-4"
									/>
									<p className="font-poppins font-semibold text-xs">
										DHL
									</p>
								</div>

								<div className="flex gap-3">
									<p className="font-poppins font-semibold text-xs text-c2a">
										+15 USD
									</p>
									<p className="font-poppins font-semibold text-xs">
										Additional price
									</p>
								</div>

								<img src={dhl} alt="dhl" />
							</div>
						</div>
					</div>

					{/* PAYMENT METHOD */}
					<div>
						<div className="pb-8">
							<h2 className="font-poppins font-semibold text-22 pb-1">
								Payment method
							</h2>
							<div className="text-xs text-c1c flex justify-between">
								<p>Please enter your payment method</p>
								<p>Step 3 of 5</p>
							</div>
						</div>

						<div className="border border-c1d rounded-xl p-4 mb-4">
							<div className="flex justify-between mb-8">
								<div className="flex items-center gap-4">
									<input type="radio" />
									<p className="font-poppins font-semibold text-xs">
										Credit card
									</p>
								</div>

								<div className="flex gap-4">
									<img src={visa} alt="visa" />
									<img src={masterCard} alt="master-card" />
								</div>
							</div>

							<div>
								<div>
									<label className="font-poppins font-semibold text-xs">
										Card number
									</label>
									<div className="bg-c1h border border-c1d rounded-xl px-3 py-1">
										<input
											type="text"
											// value={value}
											// name={name}
											// onBlur={onBlur}
											// onChange={onChange}
											placeholder="Card number"
											className="outline-none bg-c1h text-sm text-c1c rounded-xl py-2 px-1"
										/>
									</div>
								</div>

								<div className="flex flex-col lg:flex-row">
									<div className="mr-8">
										<label className="font-poppins font-semibold text-xs">
											Card holder
										</label>
										<div className="bg-c1h border border-c1d rounded-xl px-3 py-1 w-260 lg:w-320 xl:w-350">
											<input
												type="text"
												// value={value}
												// name={name}
												// onBlur={onBlur}
												// onChange={onChange}
												placeholder="Card holder"
												className="outline-none bg-c1h text-sm text-c1c rounded-xl py-2 px-1"
											/>
										</div>
									</div>

									<div className="mr-4">
										<label className="font-poppins font-semibold text-xs">
											Expiration date
										</label>
										<div className="bg-c1h border border-c1d rounded-xl px-3 py-1 w-120">
											<input
												type="text"
												// value={value}
												// name={name}
												// onBlur={onBlur}
												// onChange={onChange}
												placeholder="DD/MM/YY"
												className="outline-none bg-c1h text-sm text-c1c rounded-xl py-2 px-1 w-full"
											/>
										</div>
									</div>

									<div>
										<label className="font-poppins font-semibold text-xs">
											CVC
										</label>
										<div className="bg-c1h border border-c1d rounded-xl px-3 py-1 w-120">
											<input
												type="text"
												// value={value}
												// name={name}
												// onBlur={onBlur}
												// onChange={onChange}
												placeholder="CVC"
												className="outline-none bg-c1h text-sm text-c1c rounded-xl py-2 px-1 w-full"
											/>
										</div>
									</div>
								</div>
							</div>
						</div>

						<div className="flex flex-col gap-4">
							<div className="bg-c1h border border-c1d rounded-xl px-4 py-3 flex items-center justify-between">
								<div className="flex">
									<input
										type="radio"
										// value={value}
										// name={name}
										// onBlur={onBlur}
										// onChange={onChange}
										className="mr-4"
									/>
									<p className="font-poppins font-semibold text-xs">
										PayPal
									</p>
								</div>

								<img src={paypal} alt="paypal" />
							</div>

							<div className="bg-c1h border border-c1d rounded-xl px-4 py-3 flex items-center justify-between">
								<div className="flex">
									<input
										type="radio"
										// value={value}
										// name={name}
										// onBlur={onBlur}
										// onChange={onChange}
										className="mr-4"
									/>
									<p className="font-poppins font-semibold text-xs">
										Bitcoin
									</p>
								</div>

								<img src={bitcoin} alt="bitcoin" />
							</div>
						</div>
					</div>

					{/* ADDITIONAL INFORMATION */}
					<div>
						<div className="pb-8">
							<h2 className="font-poppins font-semibold text-22 pb-1">
								Additional informations
							</h2>
							<div className="text-xs text-c1c flex justify-between">
								<p>
									Need something else? we will make it for
									you!
								</p>
								<p>Step 4 of 5</p>
							</div>
						</div>

						<div>
							<label className="font-poppins font-semibold text-xs">
								Order notes
							</label>
							<div className="bg-c1h border border-c1d rounded-xl px-3 py-1 h-28 overflow-auto">
								<textarea
									// value={value}
									// name={name}
									// onBlur={onBlur}
									// onChange={onChange}
									placeholder="Need a specific delivery day? Sending a gitf? Let’s say ..."
									className="outline-none bg-c1h text-sm text-c1c rounded-xl py-2 px-1 w-full h-24"
								/>
							</div>
						</div>
					</div>

					{/* CONFIRMATION */}
					<div>
						<div className="pb-8">
							<h2 className="font-poppins font-semibold text-22 pb-1">
								Confirmation
							</h2>
							<div className="text-xs text-c1c flex justify-between">
								<p>
									We are getting to the end. Just few clicks
									and your order is ready!
								</p>
								<p>Step 5 of 5</p>
							</div>
						</div>

						<div className="mb-8">
							<div className="bg-c1h border border-c1d rounded-xl w-fit px-4 py-2 flex items-center mb-4">
								<input
									type="checkbox"
									// value={value}
									// name={name}
									// onBlur={onBlur}
									// onChange={onChange}
									className="mr-2"
								/>
								<p className="text-sm">
									I agree with sending an Marketing and
									newsletter emails. No spam, promissed!
								</p>
							</div>

							<div className="bg-c1h border border-c1d rounded-xl w-fit px-4 py-2 flex items-center">
								<input
									type="checkbox"
									// value={value}
									// name={name}
									// onBlur={onBlur}
									// onChange={onChange}
									className="mr-2"
								/>
								<p className="text-sm">
									I agree with our{" "}
									<span className="underline">
										terms and conditions
									</span>{" "}
									and{" "}
									<span className="underline">
										privacy policy{" "}
									</span>
									.
								</p>
							</div>
						</div>

						<div className="mb-8">
							<Button
								label="Complete order"
								variant="secondary"
								size="large"
							/>
						</div>

						<div>
							<img
								src={securityVerified}
								alt="security-verified"
							/>
							<div>
								<p className="font-poppins font-semibold text-xs mb-3">
									All your data are safe
								</p>
								<p className="text-xs text-c1c w-52">
									We are using the most advanced security to
									provide you the best experience ever.
								</p>
							</div>
						</div>
					</div>
				</div>

				{/* RIGHT */}
				<div className="border border-c1d rounded-xl px-4 py-8 flex flex-col gap-10 h-fit">
					<div>
						<h2 className="font-poppins font-semibold text-22 mb-1">
							Order Summary
						</h2>
						<p className="text-xs text-c1c">
							Price can change depending on shipping method and
							taxes of your state.
						</p>
					</div>

					{/* PRODUCTS SELECTED */}
					<div className="flex flex-col gap-8">
						{cartItems.length === 0 && (
							<p className="mx-auto text-c2a text-xl font-semibold my-6 animate-pulse">
								Cart is empty.
							</p>
						)}

						{cartItems.map((product) => {
							return (
								<CheckoutItem
									product={product}
									key={product._id}
								/>
							);
						})}
					</div>

					{/* PROMO-CODE */}
					<div>
						<div className="flex flex-col gap-3 mb-8">
							<div className="flex justify-between">
								<p className="font-poppins font-semibold text-xs">
									Subtotal
								</p>
								<p className="font-poppins font-semibold text-xs">
									{totalPrice.toFixed(2)} USD
								</p>
							</div>

							<div className="flex justify-between">
								<p className="font-poppins font-semibold text-xs">
									Tax
								</p>
								<p className="font-poppins font-semibold text-xs">
									17% {totalTax.toFixed(2)} USD
								</p>
							</div>

							<div className="flex justify-between">
								<p className="font-poppins font-semibold text-xs">
									Shipping
								</p>
								<p className="font-poppins font-semibold text-xs">
									{0} USD
								</p>
							</div>
						</div>

						<div className="bg-c1h border border-c1d rounded-xl px-3 py-1 flex items-center justify-between">
							<input
								type="text"
								// value={value}
								// name={name}
								// onBlur={onBlur}
								// onChange={onChange}
								placeholder="Apply promo code"
								className="outline-none bg-c1h text-sm text-c1c rounded-xl py-2 px-1"
							/>
							<p className="font-poppins font-bold text-15 cursor-pointer">
								Apply now
							</p>
						</div>
					</div>

					{/* TOTAL */}
					<div className="flex justify-between">
						<div>
							<p className="font-poppins font-semibold text-xs mb-1">
								Total Order
							</p>
							<div>
								<p className="text-xs text-c2a">
									Guaranteed delivery day:
								</p>
								<p className="text-xs text-c2a">
									June 12, 2024
								</p>
							</div>
						</div>
						<p className="font-poppins font-semibold text-c2a text-26">
							{(totalPrice + totalTax).toFixed(2)} USD
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default CheckOut;
