import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { Paper, Box, Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import Heading from "../../components/heading/Heading";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import ArrowCircleRightRoundedIcon from "@mui/icons-material/ArrowCircleRightRounded";
import IconButton from "@mui/material/IconButton";
import AodRoundedIcon from "@mui/icons-material/AodRounded";
export default function Features() {
	useEffect(() => {
		Aos.init({ duration: 600 });
	}, []);
	const devices = [
		{
			pri: "Built for stock & personalised experience",
			sec: "Over period of time we have noticed that people love a Differnt experience sepically if they could personalised the Ui of thier phone as per the taste,so we are trying to best in class Customisation and make your experience best on your phone",
		},

		{
			pri: "Ready for daily usage",
			sec: "Every Update is proccessed through some Multiple Stages of testing before it released,So that onces its released Every User could Enjoy their phone Fully",
		},
		{
			pri: "Monthly Updates",
			sec: "Keep your mobile up-to-date, safely and quickly Upgrade to the latest software available for your phone, and enjoy enhancements like new features, improved functionality and also fixed bugs.",
		},
		{
			pri: "Colourful user interface with Monet engine",
			sec: "The “monet” theme engine is where the magic happens when it comes to Material You, and it’s the algorithm that decides what colors are selected from a wallpaper. When a user changes their wallpaper on AncientOS, the image is analyzed to select a color and algorithmically choose Primary, Secondary colors using an initial seed color. ",
		},
	];

	return (
		<Box sx={{ pt: 5, minHeight: "60vh" }}>
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
					alignItems: "stretch",
					background: "linear-gradient(to left, #3312122c, #1212312e)",
					background: "transparent",
				}}
			>
				{Array.from(devices).map((data, index) => {
					return (
						<Card
							data-aos="fade-up"
							data-aos-duration="600"
							key={index}
							variant="outlined"
							sx={{
								p: 2,
								m: 2,
								minWidth: 330,
								maxWidth: 500,
								maxHeight: 430,
								minHeight: 200,
								display: "flex",
								flexDirection: "column",
								justifyContent: "space-between",
								borderRadius: 5,
								boxShadow: 5,
								textTransform: "capitalize",
								background: "transparent",
								background: "linear-gradient(to left, #8f45544a, #3d498358)",
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
									variant="h6"
								>
									{data.pri}
								</Typography>
								<Typography
									className="flex-box"
									sx={{ m: 0.5, justifyContent: "flex-start" }}
									variant="caption"
								>
									{data.sec}
								</Typography>
							</Box>
						</Card>
					);
				})}
			</Box>
		</Box>
	);
}
