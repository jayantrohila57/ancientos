import React, { useContext, useState, useEffect } from "react";
import { Paper, Box, Grid, Card } from "@mui/material";
import Heading from "../../components/heading/Heading";
import { alpha, styled } from "@mui/material/styles";
import LinkHeading from "../../components/heading/LinkHeading";
import GoBack from "../../components/goBack/GoBack";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import ArrowCircleRightRoundedIcon from "@mui/icons-material/ArrowCircleRightRounded";
import IconButton from "@mui/material/IconButton";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";
import CardActions from "@mui/material/CardActions";
import HelpRoundedIcon from "@mui/icons-material/HelpRounded";
import axios from "axios";
import DesktopDatePicker from "@mui/lab/DesktopDatePicker";
import Link from "next/link";
export default function Signup() {
	const [signupError, setSignupError] = useState(false);
	const [signupSucess, setSignupSucess] = useState(false);
	const [records, setrecords] = useState([]);
	const [userRegistration, setUserRegistration] = useState({
		id: Date.now(),
		first_name: "",
		last_name: "",
		email: "",
		username: "",
		date: "",
		password: "",
	});
	const HandleInput = (e) => {
		const name = e.target.name;
		const value = e.target.value;

		setUserRegistration({ ...userRegistration, [name]: value });
		console.log(userRegistration);
	};
	const handleSubmit = async (e) => {
		e.preventDefault();

		const newRecord = {
			...userRegistration,
			id: new Date().getTime().toString(),
		};
		setrecords([...records, newRecord]);

		e.preventDefault();
		await axios
			.post(
				"https://newwebsite.ancientrom.xyz/ancient/api/signup.php",
				newRecord
			)
			.then((result) => {
				if (result.data.status === "valid") {
					setSignupError(false);
					setSignupSucess(true);
				} else {
					alert("There is problem in adding,please try again");
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
							label="First Name"
							name="first_name"
							id="first_name"
							autoComplete="given-name"
							value={userRegistration.first_name}
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
							label="Last Name"
							name="last_name"
							id="last_name"
							autoComplete="family-name"
							value={userRegistration.last_name}
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
							name="username"
							id="username"
							value={userRegistration.username}
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
							name="date"
							id="date"
							value={userRegistration.date}
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
							id="email"
							label="Email Address"
							name="email"
							autoComplete="email"
							value={userRegistration.email}
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
							name="password"
							label="Password"
							type="password"
							id="password"
							autoComplete="current-password"
							value={userRegistration.password}
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
