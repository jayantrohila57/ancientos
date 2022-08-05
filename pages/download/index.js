import { Box } from "@mui/material";
import Heading from "../../components/heading/Heading";
import LinkHeading from "../../components/heading/LinkHeading";
import GoBack from "../../components/goBack/GoBack";
import ButtonBox from "../../components/buttonBox/ButtonBox";
export default function Download({ data }) {
	const brands = [...new Set(data.map((a) => a.brand))];

	const obj = {
		primary: "Apply for MantainerShip",
		secondary: "Join and grow the community of AncientOS.",
		link: "/maintainer",
	};
	const patreon = {
		primary: "Want Early Build access ?",
		secondary: "Those who want early build access, join us on patreon.",
		link: "/Donation",
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
		<Box sx={{ pt: 5, minHeight: "100vh" }}>
			<Heading pri="Download Builds" sub="List of Official Devices" />
			<Box sx={styles}>
				{Array.from(brands).map((value, index) => {
					return (
						<ButtonBox key={index} link={`download/${value}`} title={value} />
					);
				})}
			</Box>
			<LinkHeading props={patreon} />
			<LinkHeading props={obj} />
			<GoBack props="/" />
		</Box>
	);
}

export async function getStaticProps() {
	const DEVICE_BRANDS =
		"https://raw.githubusercontent.com/ancient-devices/releases/main/website_api.json";
	const response = await fetch(DEVICE_BRANDS);
	const data = await response.json();
	return {
		props: {
			data,
		},
	};
}
