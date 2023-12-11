import React from "react";
import { Navigate } from "react-router-dom";

type UserCheckedProp = {
	children: JSX.Element;
	isAuth: boolean;
};

const UserChecked = (props: UserCheckedProp) => {
	const { isAuth, children } = props;

	if (isAuth) {
		document.title = "Freshnesecom - Home";
		return <Navigate to="/" />;
	} else {
		return children;
	}
};

export default UserChecked;
