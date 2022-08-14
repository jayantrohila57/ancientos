import { Box } from "@mui/material";
import Heading from "../../../components/heading/Heading";
import GoBack from "../../../components/goBack/GoBack";
import ButtonBox from "../../../components/buttonBox/ButtonBox";

export default function CompleteForm() {
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
			<Heading
				pri="Complete Your Form"
				sub="Last step to became a maintainer"
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
				<ButtonBox link="" title="Complete form" />
			</Box>
			<GoBack props="/" />
		</Box>
	);
}
