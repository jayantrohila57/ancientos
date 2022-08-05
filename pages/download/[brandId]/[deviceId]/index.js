import * as React from "react";
import { useRouter } from "next/router";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import EventRepeatRoundedIcon from "@mui/icons-material/EventRepeatRounded";
import EngineeringRoundedIcon from "@mui/icons-material/EngineeringRounded";
import AndroidRoundedIcon from "@mui/icons-material/AndroidRounded";
import PhoneAndroidRoundedIcon from "@mui/icons-material/PhoneAndroidRounded";
import Link from "next/link";
import DownloadingRoundedIcon from "@mui/icons-material/DownloadingRounded";
import { Box } from "@mui/material";
import Image from "next/image";

import Heading from "../../../../components/heading/Heading";
import LinkHeading from "../../../../components/heading/LinkHeading";
import GoBack from "../../../../components/goBack/GoBack";
import ButtonBox from "../../../../components/buttonBox/ButtonBox";

export default function Device({ data }) {
	const router = useRouter();
	const deviceId = router.query.deviceId;
	const brandId = router.query.brandId;
	const Devices = data.filter((Data) => {
		return Data.device_codename === `${deviceId}`;
	});

	const {
		brand,
		device_codename,
		maintainer,
		date_updated,
		download_url,
		changelog_url,
		device_supportgp_url,
		phone_url,
		rom_support,
	} = Devices[0];

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
	const styles = {
		display: "flex",
		flexDirection: "row",
		flexWrap: "wrap",
		alignContent: "center",
		justifyContent: "center",
		alignItems: "center",
	};

	const iconStyle = {
		m: 1,
		p: 1,
		borderRadius: 10,
		boxShadow: 6,
		color: "white",
		background: "linear-gradient(to left, #c14d64fd, #062fffe4)",
	};
	return (
		<Box sx={{ pt: 5, minHeight: "100vh" }}>
			<Heading pri={deviceId} sub={"Brand " + brandId} />
			<Box sx={styles}>
				<Box sx={styles}>
					<Box
						sx={{
							maxWidth: 400,
							maxHeight: 450,
							m: 2,
							p: 2,
						}}
					>
						<Image
							unsized
							height="300px"
							width="150px"
							src={phone_url}
							alt={deviceId}
						/>
					</Box>
					<Box
						sx={{
							width: 350,
							m: 2,
							p: 2,
						}}
					>
						<List sx={{ width: "100%", maxWidth: 460, bgcolor: "transparent" }}>
							<ListItem>
								<ListItemAvatar>
									<Avatar>
										<PhoneAndroidRoundedIcon fontSize="large" sx={iconStyle} />
									</Avatar>
								</ListItemAvatar>
								<ListItemText
									primary={device_codename}
									secondary="Device Code Name"
								/>
							</ListItem>
							<ListItem>
								<ListItemAvatar>
									<Avatar>
										<AndroidRoundedIcon fontSize="large" sx={iconStyle} />
									</Avatar>
								</ListItemAvatar>
								<ListItemText primary={brand} secondary="Device Brand" />
							</ListItem>
							<ListItem>
								<ListItemAvatar>
									<Avatar>
										<EngineeringRoundedIcon fontSize="large" sx={iconStyle} />
									</Avatar>
								</ListItemAvatar>
								<ListItemText
									primary={maintainer}
									secondary="Device Maintainer"
								/>
							</ListItem>
							<ListItem>
								<ListItemAvatar>
									<Avatar>
										<EventRepeatRoundedIcon fontSize="large" sx={iconStyle} />
									</Avatar>
								</ListItemAvatar>
								<ListItemText primary={date_updated} secondary="Date Updated" />
							</ListItem>
						</List>
					</Box>
					<Box sx={styles}>
						<List
							sx={{
								p: 2,
								display: "flex",
								flexDirection: "column",
								alignContent: "center",
								flexWrap: "wrap",
								alignItems: "center",
							}}
						>
							<Link href={`${download_url}`}>
								<ListItem
									data-aos="zoom-in"
									data-aos-duration="600"
									sx={{
										width: 330,
										p: 1,
										mb: 1.5,
										borderRadius: 5,
										boxShadow: 6,
										textTransform: "capitalize",
										background:
											"linear-gradient(to left, #c14d642e, #4359c64a)",
									}}
									onClick={() => {}}
								>
									<ListItemText
										sx={{ m: 2, p: 1 }}
										fontSize="large"
										primary={"Download"}
										secondary={"Latest Update"}
									/>
									<ListItemIcon>
										<DownloadingRoundedIcon
											fontSize="large"
											sx={{
												m: 2,
												p: 0.5,
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
				</Box>
				<Box sx={styles}>
					{" "}
					<ButtonBox link={changelog_url} title="Change Logs" />
					<ButtonBox link={rom_support} title="Rom Support Group" />
					<ButtonBox link={device_supportgp_url} title="Device Support Group" />
				</Box>
			</Box>
			<LinkHeading props={patreon} />
			<LinkHeading props={obj} />
			<GoBack props={`/download/${brandId}/`} />
		</Box>
	);
}

export async function getStaticPaths() {
	const DEVICE =
		"https://raw.githubusercontent.com/ancient-devices/releases/main/website_api.json";
	const response = await fetch(DEVICE);
	const data = await response.json();
	const paths = data.map((post) => {
		return {
			params: {
				brandId: `${post.brand}`,
				deviceId: `${post.device_codename}`,
			},
		};
	});
	return {
		paths,
		fallback: false,
	};
}

export async function getStaticProps() {
	const DEVICE =
		"https://raw.githubusercontent.com/ancient-devices/releases/main/website_api.json";
	const response = await fetch(DEVICE);
	const data = await response.json();

	return {
		props: {
			data,
		},
	};
}
