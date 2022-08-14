import React, { useState, useEffect } from "react";
import { Box, Card } from "@mui/material";
import Heading from "../../components/heading/Heading";
import GoBack from "../../components/goBack/GoBack";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";
import CardActions from "@mui/material/CardActions";
import HelpRoundedIcon from "@mui/icons-material/HelpRounded";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Signup() {
	const [signupError, setSignupError] = useState(false);
	const [signupSucess, setSignupSucess] = useState(false);
	const [userRegistration, setUserRegistration] = useState({
		user_id: Date.now(),
		user_name: "",
		user_username: "",
		user_email: "",
		user_image: "",
		user_password: "",
		user_dob: "",
		if_maintainer: "false",
		if_admin: "false",
	});
	useEffect(() => {
		const get_login = JSON.parse(localStorage.getItem("Login"));
		if (get_login === true) {
			router.push("/");
		}
	}, []);

	const HandleInput = (e) => {
		const name = e.target.name;
		const value = e.target.value;

		setUserRegistration({ ...userRegistration, [name]: value });
		console.log(userRegistration);
	};
	const handleSubmit = async (e) => {
		e.preventDefault();
		await axios
			.post(
				"https://newwebsite.ancientrom.xyz/ancient/api/insert/usersInsertDATA.php",
				userRegistration
			)
			.then((result) => {
				console.log(result.data);

				if (result.data.status === "valid") {
					setSignupError(false);
					setSignupSucess(true);
					setTimeout(() => {
						setTimeout(() => {
							router.push("/auth/login");
						}, 500);
					}, 1000);
				} else {
					setSignupSucess(false);
					setSignupError(true);
				}
			});
	};
	const styles = {
		display: "flex",
		flexDirection: "row",
		flexWrap: "wrap",
		// alignContent: "center",
		justifyContent: "center",
		// alignItems: "center",
	};

	return (
		<Box
			sx={
				(styles,
				{
					minHeight: "100vh",
					pt: 5,
					p: 2,
				})
			}
		>
			<Heading pri="Sign Up" sub="Sign in with Your New Account" />
			<Box sx={styles}>
				<Card sx={(styles, { p: 3, borderRadius: 8, maxWidth: 500 })}>
					<Box component="form" onSubmit={handleSubmit} noValidate>
						<Typography
							variant="h3"
							align="center"
							sx={(styles, { width: "100%", mb: 3 })}
						>
							Sign Up
						</Typography>
						<TextField
							InputLabelProps={{
								style: { color: "white" },
							}}
							margin="dense"
							required
							fullWidth
							variant="filled"
							label="Full Name"
							name="user_name"
							id="user_name"
							autoComplete="name"
							value={userRegistration.user_name}
							onChange={HandleInput}
						/>
						<TextField
							InputLabelProps={{
								style: { color: "white" },
							}}
							margin="dense"
							required
							fullWidth
							variant="filled"
							label="Username"
							autoComplete="name"
							name="user_username"
							id="user_username"
							value={userRegistration.user_username}
							onChange={HandleInput}
						/>
						<TextField
							InputLabelProps={{
								style: { color: "white" },
							}}
							sx={{ color: "#fff" }}
							styles={{ color: "text.primary" }}
							margin="dense"
							required
							fullWidth
							variant="filled"
							type="date"
							name="user_dob"
							id="user_dob"
							value={userRegistration.user_dob}
							onChange={HandleInput}
						/>
						<TextField
							InputLabelProps={{
								style: { color: "white" },
							}}
							margin="dense"
							required
							fullWidth
							variant="filled"
							id="user_image"
							label="Image URL"
							name="user_image"
							autoComplete="url"
							value={userRegistration.user_image}
							onChange={HandleInput}
						/>
						<TextField
							InputLabelProps={{
								style: { color: "white" },
							}}
							margin="dense"
							required
							fullWidth
							variant="filled"
							id="user_email"
							label="Email Address"
							name="user_email"
							autoComplete="email"
							value={userRegistration.user_email}
							onChange={HandleInput}
						/>
						<TextField
							InputLabelProps={{
								style: { color: "white" },
							}}
							margin="dense"
							required
							fullWidth
							variant="filled"
							name="user_password"
							label="Password"
							type="password"
							id="user_password"
							autoComplete="current-password"
							value={userRegistration.user_password}
							onChange={HandleInput}
						/>
						<Button
							type="submit"
							fullWidth
							variant="outlined"
							sx={{
								mb: 1,
								mt: 3,
								p: 1.5,
								boxShadow: "10px 10px 35px 0.1px #381f2048",
								borderRadius: 5,
								color: "text.primary",
								bgcolor: "text.secondary",
							}}
						>
							Sign Up
						</Button>{" "}
						{signupError && (
							<Alert sx={{ mt: 1, mb: 3, borderRadius: 5 }} severity="error">
								Please Enter All details or try again
							</Alert>
						)}
						{signupSucess && (
							<Alert sx={{ mt: 1, mb: 3, borderRadius: 5 }} severity="success">
								Account Created Successfully
							</Alert>
						)}
						<CardActions disableSpacing>
							<Stack spacing={3} direction="row">
								<Link href={`/account/forgot-password`}>
									<Button
										fullWidth
										size="small"
										sx={{ borderRadius: 5, color: "#fff" }}
									>
										Forgot password
									</Button>
								</Link>

								<Link href={`/auth/login`}>
									<Button
										fullWidth
										size="small"
										sx={{ borderRadius: 5, color: "#fff" }}
									>
										Login
									</Button>
								</Link>
								<Link href={`/Help`}>
									<Button
										fullWidth
										size="small"
										sx={{ borderRadius: 5, color: "#fff" }}
									>
										<HelpRoundedIcon />
									</Button>
								</Link>
							</Stack>
						</CardActions>
					</Box>
				</Card>
			</Box>
			<GoBack props="/account" />
		</Box>
	);
}
