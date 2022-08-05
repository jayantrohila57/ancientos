import GoBack from "../../components/goBack/GoBack";
import { Box } from "@mui/material";
import Heading from "../../components/heading/Heading";

export default function DonateScreenshot() {
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
