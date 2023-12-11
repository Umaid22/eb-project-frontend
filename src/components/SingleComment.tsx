import React from "react";
import { CommentType } from "../types";

const SingleComment = ({ data }: { data: CommentType }) => {
	return (
		<div className="border border-c1d rounded-xl p-4">
			<div className="mb-6 flex gap-3 items-center">
				<div className="bg-c1d w-10 h-10 rounded-full"></div>
				<div>
					<div className="flex gap-2">
						<p className="font-poppins font-semibold text-xs">
							{data.authorName}
						</p>
						{data.authorID === data.blogAuthor && (
							<p className="font-poppins font-semibold text-xs text-c2a bg-c2e px-2 rounded-xl">
								Blog Author
							</p>
						)}
						{data.authorID !== data.blogAuthor && (
							<p className="font-poppins font-semibold text-xs bg-c1f px-2 rounded-xl">
								Customer
							</p>
						)}
					</div>
					<p className="text-xs text-c1d">
						{data.createdAt
							.slice(0, data.createdAt.indexOf("T"))
							.split("-")
							.reverse()
							.join(".")}
					</p>
				</div>
			</div>
			<p className="text-sm">{data.content}</p>
		</div>
	);
};

export default SingleComment;
