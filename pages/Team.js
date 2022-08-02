import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import ShareRoundedIcon from "@mui/icons-material/ShareRounded";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import GoBack from "../components/goBack/GoBack";

import LinkHeading from "../components/heading/LinkHeading";
import { Box } from "@mui/material";
import Heading from "../components/heading/Heading";
const Device = [
	{
		image:
			"https://avatars.githubusercontent.com/u/46237424?s=400&amp;u=50eac9a5583470b26e6a7dd8d0547b326f23e9a5&amp;v=4",
		name: "Beam Guide",
		post: "Lead Developer",
	},
	{
		image:
			"https://avatars.githubusercontent.com/u/39455862?s=400&amp;u=9e4d7158f87b5e325fe0e4f3239ecfad5731600e&amp;v=4",
		name: "Reza Adi Pangestu",
		post: "Lead Developer",
	},
	{
		image:
			"https://avatars.githubusercontent.com/u/59904122?s=400&amp;u=19ccf78a273aac32fca7a833f65ec341b095cc52&amp;v=4",
		name: "Idc(I Dont Care)",
		post: "UI Designer",
	},

	{
		image:
			"https://avatars.githubusercontent.com/u/17999613?s=400&amp;u=acfb6d4bba1ae71ea5358fdbee1d9d61529a0c6c&amp;v=4",
		name: " Vern Kuato",
		post: "UI Designer",
	},
	{
		image: "https://avatars.githubusercontent.com/u/47526753?s=400&amp;v=4",
		name: "Ankit Kene ",
		post: "Web Designer &  Weeabo UI ",
	},
	{
		image:
			"https://avatars.githubusercontent.com/u/45154878?s=400&amp;u=44d28d9bf4676d953cd67bf9b40d677447538749&amp;v=4",
		name: " Nabil ABA ",
		post: "UI UX Designer & New Feature Maker",
	},
	{
		image: "https://avatars.githubusercontent.com/u/58130857?v=4",
		name: " Jayant Rohila",
		post: "Web Developer",
	},
];
const obj = {
	primary: "Apply for MantainerShip",
	secondary: "Join and grow the community of AncientOS.",
	link: "/maintainer",
};
export default function Team() {
	useEffect(() => {
		Aos.init({ duration: 600 });
	}, []);
	return (
		<Box sx={{ pt: 5, minHeight: "100vh" }}>
			<Heading pri=" Ancient Team" sub="These are all Ancient Team Members" />
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
				{Device.map((data, index) => {
					return (
						<>
							<Card
								data-aos="fade-up"
								data-aos-duration="600"
								variant="outlined"
								elevation={5}
								key={index}
								sx={{
									boxShadow: 6,
									display: "flex",
									margin: 2,
									borderRadius: 5,
									width: 330,
									height: 200,
									background: "transparent",
								}}
							>
								<Box sx={{ display: "flex", flexDirection: "column" }}>
									<CardContent sx={{ flex: "1 0 auto", width: 180 }}>
										<Typography component="div" variant="h5">
											{data.name}
										</Typography>
										<Typography
											variant="caption"
											color="text.secondary"
											component="div"
											style={{
												textTransform: "capitalize",
												background:
													"linear-gradient(to left, #FC5C7D, #6A82FB)",
												WebkitBackgroundClip: "text",
												WebkitTextFillColor: "transparent",
											}}
										>
											{data.post}
										</Typography>
									</CardContent>
									<Box
										sx={{
											display: "flex",
											alignItems: "center",
											pl: 1,
											pb: 1,
										}}
									>
										<IconButton>
											<ShareRoundedIcon
												fontSize="large"
												sx={{ p: 1, borderRadius: 5, boxShadow: 5 }}
											/>
										</IconButton>
									</Box>
								</Box>
								<CardMedia
									component="img"
									sx={{
										width: 150,
										boxShadow: 5,
										backgroundRepeat: "no-repeat",
										backgroundSize: "contain",
										backgroundPosition: "center",
									}}
									image={data.image}
									alt="Live from space album cover"
								/>
							</Card>
						</>
					);
				})}
			</Box>
			<LinkHeading props={obj} />
			<GoBack props="/" />
		</Box>
	);
}
