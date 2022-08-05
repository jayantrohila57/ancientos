import { useEffect } from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Box } from "@mui/material";
import Image from "next/image";
import Aos from "aos";
import "aos/dist/aos.css";
export default function ScreenShotCarousel() {
	const screenshots = [
		{
			android: "12",
			src: "https://raw.githubusercontent.com/keneankit01/screenshots/main/Android12/lockscreen.jpg",
		},
		{
			android: "12",
			src: "https://raw.githubusercontent.com/keneankit01/screenshots/main/Android12/unlockscreen.jpg",
		},
	];
	useEffect(() => {
		Aos.init({ duration: 600 });
	}, []);
	return (
		<Box
			data-aos="fade-up"
			data-aos-duration="600"
			sx={{
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				alignContent: "center",
			}}
		>
			<Carousel
				fullHeightHover={false}
				swipe={true}
				sx={{ height: 600, maxWidth: 600, width: 300 }}
			>
				{screenshots.map((item, index) => (
					<Paper
						key={index}
						sx={{
							borderRadius: "28px",
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
							alignContent: "center",
							background: "transparent",
						}}
						elevation={0}
					>
						<Image
							style={{
								border: "4px",
								borderRadius: "28px",
							}}
							sx={{ boxShadow: 15 }}
							src={item.src}
							alt="device"
							height="500px"
							width="231px"
						/>
					</Paper>
				))}
			</Carousel>
		</Box>
	);
}


