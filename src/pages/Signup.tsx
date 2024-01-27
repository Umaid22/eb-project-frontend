import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import { AxiosError, AxiosResponse } from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser } from "../store/slices/userSlice";

import TextInput from "../components/TextInput";
import { signupSchema } from "../schemas/signupSchema";
import { signupAPI } from "../api/internal";
import Loader from "../components/Loader";

const Signup = () => {
	const [errorMessage, setErrorMessage] = useState("");
	const [showLoader, setShowLoader] = useState(false);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const { values, touched, handleBlur, handleChange, errors } = useFormik({
		initialValues: {
			name: "",
			email: "",
			password: "",
			confirmPassword: "",
		},
		validationSchema: signupSchema,
		onSubmit: (values) => console.log(values),
	});

	const signupHandler = async () => {
		setShowLoader(true);
		setErrorMessage("");

		const data = {
			username: values.name,
			email: values.email,
			password: values.password,
		};
		try {
			const response = await signupAPI(data);

			if (response.status === 201) {
				const res = response as AxiosResponse;
				// console.log(res.data);
				// 1- set global state
				const user = {
					_id: res.data.user._id,
					name: res.data.user.username,
					email: res.data.user.email,
					auth: res.data.auth,
				};
				dispatch(setUser(user));
				// 2- redirect to home
				navigate("/");
			}
			if (response.status !== 201) {
				const err = response as AxiosError;

				if (err.code === "ERR_NETWORK") {
					throw Error("Custom error");
				}

				const errResponse = err.response as AxiosResponse;
				setErrorMessage(errResponse?.data?.message);

				console.log("else of signup", err);
				// setTimeout(() => {
				// 	setErrorMessage("");
				// }, 10000);
			}
			setShowLoader(false);
		} catch (error) {
			// console.log("catch of signup", error);
			setErrorMessage("Connection refused from Backend.");
			setShowLoader(false);
		}
	};

	useEffect(() => {
		document.title = "SignUp Page";
	});

	return (
		<div className="flex flex-col items-center gap-6 mb-14 mt-8">
			<h2 className="font-poppins font-bold text-c2b text-32 underline">
				Sign up
			</h2>
			<TextInput
				variant="simple"
				type="text"
				label="Name :"
				name="name"
				value={values.name}
				onBlur={handleBlur}
				onChange={handleChange}
				placeholder="Name"
				error={errors.name && touched.name ? true : false}
				errorMessage={errors.name}
			/>
			<TextInput
				variant="simple"
				type="text"
				label="Email :"
				name="email"
				value={values.email}
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
				name="password"
				value={values.password}
				onBlur={handleBlur}
				onChange={handleChange}
				placeholder="Password"
				error={errors.password && touched.password ? true : false}
				errorMessage={errors.password}
			/>

			<TextInput
				variant="simple"
				type="password"
				label="Confirm Password :"
				name="confirmPassword"
				value={values.confirmPassword}
				onBlur={handleBlur}
				onChange={handleChange}
				placeholder="Confirm password"
				error={
					errors.confirmPassword && touched.confirmPassword
						? true
						: false
				}
				errorMessage={errors.confirmPassword}
			/>

			<button
				className="border border-c2b rounded-md bg-c2a text-white font-poppins font-bold py-2 px-5 disabled:bg-c2c shadow-xl shadow-c2a"
				disabled={
					!values.name ||
					!values.email ||
					!values.password ||
					!values.confirmPassword ||
					errors.name ||
					errors.email ||
					errors.password ||
					errors.confirmPassword
						? true
						: false
				}
				onClick={signupHandler}
			>
				{showLoader ? <Loader color="white" /> : "Signup"}
			</button>

			{errorMessage && (
				<p className="bg-red-500 text-sm rounded-md text-white font-semibold px-4 py-2">
					{errorMessage}
				</p>
			)}

			<div>
				<p className="text-sm">
					Already have an account ?{" "}
					<button
						onClick={() => navigate("/login")}
						className="text-base text-c2b font-bold underline"
					>
						Login
					</button>
				</p>
			</div>
		</div>
	);
};

export default Signup;
