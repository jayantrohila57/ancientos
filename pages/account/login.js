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
import Link from "next/link";
export default function Login() {
	const [LoginError, setLoginError] = useState(false);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const handleSubmit = (event) => {
		event.preventDefault();
	};

	const CustomTextField = styled(TextField)({
		"& input:valid + fieldset": {
			borderColor: "#6e6e6efc",
			borderWidth: 1,
		},

		"& input:invalid + fieldset": {
			borderColor: "#747474fc",
			borderWidth: 1,
		},
		"& input:valid:focus + fieldset": {
			padding: "6px !important", // override inline-style
		},
	});
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
			<Heading pri="Login" sub="Login with Your Account Details" />
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
				<Card
					variant="outlined"
					sx={{
						p: 2,
						m: 2,
						width: 330,
						maxWidth: 600,
						display: "flex",
						flexDirection: "column",
						alignContent: "center",
						justifyContent: "center",
						alignItems: "center",
						borderRadius: 5,
						boxShadow: 5,
						textTransform: "capitalize",
						background: "linear-gradient(to left, #8f45544a, #3d498358)",
					}}
				>
					<Typography variant="h5" display="block" gutterBottom>
						Login
					</Typography>
					<Box component="form" onSubmit={handleSubmit} noValidate>
						{" "}
						<CustomTextField
							onChange={(e) => setEmail(e.target.value)}
							margin="dense"
							required
							variant="standard"
							fullWidth
							id="email"
							label="Email Address"
							name="email"
							// autoComplete="email"
						/>
						<CustomTextField
							onChange={(e) => setPassword(e.target.value)}
							margin="dense"
							required
							fullWidth
							variant="standard"
							name="password"
							label="Password"
							type="password"
							id="password"
							// autoComplete="current-password"
						/>
						<Button
							type="submit"
							fullWidth
							variant="outlined"
							endIcon={
								<ArrowCircleRightRoundedIcon
									fontSize="large"
									sx={{
										borderRadius: 10,
										boxShadow: 6,
										background:
											"linear-gradient(to left, #c14d64fd, #062fffe4)",
									}}
								/>
							}
							sx={{
								mb: 1,
								mt: 3,
								p: 1,
								boxShadow: 6,
								borderRadius: 3,
								background: "transparent",
								color: "#fff",
							}}
						>
							Login
						</Button>{" "}
						{LoginError && (
							<Alert sx={{ mt: 1, mb: 3, borderRadius: 5 }} severity="error">
								Wrong email or password
							</Alert>
						)}
						{/* <Typography variant="caption" display="block" gutterBottom>
							Forgot password? or Don't have an account?
						</Typography> */}
						<CardActions disableSpacing>
							<Stack spacing={0} direction="row">
								<Link href={`account/login`}>
									<Button
										fullWidth
										size="small"
										sx={{ borderRadius: 5, color: "#fff" }}
									>
										Forgot password
									</Button>
								</Link>

								<Link href={`account/signup`}>
									<Button
										fullWidth
										size="small"
										sx={{ borderRadius: 5, color: "#fff" }}
									>
										Sign Up
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
