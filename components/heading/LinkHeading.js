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
export default function LinkHeading({ props }) {
	// const obj = { primary: "Alice", secondary: 29, link: "Austria" };
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
			<Link href={`${props.link}`}>
				<ListItem
					data-aos="fade-up"
					data-aos-duration="600"
					sx={{
						maxHeight: 300,
						width: "90vw",
						p: 2,
						pl: 5,
						mb: 1.5,
						borderRadius: 5,
						boxShadow: 6,
						textTransform: "capitalize",
						background: "linear-gradient(to left, #8f45544a, #3d498358)",

						// background: "linear-gradient(to left, #FC5C7D, #6A82FB)",
					}}
					// onClick={() => {}}
				>
					<ListItemText
						primary={
							<Typography component="p" variant="h5">
								{props.primary}
							</Typography>
						}
						secondary={
							<Typography component="p" variant="body2">
								{props.secondary}
							</Typography>
						}
					/>
					<ListItemIcon>
						<ArrowCircleRightRoundedIcon fontSize="large" />
					</ListItemIcon>
				</ListItem>
			</Link>
		</List>
	);
}
