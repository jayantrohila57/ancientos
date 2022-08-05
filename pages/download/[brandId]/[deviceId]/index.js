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
		link: "/Donation",
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
				<Box
					// variant="outlined"
					sx={{
						p: 1,
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
							data-aos="fade-up"
							data-aos-duration="600"
							variant="outlined"
							sx={{
								maxWidth: 350,
								height: 250,
								m: 1,
								overflow: "none",
								borderRadius: 5,
								boxShadow: 5,
								textTransform: "capitalize",
								display: "flex",
								flexDirection: "column",
								justifyContent: "space-between",
								background: "transparent",
							}}
						>
							<Box
								sx={{
									m: 2,
									p: 1,
									borderRadius: 5,
									height: 350,
									width: 330,
									display: "flex",
									flexDirection: "column",
									flexWrap: "wrap",
									justifyContent: "flex-end",
									borderRadius: 5,
									textTransform: "capitalize",
									backgroundImage: "url(" + linkk + ")",
									backgroundRepeat: "no-repeat",
									backgroundSize: "contain",
									backgroundPosition: "center",
								}}
							></Box>{" "}
						</Card>
						<List
							sx={{
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
									data-aos="fade-up"
									data-aos-duration="600"
									sx={{
										width: 330,
										height: 150,
										p: 1,
										mb: 1,
										borderRadius: 5,
										boxShadow: 6,
										textTransform: "capitalize",
										background:
											"linear-gradient(to left, #8f45544a, #3d498358)",
									}}
									onClick={() => {}}
								>
									<ListItemText
										sx={{ ml: 2 }}
										fontSize="large"
										primary={<Typography variant="h4">Download</Typography>}
										secondary={
											<Typography variant="caption">Latest Build</Typography>
										}
									/>
									<ListItemIcon>
										<DownloadForOfflineRoundedIcon
											sx={{
												fontSize: 50,
												p: 1,
												borderRadius: 10,
												boxShadow: 6,
												background:
													"linear-gradient(to left, #c14d64fd, #062fffe4)",
											}}
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
							maxWidth: 750,
						}}
					>
						{Array.from(DeviceInfo).map((data, index) => (
							<Card
								data-aos="fade-up"
								data-aos-duration="600"
								key={index}
								variant="outlined"
								sx={{
									width: 330,
									height: 200,
									p: 1,
									mb: 2,
									display: "flex",
									flexDirection: "column",
									justifyContent: "space-between",
									borderRadius: 5,
									boxShadow: 6,
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
				</Box>
			</Box>
			<LinkHeading props={patreon} />
			<LinkHeading props={obj} />
			<GoBack props={`/download/${brandId}/`} />
		</Box>
	);
}




	    // <div id="${Data[index].brand}"  class="device-body">
        // <div class="d-Head"><h3>${MyDevices[index].device_codename}</h3></div>
        // <div class="d-img"><img height="150px" src=${MyDevices[index].phone_url}></img></div>
        // <div class="d-info">
        // <p>Maintainer Name : <span>${MyDevices[index].maintainer}</span>
        // <br>Rom Support Group :<span><a href="${MyDevices[index].rom_support}">Link</a></span>
        // <br>Device Support Group :<span> <a href="${MyDevices[index].device_supportgp_url}">Link</a></span>
        // <br>Rom Changelog :<span> <a href="${MyDevices[index].changelog_url}">Link</a></span>
        // <br>Date Updated :<span>${MyDevices[index].date_updated}</span>
        // <br>Download Rom:<span><a href="${MyDevices[index].download_url}>">Download</a></p></span></div>
        // </div>