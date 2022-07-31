// import React, { useEffect, useState } from "react";
// import { Box, Input, InputLabel } from "@mui/material";
// import HelpRoundedIcon from "@mui/icons-material/HelpRounded";
// import CardActions from "@mui/material/CardActions";
// import Button from "@mui/material/Button";
// import CssBaseline from "@mui/material/CssBaseline";
// import TextField from "@mui/material/TextField";
// import FormControlLabel from "@mui/material/FormControlLabel";
// import Checkbox from "@mui/material/Checkbox";
// import Link from "@mui/material/Link";
// import Chip from "@mui/material/Chip";
// import Stack from "@mui/material/Stack";
// import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";

// import IconButton from "@mui/material/IconButton";
// import Typography from "@mui/material/Typography";
// import CardContent from "@mui/material/CardContent";
// import { motion } from "framer-motion";
// import { createTheme, ThemeProvider } from "@mui/material/styles";
// import { Card } from "@mui/material";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import Alert from "@mui/material/Alert";
// import { useAuth } from "../../context/AuthContext";

// // import SignUpSVG from "../../../assets/svg/SignUpSVG";
// ////////////////////////////////////////////////////////
// export default function SignIn() {
// 	const { user, signup } = useAuth();
// 	const [data, setData] = useState({ email: "", password: "" }); //CHECKBOX VARIABLE
// 	console.log(user);
// 	//const [LoginError, setLoginError] = useState(false); //LOGIN ERROR VARIABLE
// 	//const [name, setName] = useState(null); //NAME VARIABLE
// 	//	const [check, setCheck] = useState(false); //CHECKBOX VARIABLE
// 	// const [email, setEmail] = useState(""); //EMAIL VARIABLE
// 	// const [password, setPassword] = useState(""); //PASSWORD VARIABLE
// 	// //	const [photo, setPhoto] = useState(null); //PROFILEPIC VARIABLE
// 	// const onChangePicture = (e) => {
// 	// 	console.log("picture: ", photo);
// 	// 	setPhoto(e.target.files[0]);
// 	// };

// 	const darkTheme = createTheme({
// 		palette: {
// 			mode: "dark", //DARK / LIGHT MODE VARIABLE
// 		},
// 	});

// 	useEffect(() => {
// 		AOS.init({
// 			duration: 2000, ////ANIMATION DELAY
// 		});
// 	}, []);
// 	const styles = {
// 		hidden: {
// 			display: "none",
// 		},
// 		importLabel: {
// 			color: "white",
// 		},
// 	};
// 	const handleSubmit = async (event) => {
// 		event.preventDefault();
// 		console.log(data);
// 		try {
// 			await signup(email, password);
// 		} catch (err) {
// 			console.log(err);
// 		}

// 		const data = new FormData(event.currentTarget);
// 		console.log({
// 			//	name: data.get("name"),
// 			//checkbox: data.get("checkbox"),
// 			email: data.get("email"),
// 			password: data.get("password"),
// 		});
// 	};
// 	return (
// 		<ThemeProvider theme={darkTheme}>
// 			<motion.div
// 				initial={{
// 					opacity: 0,
// 					y: "100vw",
// 					transition: { ease: "easeInOut", duration: 0.1 },
// 				}}
// 				animate={{
// 					opacity: 1,
// 					y: 0,
// 					transition: { ease: "easeInOut", duration: 0.1 },
// 				}}
// 				exit={{
// 					y: "-100vw",
// 					opacity: 0,
// 					transition: { ease: "easeInOut", duration: 0.1 },
// 				}}
// 			>
// 				<Box container component="main" sx={{ height: "100vh" }}>
// 					<CssBaseline />
// 					<Box
// 						sx={{
// 							height: "100vh",
// 							width: "100vw",
// 							padding: "1",
// 							borderRadius: 3,
// 							display: "flex",
// 							flexWrap: "wrap",
// 							flexDirection: "row",
// 							alignContent: "space-around",
// 							justifyContent: "space-evenly",
// 						}}
// 					>
// 						<Card
// 							variant="outlined"
// 							data-aos="fade-up"
// 							data-aos-duration="1000"
// 							sx={{
// 								maxWidth: 500,
// 								margin: 1,
// 								padding: 3,
// 								borderRadius: 5,
// 								display: "flex",
// 								flexWrap: "wrap",
// 								flexDirection: "column",
// 								alignContent: "space-around",
// 								justifyContent: "space-evenly",
// 							}}
// 						>
// 							<Box
// 								sx={{
// 									display: "flex",
// 									flexWrap: "wrap",
// 									flexDirection: "row",
// 									justifyContent: "center",
// 									alignItems: "center",
// 								}}
// 							>
// 								<Box
// 									sx={{
// 										display: "flex",
// 										flexWrap: "wrap",
// 										flexDirection: "row",
// 										justifyContent: "center",
// 										alignItems: "center",
// 									}}
// 								>
// 									<Typography component="h1" variant="h4">
// 										SignUp
// 									</Typography>
// 								</Box>
// 								<Box
// 									component="form"
// 									Validate
// 									onSubmit={handleSubmit}
// 									sx={{
// 										mt: 1,
// 									}}
// 								>
// 									<InputLabel
// 										sx={{
// 											display: "flex",
// 											flexWrap: "wrap",
// 											flexDirection: "row",

