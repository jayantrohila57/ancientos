import { Box } from "@mui/material";
import Heading from "../../components/heading/Heading";
import ImageMasonry from "../../components/screenshotCarousel/ImageMasonry";
import GoBack from "../../components/goBack/GoBack";
import LinkHeading from "../../components/heading/LinkHeading";

export default function Screenshot({ data }) {
	const screenshotDonate = {
		primary: "Donate Screenshot",
		secondary: "Let's Share what we discover",
		link: "/Screenshot/Donate-Screenshot",
	};
	const donation = {
		primary: "Donate to AncientOS",
		secondary: "Do consider donating on Paypal or join us on Patreon",
		link: "/Donation",
	};
	return (
		<Box
			sx={{
				minHeight: "100vh",
				pt: 5,
			}}
		>
			<Heading pri="Screenshot" sub="A look at the AncientOS" />
			<ImageMasonry props={data} />
			{/* <LinkHeading props={screenshotDonate} /> */}
			<LinkHeading props={donation} />
			<GoBack props="/" />
		</Box>
	);
}
export async function getStaticProps() {
	const SCREENSHOTS =
		"https://raw.githubusercontent.com/jayantrohila57/API/main/screenshot.json";
	const response = await fetch(SCREENSHOTS);
	const data = await response.json();
	return {
		props: {
			data,
		},
	};
}
