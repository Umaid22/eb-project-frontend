import React from "react";

import rightArrowIconGreen1 from "../assets/icons/arrow-right-green.svg";
import rightArrowIconWhite1 from "../assets/icons/arrow-right-white.svg";
import rightArrowIconBlack1 from "../assets/icons/arrow-right-black1.svg";
import leftArrowIconGreen from "../assets/icons/arrow-left-green.png";
import leftArrowIconWhite from "../assets/icons/arrow-right-white1.svg";
import leftArrowIconBlack from "../assets/icons/arrow-left-black.svg";
import iconHeartBlack from "../assets/icons/heart-black.svg";

type Variant = "primary" | "secondary" | "tertiary" | "link";
type Size = "small" | "regular" | "large";
type IconAlignment = "left" | "right";
type IconName =
	| "rightArrowIconGreen1"
	| "rightArrowIconWhite1"
	| "rightArrowIconBlack1"
	| "leftArrowIconGreen"
	| "leftArrowIconWhite"
	| "leftArrowIconBlack"
	| "iconHeartBlack";
const icons = {
	rightArrowIconGreen1,
	rightArrowIconWhite1,
	rightArrowIconBlack1,
	leftArrowIconGreen,
	leftArrowIconWhite,
	leftArrowIconBlack,
	iconHeartBlack,
};

type ButtonProps = {
	label: string;
	variant: Variant;
	size?: Size;
	iconName?: IconName;
	alignment?: IconAlignment;
	className?: string;
};

const baseClasses = "flex items-center";

const variantClasses: Record<Variant, string> = {
	primary: "border-2 border-c2c rounded-xl text-c1a",
	secondary: "border-2 border-c2b rounded-xl bg-c2a text-white",
	tertiary: "bg-c1f rounded-xl",
	link: "bg-white rounded-xl",
};

const sizeClasses: Record<Size, string> = {
	small: "px-3 py-1",
	regular: "px-4 py-2",
	large: "px-12 py-4",
};

const Button: React.FC<ButtonProps> = ({
	label,
	variant,
	size = "regular",
	iconName,
	alignment,
	// className,
}): JSX.Element => {
	return (
		<button
			className={`${variantClasses[variant]} ${sizeClasses[size]} ${baseClasses}`}
		>
			{alignment === "left" && (
				<div>
					<img src={icons[iconName!]} alt="icon" className="mr-2" />
				</div>
			)}

			<span className="font-poppins font-bold text-15">{label}</span>

			{alignment === "right" && (
				<div>
					<img src={icons[iconName!]} alt="icon" className="ml-2" />
				</div>
			)}
		</button>
	);
};

export default Button;
