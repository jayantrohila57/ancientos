import { Box } from "@mui/material";
import GoBack from "../../components/goBack/GoBack";
import LinkHeading from "../../components/heading/LinkHeading";
import Heading from "../../components/heading/Heading";
import TeamBox from "../../components/teamBox/TeamBox";

export default function Team({ data }) {
	const obj = {
		primary: "Apply for Mantainer Ship",
		secondary: "Join and grow the community of AncientOS.",
		link: "/maintainer",
	};
	const styles = {
		display: "flex",
		flexDirection: "row",
		flexWrap: "wrap",
		alignContent: "center",
		justifyContent: "center",
		alignItems: "center",
	};
	return (
		<Box sx={{ minHeight: "100vh" }}>
			<Heading pri=" Ancient Team" sub="These are all Ancient Team Members" />
			<Box sx={styles}>
				{data.map((data, index) => {
					return (
						<TeamBox
							key={index}
							image={data.image}
							name={data.name}
							post={data.post}
						/>
					);
				})}
			</Box>
			<LinkHeading props={obj} />
			<GoBack props="/" />
		</Box>
	);
}
export async function getStaticProps() {
	const TEAM_MEMBERS =
		"https://raw.githubusercontent.com/jayantrohila57/API/main/team.json";
	const response = await fetch(TEAM_MEMBERS);
	const data = await response.json();
	return {
		props: {
			data,
		},
	};
}
