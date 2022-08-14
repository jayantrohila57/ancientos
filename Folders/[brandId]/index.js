import { useRouter } from "next/router";
import { Box } from "@mui/material";
import Heading from "../../components/heading/Heading";
import GoBack from "../../components/goBack/GoBack";
import ButtonBox from "../../components/buttonBox/ButtonBox";

export default function Device({ data }) {
	const router = useRouter();
	const brandId = router.query.brandId;
	const DeviceCode = data.filter((Data) => {
		return Data.brand === `${brandId}`;
	});

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
			<Heading
				pri={`${brandId} Devices`}
				sub={`Let's see if we have your ${brandId} device.`}
			/>

			<Box sx={styles}>
				{Array.from(DeviceCode).map((device, index) => {
					return (
						<ButtonBox
							key={index}
							link={`${brandId}/${device.device_codename}`}
							title={device.device_codename}
						/>
					);
				})}
			</Box>

			<GoBack props={"/download"} />
		</Box>
	);
}
export async function getStaticPaths() {
	const DEVICE_ROUTES =
		"https://raw.githubusercontent.com/ancient-devices/releases/main/website_api.json";
	const response = await fetch(DEVICE_ROUTES);
	const data = await response.json();
	const brands = [...new Set(data.map((a) => a.brand))];
	// console.log("await " + brands);
	const paths = brands.map((device) => {
		return { params: { brandId: device } };
	});

	return {
		paths,
		fallback: true,
	};
}
export async function getStaticProps() {
	const DEVICES =
		"https://raw.githubusercontent.com/ancient-devices/releases/main/website_api.json";
	const response = await fetch(DEVICES);
	const data = await response.json();
	return {
		props: {
			data,
		},
	};
}
