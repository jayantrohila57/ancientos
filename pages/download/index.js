import { useEffect } from "react";
import { Paper, Box, Grid, Card } from "@mui/material";
import Heading from "../../components/heading/Heading";
import LinkHeading from "../../components/heading/LinkHeading";
import GoBack from "../../components/goBack/GoBack";
import Aos from "aos";
import ButtonBox from "../../components/buttonBox/ButtonBox";
import "aos/dist/aos.css";
export default function Download() {
	useEffect(() => {
		Aos.init({ duration: 600 });
	}, []);
	const brands = [
		"Gsi ",
		"Asus ",
		"Motorola ",
		"Nokia ",
		"OnePlus ",
		"Realme ",
		"Xiaomi ",
		"Samsung",
		"Lenovo",
	];
	const obj = {
		primary: "Apply for MantainerShip",
		secondary: "Join and grow the community of AncientOS.",
		link: "/maintainer",
	};
	const patreon = {
		primary: "Want Early Build access ?",
		secondary: "Those who want early build access, join us on patreon.",
		link: "/Donation",
	};
	const styles = {
		display: "flex",
		flexDirection: "row",
		flexWrap: "wrap",
		alignContent: "center",
		justifyContent: "center",
		alignItems: "center",
	};

	return (
		<Box sx={{ pt: 5, minHeight: "100vh" }}>
			<Heading pri="Download Builds" sub="List of Official Devices" />
			<Box sx={styles}>
				{Array.from(brands).map((brand, index) => {
					return (
						<ButtonBox key={index} link={`download/${brand}`} title={brand} />
					);
				})}
			</Box>
			<LinkHeading props={patreon} />
			<LinkHeading props={obj} />

			<GoBack props="/" />
		</Box>
	);
}
