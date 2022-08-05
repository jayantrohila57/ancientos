import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { Paper, Box, Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import Heading from "../../components/heading/Heading";
import List from "@mui/material/List";
import ScreenShotCarousel from "../../components/screenshotCarousel/ScreenShotCarousel";
import ImageMasonry from "../../components/screenshotCarousel/ImageMasonry";
import GoBack from "../../components/goBack/GoBack";
import ButtonBox from "../../components/buttonBox/ButtonBox";
export default function Screenshot() {
	useEffect(() => {
		Aos.init({ duration: 600 });
	}, []);

	return (
		<Box
			sx={{
				minHeight: "100vh",
				pt: 25,
			}}
		>
			<Heading pri="Screenshot" sub="A look at the AncientOS" />
			<Box
				// variant="outlined"
				sx={{
					borderRadius: 5,
					m: 1,
					p: 1,
					display: "flex",
					flexDirection: "row",
					flexWrap: "wrap",
					alignContent: "center",
					justifyContent: "center",
					alignItems: "center",
					background: "linear-gradient(to left, #3312122c, #1212312e)",
					background: "transparent",
				}}
			>
				<ScreenShotCarousel />

				<Card
					data-aos="fade-up"
					data-aos-duration="600"
					variant="outlined"
					sx={{
						p: 2,
						m: 2,
						mb: 2,
						minWidth: 330,
						maxWidth: 700,
						display: "flex",
						flexDirection: "column",

						justifyContent: "space-between",
						borderRadius: 5,
						boxShadow: 5,
						textTransform: "capitalize",
						background: "linear-gradient(to left, #8f45544a, #3d498358)",
						background: "transparent",
					}}
				>
					<Box>
						<Typography
							style={{
								textTransform: "capitalize",
								background: "linear-gradient(to left, #FC5C7D, #6A82FB)",
								WebkitBackgroundClip: "text",
								WebkitTextFillColor: "transparent",
							}}
							className="flex-box"
							sx={{ m: 0.5, justifyContent: "flex-start" }}
							variant="h4"
						>
							See all the Screenshots...
						</Typography>
						<Typography
							className="flex-box"
							sx={{ m: 0.5, justifyContent: "flex-start" }}
							variant="body1"
						>
							All ScreenShots are Updated as soon as the new build version
							publishes, make sure to check them all. If you want to submit the
							Screenshots You are welcome. Donate screenshots here...
						</Typography>
						<List
							sx={{
								p: 2,
								display: "flex",
								flexDirection: "column",
								// justifyContent: "center",
								alignContent: "center",
								flexWrap: "wrap",
								alignItems: "center",
							}}
						>
							<ButtonBox
								link="Screenshot/Donate-Screenshot"
								title="Donate Screenshot"
							/>
						</List>
					</Box>
				</Card>
			</Box>
			<ImageMasonry />
			<GoBack props="/" />
		</Box>
	);
}
