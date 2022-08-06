import { Box } from "@mui/material";
import Heading from "../../components/heading/Heading";
import GoBack from "../../components/goBack/GoBack";
import ButtonBox from "../../components/buttonBox/ButtonBox";

export default function Donation() {
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
			<Heading
				pri="Build AncientOS"
				sub="Want to Build AncientOS for your Device"
			/>
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
				<ButtonBox link="/maintainer/maintainer-form" title="Maintainer Form" />
				{/* <ButtonBox
					link="/maintainer/maintainer-dashboard"
					title="Maintainer Dashboard"
				/>
				<ButtonBox link="/maintainer/builds-update" title="Build Updates" /> */}
			</Box>
			<GoBack props="/" />
		</Box>
	);
}
