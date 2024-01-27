import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import { AxiosResponse, AxiosError } from "axios";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import TextInput from "../components/TextInput";
import { loginSchema } from "../schemas/loginSchema";
import { loginAPI } from "../api/internal";
import { setUser } from "../store/slices/userSlice";
import Loader from "../components/Loader";

function Login() {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [errorMessage, setErrorMessage] = useState<string>("");
	const [showLoader, setShowLoader] = useState(false);

	const { values, touched, handleBlur, handleChange, errors } = useFormik({
		initialValues: {
			email: "",
			password: "",
		},
		validationSchema: loginSchema,
		onSubmit: ({ email, password }) => {
			console.log("from formil submit :", email, password);
		},
	});

	const loginHandler = async () => {
		setShowLoader(true);
		setErrorMessage("");

		const data = {
			email: values.email,
			password: values.password,
		};

		try {
			const response = await loginAPI(data);
			// console.log("inside login-page ::", response);

			if (response.status === 200) {
				const data = response as AxiosResponse;
				// console.log("status is 200::", data?.data.user.email);
				const user = {
					_id: data.data.user._id,
					name: data.data.user.username,
					email: data.data.user.email,
					auth: data.data.auth,
				};
				// 1- setUser in store
				dispatch(setUser(user));
				// 2- redirect to home page
				navigate("/");
			} else {
				const error = response as AxiosError;

				// if(){}

				if (
					error.code === "ERR_NETWORK" ||
					error.code === "ERR_BAD_REQUEST"
				) {
					const data = error.response as AxiosResponse;
					console.log("status is not 200::", data.data.message);
					setErrorMessage(data?.data?.message);
					// setTimeout(() => {
					// 	setErrorMessage("");
					// }, 10000);
				}
			}
			setShowLoader(false);
		} catch (error) {
			setErrorMessage("Connection refused from Backend.");
			setShowLoader(false);
		}
	};

	useEffect(() => {
		document.title = "Login Page";
	});

	return (
		<div className="flex flex-col items-center gap-6 mb-14 mt-8">
			<h2 className="font-poppins font-bold text-c2b text-32 underline">
				LogIn
			</h2>

			<TextInput
				variant="simple"
				type="email"
				label="Email :"
				value={values.email}
				name="email"
				onBlur={handleBlur}
				onChange={handleChange}
				placeholder="Email"
				error={errors.email && touched.email ? true : false}
				errorMessage={errors.email}
			/>

			<TextInput
				variant="simple"
				type="password"
				label="Password :"
				value={values.password}
				name="password"
				onBlur={handleBlur}
				onChange={handleChange}
				placeholder="Password"
				error={errors.password && touched.password ? true : false}
				errorMessage={errors.password}
			/>

			<button
				onClick={loginHandler}
				className="border border-c2b rounded-md bg-c2a text-white font-poppins font-bold py-2 px-5 disabled:bg-c2c shadow-xl shadow-c2a"
				disabled={
					errors.email ||
					errors.password ||
					!values.email ||
					!values.password
						? true
						: false
				}
			>
				{showLoader ? <Loader color="white" /> : "Login"}
			</button>
			{errorMessage && (
				<div className="bg-red-500 text-sm rounded-md text-white font-semibold px-4 py-2">
					{errorMessage}
				</div>
			)}
			<div>
				<p className="text-sm">
					Don't have account ?{" "}
					<button
						onClick={() => navigate("/signup")}
						className="text-base text-c2b font-bold underline"
					>
						Register
					</button>
				</p>
			</div>
		</div>
	);
}

export default Login;
