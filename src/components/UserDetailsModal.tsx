import React, { Dispatch, SetStateAction, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { resetUser } from "../store/slices/userSlice";

import Button from "./Button";
import { ReduxStateType } from "../types";
import { logoutAPI } from "../api/internal";
import { AxiosResponse } from "axios";
import Loader from "./Loader";

interface PropTypes {
	setShowUserModal: Dispatch<SetStateAction<boolean>>;
}

const UserDetailsModal = ({ setShowUserModal }: PropTypes) => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const isAuth = useSelector((state: ReduxStateType) => state.user.auth);
	const userName = useSelector((state: ReduxStateType) => state.user.name);

	const [logoutProcess, setLogoutProcess] = useState(false);
	const [errorMessage, setErrorMessage] = useState("");

	const logoutHandler = async () => {
		setLogoutProcess(true);

		const response = await logoutAPI();
		if (response.status === 200) {
			dispatch(resetUser());
			navigate("/login");
		} else {
			const err = response as AxiosResponse;
			// const errData = err.response as AxiosResponse;
			// const message = errData.data.message;
			// setErrorMessage(err.message);
			setErrorMessage(err.data?.message);
			setTimeout(() => {
				setErrorMessage("");
			}, 6000);
		}
		setLogoutProcess(false);
	};

	return (
		<div className="border border-c1d rounded-md bg-c1h px-6 py-10 flex flex-col gap-6 items-center justify-between shadow-lg shadow-stone-400 w-36">
			{userName && (
				<div>
					<p>LoggedIn as: </p>
					<p className="font-poppins font-semibold">{userName}</p>
				</div>
			)}

			<div className="flex flex-col gap-6 items-center">
				{!isAuth && (
					<>
						<Link
							to="login"
							onClick={() => setShowUserModal(false)}
						>
							<Button
								label="Login"
								variant="secondary"
								size="regular"
							/>
						</Link>
						<Link
							to="signup"
							onClick={() => setShowUserModal(false)}
						>
							<Button
								label="SignUp"
								variant="primary"
								size="regular"
							/>
						</Link>
					</>
				)}

				{isAuth && (
					<>
						{!logoutProcess && (
							<div onClick={logoutHandler}>
								<Button label="Logout" variant="secondary" />
							</div>
						)}
						{logoutProcess && (
							<div className="border-2 border-c2b rounded-xl bg-c2a text-white px-4 py-2">
								<Loader color="white" />
							</div>
						)}
					</>
				)}
				{errorMessage && (
					<p className="bg-red-500 text-xs rounded-md text-white p-1">
						{errorMessage}
					</p>
				)}
			</div>
		</div>
	);
};

export default UserDetailsModal;
