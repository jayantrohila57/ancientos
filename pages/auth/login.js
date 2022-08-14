import React, { useState } from "react";
import { Box, Card, Typography } from "@mui/material";
import Heading from "../../components/heading/Heading";
import GoBack from "../../components/goBack/GoBack";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";
import CardActions from "@mui/material/CardActions";
import HelpRoundedIcon from "@mui/icons-material/HelpRounded";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import VpnKeyRoundedIcon from "@mui/icons-material/VpnKeyRounded";
export default function Login() {
	const [LoginError, setLoginError] = useState(false);
	const [LoginSuccess, setLoginSuccess] = useState(false);
	// const address = "/Login";
	// const [LogginVarLink, setLogginVarLink] = useState(address);
	const [UserLogin, setUserLogin] = useState({
		user_username: "",
		user_password: "",
	});
	const router = useRouter();
	const HandleLoginInput = (e) => {
		const name = e.target.name;
		const value = e.target.value;
		setUserLogin({ ...UserLogin, [name]: value });
	};

	const handleLoginSubmit = async (e) => {
		e.preventDefault();
		await axios
			.post(
				"https://newwebsite.ancientrom.xyz/ancient/api/login.php",
				UserLogin
			)
			.then((result) => {
				if (result.data.status === "valid") {
					setLoginSuccess(true);
					setLoginError(false);
					//////////////////////////////////////////////////
					const userid = result.data.build_data[0].user_id;
					console.log(userid);
					localStorage.setItem("UserID", JSON.stringify(userid));
					localStorage.setItem("Login", JSON.stringify(true));

					//////////////////////////////////////////////////
					setTimeout(() => {
						router.push("/account/profile");
					}, 500);
				} else {
					setLoginError(true);
					setLoginSuccess(false);
				}
			});

		// localStorage.setItem("darkMode", JSON.stringify(mode));
	};

	const styles = {
		display: "flex",
		flexDirection: "row",
		flexWrap: "wrap",
		alignContent: "center",
		justifyContent: "center",
		alignItems: "center",
	};
	return (
		<Box
			sx={{
				minHeight: "100vh",
				pt: 5,
				p: 2,
				dispay: "flex",
				justifyContent: "center",
				alignItems: "center",
			}}
		>
			<Heading pri="Login" sub="Login with Your Account Details" />
			<Box sx={styles}>
				<Card sx={(styles, { p: 3, borderRadius: 8, maxWidth: 500 })}>
					<Box component="form" onSubmit={handleLoginSubmit} noValidate>
						<Typography
							variant="h3"
							align="center"
							sx={(styles, { width: "100%", mb: 3 })}
						>
							Login
						</Typography>
						<TextField
							InputLabelProps={{
								style: { color: "white" },
							}}
							// margin="dense"
							required
							variant="filled"
							fullWidth
							type="text"
							label="Username"
							name="user_username"
							id="user_username"
							autoComplete="username"
							value={UserLogin.user_username}
							onChange={HandleLoginInput}
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
							value={UserLogin.user_password}
							onChange={HandleLoginInput}
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
							Login
						</Button>{" "}
						{LoginError && (
							<Alert sx={{ mt: 1, mb: 3, borderRadius: 5 }} severity="error">
								Incorrect Username or password
							</Alert>
						)}
						{LoginSuccess && (
							<Alert sx={{ mt: 1, mb: 3, borderRadius: 5 }} severity="success">
								Login Successfull
							</Alert>
						)}
						<CardActions disableSpacing>
							<Stack spacing={2} direction="row">
								<Link href={`/account/forgot-password`}>
									<Button
										fullWidth
										size="small"
										sx={{ borderRadius: 5, color: "text.secondary" }}
									>
										Forgot password
									</Button>
								</Link>

								<Link href={`/auth/signup`}>
									<Button
										fullWidth
										size="small"
										sx={{ borderRadius: 5, color: "text.secondary" }}
									>
										Sign Up
									</Button>
								</Link>
								<Link href={`/Help`}>
									<Button
										fullWidth
										size="small"
										sx={{ borderRadius: 5, color: "text.secondary" }}
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
