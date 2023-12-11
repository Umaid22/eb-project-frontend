import * as yup from "yup";

const passwordPattern: RegExp =
	/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,25}$/;
const errMessage = "use lowercase, uppercase and digits";

export const loginSchema = yup.object().shape({
	email: yup
		.string()
		.email("Enter valid email")
		.required("Email is required."),
	password: yup
		.string()
		.min(7)
		.max(25)
		.matches(passwordPattern, { message: errMessage })
		.required("Password is required"),
});
