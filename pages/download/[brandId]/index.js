import { useRouter } from "next/router";
import Link from "next/link";
import { Paper, Box, Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import Heading from "../../../components/heading/Heading";
// import LinkHeading from "../../components/heading/LinkHeading";
import GoBack from "../../../components/goBack/GoBack";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import ArrowCircleRightRoundedIcon from "@mui/icons-material/ArrowCircleRightRounded";
import IconButton from "@mui/material/IconButton";
// import List from "@mui/material/List";
// import ListItem from "@mui/material/ListItem";
// import ListItemIcon from "@mui/material/ListItemIcon";
// import ListItemText from "@mui/material/ListItemText";
// import ArrowCircleRightRoundedIcon from "@mui/icons-material/ArrowCircleRightRounded";
import AodRoundedIcon from "@mui/icons-material/AodRounded";
export default function Device() {
	const router = useRouter();
	const brandId = router.query.brandId;
	//const devices = [,    "5.1", "6.2"];
	const devices = [
		{
			image:
				"https://raw.githubusercontent.com/ancient-devices/ancient_official_devices/main/DRG.png",
			name: "6.1plus",
		},

		{
			image:
				"https://raw.githubusercontent.com/ancient-devices/ancient_official_devices/main/DRG.png",
			name: "6.1plus",
		},
		{
			image:
				"https://raw.githubusercontent.com/ancient-devices/ancient_official_devices/main/DRG.png",
			name: "6.1plus",
		},
		{
			image:
				"https://raw.githubusercontent.com/ancient-devices/ancient_official_devices/main/DRG.png",
			name: "6.1plus",
		},
		{
			image:
				"https://raw.githubusercontent.com/ancient-devices/ancient_official_devices/main/DRG.png",
			name: "6.1plus",
		},
		{
			image:
				"https://raw.githubusercontent.com/ancient-devices/ancient_official_devices/main/DRG.png",
			name: "6.1plus",
		},
		{
			image:
				"https://raw.githubusercontent.com/ancient-devices/ancient_official_devices/main/DRG.png",
			name: "6.1plus",
		},
		{
			image:
				"https://raw.githubusercontent.com/ancient-devices/ancient_official_devices/main/DRG.png",
			name: "6.1plus",
		},
		{
			image:
				"https://raw.githubusercontent.com/ancient-devices/ancient_official_devices/main/DRG.png",
			name: "6.1plus",
		},
	];

	return (
		<Box sx={{ pt: 5, minHeight: "100vh" }}>
			<Heading
				pri={`${brandId} Devices`}
				sub={`Let's see if we have your ${brandId} device.`}
			/>

			<Card
				variant="outlined"
				sx={{
					m: 2,
					p: 2,
					display: "flex",
					flexDirection: "row",
					flexWrap: "wrap",
					alignContent: "center",
					justifyContent: "space-around",
					alignItems: "center",
					borderRadius: 5,
					minHeight: 400,
					minWidth: 300,
					background: "transparent",

					//background: "linear-gradient(to left, #c14d647c, #4358c686)",
					//background: "linear-gradient(to left, #c14d643f, #4359c651)",
				}}
			>
				{Array.from(devices).map((data, index) => {
					return (
						<Link key={index} href={`${brandId}/${data.name}`}>
							<Card
								variant="outlined"
								sx={{
									maxWidth: 350,
									height: 250,
									m: 1,
									overflow: "none",
									borderRadius: 5,
									textTransform: "capitalize",
									display: "flex",
									flexDirection: "column",
									justifyContent: "space-between",
									boxShadow: 1,
									backgroundImage:
										"linear-gradient(to bottom, #00000049, #3d498358)",
								}}
							>
								{" "}
								<Box
									sx={{
										display: "flex",
										flexDirection: "row",
										justifyContent: "flex-end",
										alignItems: "flex-start",
										m: 1,
									}}
								>
									<IconButton
										sx={{
											boxShadow: 5,
											background:
												"linear-gradient(to left, #c14d6422, #4359c630)",
										}}
									>
										<ArrowCircleRightRoundedIcon sx={{ fontSize: 40 }} />
									</IconButton>
								</Box>
								<Box
									sx={{
										maxWidth: 350,
										width: 250,
										height: 250,
										display: "flex",
										flexDirection: "column",
										flexWrap: "wrap",
										justifyContent: "flex-end",
										borderRadius: 5,
										textTransform: "capitalize",
										backgroundImage:
											"linear-gradient(to bottom, #6717171a, #000000),url(" +
											data.image +
											")",
										backgroundRepeat: "no-repeat",
										backgroundSize: "contain",
										backgroundPosition: "center",
									}}
								>
									<CardContent
										sx={{
											maxWidth: 300,
											display: "flex",
											flexDirection: "column",
											flexWrap: "wrap",
											// 	alignContent: "flex-start",
											// 	justifyContent: "flex-start",
											// 	alignItems: "flex-start",
										}}
									>
										<Typography
											sx={{ m: 0, justifyContent: "flex-start" }}
											variant="h6"
										>
											{data.name}
										</Typography>
										<Typography
											sx={{ m: 0, justifyContent: "flex-start" }}
											variant="body2"
											color="text.secondary"
										>
											{brandId}
										</Typography>
									</CardContent>{" "}
								</Box>
							</Card>
						</Link>
					);
				})}
			</Card>

			<GoBack props={"/download"} />
		</Box>
	);
}
