import { Paper, Box } from "@mui/material";
import Heading from "../../components/heading/Heading";
import LinkHeading from "../../components/heading/LinkHeading";
import GoBack from "../../components/goBack/GoBack";
// import Link from "next/link";
// import { useEffect } from "react";
// import Image from "next/image";
// import Logo from "../../assets/img/ancientv2.png";
// import Typography from "@mui/material/Typography";
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
		secondary: "We have a lot of variety of devices select the one you own.",
		link: "download/brand",
	};
	return (
		<Box sx={{ pt: 10, minHeight: "100vh" }}>
			<Heading
				pri="Download Builds"
				sub="Get Official builds for your device."
			/>
			<LinkHeading props={obj} />
			<GoBack props="/about" />
		</Box>
	);
}
