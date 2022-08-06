import React, { useState } from "react";
import { Box, Card } from "@mui/material";
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
export default function Login() {
	const [LoginError, setLoginError] = useState(false);
	const [LoginSuccess, setLoginSuccess] = useState(false);
	const address = "/Login";
	// const [LogginVarLink, setLogginVarLink] = useState(address);
	const [UserLogin, setUserLogin] = useState({
		username: "",
		password: "",
	});

	const HandleLoginInput = (e) => {
		const name = e.target.name;
		const value = e.target.value;
		console.log(name, value);

		setUserLogin({ ...UserLogin, [name]: value });
	};
	const [records1, setrecords1] = useState([]);

	const handleLoginSubmit = async (e) => {
		e.preventDefault();

		const newRecord1 = { ...UserLogin, id: new Date().getTime().toString() };
		console.log(records1);

		setrecords1([...records1, newRecord1]);
		console.log(records1);

		e.preventDefault();
		await axios
			.post(
				"https://newwebsite.ancientrom.xyz/ancient/api/login.php",
				UserLogin
			)
			.then((result) => {
				console.log(result);
				if (result.data.status === "valid") {
					// history(LogginVarLink);
					setLoginSuccess(true);
					setLoginError(false);
				} else {
					setLoginError(true);
					setLoginSuccess(false);
				}
			});
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
				dispay: "flex",
				justifyContent: "center",
				alignItems: "center",
			}}
		>
			<Heading pri="Login" sub="Login with Your Account Details" />
			<Box sx={styles}>
				<Card
					elevation={0}
					sx={
						(styles,
						{
							width: 330,
							maxWidth: 400,
							background: "transparent",
						})
					}
				>
					<Box component="form" onSubmit={handleLoginSubmit} noValidate>
						<TextField
							margin="dense"
							required
							variant="standard"
							fullWidth
							type="text"
							label="Username"
							name="username"
							id="username"
							value={UserLogin.username}
							onChange={HandleLoginInput}
						/>
						<TextField
							margin="dense"
							required
							fullWidth
							variant="standard"
							name="password"
							label="Password"
							type="password"
							id="password"
							autoComplete="current-password"
							value={UserLogin.password}
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
								boxShadow: 6,
								borderRadius: 5,
								// background: "transparent",
								background: "linear-gradient(to left, #8f455489, #3d498397)",
								color: "#fff",
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

								<Link href={`/account/signup`}>
									<Button
										fullWidth
										size="small"
										sx={{ borderRadius: 5, color: "#fff" }}
									>
										Sign Up
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
