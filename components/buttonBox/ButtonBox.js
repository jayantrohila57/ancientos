import { useRouter } from "next/router";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Link from "next/link";
import styles from "../../styles/Home.module.css";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ArrowCircleLeftRoundedIcon from "@mui/icons-material/ArrowCircleLeftRounded";
import { Card, Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import ArrowCircleRightRoundedIcon from "@mui/icons-material/ArrowCircleRightRounded";

export default function ButtonBox({ title, link }) {
	useEffect(() => {
		Aos.init({ duration: 600 });
	}, []);
	return (
		<Link href={link}>
			<Card
				data-aos="fade-up"
				data-aos-duration="600"
				variant="outlined"
				sx={{
					p: 2,
					m: 2,
					width: 330,
					maxHeight: 800,
					minHeight: 200,
					display: "flex",
					flexDirection: "column",
					justifyContent: "space-between",
					borderRadius: 10,
					textTransform: "capitalize",
					boxShadow: "10px 10px 35px 0.1px #381f2048",
					backgroundColor: "primary",
					// "&:hover": {
					// 	backgroundColor: "primary.hover",
					// 	borderRadius: 4,
					// 	width: 330,
					// },
				}}
			>
				<Box
					sx={{
						display: "flex",
						flexDirection: "row",
						justifyContent: "flex-end",
						alignItems: "flex-end",
					}}
				>
					<IconButton>
						<ArrowCircleRightRoundedIcon sx={{ fontSize: 50 }} />
					</IconButton>
				</Box>
				<ListItem>
					<ListItemText
						primary={
							<Typography
								className="flex-box"
								variant="h4"
								sx={{ m: 0, justifyContent: "flex-start" }}
							>
								{title}
							</Typography>
						}
					/>
				</ListItem>
			</Card>
		</Link>
	);
}
