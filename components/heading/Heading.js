import Typography from "@mui/material/Typography";
import { Paper, Box } from "@mui/material";
export default function Heading({ pri, sub }) {
	return (
		<Box sx={{ p: 10 }}>
			{" "}
			<div
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
					className="flex-box"
					align="center"
					bold
					justifyItems="center"
					variant="h3"
					style={{
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
					variant="body1"
				>
					{sub}
				</Typography>
			</div>
		</Box>
	);
}
