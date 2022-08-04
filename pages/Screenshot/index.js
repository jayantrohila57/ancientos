import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { Paper, Box, Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import Heading from "../../components/heading/Heading";
import Link from "next/link";
import styles from "../../styles/Home.module.css";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ArrowCircleLeftRoundedIcon from "@mui/icons-material/ArrowCircleLeftRounded";
import ScreenShotCarousel from "../../components/screenshotCarousel/ScreenShotCarousel";
import ImageMasonry from "../../components/screenshotCarousel/ImageMasonry";
import GoBack from "../../components/goBack/GoBack";
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
							<Link href={`Screenshot/Donate-Screenshot`}>
								<ListItem
									data-aos="zoom-in"
									data-aos-duration="600"
									className={styles.back}
									sx={{
										width: 200,
										p: 1,
										mb: 1.5,
										borderRadius: 5,
										boxShadow: 6,
										textTransform: "capitalize",
										background:
											"linear-gradient(to left, #c14d642e, #4359c64a)",
									}}
									onClick={() => {}}
								>
									<ListItemIcon>
										<ArrowCircleLeftRoundedIcon
											fontSize="large"
											sx={{
												p: 1,
												borderRadius: 10,
												boxShadow: 6,
												background:
													"linear-gradient(to left, #c14d64fd, #062fffe4)",
											}}
										/>
									</ListItemIcon>

									<ListItemText
										fontSize="large"
										primary={"Donate Screenshots"}
									/>
								</ListItem>
							</Link>
						</List>
					</Box>
				</Card>
			</Box>
			<ImageMasonry />
			<GoBack props="/" />
		</Box>
	);
}
