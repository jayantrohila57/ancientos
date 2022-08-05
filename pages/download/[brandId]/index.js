import { useRouter } from "next/router";
import { Box } from "@mui/material";
import Heading from "../../../components/heading/Heading";
import GoBack from "../../../components/goBack/GoBack";
import ButtonBox from "../../../components/buttonBox/ButtonBox";

export default function Device() {
	const router = useRouter();
	const brandId = router.query.brandId;
	const devices = [
		{
			image:
				"https://raw.githubusercontent.com/ancient-devices/ancient_official_devices/main/DRG.png",
			name: "6.1plus",
		},

		{
			image:
				"https://raw.githubusercontent.com/ancient-devices/ancient_official_devices/main/DRG.png",
			name: "6.1plus",
		},
		{
			image:
				"https://raw.githubusercontent.com/ancient-devices/ancient_official_devices/main/DRG.png",
			name: "6.1plus",
		},
		{
			image:
				"https://raw.githubusercontent.com/ancient-devices/ancient_official_devices/main/DRG.png",
			name: "6.1plus",
		},
		{
			image:
				"https://raw.githubusercontent.com/ancient-devices/ancient_official_devices/main/DRG.png",
			name: "6.1plus",
		},
		{
			image:
				"https://raw.githubusercontent.com/ancient-devices/ancient_official_devices/main/DRG.png",
			name: "6.1plus",
		},
		{
			image:
				"https://raw.githubusercontent.com/ancient-devices/ancient_official_devices/main/DRG.png",
			name: "6.1plus",
		},
		{
			image:
				"https://raw.githubusercontent.com/ancient-devices/ancient_official_devices/main/DRG.png",
			name: "6.1plus",
		},
		{
			image:
				"https://raw.githubusercontent.com/ancient-devices/ancient_official_devices/main/DRG.png",
			name: "6.1plus",
		},
	];
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
				{Array.from(devices).map((brand, index) => {
					return (
						<ButtonBox
							key={index}
							link={`${brandId}/${brand.name}`}
							title={brand.name}
						/>
					);
				})}
			</Box>

			<GoBack props={"/download"} />
		</Box>
	);
}