// 											borderRadius: 1,
// 											p: 1,
// 										}}
// 										style={styles.importLabel}
// 										htmlFor="import-button"
// 									>
// 										<Input
// 											id="import-button"
// 											inputProps={{
// 												accept: "image/jpeg",
// 											}}
// 											onChange={(e) => setPhoto(e.target.files[0])}
// 											style={styles.hidden}
// 											type="file"
// 										/>
// 										<AddPhotoAlternateIcon sx={{ mr: 1 }} />
// 										<Typography component="h1" variant="h5">
// 											Add Image
// 										</Typography>
// 									</InputLabel>
// 									<TextField
// 										size="small"
// 										onChange={(e) => setName(e.target.value)}
// 										margin="normal"
// 										required
// 										fullWidth
// 										name="name"
// 										label="Name"
// 										type="text"
// 										id="name"
// 										autoComplete="name"
// 									/>
// 									<TextField
// 										size="small"
// 										onChange={(e) => setEmail(e.target.value)}
// 										margin="normal"
// 										required
// 										fullWidth
// 										id="email"
// 										label="Email Address"
// 										name="email"
// 										autoComplete="email"
// 									/>
// 									<TextField
// 										size="small"
// 										onChange={(e) => setPassword(e.target.value)}
// 										margin="normal"
// 										required
// 										fullWidth
// 										name="password"
// 										label="Password"
// 										type="password"
// 										id="password"
// 										autoComplete="current-password"
// 									/>
// 									<FormControlLabel
// 										name="checkbox"
// 										control={<Checkbox />}
// 										onChange={(e) => setCheck(e.target.checked)}
// 										label="Agree to Terms & Conditions"
// 									/>
// 									<Button
// 										size="small"
// 										type="submit"
// 										fullWidth
// 										variant="contained"
// 										sx={{ mt: 3, mb: 2 }}
// 									>
// 										SignUp
// 									</Button>
// 									{LoginError && (
// 										<Alert
// 											sx={{ mt: 1, mb: 3, borderRadius: 1 }}
// 											severity="error"
// 										>
// 											Wrong email or password
// 										</Alert>
// 									)}
// 									<CardActions disableSpacing>
// 										<Stack spacing={0} direction="row">
// 											<Chip
// 												sx={{ margin: 1, borderRadius: 2 }}
// 												component={Link}
// 												to="/reset-password"
// 												label="Forgot password"
// 												variant="outlined"
// 											/>
// 											<Chip
// 												sx={{ margin: 1, borderRadius: 2 }}
// 												component={Link}
// 												to="/Login"
// 												label="Login"
// 												variant="outlined"
// 											/>
// 											<IconButton component="span">
// 												<HelpRoundedIcon />
// 											</IconButton>
// 										</Stack>
// 									</CardActions>
// 								</Box>
// 							</Box>
// 						</Card>
// 					</Box>
// 				</Box>
// 			</motion.div>
// 		</ThemeProvider>
// 	);
// }
