import { useEffect } from "react";
import Aos from "aos";
import { Box } from "@mui/material";
import "aos/dist/aos.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import ShareRoundedIcon from "@mui/icons-material/ShareRounded";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
export default function TeamBox({ name, post, image }) {
	useEffect(() => {
		Aos.init({ duration: 600 });
	}, []);
	return (
		<Card
			data-aos="fade-up"
			data-aos-duration="600"
			variant="outlined"
			elevation={5}
			sx={{
				boxShadow: 6,
				display: "flex",
				margin: 2,
				borderRadius: 5,
				width: 330,
				height: 200,
				background: "transparent",
			}}
		>
			<Box sx={{ display: "flex", flexDirection: "column" }}>
				<CardContent sx={{ flex: "1 0 auto", width: 180 }}>
					<Typography component="div" variant="h5">
						{name}
					</Typography>
					<Typography
						variant="caption"
						color="text.secondary"
						component="div"
						style={{
							textTransform: "capitalize",
							background: "linear-gradient(to left, #FC5C7D, #6A82FB)",
							WebkitBackgroundClip: "text",
							WebkitTextFillColor: "transparent",
						}}
					>
						{post}
					</Typography>
				</CardContent>
				<Box
					sx={{
						display: "flex",
						alignItems: "center",
						pl: 1,
						pb: 1,
					}}
				>
					<IconButton>
						<ShareRoundedIcon
							fontSize="large"
							sx={{ p: 1, borderRadius: 5, boxShadow: 5 }}
						/>
					</IconButton>
				</Box>
			</Box>
			<CardMedia
				component="img"
				sx={{
					width: 150,
					boxShadow: 5,
					backgroundRepeat: "no-repeat",
					backgroundSize: "contain",
					backgroundPosition: "center",
				}}
				image={image}
				alt={name}
			/>
		</Card>
	);
}
