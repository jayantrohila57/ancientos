import { useRouter } from "next/router";
import Link from "next/link";
import { Paper, Box, Grid, Card, Icon } from "@mui/material";
import Typography from "@mui/material/Typography";
import Heading from "../../../../components/heading/Heading";
import LinkHeading from "../../../../components/heading/LinkHeading";
import GoBack from "../../../../components/goBack/GoBack";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import DownloadForOfflineRoundedIcon from "@mui/icons-material/DownloadForOfflineRounded";
import IconButton from "@mui/material/IconButton";
import ListItemText from "@mui/material/ListItemText";
import ArrowCircleRightRoundedIcon from "@mui/icons-material/ArrowCircleRightRounded";
import { styled } from "@mui/material/styles";
export default function Device() {
	const Item = styled(Paper)(({ theme }) => ({
		background: "linear-gradient(to left, #FC5C7D, #6A82FB)",
		//	backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
		...theme.typography.body2,
		padding: theme.spacing(1),
		textAlign: "start",

		color: theme.palette.text.secondary,
	}));
	const router = useRouter();
	const brandId = router.query.brandId;
	const deviceId = router.query.deviceId;
	// console.log(brandId);
	// console.log(deviceId);
	const DeviceInfo = [
		{
			primary: "Date updated",
			secondary: "30-01-2022",
		},
		{
			primary: "Rom Support",
			secondary: "Stars on GitHub",
		},
		{
			primary: "Change logs",
			secondary: "Open-source contributors",
		},
		{
			primary: "Device Support",
			secondary: "Stars on GitHub",
		},
	];
	const patreon = {
		primary: "Want Early Build access ?",
		secondary: "Those who want early build access, join us on patreon.",
		link: "/donation",
	};
	const obj = {
		primary: "Apply for MantainerShip",
		secondary: "Join and grow the community of AncientOS.",
		link: "/maintainer",
	};
	const linkk =
		"https://raw.githubusercontent.com/ancient-devices/ancient_official_devices/main/DRG.png";
	return (
		<Box sx={{ pt: 5, minHeight: "100vh" }}>
			<Heading pri={deviceId} sub={"Brand " + brandId} />
			<Box
				sx={{
					p: 0.5,

					display: "flex",
					flexDirection: "row",
					flexWrap: "wrap",
					alignContent: "center",
					justifyContent: "space-around",
					alignItems: "center",
				}}
			>
				<Card
					variant="outlined"
					sx={{
						p: 3,
						display: "flex",
						flexDirection: "row",
						flexWrap: "wrap",
						alignContent: "center",
						justifyContent: "space-around",
						alignItems: "center",
						m: 1,
						borderRadius: 5,
						minHeight: 400,
						minWidth: 300,
						background: "transparent",
						//	background: "linear-gradient(to left, #8f45544a, #3d498358)",
					}}
				>
					<Box
						sx={{
							display: "flex",
							flexDirection: "column",
							flexWrap: "wrap",
							justifyContent: "flex-end",
						}}
					>
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
									"linear-gradient(to bottom,  #6717171a, #000000)",
							}}
						>
							<Box
								sx={{
									m: 2,
									borderRadius: 5,
									height: 250,
									width: 250,
									display: "flex",
									flexDirection: "column",
									flexWrap: "wrap",
									justifyContent: "flex-end",
									borderRadius: 5,
									textTransform: "capitalize",
									backgroundImage:
										"linear-gradient(to bottom, #6717171a, #000000),url(" +
										linkk +
										")",
									backgroundRepeat: "no-repeat",
									backgroundSize: "contain",
									backgroundPosition: "center",
								}}
							>
								<Box sx={{ p: 1 }}>
									<Typography
										sx={{ m: 0, justifyContent: "flex-start" }}
										variant="h6"
									>
										Nokia
									</Typography>
									<Typography
										sx={{ m: 0, justifyContent: "flex-start" }}
										variant="body2"
										color="text.secondary"
									>
										Nokia
									</Typography>
								</Box>
							</Box>{" "}
						</Card>
						<List
							sx={{
								p: 2,
								display: "flex",
								flexDirection: "column",
								// justifyContent: "center",
								alignContent: "center",
								flexWrap: "wrap",
								alignItems: "center",
							}}
						>
							<Link href={"/"}>
								<ListItem
									sx={{
										width: 300,
										height: 100,
										p: 1.5,
										mt: 2,
										mb: 2,
										borderRadius: 5,
										boxShadow: 6,
										textTransform: "capitalize",
										background:
											"linear-gradient(to left, #c14d647c, #4358c686)",
									}}
									onClick={() => {}}
								>
									<ListItemText
										sx={{ ml: 2 }}
										fontSize="large"
										primary={<Typography variant="h5">Download</Typography>}
									/>
									<ListItemIcon>
										<DownloadForOfflineRoundedIcon
											fontSize="large"
											sx={{ p: 0.5, borderRadius: 10, boxShadow: 6 }}
										/>
									</ListItemIcon>
								</ListItem>
							</Link>
						</List>
					</Box>

					<Box
						sx={{
							display: "flex",
							flexDirection: "row",
							flexWrap: "wrap",
							alignContent: "center",
							justifyContent: "space-around",
							alignItems: "center",
							p: 1,
							borderRadius: 5,
							minHeight: 400,
							maxWidth: 650,
						}}
					>
						{Array.from(DeviceInfo).map((data, index) => (
							<Card
								key={index}
								variant="outlined"
								sx={{
									width: 280,
									height: 200,
									p: 1,
									mb: 2,
									display: "flex",
									flexDirection: "column",
									justifyContent: "space-between",
									borderRadius: 5,
									boxShadow: 6,
									textTransform: "capitalize",
									//background: "transparent",
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
												"linear-gradient(to left, #c14d6422, #4359c630)",
										}}
									>
										<ArrowCircleRightRoundedIcon sx={{ fontSize: 40 }} />
									</IconButton>
								</Box>
								<Box sx={{ p: 1 }}>
									<Typography
										sx={{ m: 0, justifyContent: "flex-start" }}
										variant="h6"
									>
										{data.primary}
									</Typography>
									<Typography
										sx={{ m: 0, justifyContent: "flex-start" }}
										variant="body2"
										color="text.secondary"
									>
										{data.secondary}
									</Typography>
								</Box>
							</Card>
						))}
					</Box>
				</Card>
			</Box>
			<LinkHeading props={patreon} />
			<LinkHeading props={obj} />
			<GoBack props={`/download/${brandId}/`} />
		</Box>
	);
}
