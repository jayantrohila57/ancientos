// import { useEffect } from "react";

import Image from "next/image";
import { Paper, Box } from "@mui/material";
import Logo from "../../assets/img/ancientv2.png";
import Typography from "@mui/material/Typography";
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
					minHeight: "70vh",
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
					<Image src={Logo} alt={Logo} height="200" width="200" />
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
				</Typography>{" "}
				{/* <div className="major-special" /> */}
			</div>
		</Box>
	);
}
