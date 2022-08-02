import { Paper, Box, Grid, Card } from "@mui/material";
import Heading from "../../components/heading/Heading";
import LinkHeading from "../../components/heading/LinkHeading";
import GoBack from "../../components/goBack/GoBack";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ArrowCircleRightRoundedIcon from "@mui/icons-material/ArrowCircleRightRounded";

import Link from "next/link";
export default function Account() {
	return (
		<Box
			sx={{
				minHeight: "100vh",
				pb: 25,
				p: 1,
				dispay: "flex",
				justifyContent: "center",
				alignItems: "center",
			}}
		>
			<Heading pri="Account" sub="View Your Account Details" />
			<Box
				sx={{
					display: "flex",
					flexDirection: "row",
					flexWrap: "wrap",
					alignContent: "center",
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				<Link href={`account/login`}>
					<Card
						data-aos="fade-up"
						data-aos-duration="600"
						variant="outlined"
						sx={{
							p: 1,
							m: 2,
							width: 330,
							height: 200,
							display: "flex",
							flexDirection: "column",
							justifyContent: "space-between",
							borderRadius: 5,
							boxShadow: 5,
							textTransform: "capitalize",
							background: "linear-gradient(to left, #8f45544a, #3d498358)",
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
							<IconButton
								sx={{
									boxShadow: 5,
									background: "linear-gradient(to left, #c14d64fd, #062fffe4)",
								}}
							>
								<ArrowCircleRightRoundedIcon sx={{ fontSize: 40 }} />
							</IconButton>
						</Box>
						<ListItem>
							<ListItemText
								fontSize="large"
								primary={
									<Typography
										className="flex-box"
										variant="h4"
										sx={{ m: 0, justifyContent: "flex-start" }}
									>
										Login
									</Typography>
								}
							/>
						</ListItem>
					</Card>
				</Link>
				<Link href={`account/signup`}>
					<Card
						data-aos="fade-up"
						data-aos-duration="600"
						variant="outlined"
						sx={{
							p: 1,
							m: 2,
							width: 330,
							height: 200,
							display: "flex",
							flexDirection: "column",
							justifyContent: "space-between",
							borderRadius: 5,
							boxShadow: 5,
							textTransform: "capitalize",
							background: "linear-gradient(to left, #8f45544a, #3d498358)",
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
							<IconButton
								sx={{
									boxShadow: 5,
									background: "linear-gradient(to left, #c14d64fd, #062fffe4)",
								}}
							>
								<ArrowCircleRightRoundedIcon sx={{ fontSize: 40 }} />
							</IconButton>
						</Box>
						<ListItem>
							<ListItemText
								fontSize="large"
								primary={
									<Typography
										className="flex-box"
										variant="h4"
										sx={{ m: 0, justifyContent: "flex-start" }}
									>
										Sign Up
									</Typography>
								}
							/>
						</ListItem>
					</Card>
				</Link>
			</Box>
			<GoBack props="/" />
		</Box>
	);
}