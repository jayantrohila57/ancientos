import React, { useState } from "react";
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
import { borders } from "@mui/system";
import Link from "next/link";
import { filledInputClasses, SwipeableDrawer } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
//icons
import ArrowCircleRightRoundedIcon from "@mui/icons-material/ArrowCircleRightRounded";
import ExpandCircleDownRoundedIcon from "@mui/icons-material/ExpandCircleDownRounded"; // import DownloadRoundedIcon from "@mui/icons-material/DownloadRounded";
// import LogoDevRoundedIcon from "@mui/icons-material/LogoDevRounded";
// import GroupsRoundedIcon from "@mui/icons-material/GroupsRounded";
// import VolunteerActivismRoundedIcon from "@mui/icons-material/VolunteerActivismRounded";

// import settings from "../../assets/json/settings.json";
import Image from "next/image";
import Logo from "../../assets/img/ancientv2.png";

// mobile drawer
const Appbar = () => {
	// const linkIcon = [
	// 	"DownloadRoundedIcon",
	// 	"LogoDevRoundedIcon",
	// 	"GroupsRoundedIcon",
	// 	"VolunteerActivismRoundedIcon",
	// ];
	const link = ["download", "Updates", "Team"];
	const linkInfo = [
		"Downloads builds",
		"Check latest updates.",
		"All team Members.",
		"Support Us.",
	];

	//account link
	const handleOpenUserMenu = () => {
		console.log("first");
	};
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
		// backgroundColor: theme.palette.mode === "dark" ? grey[900] : grey[900],
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
				backdropFilter: "blur(25px)",
				// overflow: "visible",
				boxShadow: 3,
				borderBottomLeftRadius: 15,
				borderBottomRightRadius: 15,
			}}
			elevation={0}
			position="fixed"
		>
			<Container maxWidth="xl">
				<Toolbar disableGutters>
					<Box
						noWrap
						center
						sx={{
							mr: 2,
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
								style={{
									background: "linear-gradient(to left, #e1244a, #3851d0)",
									WebkitBackgroundClip: "text",
									WebkitTextFillColor: "transparent",
									BoxShadow: 5,
									fontWeightLight: 200,
									fontWeightRegular: 200,
									fontWeightMedium: 400,
									fontWeightBold: 500,
									fontSize: 30,
									fontFamily: "Poppins",
									textDecoration: "none",
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
								<ExpandCircleDownRoundedIcon fontSize="large" />
							</IconButton>
						</Box>
					</Tooltip>
					{/* <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} /> */}
					<Box
						noWrap
						sx={{ m: 0, display: { xs: "flex", md: "none" }, flexGrow: 1 }}
					>
						{" "}
						<Link href={"/"}>
							<Typography
								style={{
									display: "flex",
									background: "linear-gradient(to left, #e1244a, #3851d0)",

									WebkitBackgroundClip: "text",
									WebkitTextFillColor: "transparent",
									fontWeightLight: 100,
									fontWeightRegular: 200,
									fontWeightMedium: 400,
									fontWeightBold: 800,
									fontSize: 40,
									fontFamily: "Poppins",
									textDecoration: "none",
								}}
							>
								AncientOS
							</Typography>
						</Link>
					</Box>
					<Box
						sx={{
							mr: 10,
							flexGrow: 1,
							display: { xs: "none", md: "flex" },
							justifyContent: "flex-end",
						}}
					>
						{link.map((links, index) => (
							<MenuItem key={index}>
								<Link key={index} href={`/${links}`}>
									<Typography
										key={index}
										sx={{
											p: 1,
											borderRadius: 3,
											TextShadow: 15,
											textTransform: "capitalize",
										}}
										textAlign="center"
									>
										{links}
									</Typography>
								</Link>
							</MenuItem>
						))}
					</Box>

					<Box sx={{ flexGrow: 0 }}>
						<Tooltip title="Open settings">
							<Link href={"/account"}>
								<IconButton
									onClick={handleOpenUserMenu}
									sx={{ borderRadius: 10, boxShadow: 0 }}
								>
									<Avatar
										alt=""
										src="https://avatars.githubusercontent.com/u/58130857?v=4"
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
							backgroundColor: "transparent",
							backdropFilter: "blur(5px)",
							overflow: "visible",
							variant: "outlined",
							background: " #24212122",
							elevation: 0,
							square: false,
						},
					}}
				/>

				<SwipeableDrawer
					anchor="bottom"
					open={open}
					onOpen={() => {}}
					onClose={() => setOpen(false)}
					sx={{
						borderRadius: 25,
						overflow: "visible",
						variant: "outlined",
						elevation: 0,
						square: false,
					}}
				>
					<Box
						sx={{
							m: 2,
						}}
					>
						<StyledBox
							sx={{
								// zIndex: 1100,
								position: "absolute",
								top: -drawerBleeding,
								visibility: "visible",
								right: 0,
								left: 0,
							}}
						>
							<Puller />
						</StyledBox>
					</Box>
					<Grid item xs={10} md={6}>
						<Typography
							style={{
								background: "linear-gradient(to left, #ff0033, #002aff)",
								WebkitBackgroundClip: "text",
								WebkitTextFillColor: "transparent",
							}}
							align="center"
							variant="h2"
						>
							Menu
						</Typography>

						<List sx={{ mr: 2 }}>
							{/* Mobile  */}
							{link.map((val, index) => (
								<Link key={index} href={`/${val}`}>
									<ListItem
										sx={{
											m: 1,
											mb: 2,
											borderRadius: 5,
											boxShadow: 5,
											textTransform: "capitalize",
											background:
												"linear-gradient(to left, #c14d647c, #4358c686)",
											backgroundColor: "#c14d647c",
										}}
										onClick={() => setOpen(false)}
									>
										<ListItemText
											primary={
												<Typography
													style={{
														background:
															"linear-gradient(to left, #ffffff, #ffffff)",
														WebkitBackgroundClip: "text",
														WebkitTextFillColor: "transparent",
													}}
													variant="h4"
												>
													{val}
												</Typography>
											}
											secondary={linkInfo[index]}
										/>

										<ListItemIcon>
											<ArrowCircleRightRoundedIcon
												sx={{
													p: 1,
													boxShadow: 5,
													fontSize: 60,
													background:
														"linear-gradient(to left, #c14d64cd, #4359c6c1)",
													backgroundColor: "#c14d647c",
													borderRadius: 10,
												}}
											/>
										</ListItemIcon>
									</ListItem>
								</Link>
							))}
						</List>
					</Grid>
					<Typography sx={{ pt: 0, p: 2 }} align="center" variant="caption">
						Swipe down to exit.
					</Typography>
				</SwipeableDrawer>
			</Root>
		</AppBar>
	);
};
export default Appbar;
