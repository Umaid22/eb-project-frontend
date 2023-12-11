import React from "react";

import testimonial1 from "../assets/images/testimonial1.png";
import testimonial2 from "../assets/images/testimonial2.png";
import arrowRightGreen from "../assets/icons/arrow-right-green.svg";

const Testimonials = () => {
	return (
		<div className="xl:container xl:mx-auto py-16">
			<div className="flex justify-between px-4 pb-8">
				<h2 className="font-poppins font-semibold text-lg">
					Our customers says
				</h2>

				<button className="flex items-center gap-2">
					<p className="font-poppins font-bold">More</p>
					<img src={arrowRightGreen} alt="icon-arrow" />
				</button>
			</div>

			<div className="flex flex-col lg:flex-row items-center gap-8 px-4">
				<div className="border-2 border-f1f1 rounded-xl w-80 sm:w-369 relative flex flex-col items-center">
					<p className="font-poppins font-semibold text-15 px-8 py-6 text-center">
						" This is an super space for your customers qoute. Don’t
						worry it works smooth as pie. You will get all what you
						need by writiing a text here "
					</p>
					<p className="font-poppins font-semibold text-xs text-c1c pb-10">
						Name and Surname
					</p>

					<img
						src={testimonial1}
						alt="user"
						className="absolute top-48 sm:top-44"
					/>
				</div>

				<div className="border-2 border-f1f1 rounded-xl w-80 sm:w-369 relative flex flex-col items-center">
					<p className="font-poppins font-semibold text-15 px-8 py-6 text-center">
						" This is an super space for your customers qoute. Don’t
						worry it works smooth as pie. You will get all what you
						need by writiing a text here "
					</p>
					<p className="font-poppins font-semibold text-xs text-c1c pb-10">
						Name and Surname
					</p>

					<img
						src={testimonial2}
						alt="user"
						className="absolute top-48 sm:top-44"
					/>
				</div>

				<div className="border-2 border-f1f1 rounded-xl w-80 sm:w-369 relative flex flex-col items-center">
					<p className="font-poppins font-semibold text-15 px-8 py-6 text-center">
						" This is an super space for your customers qoute. Don’t
						worry it works smooth as pie. You will get all what you
						need by writiing a text here "
					</p>
					<p className="font-poppins font-semibold text-xs text-c1c pb-10">
						Name and Surname
					</p>
					<div className="bg-c1f w-12 h-12 rounded-full absolute top-48 sm:top-44"></div>
				</div>
			</div>
		</div>
	);
};

export default Testimonials;
