import React from "react";

const RelatedProducts = () => {
	return (
		<div className="py-10">
			{/* Heading */}
			<div className="flex justify-between px-4">
				<h2 className="font-poppins font-semibold text-lg">
					Related Products
				</h2>

				<button className="flex items-center gap-2">
					<p className="font-poppins font-bold">More products</p>
					<p className="bg-rightArrowIconGreen w-3 h-4 bg-no-repeat"></p>
				</button>
			</div>

			{/* Products */}
			<div className="px-4 flex gap-8 my-6">
				<div className="border border-c1d rounded-xl p-4 flex flex-col gap-4">
					<div className="bg-chiliSingle w-237 h-180 rounded-xl"></div>

					<div>
						<p className="font-poppins font-semibold">
							Product Title
						</p>
						<p className="text-xs text-c1b">
							Space for a small product description
						</p>
					</div>

					<div className="flex justify-between items-center">
						<p className="font-poppins font-semibold text-lg">
							1.48 USD
						</p>
						<button className="bg-c2a border-2 border-c2b rounded-xl px-3 py-1 font-poppins text-white font-bold">
							Buy now
						</button>
					</div>
				</div>

				<div className="border border-c1d rounded-xl p-4 flex flex-col gap-4">
					<div className="bg-chiliesRed w-237 h-180 rounded-xl relative">
						<div className="bg-c2e rounded-xl px-2 absolute top-3 left-3">
							<p className="font-poppins font-semibold text-c2a text-xs ">
								- 36 %
							</p>
						</div>
					</div>

					<div>
						<p className="font-poppins font-semibold">
							Product Title
						</p>
						<p className="text-xs text-c1b">
							Space for a small product description
						</p>
					</div>

					<div className="flex justify-between items-center">
						<div>
							<p className="font-poppins font-semibold text-lg">
								0.28 USD
							</p>
							<p className="font-poppins font-semibold text-xs text-c1c line-through">
								48.56
							</p>
						</div>
						<button className="bg-c2a border-2 border-c2b rounded-xl px-3 py-1 font-poppins text-white font-bold">
							Buy now
						</button>
					</div>
				</div>

				<div className="border border-c1d rounded-xl p-4 flex flex-col gap-4">
					<div className="bg-apple w-237 h-180 rounded-xl bg-no-repeat relative">
						<div className="bg-c2e rounded-xl px-2 absolute top-3 left-3">
							<p className="font-poppins font-semibold text-c2a text-xs ">
								- 36 %
							</p>
						</div>
					</div>

					<div>
						<p className="font-poppins font-semibold">
							Product Title
						</p>
						<p className="text-xs text-c1b">
							Space for a small product description
						</p>
					</div>

					<div className="flex justify-between items-center">
						<div>
							<p className="font-poppins font-semibold text-lg">
								1.12 USD
							</p>
							<p className="font-poppins font-semibold text-xs text-c1c line-through">
								48.56
							</p>
						</div>
						<button className="bg-c2a border-2 border-c2b rounded-xl px-3 py-1 font-poppins text-white font-bold">
							Buy now
						</button>
					</div>
				</div>

				<div className="border border-c1d rounded-xl p-4 flex flex-col gap-4">
					<div className="bg-grapes w-237 h-180 rounded-xl relative">
						<div className="bg-c2e rounded-xl px-2 absolute top-3 left-3">
							<p className="font-poppins font-semibold text-c2a text-xs ">
								- 36 %
							</p>
						</div>
					</div>

					<div>
						<p className="font-poppins font-semibold">
							Product Title
						</p>
						<p className="text-xs text-c1b">
							Space for a small product description
						</p>
					</div>

					<div className="flex justify-between items-center">
						<div>
							<p className="font-poppins font-semibold text-lg">
								1.12 USD
							</p>
							<p className="font-poppins font-semibold text-xs text-c1c line-through">
								48.56
							</p>
						</div>
						<button className="bg-c2a border-2 border-c2b rounded-xl px-3 py-1 font-poppins text-white font-bold">
							Buy now
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default RelatedProducts;
