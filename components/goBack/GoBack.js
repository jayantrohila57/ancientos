import { useRouter } from "next/router";
import Link from "next/link";
import styles from "../../styles/Home.module.css";
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
					className={styles.back}
					sx={{
						width: 200,
						p: 1,
						mb: 1.5,
						borderRadius: 5,
						boxShadow: 6,
						textTransform: "capitalize",
						background: "linear-gradient(to left, #c14d642e, #4359c64a)",
					}}
					onClick={() => {}}
				>
					<ListItemIcon>
						<ArrowCircleLeftRoundedIcon
							fontSize="large"
							sx={{
								p: 1,
								borderRadius: 10,
								boxShadow: 6,
								background: "linear-gradient(to left, #c14d64fd, #062fffe4)",
							}}
						/>
					</ListItemIcon>

					<ListItemText fontSize="large" primary={"Go Back"} />
				</ListItem>
			</Link>
		</List>
	);
}
