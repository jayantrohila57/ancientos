import { Paper, Box, Grid, Card } from "@mui/material";
import Heading from "../../components/heading/Heading";
import LinkHeading from "../../components/heading/LinkHeading";
import GoBack from "../../components/goBack/GoBack";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";

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
		link: "/Donation",
	};
	return (
		<Box sx={{ pt: 5, minHeight: "100vh" }}>
			<Heading pri="Download Builds" sub="These are all available Brands." />
			<Box>
				<Card
					// variant="outlined"
					sx={{
						borderRadius: 5,
						m: 1,
						p: 1,
						display: "flex",
						flexDirection: "row",
						flexWrap: "wrap",
						alignContent: "center",
						justifyContent: "center",
						alignItems: "center",
						background: "linear-gradient(to left, #3312122c, #1212312e)",
						background: "transparent",
					}}
				>
					{Array.from(brands).map((brand, index) => {
						return (
							<Link key={index} href={`download/${brand}`}>
								<Card
									data-aos="fade-up"
									data-aos-duration="600"
									variant="outlined"
									key={index}
									sx={{
										p: 1,
										m: 2,
										width: 330,
										height: 200,
										display: "flex",
										flexDirection: "column",
										justifyContent: "space-between",
										borderRadius: 5,
										boxShadow: 5,
										textTransform: "capitalize",
										background: "transparent",
										background:
											"linear-gradient(to left, #8f45544a, #3d498358)",
									}}
								>
									<Box
										sx={{
											display: "flex",
											flexDirection: "row",
											justifyContent: "flex-end",
											alignItems: "flex-end",
										}}
									>
										<IconButton
											sx={{
												boxShadow: 5,
												background:
													"linear-gradient(to left, #c14d64fd, #062fffe4)",
											}}
										>
											<ArrowCircleRightRoundedIcon sx={{ fontSize: 40 }} />
										</IconButton>
									</Box>
									<ListItem>
										<ListItemText
											key={index}
											fontSize="large"
											primary={
												<Typography
													key={index}
													className="flex-box"
													variant="h4"
													sx={{ m: 0, justifyContent: "flex-start" }}
												>
													{brand}
												</Typography>
											}
										/>
									</ListItem>
								</Card>
							</Link>
						);
					})}
				</Card>
			</Box>
			<LinkHeading props={patreon} />
			<LinkHeading props={obj} />

			<GoBack props="/" />
		</Box>
	);
}
