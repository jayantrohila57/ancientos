import { Box, Card } from "@mui/material";
import Heading from "../../components/heading/Heading";
import GoBack from "../../components/goBack/GoBack";
import Typography from "@mui/material/Typography";
import ButtonBox from "../../components/buttonBox/ButtonBox";

export default function Donation() {
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
						and effective for you. All we need is your Love and Support ❤️ To
						help Ancient for keeping it alive, Kindly do any little amount of
						possible contributions from your side.
					</Typography>
				</Card>
				<Box sx={styles}>
					<ButtonBox link="https://www.patreon.com/" title="Patreon" />
					<ButtonBox
						link="https://paypal.com/paypalme/rezaadipangestu"
						title="Paypal"
					/>
				</Box>
			</Box>
			<GoBack props="/" />
		</Box>
	);
}
