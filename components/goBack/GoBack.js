import { useRouter } from "next/router";
import Link from "next/link";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ArrowCircleLeftRoundedIcon from "@mui/icons-material/ArrowCircleLeftRounded";
export default function GoBack({ props }) {
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
			<Link href={`${props}`}>
				<ListItem
					sx={{
						width: 200,
						p: 1,
						mb: 1.5,
						borderRadius: 5,
						boxShadow: 6,
						textTransform: "capitalize",
						background: "linear-gradient(to left, #FC5C7D, #6A82FB)",
					}}
					onClick={() => {}}
				>
					<ListItemIcon>
						<ArrowCircleLeftRoundedIcon fontSize="large" />
					</ListItemIcon>

					<ListItemText fontSize="large" primary={"Go Back"} />
				</ListItem>
			</Link>
		</List>
	);
}
