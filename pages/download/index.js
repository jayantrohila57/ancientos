import { Paper, Box, Grid } from "@mui/material";
import Heading from "../../components/heading/Heading";
import LinkHeading from "../../components/heading/LinkHeading";
import GoBack from "../../components/goBack/GoBack";


// import Link from "next/link";
// import { useEffect } from "react";
// import Image from "next/image";
// import Logo from "../../assets/img/ancientv2.png";
// import Aos from "aos";
// import "aos/dist/aos.css";
// import "../../styles/Header.css";
export default function Download() {
	// const brand = ["nokia", "samsung", "realme"];
	// useEffect(() => {
	// 	Aos.init({ duration: 600 });
	// }, []);
	

	const obj = {
		primary: "Select Your Device Brand",
		secondary: "We have a lot of varieties of device select the one you own.",
		link: "download/brand",
	};
	const patreon = {
		primary: "Want Early Build access ?",
		secondary: "Those who want early build access, join us on patreon.",
		link: "/donation",
	};
	return (
		<Box sx={{ pt: 5, minHeight: "100vh" }}>
			<Heading
				pri="Download Builds"
				sub="Get Official builds for your device."
			/>
		
			<LinkHeading props={obj} />
			<LinkHeading props={patreon} />

			<GoBack props="/" />
		</Box>
	);
}
