import { Paper, Box, Grid } from "@mui/material";
import Heading from "../../components/heading/Heading";
import LinkHeading from "../../components/heading/LinkHeading";
import GoBack from "../../components/goBack/GoBack";
import Typography from "@mui/material/Typography";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ArrowCircleRightRoundedIcon from "@mui/icons-material/ArrowCircleRightRounded";

import Link from "next/link";
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
		link: "/donation",
	};
	return (
		<Box sx={{ pt: 5, minHeight: "100vh" }}>
			<Heading pri="Download Builds" sub="These are all available Brands." />
			<Box>
				<Box
					sx={{
						p: 5,
						display: "flex",
						flexDirection: "row",
						flexWrap: "wrap",
						alignContent: "center",
						justifyContent: "flex-start",
						alignItems: "center",
					}}
				>
					{Array.from(brands).map((brand, index) => {
						return (
							<Link key={index} href={`download/${brand}`}>
								<ListItem
									key={index}
									sx={{
										width: 260,
										p: 2,
										m: "1rem",
										borderRadius: 5,
										boxShadow: 6,
										textTransform: "capitalize",
										background: "linear-gradient(to left, #FC5C7D, #6A82FB)",
									}}
									// onClick={() => {}}
								>
									<ListItemText
										key={index}
										fontSize="large"
										primary={
											<Typography
												key={index}
												className="flex-box"
												align="center"
												justifyItems="center"
												variant="h5"
											>
												{brand}
											</Typography>
										}
									/>
									<ListItemIcon>
										<ArrowCircleRightRoundedIcon fontSize="large" />
									</ListItemIcon>
								</ListItem>
							</Link>
						);
					})}
				</Box>
			</Box>
			<LinkHeading props={patreon} />
			<LinkHeading props={obj} />

			<GoBack props="/" />
		</Box>
	);
}
