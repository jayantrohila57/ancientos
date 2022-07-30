import { Paper, Box, Grid } from "@mui/material";
import Heading from "../../components/heading/Heading";
import LinkHeading from "../../components/heading/LinkHeading";
import GoBack from "../../components/goBack/GoBack";

import { styled } from "@mui/material/styles";
// import Link from "next/link";
// import { useEffect } from "react";
// import Image from "next/image";
// import Logo from "../../assets/img/ancientv2.png";
import Typography from "@mui/material/Typography";
// import Aos from "aos";
// import "aos/dist/aos.css";
// import "../../styles/Header.css";
export default function Download() {
	// const brand = ["nokia", "samsung", "realme"];
	// useEffect(() => {
	// 	Aos.init({ duration: 600 });
	// }, []);
	const Item = styled(Paper)(({ theme }) => ({
		backgroundColor: "transparent",
		backdropFilter: "blur(5px)",
		overflow: "visible",
		padding: theme.spacing(1),
		borderRadius: 10,
		maxWidth: 150,
		textAlign: "center",
		color: theme.palette.text.secondary,
	}));
	const brands = [
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

			<Box
				sx={{
					mt: 10,
					mb: 5,
					p: 2,
					display: "flex",
					flexDirection: "column",
					// justifyContent: "center",
					// alignContent: "center",
					flexWrap: "wrap",
					// alignItems: "center",
				}}
			>
				<Box sx={{ flexGrow: 1, m: 1, p: 1 }}>
					<Typography
						sx={{ m: 1, p: 1 }}
						className="flex-box"
						align="center"
						bold="true"
						justifyItems="center"
						variant="h5"
					>
						These Brands devices are available.
					</Typography>
					<Grid
						container
						spacing={{ xs: 2, sm: 2, md: 1 }}
						columns={{ xs: 6, sm: 20, md: 8 }}
					>
						{Array.from(brands).map((_, index) => (
							<Grid item xs={2} sm={4} md={1} key={index}>
								<Item variant="outlined">{brands[index]}</Item>
							</Grid>
						))}
					</Grid>
				</Box>
			</Box>
			<GoBack props="/" />
		</Box>
	);
}
