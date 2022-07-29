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
import Link from "next/link";
import { filledInputClasses, SwipeableDrawer } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
//icons
import ArrowCircleRightRoundedIcon from "@mui/icons-material/ArrowCircleRightRounded";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
// import DownloadRoundedIcon from "@mui/icons-material/DownloadRounded";
// import LogoDevRoundedIcon from "@mui/icons-material/LogoDevRounded";
// import GroupsRoundedIcon from "@mui/icons-material/GroupsRounded";
// import VolunteerActivismRoundedIcon from "@mui/icons-material/VolunteerActivismRounded";

// import settings from "../../assets/json/settings.json";
import Image from "next/image";
import Logo from "../../assets/img/ancientv2.png";
const useStyles = createTheme((theme) => ({
	customBorderRadius: {
		borderRadius: 25,
	},
}));

const Appbar = () => {
	// mobile drawer

	// const linkIcon = [
	// 	"DownloadRoundedIcon",
	// 	"LogoDevRoundedIcon",
	// 	"GroupsRoundedIcon",
	// 	"VolunteerActivismRoundedIcon",
	// ];
	const link = ["download", "updates", "team", "donation"];
	const linkInfo = [
		"Downloads builds",
		"Check latest updates.",
		"All team Members.",
		"Support Us.",
	];

	const [open, setOpen] = useState(false);

	//account link
	const handleOpenUserMenu = () => {
		console.log("first");
	};
	//drawer styling
	const drawerBleeding = 0;
	const StyledBox = styled(Box)(({ theme }) => ({
		// backgroundColor: theme.palette.mode === "light" ? "#fff" : grey[900],
	}));
	const Puller = styled(Box)(({ theme }) => ({
		width: 100,
		height: 5,
		backgroundColor: theme.palette.mode === "dark" ? grey[700] : grey[600],
		borderRadius: 3,
		position: "absolute",
		top: 10,
		left: "calc(50% - 50px)",
	}));
	return (
		<AppBar color="transparent" elevation={0} position="static">
			<Container maxWidth="xl">
				<Toolbar disableGutters>
					<Box
						noWrap
						center
						sx={{
							mr: 2,
							display: { xs: "none", md: "flex" },
						}}
					>
						<Link href={"/"}>
							<Typography
								style={{
									background: "linear-gradient(to left, #FC5C7D, #6A82FB)",
									WebkitBackgroundClip: "text",
									WebkitTextFillColor: "transparent",
									fontWeightLight: 200,
									fontWeightRegular: 200,
									fontWeightMedium: 400,
									fontWeightBold: 500,
									fontSize: 30,
									fontFamily: "Poppins",
									textDecoration: "none",
								}}
								align="center"
							>
								AncientOS
							</Typography>
						</Link>
					</Box>
					<Box
						sx={{
							// flexGrow: 1,
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
							<KeyboardArrowDownRoundedIcon fontSize="large" />
						</IconButton>
					</Box>
					{/* <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} /> */}
					<Box
						noWrap
						sx={{ m: 0, display: { xs: "flex", md: "none" }, flexGrow: 1 }}
					>
						{" "}
						<Link href={"/"}>
							<Typography
								style={{
									background: "linear-gradient(to left, #FC5C7D, #6A82FB)",
									WebkitBackgroundClip: "text",
									WebkitTextFillColor: "transparent",
									fontWeightLight: 200,
									// fontWeightRegular: 200,
									// fontWeightMedium: 400,
									// fontWeightBold: 800,
									fontSize: 40,
									fontFamily: "Poppins",
									textDecoration: "none",
								}}
								align="center"
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
										sx={{ textTransform: "uppercase" }}
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
							<IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
								<Avatar alt="" src="./" />
							</IconButton>
						</Tooltip>
					</Box>
				</Toolbar>
			</Container>

			<SwipeableDrawer
				anchor="bottom"
				open={open}
				onOpen={() => {}}
				onClose={() => setOpen(false)}
				sx={{ borderRadius: 25 }}
				PaperProps={{
					// variant: "outlined",
					elevation: 0,
					square: false,
				}}
			>
				<Box
					sx={{
						backgroundColor: "#f5e8e81",
						m: 2,
						borderTopLeftRadius: 8,
						borderTopRightRadius: 8,
					}}
					className="jayant"
				>
					<StyledBox
						sx={{
							// zIndex: 1100,
							position: "absolute",
							top: -drawerBleeding,
							borderTopLeftRadius: 8,
							borderTopRightRadius: 8,
							visibility: "visible",
							right: 0,
							left: 0,
						}}
					>
						<Puller />
					</StyledBox>
				</Box>
				<Grid item xs={12} md={6}>
					<Typography
						style={{
							background: "linear-gradient(to left, #FC5C7D, #6A82FB)",
							WebkitBackgroundClip: "text",
							WebkitTextFillColor: "transparent",
						}}
						align="center"
						variant="h2"
					>
						Menu
					</Typography>

					<List sx={{ p: 2 }}>
						{link.map((val, index) => (
							<ListItem
								key={index}
								sx={{
									p: 2,
									mb: 1.5,
									borderRadius: 5,
									border: "2px",
									background: " #ffffff",
									background: "linear-gradient(to left, #FC5C7D, #6A82FB)",
									boxShadow: 3,
									textTransform: "uppercase",
								}}
								onClick={() => setOpen(false)}
							>
								<Link key={index} href={`/${val}`}>
									<ListItemText
										fontSize="large"
										key={index}
										primary={val}
										secondary={linkInfo[index]}
									/>
								</Link>
								<ListItemIcon>
									<ArrowCircleRightRoundedIcon fontSize="large" />
								</ListItemIcon>
							</ListItem>
						))}
					</List>
				</Grid>
			</SwipeableDrawer>
		</AppBar>
	);
};
export default Appbar;
