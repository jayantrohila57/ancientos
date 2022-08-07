import { useRouter } from "next/router";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Link from "next/link";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import ArrowCircleRightRoundedIcon from "@mui/icons-material/ArrowCircleRightRounded";
import { Card } from "@mui/material";
import { Box } from "@mui/system";
export default function LinkHeading({ props }) {
	// const obj = { primary: "Alice", secondary: 29, link: "Austria" };
	useEffect(() => {
		Aos.init({ duration: 600 });
	}, []);
	return (
		<Box
			sx={{
				m: 2,
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
				data-aos="fade-up"
				data-aos-duration="600"
				sx={{
					p: 2,
					width: "90vw",
					borderRadius: 10,
					boxShadow: "10px 10px 35px 0.1px #381f2048",
					textTransform: "capitalize",
				}}
			>
				<Link href={`${props.link}`}>
					<ListItem>
						<ListItemText
							primary={<Typography variant="h4">{props.primary}</Typography>}
							secondary={
								<Typography variant="h6" color="text.secondary">
									{props.secondary}
								</Typography>
							}
						/>
						<ListItemIcon>
							<ArrowCircleRightRoundedIcon fontSize="large" />
						</ListItemIcon>
					</ListItem>
				</Link>
			</Card>
		</Box>
	);
}
