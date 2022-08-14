import * as React from "react";

const SvgAcuteTrangle = (props) => (
	<svg
		width={100}
		height={100}
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		{...props}
	>
		<path d="M88 88H0V0" fill="#CEEAD6" />
		<path d="M48 88H0V40" fill="#5BB974" />
	</svg>
);

export default SvgAcuteTrangle;
