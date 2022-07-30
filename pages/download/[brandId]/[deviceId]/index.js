import { useRouter } from "next/router";
import Link from "next/link";
import { Paper, Box, Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import Heading from "../../../../components/heading/Heading";
import LinkHeading from "../../../../components/heading/LinkHeading";
import GoBack from "../../../../components/goBack/GoBack";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ArrowCircleRightRoundedIcon from "@mui/icons-material/ArrowCircleRightRounded";

export default function Device() {
	const router = useRouter();
	const brandId = router.query.brandId;
	const deviceId = router.query.deviceId;
	// console.log(brandId);
	// console.log(deviceId);
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
		"https://raw.githubusercontent.com/ancient-devices/ancient_official_devices_gallery/main/X00TD.png";
	return (
		<Box sx={{ pt: 5, minHeight: "100vh" }}>
			<Heading pri={deviceId} sub={"Brand " + brandId} />
			{/* <Box
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
				<Box
					sx={{
						m: 1,
						borderRadius: 5,
						height: 400,
						width: 200,
						background: "linear-gradient(to left, #FC5C7D, #6A82FB)",
					}}
				>
					device Image
				</Box>
				<Box
					sx={{
						m: 1,
						borderRadius: 5,
						height: 400,

						width: 600,

						background: "linear-gradient(to left, #FC5C7D, #6A82FB)",
					}}
				>
					<Box
						style={{
							backgroundImage: "url(""+linkk+"")",

							backgroundSize: "contain",
						}}
					></Box>
					Basic Info
				</Box>
				<Box
					sx={{
						m: 1,
						borderRadius: 5,
						height: 400,
						width: 200,
						background: "linear-gradient(to left, #FC5C7D, #6A82FB)",
					}}
				>
					Maintainer
				</Box>
			</Box> */}
			<LinkHeading props={patreon} />
			<LinkHeading props={obj} />
			<GoBack props={`/download/${brandId}/`} />
		</Box>
	);
}
