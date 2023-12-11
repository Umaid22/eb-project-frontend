import React from "react";

// FIRST OF ALL MAKE ALL THE COMPONENTS AND THEN ITS EASY TO WORK
// optionals should have a default value in props
// hover style will be pass in classes
// different UI libraries also provide these types of components, individual components will be use for creating the whole website
// can also pass icon as a object which contains alignment & icon-name & size and other things

type inputType = "text" | "number" | "email" | "password" | "date";
type Variant = "simple" | "icon" | "short";
type IconOptions = "mailIcon" | "topBottomIcon";
// type Size = "small" | "medium" | "large";

interface TextInputProps {
	variant: Variant;
	icon_left?: IconOptions;
	icon_right?: IconOptions;
	type: inputType;
	label?: string;
	value: string;
	name: string;
	onBlur: React.FocusEventHandler<HTMLInputElement>;
	onChange: React.ChangeEventHandler<HTMLInputElement>;
	placeholder: string;
	error?: boolean;
	errorMessage?: string;
	fieldWidth?: number;
	// size?: Size;
	// classes?: string;
	// margin?: string;
}

const generateVarient = (variant: Variant): string => {
	switch (variant) {
		case "simple":
			return "w-72";
		case "icon":
			return "w-260";
		case "short":
			return "w-24";
		default:
			return "w-72";
	}
};

// const generateSize = (size: Size): string => {
// 	switch (size) {
// 		case "small":
// 			return "p-1";
// 		case "medium":
// 			return "p-2";
// 		default:
// 			return "p-4";
// 	}
// };

function TextInput(props: TextInputProps) {
	const {
		label,
		type,
		value,
		name,
		onBlur,
		onChange,
		placeholder,
		error,
		errorMessage,
		variant,
		icon_left,
		icon_right,
		fieldWidth = 80,
		// size = "medium",
		// classes = "",
		// margin,
	} = props;

	return (
		<div className="flex flex-col">
			{label && (
				<label className="font-poppins font-semibold text-xs">
					{label}
				</label>
			)}

			<div
				className={`bg-c1h border border-c1d rounded-xl max-w-${fieldWidth} px-3 py-1 flex items-center`}
			>
				{icon_left && (
					<div
						className={`bg-${icon_left} w-4 h-4 bg-no-repeat mr-3`}
					></div>
				)}
				<input
					type={type}
					value={value}
					name={name}
					onBlur={onBlur}
					onChange={onChange}
					placeholder={placeholder}
					className={`outline-none bg-c1h text-sm text-c1c rounded-xl py-2 px-1 ${generateVarient(
						variant
					)}`}
					// className={`bg-green-100 p-${margin} ${classes}`}
				/>

				{icon_right && (
					<div
						className={`bg-${icon_right} w-4 h-4 bg-no-repeat ml-3`}
					></div>
				)}
			</div>

			{error && <p className="text-xs text-red-600">{errorMessage}</p>}
		</div>
	);
}

export default TextInput;
