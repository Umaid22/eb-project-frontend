import React from "react";

interface ErrorMessageProps {
	message: string;
}

const ErrorMessage = ({ message }: ErrorMessageProps) => {
	return (
		<div className="bg-red-500 px-6 py-2 rounded-md">
			<p className="text-white font-bold">{message}</p>
		</div>
	);
};

export default ErrorMessage;
