import React from "react";

interface LoaderProp {
	color?: string;
}
const Loader = ({ color = "c2a" }: LoaderProp) => {
	// ! react-loader-spinner ---> good npm package
	return (
		<div
			className={`border-t-4 border-r-4 border-${color} rounded-full w-5 h-5 animate-spin`}
		></div>
	);
};

export default Loader;
