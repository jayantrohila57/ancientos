import React, { useState } from "react";
import { Box, Card } from "@mui/material";
import Heading from "../../../components/heading/Heading";
import GoBack from "../../../components/goBack/GoBack";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";
import axios from "axios";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
export default function MaintainerForm() {
	const [formError, setFormError] = useState(false);
	const [formSuccess, setFormSuccess] = useState(false);
	const [userRegistration, setUserRegistration] = useState({
		user_id: "",
		user_username: "",
		maintainer_form_id: Date.now(),
		maintainer_form_github: "",
		maintainer_form_sourceForge: "",
		maintainer_form_telegram: "",
		maintainer_form_xda: "",
		maintainer_form_common_tree: "",
		maintainer_form_device_tree: "",
		maintainer_form_kernal_tree: "",
		maintainer_form_vendor_tree: "",
		maintainer_form_exprience_AnyOtherRom: "",
		maintainer_form_exprience_BuildDuration: "",
		maintainer_form_exprience_PrevExp: "",
		maintainer_form_exprience_BugsFixes: "",
		maintainer_form_exprience_PatchesNeeded: "",
		maintainer_form_terms_accepted: "",
	});
	const [records, setrecords] = useState([]);

	const HandleInput = (e) => {
		console.log(userRegistration);
		const name = e.target.name;
		const value = e.target.value;
		setUserRegistration({ ...userRegistration, [name]: value });
	};
	const handleSubmit = async (e) => {
		e.preventDefault();
		const newRecord = {
			...userRegistration,
			id: Date.now(),
		};

		setrecords([...records, newRecord]);

		e.preventDefault();
		await axios
			.post(
				"https://newwebsite.ancientrom.xyz/ancient/api/Applymainter.php",
				newRecord
			)
			.then((result) => {
				console.log("Result status:" + result.status);
				if (result.status === 200) {
					setFormSuccess(true);
					setFormError(false);
				} else {
					setFormSuccess(false);
					setFormError(true);
				}
			});
	};
	const styles = {
		display: "flex",
		flexDirection: "row",
		flexWrap: "wrap",
		alignContent: "center",
		justifyContent: "center",
		// justifyContent: "space-around",
		alignItems: "center",
	};

	const typeBoxstyle = {
		maxWidth: 280,
		m: 1,
		bgcolor: "#91101040",
		borderRadius: 1,

		"&:hover": {
			backgroundColor: "transparent",
			borderColor: "#91101099",
			borderRadius: 1,
		},
	};
	const typeBoxstyleBig = {
		m: 0.5,
		bgcolor: "#91101040",
		borderRadius: 1,
		"&:hover": {
			backgroundColor: "transparent",
			borderRadius: 1,
		},
	};
	const CardStyle = {
		m: 1,
		p: 2,

		background: "transparent",

		boxShadow: "10px 10px 35px 0.1px #d0b0b147",
	};

	return (
		<Box
			sx={{
				minHeight: "100vh",
				pt: 5,
			}}
		>
			<Heading
				pri="Became Maintainer"
				sub="Apply for AncientOS Maintainer Form"
			/>
			<Box sx={styles}>
				<Box sx={{ maxWidth: 700 }} component="form" onSubmit={handleSubmit}>
					<Card
						sx={
							(CardStyle,
							{
								p: 3,
								m: 1,
								mt: 0,
								mb: 0,
								borderBottomLeftRadius: 0,
								borderBottomRightRadius: 0,
								borderTopLeftRadius: 40,
								borderTopRightRadius: 40,
								maxWidth: 700,
							})
						}
					>
						{/* <Typography
							variant="h3"
							align="center"
							sx={(styles, { width: "100%" })}
						>
							Basic Details
						</Typography> */}

						{/* <TextField
							sx={typeBoxstyle}
							InputLabelProps={{
								style: { color: "white" },
							}}
							required
							variant="outlined"
							fullWidth
							className="TextareaMod"
							onChange={HandleInput}
							id="first_name"
							name="first_name"
							label="First Name"
						></TextField>
						<TextField
							sx={typeBoxstyle}
							InputLabelProps={{
								style: { color: "white" },
							}}
							required
							variant="outlined"
							fullWidth
							className="TextareaMod"
							onChange={HandleInput}
							id="last_name"
							name="last_name"
							label="Last Name"
						></TextField> */}
						{/* <TextField
							sx={typeBoxstyle}
							InputLabelProps={{
								style: { color: "white" },
							}}
							required
							variant="outlined"
							fullWidth
							className="TextareaMod"
							onChange={HandleInput}
							id="email"
							name="email"
							label="Email Address"
						></TextField> */}
					</Card>
					<Card
						sx={
							(CardStyle,
							{ p: 3, m: 1, mt: 0, mb: 0, borderRadius: 0, maxWidth: 700 })
						}
					>
						<Typography
							variant="h3"
							align="center"
							sx={(styles, { width: "100%" })}
						>
							Social Links
						</Typography>
						<TextField
							sx={typeBoxstyle}
							InputLabelProps={{
								style: { color: "white" },
							}}
							required
							variant="outlined"
							fullWidth
							className="TextareaMod"
							onChange={HandleInput}
							id="maintainer_form_github"
							name="maintainer_form_github"
							label="Github Username"
						></TextField>
						<TextField
							sx={typeBoxstyle}
							InputLabelProps={{
								style: { color: "white" },
							}}
							required
							variant="outlined"
							fullWidth
							className="TextareaMod"
							onChange={HandleInput}
							id="maintainer_form_sourceForge"
							name="maintainer_form_sourceForge"
							label="SourceForge Username"
						></TextField>
						<TextField
							sx={typeBoxstyle}
							InputLabelProps={{
								style: { color: "white" },
							}}
							required
							variant="outlined"
							fullWidth
							onChange={HandleInput}
							id="maintainer_form_telegram"
							name="maintainer_form_telegram"
							label="Telegram UserName"
						></TextField>
						<TextField
							sx={typeBoxstyle}
							InputLabelProps={{
								style: { color: "white" },
							}}
							required
							variant="outlined"
							fullWidth
							onChange={HandleInput}
							id="maintainer_form_xda"
							name="maintainer_form_xda"
							label="XDA Username"
						></TextField>{" "}
					</Card>
					<Card
						sx={
							(CardStyle,
							{ p: 3, m: 1, mt: 0, mb: 0, borderRadius: 0, maxWidth: 700 })
						}
					>
						<Typography
							variant="h3"
							align="center"
							sx={(styles, { width: "100%" })}
						>
							Device Tree
						</Typography>
						<TextField
							sx={typeBoxstyle}
							InputLabelProps={{
								style: { color: "white" },
							}}
							required
							variant="outlined"
							fullWidth
							className="TextareaMod align_change"
							onChange={HandleInput}
							id="maintainer_form_common_tree"
							name="maintainer_form_common_tree"
							label="Common Tree"
						></TextField>{" "}
						<TextField
							sx={typeBoxstyle}
							InputLabelProps={{
								style: { color: "white" },
							}}
							required
							variant="outlined"
							fullWidth
							className="TextareaMod align_change"
							onChange={HandleInput}
							id="maintainer_form_device_tree"
							name="maintainer_form_device_tree"
							label="Device Tree"
						></TextField>{" "}
						<TextField
							sx={typeBoxstyle}
							InputLabelProps={{
								style: { color: "white" },
							}}
							required
							variant="outlined"
							fullWidth
							className="TextareaMod align_change"
							onChange={HandleInput}
							id="maintainer_form_kernal_tree"
							name="maintainer_form_kernal_tree"
							label="Kernel Tree"
						></TextField>{" "}
						<TextField
							sx={typeBoxstyle}
							InputLabelProps={{
								style: { color: "white" },
							}}
							required
							variant="outlined"
							fullWidth
							className="TextareaMod align_change"
							onChange={HandleInput}
							id="maintainer_form_vendor_tree"
							name="maintainer_form_vendor_tree"
							label="Vendor Tree"
						></TextField>
					</Card>
					<Card
						sx={
							(CardStyle,
							{ p: 3, m: 1, mt: 0, mb: 0, borderRadius: 0, maxWidth: 700 })
						}
					>
						<Typography
							variant="h3"
							align="center"
							sx={(styles, { width: "100%" })}
						>
							Exprience Details
						</Typography>
						<TextField
							sx={typeBoxstyleBig}
							InputLabelProps={{
								style: { color: "white" },
							}}
							required
							variant="outlined"
							fullWidth
							className="TextareaMod align_change"
							onChange={HandleInput}
							id="maintainer_form_exprience_AnyOtherRom"
							name="maintainer_form_exprience_AnyOtherRom"
							label="Enter Your Text here"
							helperText="Any Rom you maintain currently or have maintained in the past, officially or unofficially?"
						></TextField>{" "}
						<br />
						<TextField
							sx={typeBoxstyleBig}
							InputLabelProps={{
								style: { color: "white" },
							}}
							required
							variant="outlined"
							fullWidth
							className="TextareaMod align_change"
							onChange={HandleInput}
							id="maintainer_form_exprience_BuildDuration"
							name="maintainer_form_exprience_BuildDuration"
							label="Enter Your Text here"
							helperText="How long have you been building or maintaining ROMs ?"
						></TextField>{" "}
						<br />
						<TextField
							sx={typeBoxstyleBig}
							InputLabelProps={{
								style: { color: "white" },
							}}
							required
							variant="outlined"
							fullWidth
							className="TextareaMod align_change"
							onChange={HandleInput}
							id="maintainer_form_exprience_PrevExp"
							name="maintainer_form_exprience_PrevExp"
							label="Enter Your Text here"
							helperText="Do you have any previous experiences in maintaining other devices?"
						></TextField>{" "}
						<br />
						<TextField
							sx={typeBoxstyleBig}
							InputLabelProps={{
								style: { color: "white" },
							}}
							required
							variant="outlined"
							fullWidth
							className="TextareaMod align_change"
							onChange={HandleInput}
							id="maintainer_form_exprience_BugsFixes"
							name="maintainer_form_exprience_BugsFixes"
							label="Enter Your Text here"
							helperText="Any Bugs found in other roms created using the trees that were submitted?"
						></TextField>{" "}
						<br />
						<TextField
							sx={typeBoxstyleBig}
							InputLabelProps={{
								style: { color: "white" },
							}}
							required
							variant="outlined"
							fullWidth
							className="TextareaMod align_change bottom"
							onChange={HandleInput}
							id="maintainer_form_exprience_PatchesNeeded"
							name="maintainer_form_exprience_PatchesNeeded"
							label="Enter Your Text here"
							helperText="Dose your device need any exta patches if yes mentioned repo name which needs patches and link to patches?"
						></TextField>{" "}
					</Card>
					<Card
						sx={
							(CardStyle,
							{
								p: 3,
								m: 1,
								mt: 0,
								mb: 0,
								borderBottomLeftRadius: 40,
								borderBottomRightRadius: 40,
								borderTopLeftRadius: 0,
								borderTopRightRadius: 0,
								maxWidth: 700,
							})
						}
					>
						<Typography
							variant="h3"
							align="center"
							sx={(styles, { width: "100%" })}
						>
							Terms & Conditions
						</Typography>
						<Typography variant="subtitle" sx={(styles, { width: "100%" })}>
							1) GCP/AZURE/AWS free trail based server not allowed
							<br />
							2) if you are going to build on server it must be 100% private you
							cant share it with your friend <br />
							3) Dont tag admins to get update regarding your forum status{" "}
							<br />
							4) You MUST have a way to check your builds, OWNED the device,
							TEST it by YOURSELF or send the builds for SOMEONE TO TEST.
							Completely BLINDBUILD and(or) UNTESTED BUILD ARE NOT ALLOWED.{" "}
							<br />
							5) You MUST have KNOWLEDGE of git. <br />
							6) You SHOULD have your device sources open for us to verify!{" "}
							<br />
							7) Fixing bug by yourself is a plus! unless its source side.{" "}
							<br />
							8) Under any conditions you cant share rom source with anyone we
							dont care its your BestFriend or the person who paid to get the
							source <br />
							9) The Device tree must be compitable with lineage os which out
							any extra patches being applied to rom source from your side{" "}
							<br />
							IF YOU UNDERSTAND THE TERMS & CONDITION ABOVE, SUBMIT THE FORM
							<br />
						</Typography>
						<Box sx={styles}>
							<FormControlLabel
								sx={typeBoxstyleBig}
								required
								onChange={HandleInput}
								id="maintainer_form_terms_accepted"
								name="maintainer_form_terms_accepted"
								control={<Checkbox />}
								label="I accepted all of the terms and conditions."
							/>
							{formError && (
								<Alert sx={{ mt: 1, mb: 3, borderRadius: 5 }} severity="error">
									Please check all details and try again.
								</Alert>
							)}
							{formSuccess && (
								<Alert
									sx={{ mt: 1, mb: 3, borderRadius: 5 }}
									severity="success"
								>
									Form submitted Successfully
								</Alert>
							)}
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
								Summit Form
							</Button>
						</Box>
					</Card>
				</Box>
			</Box>

			<GoBack props="/maintainer" />
		</Box>
	);
}
