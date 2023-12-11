// import React from "react";
import { Link } from "react-router-dom";

function Footer() {
	return (
		<div className="xl:container xl:mx-auto px-4 pt-10 pb-4">
			<div className="flex flex-col md:flex-row items-center md:items-start md:justify-between">
				<div>
					<h2 className="font-poppins font-semibold text-lg pb-2 md:pb-4">
						Get in touch
					</h2>
					<div className="flex flex-col">
						<Link
							to="page/About Us"
							className="text-c2a text-sm pb-2 md:pb-4"
						>
							About Us
						</Link>
						<Link
							to="page/Carrers"
							className="text-c2a text-sm pb-2 md:pb-4"
						>
							Careers
						</Link>
						<Link
							to="page/Press Releases"
							className="text-c2a text-sm pb-2 md:pb-4"
						>
							Press Releases
						</Link>
						<Link to="blogs" className="text-c2a text-sm pb-4">
							Blog
						</Link>
					</div>
				</div>

				<div>
					<h2 className="font-poppins font-semibold text-lg pb-2 md:pb-4">
						Connections
					</h2>
					<div className="flex flex-col">
						<Link
							to="https://facebook.com"
							target="_blank"
							className="text-c2a text-sm pb-2 md:pb-4"
						>
							Facebook
						</Link>
						<Link
							to="https://twitter.com"
							target="_blank"
							className="text-c2a text-sm pb-2 md:pb-4"
						>
							Twitter
						</Link>
						<Link
							to="https://instagram.com"
							target="_blank"
							className="text-c2a text-sm pb-2 md:pb-4"
						>
							Instagram
						</Link>
						<Link
							to="https://youtube.com"
							target="_blank"
							className="text-c2a text-sm pb-2 md:pb-4"
						>
							Youtube
						</Link>
						<Link
							to="https://linkedin.com"
							target="_blank"
							className="text-c2a text-sm pb-4"
						>
							LinkedIn
						</Link>
					</div>
				</div>

				<div className="ml-7">
					<h2 className="font-poppins font-semibold text-lg pb-2 md:pb-4">
						Earnings
					</h2>
					<div className="flex flex-col">
						<Link
							to="page/Become an Affiliate"
							className="text-c2a text-sm pb-2 md:pb-4"
						>
							Become an Affiliate
						</Link>
						<Link
							to="page/Advertise your product"
							className="text-c2a text-sm pb-2 md:pb-4"
						>
							Advertise your product
						</Link>
						<Link
							to="page/Sell on Market"
							className="text-c2a text-sm pb-4"
						>
							Sell on Market
						</Link>
					</div>
				</div>

				<div className="ml-12">
					<h2 className="font-poppins font-semibold text-lg pb-2 md:pb-4">
						Account
					</h2>
					<div className="flex flex-col">
						<Link
							to="page/Account settings"
							className="text-c2a text-sm pb-2 md:pb-4"
						>
							Your account
						</Link>
						<Link
							to="page/Returns Centre"
							className="text-c2a text-sm pb-2 md:pb-4"
						>
							Returns Centre
						</Link>
						<Link
							to="page/Purchase Protection Details"
							className="text-c2a text-sm pb-2 md:pb-4"
						>
							100 % purchase protection
						</Link>
						<Link
							to="page/Contact Us"
							className="text-c2a text-sm pb-2 md:pb-4"
						>
							Chat with us
						</Link>
						<Link
							to="page/Help"
							className="text-c2a text-sm pb-2 md:pb-4"
						>
							Help
						</Link>
					</div>
				</div>
			</div>

			<div className="flex flex-col items-center gap-2">
				<p className="text-sm pt-10">Copyright © 2022</p>
				<p>
					<span className="">Designed with ❤️ by </span>
					<span className="font-bold">ebridge.tech</span>
				</p>
			</div>
		</div>
	);
}

export default Footer;
