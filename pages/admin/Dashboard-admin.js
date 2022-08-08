import { useState } from "react";
import { Box, Button } from "@mui/material";
import Heading from "../../components/heading/Heading";
import GoBack from "../../components/goBack/GoBack";
import Typography from "@mui/material/Typography";

export default function DashboardAdmin() {
	const styles = {
		display: "flex",
		flexDirection: "row",
		flexWrap: "wrap",
		alignContent: "center",
		justifyContent: "center",
		alignItems: "center",
	};
	return (
		<Box sx={(styles, { pt: 5, minHeight: "100vh" })}>
			<Heading pri="Admin Dashboard" sub="Control Everything..." />
			<Box sx={styles}>
				<Typography variant="h4" sx={{ m: 0, justifyContent: "flex-start" }}>
					dashboard will open soon...
				</Typography>
			</Box>

			<GoBack props="/" />
		</Box>
	);
}
