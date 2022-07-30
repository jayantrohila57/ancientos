import { useRouter } from "next/router";
import Link from "next/link";
import { Paper, Box, Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import Heading from "../../../../components/heading/Heading";
// import LinkHeading from "../../components/heading/LinkHeading";
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

	return (
		<Box sx={{ pt: 5, minHeight: "100vh" }}>
			<Heading pri={deviceId} sub="Let's see if we have your device." />
			<Box sx={{ flexGrow: 1, m: 1, p: 1 }}>
				<Typography
					sx={{ m: 1, p: 1 }}
					className="flex-box"
					align="center"
					bold="true"
					justifyItems="center"
					variant="h6"
				>
					These {deviceId} devices are available.
				</Typography>
			</Box>
			<GoBack props={`/download/${brandId}/`} />
		</Box>
	);
}
