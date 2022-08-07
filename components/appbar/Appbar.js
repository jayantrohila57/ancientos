import React, { useState } from "react";
import CheckIcon from "@mui/icons-material/Check";
import ToggleButton from "@mui/material/ToggleButton";
import AppBar from "@mui/material/AppBar";
import { styled } from "@mui/material/styles";
import { grey } from "@mui/material/colors";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Grid from "@mui/material/Grid";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import CssBaseline from "@mui/material/CssBaseline";
import { Global } from "@emotion/react";
import Link from "next/link";
import DarkModeRoundedIcon from "@mui/icons-material/DarkModeRounded";
import { Card, filledInputClasses, SwipeableDrawer } from "@mui/material";
import ArrowCircleRightRoundedIcon from "@mui/icons-material/ArrowCircleRightRounded";
import ExpandCircleDownRoundedIcon from "@mui/icons-material/ExpandCircleDownRounded";

const Appbar = ({ data }) => {
	////////////////////////////////////////////
	const link = ["download", "Updates", "Team", "Donation", "Screenshot"];
	////////////////////////////////////////////
	const linkInfo = [
		"Downloads builds",
		"Check latest updates.",
		"All team Members.",
		"Consider Supporting Us.",
		"Check Screenshots & donate",
	];

	//drawer styling
	const drawerBleeding = 0;
	const Root = styled("div")(({ theme }) => ({
		borderTopLeftRadius: 8,
		borderTopRightRadius: 8,
		height: "100%",

		// 	theme.palette.mode === "dark"
		// 		? grey[900]
		// 		: theme.palette.background.default,
	}));
	const StyledBox = styled(Box)(({ theme }) => ({
		// backgroundColor: theme.palette.mode === "dark" ? grey[400] : grey[900],
	}));
	const Puller = styled(Box)(({ theme }) => ({
		width: 100,
		height: 5,
		backgroundColor: theme.palette.mode === "dark" ? grey[400] : grey[600],
		borderRadius: 3,
		position: "absolute",
		top: 10,
		left: "calc(50% - 50px)",
	}));
	// const { window } = props;
	const [open, setOpen] = useState(false);

	return (
		<AppBar
			sx={{
				backgroundColor: "transparent",
				backdropFilter: "blur(10px)",
				overflow: "visible",
				boxShadow: "0px 0px 15px 0.1px #381f2048",
				borderBottomLeftRadius: 30,
				borderBottomRightRadius: 30,
			}}
			elevation={0}
			position="fixed"
		>
			<Container
				maxWidth="xl"
				data-aos="fade-down"
				data-aos-duration="600"
				data-aos-anchor-placement="top-bottom"
			>
				<Toolbar disableGutters>
					<Box
						noWrap
						center
						sx={{
							mr: 1,
							display: {
								xs: "none",
								md: "flex",
								justifyContent: "center",
								align: "center",
							},
						}}
					>
						<Link href={"/"}>
							<Typography
								color="primary.main"
								style={{
									fontSize: 30,
									textDecoration: "none",
									cursor: "pointer",
								}}
							>
								AncientOS
							</Typography>
						</Link>
					</Box>
					<Tooltip title="Click to Menu">
						<Box
							sx={{
								// mr: 5,
								flexGrow: 0.5,
								display: { xs: "flex", md: "none" },
							}}
						>
							<IconButton
								size="large"
								aria-label="account of current user"
								aria-controls="menu-appbar"
								aria-haspopup="true"
								onClick={() => setOpen(true)}
								color="inherit"
							>
								<ExpandCircleDownRoundedIcon
									fontSize="large"
									sx={{
										p: 0,
										fontSize: 40,
										borderRadius: 10,
									}}
								/>
							</IconButton>
						</Box>
					</Tooltip>

					<Box
						noWrap
						sx={{ m: 0, display: { xs: "flex", md: "none" }, flexGrow: 1 }}
					>
						{" "}
						<Link href={"/"} passHref>
							<Typography
								color="primary.main"
								style={{
									fontSize: 40,
									textDecoration: "none",
									cursor: "pointer",
								}}
							>
								AncientOS
							</Typography>
						</Link>
					</Box>
					<Box
						sx={{
							p: 1,

							flexGrow: 1,
							display: { xs: "none", md: "flex" },
							justifyContent: "flex-end",
						}}
					>
						{link.map((links, index) => (
							<MenuItem sx={{ borderRadius: 5 }} key={index}>
								<Link key={index} href={`/${links}`}>
									<Typography
										variant="h6"
										key={index}
										sx={{
											textTransform: "capitalize",
										}}
										textAlign="center"
									>
										{links}
									</Typography>
								</Link>
							</MenuItem>
						))}
						<Box sx={{ flexGrow: 0 }}>
							<Tooltip title="Open settings">
								<IconButton
									onClick={data}
									sx={{
										borderRadius: 10,
									}}
								>
									<DarkModeRoundedIcon
										sx={{
											p: 0.5,
											fontSize: 40,
											borderRadius: 10,
										}}
									/>
								</IconButton>
							</Tooltip>
						</Box>
					</Box>

					<Box sx={{ flexGrow: 0 }}>
						<Tooltip title="Open settings">
							<Link href={"/account"}>
								<IconButton
									sx={{
										borderRadius: 10,
									}}
								>
									<Avatar
										sx={{
											p: 0,
											fontSize: 60,
											bgcolor: "primary.main",
											color: "text.primary",
										}}
										alt=""
										src=""
									/>
								</IconButton>
							</Link>
						</Tooltip>
					</Box>
				</Toolbar>
			</Container>
			<Root>
				<CssBaseline />
				<Global
					styles={{
						".MuiDrawer-root > .MuiPaper-root": {
							backgroundColor: "#00000029",
							backdropFilter: "blur(15px)",
							overflow: "visible",
							variant: "outlined",
							borderTopLeftRadius: 30,
							borderTopRightRadius: 30,
						},
					}}
				/>

				<SwipeableDrawer
					data-aos="fade-up"
					data-aos-duration="300"
					anchor="bottom"
					open={open}
					onOpen={() => {}}
					onClose={() => setOpen(false)}
				>
					<Box sx={{ m: 2 }}>
						<StyledBox>
							<Puller />
						</StyledBox>
					</Box>
					<Grid item xs={10} md={6}>
						<Typography align="center" color="primary.main" variant="h3">
							Menu
						</Typography>
						<Box sx={{ flexGrow: 0 }}>
							<IconButton
								sx={{ position: "absolute", top: 30, right: 30 }}
								onClick={data}
							>
								{" "}
								<DarkModeRoundedIcon
									sx={{
										p: 1,
										fontSize: 50,
										backgroundColor: "primary.main",
										borderRadius: 10,
									}}
								/>
							</IconButton>
						</Box>
						<List sx={{ mr: 2 }}>
							{/* Mobile  */}
							{link.map((val, index) => (
								<Link key={index} href={`/${val}`}>
									<Card
										sx={{
											p: 1,
											m: 1,
											ml: 2,
											borderRadius: 8,
											boxShadow: "10px 10px 35px 0.1px #381f2048",
											textTransform: "capitalize",
										}}
									>
										<ListItem onClick={() => setOpen(false)}>
											<ListItemText
												primary={<Typography variant="h4">{val}</Typography>}
												secondary={linkInfo[index]}
											/>

											<ListItemIcon>
												<ArrowCircleRightRoundedIcon
													sx={{
														fontSize: 50,
														borderRadius: 10,
													}}
												/>
											</ListItemIcon>
										</ListItem>
									</Card>
								</Link>
							))}
						</List>
					</Grid>
					<Typography sx={{ pt: 0, pb: 2 }} align="center" variant="caption">
						Swipe down to exit.
					</Typography>
				</SwipeableDrawer>
			</Root>
		</AppBar>
	);
};
export default Appbar;
