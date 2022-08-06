import { Box } from "@mui/material";
import Heading from "../../components/heading/Heading";
import GoBack from "../../components/goBack/GoBack";
import ButtonBox from "../../components/buttonBox/ButtonBox";
export default function Account() {
	const styles = {
		display: "flex",
		flexDirection: "row",
		flexWrap: "wrap",
		alignContent: "center",
		justifyContent: "center",
		alignItems: "center",
	};
	return (
		<Box sx={(styles, { pt: 5, minHeight: "100vh" })}>
			<Heading pri="Account" sub="View Your Account Details" />

			<Box sx={styles}>
				<ButtonBox link="auth/login" title="Login" />
				<ButtonBox link="auth/signup" title="Sign Up" />
			</Box>
			<Box sx={styles}>
				<ButtonBox link="account/profile" title="Profile" />
				{/* <ButtonBox link="/maintainer" title="Maintainer (Not-Active)" />
				<ButtonBox link="/logout" title="Logout" /> */}
			</Box>
			<GoBack props="/" />
		</Box>
	);
}
