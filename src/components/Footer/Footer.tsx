import React from "react";

export default function Footer() {
	const background = {
		backgroundColor: "rgba(1, 25, 50, 1)",
	};
	return (
		<section
			style={background}
			className="p-5 text-center text-white position-relative"
		>
			<div className="container">
				{/* <p className="lead">Sir_Rumeh &copy; 2022</p> */}
				<a
				// href="#header"
				// className="position-absolute bottom-0 end-0 h1 p-5 footer"
				>
					{/* <i className="bi bi-arrow-up-circle"></i> */}
				</a>
			</div>
		</section>
	);
}
