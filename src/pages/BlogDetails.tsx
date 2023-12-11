import React, { useCallback, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import backIcon from "../assets/icons/goback-black-icon.svg";
import facebookIcon from "../assets/icons/facebook.svg";
import pinterestIcon from "../assets/icons/pinterest.svg";
import twitterIcon from "../assets/icons/twitter.svg";
import linkedinIcon from "../assets/icons/linkedin.svg";
import arrowRightGreen from "../assets/icons/arrow-right-green.svg";
import TextInput from "../components/TextInput";
import Button from "../components/Button";
import { BlogsType, CommentType, ReduxStateType } from "../types";
import { getCommentsAPI, postCommentAPI, singleBlogAPI } from "../api/internal";
import { AxiosError, AxiosResponse } from "axios";
import { useSelector } from "react-redux";
import { useFormik } from "formik";
import SingleComment from "../components/SingleComment";

interface SingleBlogType extends BlogsType {
	photoPath: string;
}

const BlogDetails = () => {
	const { blogid } = useParams();
	const { values, handleBlur, handleChange } = useFormik({
		initialValues: {
			comment: "",
		},
		onSubmit: () => console.log("form submit occur"),
	});

	const isAuth = useSelector((state: ReduxStateType) => state.user.auth);
	const user = useSelector((state: ReduxStateType) => state.user);
	const allBlogs = useSelector(
		(state: ReduxStateType) => state.blogs.allBlogs
	);

	const [errorMessage, setErrorMessage] = useState("");
	const [successMessage, setSuccessMessage] = useState("");
	const [blog, setBlog] = useState<SingleBlogType>({
		_id: "",
		title: "",
		content: "",
		authorID: "",
		authorEmail: "",
		authorName: "",
		photo: "",
		tags: "",
		createdAt: "",
		category: "",
		featured: "",
		photoPath: "",
	});
	const [commentsArray, setCommentsArray] = useState<CommentType[]>([]);

	const postCommentHandler = async () => {
		if (!isAuth) {
			setErrorMessage("Please Login first to post a comment.");
			setTimeout(() => {
				setErrorMessage("");
			}, 6000);
			return;
		}
		if (values.comment.length < 5) {
			setErrorMessage("Please write proper comment.");
			setTimeout(() => {
				setErrorMessage("");
			}, 6000);
			return;
		}
		const data = {
			content: values.comment,
			blogreference: blog._id,
			author: user._id,
		};
		const response = await postCommentAPI(data);
		if (response.status === 201) {
			// const res = response as AxiosResponse;
			getCommentsHandler();

			setSuccessMessage("Comment posted successfully");
			setTimeout(() => {
				setSuccessMessage("");
			}, 12000);
		} else {
			const err = response as AxiosError;
			setErrorMessage(err.message);
			setTimeout(() => {
				setErrorMessage("");
			}, 4000);
		}
		setTimeout(() => {
			setErrorMessage("");
		}, 12000);
	};

	const getCommentsHandler = useCallback(async () => {
		const response = await getCommentsAPI(blogid!);
		if (response.status === 200) {
			const res = response as AxiosResponse;
			setCommentsArray(res.data.data);
		} else {
			const err = response as AxiosError;
			setErrorMessage(err.message);
		}
	}, [blogid]);

	useEffect(() => {
		(async function () {
			const response = await singleBlogAPI(blogid!);
			if (response.status === 200) {
				const res = response as AxiosResponse;
				setBlog(res.data.blog);
				getCommentsHandler();
			} else {
				const err = response as AxiosError;
				console.log("error message ::", err.message);
			}
		})();

		document.title = "Blog Details";
	}, [blogid, getCommentsHandler]);

	return (
		<div className="px-4 xl:container xl:mx-auto">
			{/* BREADCRUMBS */}
			<div className="text-xs flex gap-2 text-c1c py-4">
				<p>Blogs</p>
				<p>/</p>
				<p className="text-c1a">{blog.category}</p>
			</div>

			{/* BLOG IMAGE + HEADING */}
			<div className="py-12">
				<div className="bg-c1f h-64 rounded-t-xl">
					<img
						src={blog.photoPath}
						alt="blog"
						className="w-full h-full object-cover object-center rounded-t-xl"
					/>
				</div>
				<div className="bg-gradient-to-b from-c2d to-black flex flex-col-reverse md:flex-row justify-center gap-2 sm:gap-8 items-center md:items-end h-56 pb-8 rounded-b-xl">
					<div className="flex gap-8">
						<div className="flex flex-col gap-1 sm:gap-3">
							<p className="font-poppins font-semibold text-xs text-c1c">
								Date:
							</p>
							<p className="font-poppins font-semibold text-xs text-c1c">
								Category:
							</p>
							<p className="font-poppins font-semibold text-xs text-c1c">
								Author:
							</p>
						</div>
						<div className="flex flex-col gap-1 sm:gap-3">
							<p className="font-poppins font-semibold text-xs text-white">
								{blog.createdAt
									.slice(0, blog.createdAt.indexOf("T"))
									.split("-")
									.reverse()
									.join(".")}
							</p>
							<p className="font-poppins font-semibold text-xs text-white underline">
								{blog.category}
							</p>
							<p className="font-poppins font-semibold text-xs text-white underline">
								{blog.authorName}
							</p>
						</div>
					</div>
					<h1 className="font-poppins font-semibold text-white text-xl sm:text-26 md:text-32 leading-5 sm:leading-10 w-72 sm:w-520">
						{blog.title}
					</h1>
				</div>
			</div>

			{/* BLOG CONTENT & COMMENT */}
			<div className="py-6 md:py-12 flex justify-center flex-col md:flex-row items-center md:items-start">
				<div className="w-40">
					<h2 className="font-poppins font-semibold text-lg mb-4">
						Tags
					</h2>
					<div className="flex flex-wrap gap-2 mb-12">
						{blog.tags.split(",").map((e, i) => {
							return (
								<p
									className="bg-c2e px-2 py-1 rounded-lg text-c2a text-xs font-poppins font-semibold cursor-pointer"
									key={i}
								>
									{e}
								</p>
							);
						})}
					</div>

					<div className="flex gap-2 items-center mb-4">
						<img src={backIcon} alt="arrow" />
						<Link
							to="/blogs"
							className="font-poppins font-bold text-15"
						>
							Back to Blogs
						</Link>
					</div>
				</div>

				{/* RIGHT CONTENT */}
				<div className="w-320 sm:w-569">
					<div className="pb-12">
						<p className="text-17 mb-12">{blog.content}</p>

						<div className="mb-12">
							<h3 className="font-poppins font-semibold text-lg mb-3">
								Morning Ritual // 9:00 AM
							</h3>
							<p className="text-17">
								Want that extra morning energy without the
								caffeine jitters? Switch out your morning mug of
								coffee for a warm, energizing cup of{" "}
								<span className="underline">earl grey</span>.
								Serve as is or stir in some milk and honey for
								extra coziness. If you want to spice things up,
								try chai tea instead! The combination of{" "}
								<span className="underline">cinnamon</span>,{" "}
								<span className="underline">cardamom</span>, and{" "}
								<span className="underline">ginger</span>
								smells amazing and gives you that nice little
								flavor kick to start your day off right.
							</p>
						</div>

						<div className="mb-12">
							<h3 className="font-poppins font-semibold text-lg mb-3">
								Mid-day Boost // 2:00 PM
							</h3>
							<p className="text-17 mb-4">
								If you’re feeling a little sluggish post-lunch,
								beat the afternoon slump with some lemon ginger
								green tea.
								<span className="underline">Green tea</span> can
								be a great alternative to coffee in the
								afternoon when you want that little boost of
								energy. An added benefit: lemon and ginger work
								together to aid digestion which is especially
								helpful after lunch.{" "}
							</p>
							<p className="text-17 mb-8">
								If you’re not into hot drinks, opt-in for a
								fruity iced green tea instead. Steep some
								honeydew or peach green tea in hot water for a
								few minutes and then pour over ice until it’s
								nice and cool. Enjoy with a slice of lemon, and
								you’ll feel refreshed and ready to tackle any
								task.{" "}
							</p>
						</div>

						<div className="mb-12">
							<h3 className="font-poppins font-semibold text-lg mb-3">
								Evening Calm // 8:00 PM
							</h3>
							<p className="text-17">
								Slip on some fuzzy socks, light your favorite
								candles, and fire up the kettle—it’s time to
								wind down after a long day. Grab yourself a
								soothing cup of lavender{" "}
								<span className="underline">chamomile</span> tea
								and indulge in some well-deserved self-love.
							</p>
						</div>

						<div className="flex gap-4">
							<p className="font-poppins font-semibold text-lg">
								Share
							</p>
							<div className="flex flex-wrap gap-4">
								<div className="flex items-center gap-2 bg-c1f rounded-xl px-3 py-1">
									<img
										src={facebookIcon}
										alt="facebook-Icon"
									/>
									<p className="font-poppins font-bold text-15">
										Facebook
									</p>
								</div>

								<div className="flex items-center gap-2 bg-c1f rounded-xl px-3 py-1">
									<img
										src={pinterestIcon}
										alt="pinterest Icon"
									/>
									<p className="font-poppins font-bold text-15">
										Pinterest
									</p>
								</div>

								<div className="flex items-center gap-2 bg-c1f rounded-xl px-3 py-1">
									<img src={twitterIcon} alt="twitter-Icon" />

									<p className="font-poppins font-bold text-15">
										Twitter
									</p>
								</div>

								<div className="flex items-center gap-2 bg-c1f rounded-xl px-3 py-1">
									<img
										src={linkedinIcon}
										alt="linkedin-Icon"
									/>

									<p className="font-poppins font-bold text-15">
										LinkedIn
									</p>
								</div>
							</div>
						</div>
					</div>

					{/* Comment section */}
					<div className="py-12">
						{/* ADD COMMENTS */}
						<div className="mb-12 flex flex-col gap-8 w-320 sm:w-569">
							<div>
								<div className="mb-4">
									<p className="mb-3 font-poppins font-semibold text-22">
										Leave a reply
									</p>
									<p className="text-17">
										Allready have an account?{" "}
										<Link
											to={"/login"}
											className="underline"
										>
											Sign in
										</Link>{" "}
										to leave a reply.
									</p>
								</div>

								<div className="flex flex-col lg:flex-row gap-8">
									<TextInput
										type="text"
										variant="simple"
										label="Name"
										placeholder="Name"
										fieldWidth={260}
										name=""
										value=""
										onBlur={() => console.log("")}
										onChange={() => console.log("")}
									/>
									<TextInput
										type="text"
										variant="simple"
										label="Email address"
										placeholder="Email address"
										fieldWidth={260}
										name=""
										value=""
										onBlur={() => console.log("")}
										onChange={() => console.log("")}
									/>
								</div>
							</div>

							<div className="bg-c1h border border-c1d rounded-xl w-fit px-4 py-2 flex items-center gap-3">
								<input
									type="checkbox"
									// value={value}
									// name={name}
									// onBlur={onBlur}
									// onChange={onChange}
									className="outline-none bg-c1h  rounded-xl"
								/>
								<p className="text-sm">
									Save my name and email in this browser for a
									next time comment.
								</p>
							</div>

							<div>
								<p className="font-poppins font-semibold text-xs">
									Comment
								</p>
								<textarea
									name="comment"
									value={values.comment}
									onChange={handleChange}
									onBlur={handleBlur}
									cols={40}
									rows={6}
									placeholder="Space for your commnets"
									className="text-sm text-c1c border border-c1d rounded-xl p-3 bg-c1h overflow-auto outline-none mb-8"
								></textarea>

								<div onClick={postCommentHandler}>
									<Button
										label="Send a comment"
										variant="secondary"
									/>

									{errorMessage && (
										<div className="bg-red-500 text-sm rounded-md text-white font-semibold px-4 py-2 mt-3">
											{errorMessage}
										</div>
									)}
									{successMessage && (
										<div className="bg-green-500 text-sm rounded-md text-white font-semibold px-4 py-2 mt-3">
											{successMessage}
										</div>
									)}
								</div>
							</div>
						</div>

						{/* Show COMMENTS */}
						<div>
							<p className="font-poppins font-semibold text-22 mb-4">
								Comments
							</p>
							<div className="flex flex-col gap-6">
								{/* SINGLE COMMENT */}
								{commentsArray.map((comment) => {
									return (
										<SingleComment
											data={comment}
											key={comment.id}
										/>
									);
								})}

								{/* SINGLE COMMENT */}
								{/* <div className="ms-24">
									<div className="border border-c1d rounded-xl p-4">
										<div className="mb-6 flex gap-3 items-center">
											<div className="bg-c1h w-10 h-10 rounded-full"></div>
											<div>
												<div className="flex gap-2">
													<p className="font-poppins font-semibold text-xs">
														User
													</p>
													<p className="font-poppins font-semibold text-xs bg-c1f px-2 rounded-xl">
														Customer
													</p>
												</div>
												<p className="text-xs text-c1d">
													22. 6. 2022
												</p>
											</div>
										</div>
										<p className="text-sm">
											Don’t worry about that, we are happy
											to read a new stories. The time we
											had to wait was crazy, but the
											results are awesome! You did an epic
											job. Now I just need to a buy one.
										</p>
									</div>
								</div> */}
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Related Topics */}
			<div className="py-12">
				{/* Heading */}
				<div className="flex justify-between px-4">
					<h2 className="font-poppins font-semibold text-lg">
						Related topics
					</h2>

					<button className="flex items-center gap-2">
						<p className="font-poppins font-bold">More</p>
						<img src={arrowRightGreen} alt="arrow" />
					</button>
				</div>

				{/* Related blogs */}

				<div className="flex gap-8 my-8 overflow-x-auto">
					{allBlogs.map((blog) => {
						return (
							<div key={blog._id}>
								<div className="bg-c1f h-180 w-269 rounded-xl mb-6">
									<img
										src={blog.photo}
										alt="blog"
										className="w-full h-full rounded-xl object-cover"
									/>
								</div>
								<div>
									<p className="bg-c2e px-2 rounded-xl text-c2a text-xs font-poppins font-semibold mb-2 w-fit">
										{blog.category}
									</p>
									<h2 className="font-poppins font-semibold text-lg pb-4 w-56">
										{blog.title}
									</h2>
									<div className="text-xs flex gap-4">
										<p>{blog.authorName}</p>
										<p>
											{blog.createdAt
												.slice(
													0,
													blog.createdAt.indexOf("T")
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
		</div>
	);
};

export default BlogDetails;
