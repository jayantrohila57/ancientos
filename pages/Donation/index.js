import { Box, Card } from "@mui/material";
import Heading from "../../components/heading/Heading";
import GoBack from "../../components/goBack/GoBack";
import Typography from "@mui/material/Typography";
import ButtonBox from "../../components/buttonBox/ButtonBox";

export default function Donation({ data }) {
	const styles = {
		display: "flex",
		flexDirection: "row",
		flexWrap: "wrap",
		alignContent: "center",
		justifyContent: "center",
		alignItems: "center",
	};
	return (
		<Box sx={(styles, { pt: 4, minHeight: "100vh" })}>
			<Heading pri="Consider Donation" sub="Let's Contribute to AncientOS" />

			<Box sx={styles}>
				<Card
					data-aos="fade-up"
					data-aos-duration="600"
					variant="outlined"
					sx={{ boxShadow: 5, borderRadius: 5, background: "transparent" }}
				>
					<Typography variant="body1" sx={(styles, { p: 2, maxWidth: 650 })}>
						We are working hard for you everyday to make this rom more better
						and effective for you. <br /> All we need is your Love and Support
						❤️ To help Ancient for keeping it alive, Kindly do any little amount
						of possible contributions from your side.
					</Typography>
				</Card>
				<Box sx={styles}>
					{data.map((data, index) => {
						return (
							<ButtonBox key={index} link={data.link} title={data.title} />
						);
					})}
				</Box>
			</Box>
			<GoBack props="/" />
		</Box>
	);
}

export async function getStaticProps() {
	const DONATION =
		"https://raw.githubusercontent.com/jayantrohila57/API/main/donation.json";
	const response = await fetch(DONATION);
	const data = await response.json();
	return {
		props: {
			data,
		},
	};
}

