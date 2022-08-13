import { Box } from "@mui/material";
import Heading from "../../../../components/heading/Heading";
import GoBack from "../../../../components/goBack/GoBack";
import ButtonBox from "../../../../components/buttonBox/ButtonBox";

export default function FormStatus() {
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
				pri="Check Your Form Status"
				sub="Let's see if you can Accepted"
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
				<ButtonBox link="" title="Form Stats" />
			</Box>
			<GoBack props="/" />
		</Box>
	);
}
