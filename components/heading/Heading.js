import Typography from "@mui/material/Typography";
import { Paper, Box } from "@mui/material";
import styles from "../../styles/Home.module.css";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
export default function Heading({ pri, sub }) {
	useEffect(() => {
		Aos.init({ duration: 600 });
	}, []);
	return (
		<Box sx={{ p: 8 }}>
			{" "}
			<div
				data-aos="fade-up"
				data-aos-duration="600"
				style={{
					display: "flex",
					flexDirection: "column",
					// justifyContent: "center",
					alignContent: "center",
					flexWrap: "wrap",
					alignItems: "center",
				}}
				// data-aos="zoom-in"
				// data-aos-duration="1200"
			>
				<Typography
					className={("flex-box", styles.textGradient)}
					align="center"
					bold="true"
					justifyItems="center"
					variant="h3"
					style={{
						textTransform: "capitalize",
						background: "linear-gradient(to left, #FC5C7D, #6A82FB)",
						WebkitBackgroundClip: "text",
						WebkitTextFillColor: "transparent",
					}}
				>
					{pri}
				</Typography>
				<Typography
					className="flex-box"
					align="center"
					justifyItems="center"
					variant="h6"
				>
					{sub}
				</Typography>
			</div>
		</Box>
	);
}
