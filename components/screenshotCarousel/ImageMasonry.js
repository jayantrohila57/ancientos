import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Box from "@mui/material/Box";
import Image from "next/image";
import { Card } from "@mui/material";

export default function ImageMasonry({ props }) {
	useEffect(() => {
		Aos.init({ duration: 600 });
	}, []);
	return (
		<Box
			sx={{
				display: "flex",
				flexWrap: "wrap",
				justifyContent: "center",
				p: 1,
				m: 1,
			}}
		>
			{props.map((item, index) => (
				<Box
					key={index}
					data-aos="fade-up"
					data-aos-duration="600"
					sx={{ m: 1 }}
				>
					<Card
						data-aos="fade-up"
						data-aos-duration="600"
						elevation={0}
						sx={{
							height: "100%",
							boxShadow: 5,
							width: 231,
							background: "transparent",
						}}
					>
						<Image
							key={item.img}
							height="500px"
							width="231px"
							src={item.src}
							alt={"hhh"}
							loading="lazy"
						/>
					</Card>
				</Box>
			))}
		</Box>
	);
}
