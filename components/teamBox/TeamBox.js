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
			sx={{
				p: 1,
				margin: 2,
				width: 330,
				height: 200,
				display: "flex",
				borderRadius: 10,
				boxShadow: "10px 10px 35px 0.1px #381f2048",
			}}
		>
			<Box sx={{ display: "flex", flexDirection: "column" }}>
				<CardContent sx={{ flex: "1 0 auto", width: 160 }}>
					<Typography variant="h5">{name}</Typography>
					<Typography variant="body2" color="text.secondary" component="div">
						{post}
					</Typography>
				</CardContent>
				{/* <Box sx={{ p: 1, display: "flex", alignItems: "center" }}>
					<IconButton>
						<ShareRoundedIcon fontSize="large" />
					</IconButton>
				</Box> */}
			</Box>
			<CardMedia
				component="img"
				sx={{
					p: 1,
					width: 150,
					height: 150,
					borderRadius: 100,
					backgroundRepeat: "no-repeat",
					backgroundSize: "contain",
					backgroundPosition: "center",
					boxShadow: "10px 10px 35px 0.1px #381f2048",
				}}
				image={image}
				alt={name}
			/>
		</Card>
	);
}
