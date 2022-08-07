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
import { Button, Card, Typography } from "@mui/material";
export default function GoBack({ props }) {
	useEffect(() => {
		Aos.init({ duration: 600 });
	}, []);
	return (
		<List
			sx={{
				p: 2,
				display: "flex",
				flexDirection: "column",
				// justifyContent: "center",
				alignContent: "center",
				flexWrap: "wrap",
				alignItems: "center",
			}}
		>
			<Card
				data-aos="zoom-in"
				data-aos-duration="600"
				sx={{
					width: 250,
					p: 1,
					mb: 1.5,
					borderRadius: 10,
					boxShadow: "10px 10px 35px 0.1px #381f2048",
					textTransform: "capitalize",
				}}
			>
				<Link href={`${props}`}>
					<ListItem className={styles.back} onClick={() => {}}>
						<ListItemIcon>
							<Button
								sx={{
									p: 1,
									mr: 1,
									color: "text.primary",
									borderRadius: 10,
									boxShadow: "10px 10px 35px 0.1px #381f2048",
								}}
							>
								<ArrowCircleLeftRoundedIcon fontSize="large" />
							</Button>
						</ListItemIcon>

						<ListItemText
							sx={{ color: "text.primary" }}
							primary={<Typography variant="h5">Go Back</Typography>}
						/>
					</ListItem>
				</Link>
			</Card>{" "}
		</List>
	);
}
