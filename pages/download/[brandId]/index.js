import { useRouter } from "next/router";
import Link from "next/link";
import { Paper, Box, Grid } from "@mui/material";
import Typography from "@mui/material/Typography";

import Heading from "../../../components/heading/Heading";
// import LinkHeading from "../../components/heading/LinkHeading";
import GoBack from "../../../components/goBack/GoBack";

import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";


import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ArrowCircleRightRoundedIcon from "@mui/icons-material/ArrowCircleRightRounded";
export default function Brand() {
	const router = useRouter();
	const brandId = router.query.brandId;
	const handler = () => {
		router.push("/download");
	};
	
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
	const devices = ["6.1plus", "7.1", "5.3"];
	return (
		<Box sx={{ pt: 5, minHeight: "100vh" }}>
			<Heading
				pri="Download Builds"
				sub="Get Official builds for your device."
			/>
			
			<Box
				sx={{
					// mt: 2,
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
					<Box
						sx={{
							paddingTop: 1,
							display: "flex",
							flexDirection: "row",
							flexWrap: "wrap",
							alignContent: "space-around",
							justifyContent: "space-around",
							alignItems: "center",
						}}
					>
						{Array.from(brands).map((brand, index) => {
							return (
								<Link key={index} href={`download/brand/device/${brand}`}>
									<ListItem
										key={index}
										sx={{
											width: 250,
											p: 2,
											mb: 3,
											borderRadius: 5,
											boxShadow: 6,
											textTransform: "capitalize",
											background: "linear-gradient(to left, #FC5C7D, #6A82FB)",
										}}
										onClick={() => {}}
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
										<ListItemIcon key={index}>
											<ArrowCircleRightRoundedIcon
												key={index}
												fontSize="large"
											/>
										</ListItemIcon>
									</ListItem>
								</Link>
							);
						})}
					</Box>
				</Box>
			</Box>
			<GoBack props="/download" />
		</Box>
	);
}

// <>
// 			<div>Download by Model</div>

// 			<button onClick={handler}>Brands</button>
// 			<div>
// 				{devices.map((device, index) => {
// 					return (
// 						<Link key={index} href={`${brandId}/${device}`}>
// 							<h1 key={index}>
// 								{device}
// 								<br />
// 							</h1>
// 						</Link>
// 					);
// 				})}
// 			</div>
// 			<Link href={`/download`}>
// 				<a>
// 					◀️ Go Back
// 					<br />
// 				</a>
// 			</Link>
// 		</>
