// import React from "react";
import { Navigate } from "react-router-dom";

interface ProtectedProps {
	isAuth: boolean;
	children: JSX.Element;
}

const Protected = ({ isAuth, children }: ProtectedProps) => {
	if (isAuth) {
		return children;
	} else {
		return <Navigate to="/login" />;
	}
};

export default Protected;
