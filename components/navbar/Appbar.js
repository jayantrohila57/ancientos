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
import { SwipeableDrawer } from "@mui/material";
//icons
import KeyboardArrowRightRoundedIcon from "@mui/icons-material/KeyboardArrowRightRounded";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
// import DownloadRoundedIcon from "@mui/icons-material/DownloadRounded";
// import LogoDevRoundedIcon from "@mui/icons-material/LogoDevRounded";
// import GroupsRoundedIcon from "@mui/icons-material/GroupsRounded";
// import VolunteerActivismRoundedIcon from "@mui/icons-material/VolunteerActivismRounded";

// import settings from "../../assets/json/settings.json";
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
		backgroundColor: theme.palette.mode === "light" ? "#fff" : grey[900],
	}));
	const Puller = styled(Box)(({ theme }) => ({
		width: 60,
		height: 6,
		backgroundColor: theme.palette.mode === "dark" ? grey[300] : grey[600],
		borderRadius: 3,
		position: "absolute",
		top: 8,
		left: "calc(50% - 30px)",
	}));
	return (
		<AppBar color="transparent" elevation={0} position="static">
			<Container maxWidth="xl">
				<Toolbar disableGutters>
					{/* <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} /> */}
					<Typography
						variant="h6"
						noWrap
						sx={{
							mr: 2,
							display: { xs: "none", md: "flex" },
							fontFamily: "monospace",
							fontWeight: 700,
							letterSpacing: ".3rem",
							color: "inherit",
							textDecoration: "none",
						}}
					>
						<Link href={"/"}>AncientOS</Link>
					</Typography>
					<Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
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
					<Typography
						variant="h5"
						noWrap
						sx={{
							mr: 2,
							display: { xs: "flex", md: "none" },
							flexGrow: 1,
							fontFamily: "monospace",
							fontWeight: 700,
							letterSpacing: ".3rem",
							color: "dark",
							textDecoration: "none",
						}}
					>
						<Link href={"/"}>AncientOS</Link>
					</Typography>
					<Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
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
			<div>
				<SwipeableDrawer
					anchor="bottom"
					open={open}
					onOpen={() => {}}
					onClose={() => setOpen(false)}
					PaperProps={{
						elevation: 0,
						square: false,
						// style: { backgroundColor: "transparent" },
					}}
				>
					<Box sx={{ m: 2 }}>
						<StyledBox
							sx={{
								zIndex: 1100,
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
						<Typography align="center" variant="h4">
							Menu
						</Typography>

						<List sx={{ p: 2 }}>
							{link.map((val, index) => (
								<ListItem
									key={index}
									component="a"
									sx={{
										backgroundColor: "#bbbbbb",
										mb: 1,
										border: "1px solid rgba(200,200,200)",
										borderRadius: 5,
										textTransform: "uppercase",
									}}
									onClick={() => setOpen(false)}
								>
									<Link key={index} href={`/${val}`}>
										<ListItemText
											key={index}
											primary={val}
											secondary={linkInfo[index]}
										/>
									</Link>
									<ListItemIcon>
										<KeyboardArrowRightRoundedIcon />
									</ListItemIcon>
								</ListItem>
							))}
						</List>
					</Grid>
				</SwipeableDrawer>
			</div>
		</AppBar>
	);
};
export default Appbar;
