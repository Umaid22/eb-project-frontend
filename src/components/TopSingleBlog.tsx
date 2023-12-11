import React from "react";
import { Link } from "react-router-dom";
import { BlogsType } from "../types";

const TopSingleBlog = ({ blog }: { blog: BlogsType }) => {
	const { photo, category, title, authorName, createdAt, _id } = blog;
	return (
		<div>
			<Link to={`/blog/details/${_id}`}>
				<div className="h-48 w-320 sm:w-569 rounded-t-xl relative cursor-pointer">
					<img
						src={photo}
						alt="blog"
						className="h-full w-full object-cover object-center rounded-t-xl"
					/>
					<p className="bg-c2e px-2 rounded-xl text-c2a font-poppins font-semibold text-xs w-fit absolute top-6 left-6 z-20">
						{category}
					</p>
				</div>
			</Link>

			<div className="bg-gradient-to-b from-c2d to-black p-3 sm:p-6 pt-4 sm:pt-11 rounded-b-lg">
				<Link to={`/blog/details/${_id}`}>
					<p className="font-poppins font-semibold text-22 text-white w-260 sm:w-369 pb-2 cursor-pointer">
						{title}
					</p>
				</Link>

				<div className="flex items-center gap-4">
					<div className="flex items-center gap-2">
						<div className="bg-white w-8 h-8 rounded-full"></div>
						<p className="text-xs text-white">{authorName}</p>
					</div>
					<p className="text-xs text-white">
						{createdAt
							?.slice(0, createdAt?.indexOf("T"))
							.split("-")
							.reverse()
							.join(".")}
					</p>
				</div>
			</div>
		</div>
	);
};

export default TopSingleBlog;
