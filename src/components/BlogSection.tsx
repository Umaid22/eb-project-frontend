import React, { useEffect, useState } from "react";

import arrowRightGreen from "../assets/icons/arrow-right-green.svg";
// import bgBlog from "../assets/images/bg-blog1.jpg";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { BlogsType, ReduxStateType } from "../types";
import { allBlogsAPI } from "../api/internal";
import { AxiosError, AxiosResponse } from "axios";
import { getAllBlogs } from "../store/slices/blogSlice";
import ErrorMessage from "./ErrorMessage";

const BlogSection = () => {
	const [showBlogsError, setShowBlogsError] = useState(false);

	const dispatch = useDispatch();
	// const navigate = useNavigate();
	const allBlogs = useSelector<ReduxStateType, BlogsType[]>(
		(state) => state.blogs.allBlogs
	);

	useEffect(() => {
		if (allBlogs.length === 0) {
			getAllBlogsData();
		}

		async function getAllBlogsData() {
			const response = await allBlogsAPI();

			if (response.status === 200) {
				const res = response as AxiosResponse;
				dispatch(getAllBlogs(res.data.blogs));
			} else {
				// const err = response as AxiosError;
				// console.log("error-Message", err.message);
				setShowBlogsError(true);
			}
		}
	});

	return (
		<div className="py-12 px-4 xl:container xl:mx-auto">
			<div className="flex justify-between items-center mb-8">
				<p className="font-poppins font-semibold text-lg">
					Read our Blog posts
				</p>

				<Link
					to="blogs"
					className="flex items-center gap-2 px-3 py-2 cursor-pointer"
				>
					<p className="font-poppins text-sm font-bold">Go to Blog</p>
					<img src={arrowRightGreen} alt="arrow" />
				</Link>
			</div>

			{showBlogsError && (
				<div className="border border-gray-500 rounded-xl w-full py-36 px-3 bg-gray-200">
					<div className="mx-auto my-auto w-fit text-center">
						<ErrorMessage message="Blogs fetching failed. Connection refused from Backend." />
					</div>
				</div>
			)}

			{allBlogs.length !== 0 && (
				<div className="flex flex-col lg:flex-row items-center gap-6">
					<div className="w-320 sm:w-469">
						<Link
							to={`blog/details/${allBlogs[0]?._id}`}
							className="cursor-pointer relative"
						>
							<div className="h-52 w-full bg-c2e rounded-t-xl">
								<img
									src={allBlogs[0]?.photo}
									alt="backgroung"
									className="h-52 w-full object-fill  rounded-t-xl z-20"
								/>
								<div className="bg-c2d rounded-xl absolute top-6 left-6 z-30">
									<p className="text-c2a text-xs font-poppins font-semibold px-2 ">
										{allBlogs[0]?.category}
									</p>
								</div>
							</div>
						</Link>

						<div className="bg-gradient-to-b from-c2d to-black  h-52 flex justify-center items-end rounded-b-xl pl-2">
							<div className="flex flex-col mb-6">
								<Link
									to={`blog/details/${allBlogs[0]?._id}`}
									className="font-poppins font-semibold text-22 text-white sm:w-369 mb-2 cursor-pointer"
								>
									{allBlogs[0]?.title}
								</Link>
								<div className="flex items-center">
									<div className="bg-c1h w-8 h-8 rounded-full mr-2"></div>
									<p className="text-white text-xs mr-4">
										{allBlogs[0]?.authorName}
									</p>
									<p className="text-white text-xs">
										{allBlogs[0]?.createdAt
											.slice(
												0,
												allBlogs[0]?.createdAt.indexOf(
													"T"
												)
											)
											.split("-")
											.reverse()
											.join(".")}
									</p>
								</div>
							</div>
						</div>
					</div>

					<div className="w-269">
						<div className="bg-c1f rounded-xl w-269 h-180 mb-6 cursor-pointer">
							<Link to={`blog/details/${allBlogs[1]?._id}`}>
								<div className="rounded-xl w-269 h-180 bg-c2e">
									<img
										src={allBlogs[1]?.photo}
										alt="vegetables"
										className="rounded-xl w-269 h-180 object-cover"
									/>
								</div>
							</Link>
						</div>
						<div>
							<p className="text-c2a text-xs font-poppins font-semibold bg-c2e px-2 rounded-xl w-fit mb-2">
								{allBlogs[1]?.category}
							</p>
							<Link
								to={`blog/details/${allBlogs[1]?._id}`}
								className=" font-poppins font-semibold text-lg mb-4 cursor-pointer"
							>
								{allBlogs[1]?.title}
							</Link>

							<div className="flex gap-4 text-xs">
								<p>{allBlogs[1]?.authorName}</p>
								<p>
									{allBlogs[0]?.createdAt
										.slice(
											0,
											allBlogs[0]?.createdAt.indexOf("T")
										)
										.split("-")
										.reverse()
										.join(".")}
								</p>
							</div>
						</div>
					</div>

					<div className="w-320 sm:w-369 flex flex-col gap-8">
						<div className="flex justify-between items-center">
							<div>
								<Link to={`blog/details/${allBlogs[2]?._id}`}>
									<p className=" font-poppins font-semibold text-15 mb-4 w-48 cursor-pointer">
										{allBlogs[2]?.title}
									</p>
								</Link>

								<div className="flex gap-4 text-xs">
									<p>{allBlogs[2]?.authorName}</p>
									<p>
										{allBlogs[2]?.createdAt
											.slice(
												0,
												allBlogs[2]?.createdAt.indexOf(
													"T"
												)
											)
											.split("-")
											.reverse()
											.join(".")}
									</p>
								</div>
							</div>
							<Link
								to={`blog/details/${allBlogs[2]?._id}`}
								className="bg-c1f rounded-xl w-24 h-24 cursor-pointer"
							>
								<div className="rounded-xl w-24 h-24">
									<img
										src={allBlogs[2]?.photo}
										alt="salat"
										className="rounded-xl w-24 h-24 object-cover"
									/>
								</div>
							</Link>
						</div>

						<div className="flex justify-between items-center">
							<div>
								<Link to={`blog/details/${allBlogs[3]?._id}`}>
									<p className=" font-poppins font-semibold text-15 mb-4 w-48 cursor-pointer">
										{allBlogs[3]?.title}
									</p>
								</Link>

								<div className="flex gap-4 text-xs">
									<p>{allBlogs[3]?.authorName}</p>
									<p>
										{allBlogs[3]?.createdAt
											.slice(
												0,
												allBlogs[3]?.createdAt.indexOf(
													"T"
												)
											)
											.split("-")
											.reverse()
											.join(".")}
									</p>
								</div>
							</div>
							<Link
								to={`blog/details/${allBlogs[3]?._id}`}
								className="bg-c1f rounded-xl w-24 h-24 cursor-pointer"
							>
								<div className="rounded-xl w-24 h-24">
									<img
										src={allBlogs[3]?.photo}
										alt="breakfast"
										className="rounded-xl w-24 h-24"
									/>
								</div>
							</Link>
						</div>

						<div className="flex justify-between items-center">
							<div>
								<Link to={`blog/details/${allBlogs[4]?._id}`}>
									<p className=" font-poppins font-semibold text-15 mb-4 w-48 cursor-pointer">
										{allBlogs[4]?.title}
									</p>
								</Link>
								<div className="flex gap-4 text-xs">
									<p>{allBlogs[4]?.authorName}</p>
									<p>
										{allBlogs[4]?.createdAt
											.slice(
												0,
												allBlogs[4]?.createdAt.indexOf(
													"T"
												)
											)
											.split("-")
											.reverse()
											.join(".")}
									</p>
								</div>
							</div>
							<Link
								to={`blog/details/${allBlogs[4]?._id}`}
								className="bg-c1f rounded-xl w-24 h-24 cursor-pointer"
							>
								<div className="rounded-xl w-24 h-24">
									<img
										src={allBlogs[4]?.photo}
										alt="bread"
										className="rounded-xl w-24 h-24 object-fill"
									/>
								</div>
							</Link>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default BlogSection;
