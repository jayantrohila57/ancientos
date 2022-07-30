// import { useEffect } from "react";

import Image from "next/image";
import { Paper, Box } from "@mui/material";
import Logo from "../../assets/img/ancientv2.png";
import Typography from "@mui/material/Typography";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
// import Aos from "aos";
// import "aos/dist/aos.css";
// import "../../styles/Header.css";

export default function LogoInfo() {
	// useEffect(() => {
	// 	Aos.init({ duration: 600 });
	// }, []);
	return (
		<Box sx={{ height: "100vh" }}>
			{" "}
			<div
				style={{
					minHeight: "100vh",
					display: "flex",
					flexDirection: "column",
					justifyContent: "center",
					alignContent: "center",
					flexWrap: "wrap",
					alignItems: "center",
				}}
				// data-aos="zoom-in"
				// data-aos-duration="1200"
			>
				<Paper
					elevation={0}
					sx={{ Height: "100vh", backgroundColor: "transparent" }}
					align="center"
				>
					<Image src={Logo} alt={Logo} height="180" width="180" />
				</Paper>
				<Typography
					className="flex-box"
					align="center"
					justifyItems="center"
					variant="h3"
				>
					AncientOS
				</Typography>{" "}
				<Typography
					className="flex-box"
					align="center"
					justifyItems="center"
					variant="h5"
				>
					Craft with LOVE
				</Typography>
				<Box
					sx={{
						paddingTop: 15,
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
					}}
				>
					<Typography variant="caption">Let's see what we offer.</Typography>
					<KeyboardArrowDownRoundedIcon fontSize="large" />
				</Box>
			</div>
		</Box>
	);
}
