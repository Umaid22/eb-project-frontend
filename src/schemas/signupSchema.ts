import * as yup from "yup";

const passwordPattern: RegExp =
	/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,25}$/;
const errorMessage: string = "use lowercase, uppercase and digits";

export const signupSchema = yup.object().shape({
	name: yup.string().min(5).max(30).required("Name is required"),
	email: yup
		.string()
		.email("enter a valid email")
		.required("Email is required"),

	password: yup
		.string()
		.min(8)
		.max(25)
		.matches(passwordPattern, { message: errorMessage })
		.required("Password is required"),

	confirmPassword: yup
		.string()
		.oneOf([yup.ref("password")], "passwords must match")
		.required("confirm password is required"),
});
