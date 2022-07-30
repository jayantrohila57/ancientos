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
				"https://raw.githubusercontent.com/ancient-devices/ancient_official_devices_gallery/main/X00TD.png",
			name: "6.1plus",
		},
		{
			image:
				"https://raw.githubusercontent.com/ancient-devices/ancient_official_devices_gallery/main/X00TD.png",
			name: "7.1",
		},
		{
			image:
				"https://raw.githubusercontent.com/ancient-devices/ancient_official_devices_gallery/main/X00TD.png",
			name: "5.3",
		},

		{
			image:
				"https://raw.githubusercontent.com/ancient-devices/ancient_official_devices_gallery/main/X00TD.png",
			name: "5.2",
		},
	];

	return (
		<Box sx={{ pt: 5, minHeight: "100vh" }}>
			<Heading
				pri={`${brandId} Devices`}
				sub={`Let's see if we have your ${brandId} device.`}
			/>

			<Box
				sx={{
					p: 2,
					display: "flex",
					flexDirection: "row",
					flexWrap: "wrap",
					alignContent: "center",
					justifyContent: "space-around",
					alignItems: "center",
				}}
			>
				{Array.from(devices).map((data, index) => {
					return (
						<Box
							sx={{
								p: 2,
								display: "flex",
								flexDirection: "row",
								flexWrap: "wrap",
								alignContent: "center",
								justifyContent: "flex-start",
								alignItems: "center",
							}}
						>
							<Link key={index} href={`${brandId}/${data.name}`}>
								<Card
									// data-aos="fade-up"
									// data-aos-duration="1200"

									elevation={0}
									key={index}
									style={{
										backgroundImage:
											"linear-gradient(to left, #fc5c7cb5, #6a82fbc0)",
										// url(" +
										// data.image +
										// ")",

										// backgroundSize: "contain",
									}}
									sx={{
										overflow: "none",
										borderRadius: 5,
										textTransform: "capitalize",
										display: "flex",
										width: 300,
										height: 200,
									}}
								>
									<Box
										sx={{
											display: "flex",
											flexDirection: "column",
											justifyContent: "flex-end",
										}}
									>
										<Box
											sx={{
												display: "flex",
												flexDirection: "row",
												height: 200,
												width: 300,
											}}
										>
											<AodRoundedIcon sx={{ mt: 3, ml: 1, fontSize: 60 }} />
											<CardContent
												sx={{
													display: "flex",
													flexDirection: "column",
													flexWrap: "wrap",
													alignContent: "flex-start",
													justifyContent: "flex-start",
													alignItems: "flex-start",
												}}
											>
												<Typography
													sx={{ m: 0, justifyContent: "flex-start" }}
													variant="h4"
												>
													{data.name}
												</Typography>
												<Typography
													sx={{ m: 0, justifyContent: "flex-start" }}
													variant="h5"
													color="text.secondary"
												>
													{brandId}
												</Typography>
											</CardContent>{" "}
										</Box>
										<Box
											sx={{
												display: "flex",
												flexDirection: "row",
												justifyContent: "flex-end",
											}}
										>
											<IconButton>
												<ArrowCircleRightRoundedIcon sx={{ fontSize: 40 }} />
											</IconButton>
										</Box>
									</Box>
								</Card>
							</Link>{" "}
						</Box>
					);
				})}
			</Box>
			<Box>
				{/* <Link key={index} href={`${brandId}/${brand}`}>
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
							>
								<ListItemText
									key={index}
									primary={
										<Typography key={index} className="flex-box" variant="h5">
											{brand}
										</Typography>
									}
									secondary={
										<Typography
											key={index}
											className="flex-box"
											component="p"
											variant="body2"
										>
											Brand {brandId}
										</Typography>
									}
								/>
								<ListItemIcon>
									<ArrowCircleRightRoundedIcon fontSize="large" />
								</ListItemIcon>
							</ListItem>
						</Link> */}
			</Box>

			<GoBack props={"/download"} />
		</Box>
	);
}
