import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import ShareRoundedIcon from "@mui/icons-material/ShareRounded";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import GoBack from "../../components/goBack/GoBack";
import LinkHeading from "../../components/heading/LinkHeading";
import { Box } from "@mui/material";
import Heading from "../../components/heading/Heading";

export default function DonateScreenshot() {
	useEffect(() => {
		Aos.init({ duration: 600 });
	}, []);
	return (
		<Box sx={{ pt: 5, minHeight: "100vh" }}>
			<Heading pri="Donate Screenshot" sub="Let's Share What we discover" />
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
				Donate Screenshot Form will be open soon...{" "}
			</Box>
			<GoBack props="/Screenshot" />
		</Box>
	);
}
