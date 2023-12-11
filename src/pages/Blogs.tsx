import React, { useEffect } from "react";
import Button from "../components/Button";
import gridIcon from "../assets/icons/grid-view-icon.svg";
import listIcon from "../assets/icons/list-view.svg";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ReduxStateType } from "../types";
import { allBlogsAPI, topBlogsAPI } from "../api/internal";
import { AxiosError, AxiosResponse } from "axios";
import { getAllBlogs, getTopBlogs } from "../store/slices/blogSlice";
import TopSingleBlog from "../components/TopSingleBlog";

const Blogs = () => {
	const dispatch = useDispatch();

	const allBlogs = useSelector(
		(state: ReduxStateType) => state.blogs.allBlogs
	);
	const topBlogs = useSelector(
		(state: ReduxStateType) => state.blogs.topBlogs
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
				const err = response as AxiosError;
				console.log("error message ::", err.message);
			}
		}

		if (topBlogs.length === 0) {
			getTopBlogsData();
		}
		async function getTopBlogsData() {
			const response = await topBlogsAPI();
			if (response.status === 200) {
				const res = response as AxiosResponse;
				dispatch(getTopBlogs(res.data.blogs));
			} else {
				const err = response as AxiosError;
				console.log("error message ::", err.message);
			}
		}
		document.title = "Blogs";
	});

	return (
		<div className="px-4 xl:container xl:mx-auto">
			{/* BREADCRUMBS */}
			<div className="text-xs flex gap-2 text-c1c py-4">
				<p>Blogs</p>
				<p>/</p>
				<p className="text-c1a">Fruit and vegetables</p>
			</div>

			{/* HEADING */}
			<div className="flex flex-col sm:flex-row gap-3 items-center justify-between">
				<h2 className="font-poppins font-semibold text-32">
					Fruit and vegetables
				</h2>

				<div className="flex gap-6">
					<Link to="/products/grid" className="flex gap-1">
						<img src={gridIcon} alt="grid-Icon" />
						<p className="text-xs">Grid view</p>
					</Link>
					<Link to="/products/list" className="flex gap-1">
						<img src={listIcon} alt="list-Icon" />
						<p className="text-xs text-c1c">List view</p>
					</Link>
					<div className="flex gap-1">
						<p className="bg-c2e rounded-xl px-2 font-poppins font-semibold text-xs text-c2a">
							117
						</p>
						<p className="text-xs text-c1c">Products</p>
					</div>
				</div>
			</div>

			{/* TOP SELECTED BLOGS */}
			<div className="py-12 flex flex-wrap gap-8 justify-center">
				{topBlogs.map((blog) => {
					return <TopSingleBlog blog={blog} key={blog._id} />;
				})}
			</div>

			{/* BLOGS LIST */}
			<div className="py-12 flex flex-col-reverse items-center sm:flex-row sm:items-start gap-8">
				<div className="flex flex-col gap-12">
					<div>
						<h2 className="font-poppins font-semibold text-lg pb-4">
							Archives
						</h2>
						<div className="flex flex-col gap-3">
							<Link
								to="/page/March 2020 Blogs"
								className="text-sm text-c2a underline"
							>
								March 2020
							</Link>
							<Link
								to="/page/February 2020 Blogs"
								className="text-sm text-c2a underline"
							>
								February 2020
							</Link>
							<Link
								to="/page/January 2020 Blogs"
								className="text-sm text-c2a underline"
							>
								January 2020
							</Link>
							<Link
								to="/page/November 2019 Blogs"
								className="text-sm text-c2a underline"
							>
								November 2019
							</Link>
							<Link
								to="/page/December 2019 Blogs"
								className="text-sm text-c2a underline"
							>
								December 2019
							</Link>
						</div>
					</div>

					<div>
						<h2 className="font-poppins font-semibold text-lg pb-4">
							Category
						</h2>
						<div className="flex flex-col gap-3">
							<Link
								to="/page/Food"
								className="text-sm text-c1c underline"
							>
								Food
							</Link>
							<Link
								to="/page/Chefs specialities"
								className="text-sm text-c1c underline"
							>
								Chefs specialities
							</Link>
							<Link
								to="/page/Vegetable"
								className="text-sm text-c1c underline"
							>
								Vegetable
							</Link>
							<Link
								to="/page/Meat"
								className="text-sm text-c1c underline"
							>
								Meat
							</Link>
							<Link
								to="/page/Recommendations"
								className="text-sm text-c1c underline"
							>
								Recommendations
							</Link>
						</div>
					</div>

					<div className="w-260">
						<h2 className="font-poppins font-semibold text-lg pb-3">
							Join our list
						</h2>
						<p className="text-sm text-c1c pb-6">
							Signup to be the first to hear about exclusive
							deals, special offers, recepies from our masters and
							others.
						</p>

						<div className="bg-c1h border border-c1d rounded-xl flex justify-between px-4">
							<input
								type="text"
								placeholder="Your email address"
								className="text-sm text-c1c bg-c1h rounded-xl outline-none py-2 w-36"
							/>
							<button className="px-3 py-1 font-poppins font-bold text-15">
								Subscribe
							</button>
						</div>
					</div>
				</div>

				{/* Right part */}
				<div className="flex gap-8 flex-wrap justify-center">
					{allBlogs.map((blog) => {
						return (
							<div key={blog._id}>
								<div className="bg-c1f h-180 w-269 rounded-xl mb-6">
									<Link to={`/blog/details/${blog._id}`}>
										<img
											src={blog.photo}
											alt="vegetables"
											className="w-full h-full rounded-xl"
										/>
									</Link>
								</div>
								<div>
									<p className="bg-c2e px-2 rounded-xl text-c2a text-xs font-poppins font-semibold mb-2 w-fit">
										{blog.category}
									</p>
									<Link to={`/blog/details/${blog._id}`}>
										<h2 className="font-poppins font-semibold text-lg pb-4 w-56">
											{blog.title}
										</h2>
									</Link>
									<div className="text-xs flex gap-4">
										<p>{blog.authorName}</p>
										<p>
											{blog.createdAt
												?.slice(
													0,
													blog.createdAt?.indexOf("T")
												)
												.split("-")
												.reverse()
												.join(".")}
										</p>
									</div>
								</div>
							</div>
						);
					})}
					{allBlogs.map((blog) => {
						return (
							<div key={blog._id}>
								<div className="bg-c1f h-180 w-269 rounded-xl mb-6">
									<Link to={`/blog/details/${blog._id}`}>
										<img
											src={blog.photo}
											alt="vegetables"
											className="w-full h-full rounded-xl"
										/>
									</Link>
								</div>
								<div>
									<p className="bg-c2e px-2 rounded-xl text-c2a text-xs font-poppins font-semibold mb-2 w-fit">
										{blog.category}
									</p>
									<Link to={`/blog/details/${blog._id}`}>
										<h2 className="font-poppins font-semibold text-lg pb-4 w-56">
											{blog.title}
										</h2>
									</Link>
									<div className="text-xs flex gap-4">
										<p>{blog.authorName}</p>
										<p>
											{blog.createdAt
												?.slice(
													0,
													blog.createdAt?.indexOf("T")
												)
												.split("-")
												.reverse()
												.join(".")}
										</p>
									</div>
								</div>
							</div>
						);
					})}
				</div>
			</div>

			{/* NAVIGATIONS */}
			<div className="py-4 flex flex-wrap justify-between items-center">
				<div className="flex gap-2 text-xs">
					<p className="text-c1c">Page:</p>
					<p className="text-c2a">1</p>
					<p>2</p>
					<p>3</p>
					<p>4</p>
				</div>

				<div>
					<Button
						label="Next page"
						variant="secondary"
						iconName="rightArrowIconWhite1"
						alignment="right"
					/>
				</div>

				<div className="flex gap-1 items-center">
					<p className="text-c2a text-xs font-poppins font-semibold bg-c2e px-2 h-fit rounded-xl">
						198
					</p>
					<p className="text-xs text-c1c">articles</p>
				</div>
			</div>
		</div>
	);
};

export default Blogs;
