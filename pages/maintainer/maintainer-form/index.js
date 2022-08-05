import { Paper, Box, Grid, Card } from "@mui/material";
import Heading from "../../../components/heading/Heading";
import LinkHeading from "../../../components/heading/LinkHeading";
import GoBack from "../../../components/goBack/GoBack";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ArrowCircleRightRoundedIcon from "@mui/icons-material/ArrowCircleRightRounded";
import Link from "next/link";
export default function MaintainerForm() {
	return (
		<Box
			sx={{
				minHeight: "100vh",
				pb: 25,
				p: 1,
				dispay: "flex",
				justifyContent: "center",
				alignItems: "center",
			}}
		>
			<Heading pri="Became Maintainer" sub="Build Ancient OS for your Device" />
			<Box
				sx={{
					display: "flex",
					flexDirection: "row",
					flexWrap: "wrap",
					alignContent: "center",
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				<Typography
					className="flex-box"
					variant="h4"
					sx={{ m: 0, justifyContent: "flex-start" }}
				>
					Maintainer Form will open soon...
				</Typography>
			</Box>
			<GoBack props="/maintainer" />
		</Box>
	);
}
