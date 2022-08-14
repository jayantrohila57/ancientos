import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { Paper, Box, Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import ScreenShotCarousel from "../../components/screenshotCarousel/ScreenShotCarousel";
import Comp2 from "../../components/svgBox/Comp2";
export default function IntroDetails() {
	useEffect(() => {
		Aos.init({ duration: 600 });
	}, []);

	return (
		<Box sx={{ pt: 5, minHeight: "60vh" }}>
			<Box
				// variant="outlined"
				sx={{
					borderRadius: 5,
					m: 2,
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
				<Comp2 />
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
						borderRadius: 10,
						boxShadow: "10px 10px 35px 0.1px #381f2048",
						textTransform: "capitalize",
					}}
				>
					<Box>
						<Typography
							className="flex-box"
							sx={{ m: 1, p: 1, justifyContent: "flex-start" }}
							variant="h4"
						>
							Let's do some UI Modifications...
						</Typography>
						<Typography
							className="flex-box"
							sx={{ m: 1, p: 1, justifyContent: "flex-start" }}
							variant="subtitle2"
							color="text.secondary"
						>
							A Custom rom based on AOSP (Android Open Source Project) Crafted
							With Love. With the Aim To Provide "Performance", "Security" and
							"Stability", with Multiple Customisation option. So that every
							User can customise thier phone as per their taste. While you get
							Best in class Customisation options you also get a unique UI
							without any security Comprimises, Monthly Security patches are
							merged, Every Update has something new with bug fixes.
						</Typography>
					</Box>
				</Card>
			</Box>
		</Box>
	);
}
