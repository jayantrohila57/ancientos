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

			<Box
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
				{Array.from(devices).map((data, index) => {
					return (
						<Link key={index} href={`${brandId}/${data.name}`}>
							<Card
								data-aos="fade-up"
								data-aos-duration="600"
								variant="outlined"
								sx={{
									p: 2,
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
									background: "linear-gradient(to left, #8f45544a, #3d498358)",
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
								<Box>
									<Typography
										className="flex-box"
										sx={{ m: 0.5, justifyContent: "flex-start" }}
										variant="h4"
									>
										{data.name}
									</Typography>
								</Box>
							</Card>
						</Link>
					);
				})}
			</Box>

			<GoBack props={"/download"} />
		</Box>
	);
}
