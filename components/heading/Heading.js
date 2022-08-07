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
		<Box
			sx={{
				display: "flex",
				alignItems: "center",
				justifyContent: "center",

				width: "100%",
				p: 5,
			}}
		>
			{" "}
			<div
				data-aos="fade-up"
				data-aos-duration="600"
				style={{
					display: "flex",
					flexDirection: "column",
					alignContent: "center",
					flexWrap: "wrap",
					alignItems: "center",
				}}
			>
				<Typography
					className={"flex-box"}
					align="center"
					justifyItems="center"
					variant="h3"
				>
					{pri}
				</Typography>

				<Typography
					className="flex-box"
					align="center"
					justifyItems="center"
					variant="h5"
					color="primary"
				>
					{sub}
				</Typography>
			</div>
		</Box>
	);
}
