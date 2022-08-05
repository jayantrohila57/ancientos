import * as React from "react";
import { Box } from "@mui/material";
import Heading from "../../components/heading/Heading";
import GoBack from "../../components/goBack/GoBack";
import AccordionBox from "../../components/accordionBox/AccordionBox";
export default function Updates({ data }) {
	return (
		<React.Fragment>
			<Box
				sx={{
					minHeight: "100vh",
				}}
			>
				<Heading pri="Change Logs" sub="These are all Builds versions" />
				<AccordionBox logs={data} />
				<GoBack props="/" />
			</Box>
		</React.Fragment>
	);
}
export async function getStaticProps() {
	// const UPDATES_CHANGE_LOGS = "http://localhost:4000/update";
	const UPDATES_CHANGE_LOGS =
		"https://raw.githubusercontent.com/jayantrohila57/ancientos/Master/assets/json/changeLogs.json?token=GHSAT0AAAAAABVZ3CZMDMVI5HX2SU6LLSWWYXMZBKQ";
	const response = await fetch(UPDATES_CHANGE_LOGS);
	const data = await response.json();
	return {
		props: {
			data,
		},
	};
}
