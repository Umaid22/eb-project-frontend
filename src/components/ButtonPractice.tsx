// import React, { useMemo } from "react";

type Variant = "primary" | "secondary" | "tertiary";
type Size = "small" | "regular" | "large";
type IconAlignment = "left" | "right";

type Icon = {
	svg: React.ElementType;
	alignment?: IconAlignment;
	className?: string;
};

type BaseButtonProps = {
	label: string;
	className?: string;
	variant?: Variant;
	size?: Size;
	icon?: Icon;
};

type SemanticButtonProps = BaseButtonProps &
	React.ComponentPropsWithoutRef<"button">;

type LinkButtonProps = BaseButtonProps & React.ComponentPropsWithoutRef<"a">;

// const baseClasses = "inline-flex items-center";

// const variantClasses: Record<Variant, string> = {
// 	primary: "bg-primary-black text-white rounded-lg",
// 	secondary: "bg-primary-blue text-white rounded-lg",
// 	tertiary: "bg-transparent border border-primary-black/25",
// };

// const sizeClasses: Record<Size, string> = {
// 	small: "px-[15px] py-[10px] text-sm leading-none space-x-2",
// 	regular: "px-10 py-4 heading-six space-x-3",
// 	large: "px-[50px] py-5 heading-six space-x-4",
// };

// const iconClasses: Record<Size, string> = {
// 	small: "w-4",
// 	regular: "w-5",
// 	large: "w-7",
// };

// const generateIcon = (
//     icon:Icon|undefined,
//     alignment:IconAlignment,
//     classes:string,
//     alignmentAdjustmentClasses:string
// )=>{
//     if(icon && (icon?.alignment ?? "left") === alignment){
//         return (
//                 <icon.svg className={`${classes} ${alignmentAdjustmentClasses}`}/>
//         );
//     }
// };

// const useClasses = (
//     variant:Variant,
//     size:Size,
//     className:string |undefined,
//     icon:Icon|undefined
// )=>{ useMemo(
//         ()=>({
//             root:`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className ?? ""}`,
//             icon:`${iconClasses[size]} ${icon?.className ?? ""}`
//         }),
//         [variant, size, className, icon?.className]
//     );
// }

//     const useIcons = (icon:Icon|undefined, classes:string)=>{ useMemo(
//         ()=>({
//             left:generateIcon(icon, "left", classes, "-ml-2"),  //-ml-* here to visually weight the icon appropriately
//             right:generateIcon(icon, "right", classes, "!-mr-2") //!-mr-* here to visually weight the icon appropriately
//         }),
//         [icon, classes]
//     );
//     }

//     function Semantic({
//         label,
//         variant="primary",
//         size="regular",
//         className,
//         icon,
//         ...intrinsicButtonProps
//     }:SemanticButtonProps):JSX.Element{
//         const classes = useClasses(variant, size, className, icon);
//         // const icons = useIcons(icon, classes.icon);
//         const icons = useIcons(icon, classes);

//         return (
//             <button className={`${className} ${...intrinsicButtonProps}`}>
//                 {icons.left}
//                 <span>{label}</span>
//                 {icons.right}
//             </button>
//         );
//     }

//     const Link = forwardRef<HTMLAnchorElement, LinkButtonProps>(
//         // (
//             {
//                 label,
//                 variant="primary",
//                 size="regular",
//                 className,
//                 icon,
//                 ...intrinsicAnchorProps
//             }:LinkButtonProps,
//             ref
//         ):JSX.Element=>{
//             const classes = useClasses(variant, size, className, icon);
//         const icons = useIcons(icon, classes.icon);

//         return (
//             <a
//             href={ref}
//             className={}
//             {...intrinsicAnchorProps}
//             rel="noreferrer"
//             >
//                 {icon.left}
//                 <span>{label}</span>
//                 {icon.right}
//             </a>
//         );
//         }
//     // )

// const Button ={
//     Semantic,
//     Link,
// };

// export default Button

export type {
	Variant,
	Size,
	IconAlignment,
	Icon,
	BaseButtonProps,
	SemanticButtonProps,
	LinkButtonProps,
};
