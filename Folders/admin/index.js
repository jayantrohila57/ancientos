import { Box } from "@mui/material";
import Heading from "../../components/heading/Heading";
import GoBack from "../../components/goBack/GoBack";
import ButtonBox from "../../components/buttonBox/ButtonBox";

export default function Donation() {
	return (
		<Box
			sx={{
				minHeight: "100vh",
				pt: 5,
				dispay: "flex",
				justifyContent: "center",
				alignItems: "center",
			}}
		>
			<Heading pri="Welcom to Admin Panel" sub="Manage Everything from here" />

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
				<ButtonBox link="" title="Manage All Users" />
				{/* can maintain admin, user & maintainer */}
				<ButtonBox link="" title="Manage All Devices" />
				<ButtonBox link="" title="Manage All Maintainer" />
				{/* manage all mantainer stuff form, */}
				<ButtonBox link="" title="Manage All ChangeLogs" />
				<ButtonBox link="" title="Manage All Builds" />
				<ButtonBox link="" title="Manage All Screenshots" />
			</Box>
			<GoBack props="/" />
		</Box>
	);
}
