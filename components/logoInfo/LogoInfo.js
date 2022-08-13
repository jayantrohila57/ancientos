import Image from "next/image";
import { Paper, Box, Card } from "@mui/material";
import Logo from "../../assets/img/ancientv2.png";
import Typography from "@mui/material/Typography";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import Comp1 from "../../components/svgBox/Comp1";
export default function LogoInfo() {
	return (
		<Box sx={{ height: "100vh", pt: 2 }}>
			<Comp1 />
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
			>
				<Paper
					data-aos="zoom-in"
					data-aos-duration="600"
					elevation={0}
					sx={{ Height: "100vh", backgroundColor: "transparent" }}
					align="center"
				>
					<Image src={Logo} priority alt={Logo} height="250" width="250" />
				</Paper>
				<Typography
					data-aos="fade-up"
					data-aos-duration="600"
					className="flex-box"
					align="center"
					justifyItems="center"
					variant="h2"
				>
					AncientOS
				</Typography>{" "}
				<Typography
					sx={{ color: "primary.main" }}
					data-aos="fade-up"
					data-aos-duration="600"
					className="flex-box"
					align="center"
					justifyItems="center"
					variant="h4"
				>
					Craft with LOVE
				</Typography>
				<Typography
					sx={{ pt: 2, mt: 2 }}
					data-aos="fade-up"
					data-aos-duration="600"
					className="flex-box"
					align="center"
					justifyItems="center"
					variant="h6"
				>
					Scrolldown to see more
				</Typography>
				<KeyboardArrowDownRoundedIcon />
			</div>
		</Box>
	);
}
