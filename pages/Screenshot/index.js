import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import Heading from "../../components/heading/Heading";
import ScreenShotCarousel from "../../components/screenshotCarousel/ScreenShotCarousel";
import ImageMasonry from "../../components/screenshotCarousel/ImageMasonry";
import GoBack from "../../components/goBack/GoBack";
import ButtonBox from "../../components/buttonBox/ButtonBox";
export default function Screenshot({ data }) {
	const styles = {
		display: "flex",
		flexDirection: "row",
		flexWrap: "wrap",
		alignContent: "center",
		justifyContent: "center",
		alignItems: "center",
	};
	console.log(data);
	return (
		<Box
			sx={{
				minHeight: "100vh",
				pt: 5,
			}}
		>
			<Heading pri="Screenshot" sub="A look at the AncientOS" />
			<Box sx={styles}>
				<ScreenShotCarousel />

				<Box sx={(styles, { m: 2, maxWidth: 450 })}>
					<Box>
						<Typography variant="body1">
							All ScreenShots are Updated as soon as the new build version
							publishes, make sure to check them all. If you want to submit the
							Screenshots You are welcome. Donate screenshots here...
						</Typography>
						<Box sx={styles}>
							<ButtonBox
								link="Screenshot/Donate-Screenshot"
								title="Donate Screenshot"
							/>
						</Box>
					</Box>
				</Box>
			</Box>
			<ImageMasonry props={data} />
			<GoBack props="/" />
		</Box>
	);
}
export async function getStaticProps() {
	const SCREENSHOTS =
		"https://raw.githubusercontent.com/jayantrohila57/API/main/screenshot.json";
	const response = await fetch(SCREENSHOTS);
	const data = await response.json();
	return {
		props: {
			data,
		},
	};
}
